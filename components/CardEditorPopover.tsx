import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Link2, Loader2, Upload, Trash2, Film, Type, Heading1, Globe, AlignLeft, AlignCenter, AlignRight, AlignVerticalJustifyStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Squircle } from './ui/squircle';
import { cn } from '../lib/utils';
import { ItemType, BentoItemData, MediaType, TextAlign, TextVAlign, TextSize } from '../types';
import AssetSelectorModal from './AssetSelectorModal';

// Video file extensions
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v', '.ogg'];

// Detect if URL is a video
const isVideoUrl = (url?: string): boolean => {
  if (!url) return false;
  const lowerUrl = url.toLowerCase();
  return VIDEO_EXTENSIONS.some(ext => lowerUrl.includes(ext));
};

// Helper to extract domain from URL
const getDomain = (url: string): string | null => {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsed.hostname;
  } catch {
    return null;
  }
};

// Microlink API response type
interface MicrolinkResponse {
  status: string;
  data: {
    title?: string;
    description?: string;
    logo?: { url: string };
    image?: { url: string };
    url?: string;
  };
}

// Fetch metadata from URL using Microlink API
const fetchUrlMetadata = async (url: string): Promise<{
  title?: string;
  logo?: string;
  image?: string;
  domain?: string;
} | null> => {
  try {
    const domain = getDomain(url);
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(fullUrl)}`);
    const data: MicrolinkResponse = await response.json();

    // Google Favicon Service as fallback
    const faviconFallback = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : undefined;

    if (data.status === 'success' && data.data) {
      return {
        title: data.data.title,
        logo: data.data.logo?.url || faviconFallback,
        image: data.data.image?.url,
        domain: domain || undefined,
      };
    }
    return {
      domain: domain || undefined,
      logo: faviconFallback,
    };
  } catch {
    const domain = getDomain(url);
    const faviconFallback = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : undefined;
    return domain ? { domain, logo: faviconFallback } : null;
  }
};


// Caption character limit
const CAPTION_MAX_LENGTH = 50;

export interface EditorState {
  mode: 'create' | 'edit';
  type: ItemType;
  cardId?: string;
  anchorRect: DOMRect;
  existingData?: Partial<BentoItemData>;
}

interface CardEditorPopoverProps {
  state: EditorState;
  onSave: (data: Partial<BentoItemData>) => void;
  onCancel: () => void;
}

const POPOVER_WIDTH = 320;
const POPOVER_GAP = 16;

// Type labels and icons
const TYPE_CONFIG: Record<ItemType, { label: string; icon: React.ReactNode }> = {
  heading: { label: 'Section Heading', icon: <Heading1 size={18} /> },
  link: { label: 'Link', icon: <Link2 size={18} /> },
  image: { label: 'Media', icon: <Film size={18} /> },
  text: { label: 'Text', icon: <Type size={18} /> },
  social: { label: 'Social', icon: <Globe size={18} /> },
  map: { label: 'Location', icon: <Globe size={18} /> },
};

// Custom keyframe animation styles
const popoverAnimationStyle = {
  animation: 'popover-fade-in 200ms ease-out forwards',
};

const CardEditorPopover: React.FC<CardEditorPopoverProps> = ({ state, onSave, onCancel }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [title, setTitle] = useState(state.existingData?.title || '');
  const [subtitle, setSubtitle] = useState(state.existingData?.subtitle || '');
  const [url, setUrl] = useState(state.existingData?.url || '');
  const [icon, setIcon] = useState(state.existingData?.icon || '');
  const [image, setImage] = useState(state.existingData?.image || '');
  const [caption, setCaption] = useState(state.existingData?.caption || '');
  const [mediaType, setMediaType] = useState<MediaType | undefined>(state.existingData?.mediaType);
  const [isFetchingMeta, setIsFetchingMeta] = useState(false);

  // Text card specific state
  const [textAlign, setTextAlign] = useState<TextAlign>(state.existingData?.textAlign || 'left');
  const [textVAlign, setTextVAlign] = useState<TextVAlign>(state.existingData?.textVAlign || 'middle');
  const [textSize, setTextSize] = useState<TextSize>(state.existingData?.textSize || 'medium');

  // Asset selector state
  const [showAssetSelector, setShowAssetSelector] = useState(false);

  // Calculate position
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const calculatePosition = () => {
      const { anchorRect } = state;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (state.mode === 'create') {
        // Position above the toolbar, centered
        const left = Math.max(POPOVER_GAP, Math.min(
          anchorRect.left + (anchorRect.width / 2) - (POPOVER_WIDTH / 2),
          viewportWidth - POPOVER_WIDTH - POPOVER_GAP
        ));
        const top = anchorRect.top - POPOVER_GAP - 10;
        setPosition({ top, left });
      } else {
        // Position to the right of the card, or left if no space
        const spaceOnRight = viewportWidth - anchorRect.right;
        const popoverHeight = popoverRef.current?.offsetHeight || 300;

        let left: number;
        if (spaceOnRight >= POPOVER_WIDTH + POPOVER_GAP) {
          left = anchorRect.right + POPOVER_GAP;
        } else {
          left = anchorRect.left - POPOVER_WIDTH - POPOVER_GAP;
        }

        // Vertically center with the card, but keep within viewport
        let top = anchorRect.top + (anchorRect.height / 2) - (popoverHeight / 2);
        top = Math.max(POPOVER_GAP, Math.min(top, viewportHeight - popoverHeight - POPOVER_GAP));

        // Ensure left is within bounds
        left = Math.max(POPOVER_GAP, Math.min(left, viewportWidth - POPOVER_WIDTH - POPOVER_GAP));

        setPosition({ top, left });
      }
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, [state]);

  // Handle URL fetch for link type
  const handleUrlFetch = async (inputUrl: string) => {
    if (!inputUrl || inputUrl.length < 5) return;

    setIsFetchingMeta(true);
    const metadata = await fetchUrlMetadata(inputUrl);
    setIsFetchingMeta(false);

    if (metadata) {
      if (!title && metadata.title) setTitle(metadata.title);
      if (!icon && metadata.logo) setIcon(metadata.logo);
      if (!subtitle && metadata.domain) setSubtitle(metadata.domain);
      if (!image && metadata.image) setImage(metadata.image);
    }
  };

  // Handle media file upload
  const handleMediaFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isVideo = file.type.startsWith('video/');
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setMediaType(isVideo ? 'video' : 'image');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save
  const handleSave = () => {
    const data: Partial<BentoItemData> = { type: state.type };

    switch (state.type) {
      case 'heading':
        data.title = title || 'New Section';
        data.size = 'full';
        break;
      case 'link':
        data.title = title || 'New Link';
        data.subtitle = subtitle;
        data.url = url;
        data.icon = icon;
        data.image = image;
        data.size = state.existingData?.size || '1x1';
        break;
      case 'image':
        data.image = image;
        data.caption = caption;
        data.mediaType = mediaType || (isVideoUrl(image) ? 'video' : 'image');
        data.variant = 'media';
        data.size = state.existingData?.size || '2x2';
        break;
      case 'text':
        data.title = title || 'New Text';
        data.size = state.existingData?.size || '1x1';
        data.textAlign = textAlign;
        data.textVAlign = textVAlign;
        data.textSize = textSize;
        break;
      default:
        data.title = title;
        data.size = state.existingData?.size || '1x1';
    }

    onSave(data);
  };

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCancel, title, subtitle, url, icon, image, caption]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onCancel();
      }
    };
    // Delay to prevent immediate close on the click that opened the popover
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel]);

  const typeConfig = TYPE_CONFIG[state.type];

  // Render type-specific form fields
  const renderFormFields = () => {
    switch (state.type) {
      case 'heading':
        return (
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Title</label>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Section title..."
              autoFocus
              className="font-bold"
            />
          </div>
        );

      case 'link':
        return (
          <div className="space-y-4">
            {/* URL Input with Auto-fetch */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">URL</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Link2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    onBlur={e => handleUrlFetch(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleUrlFetch(url)}
                    className="pl-9"
                    placeholder="https://example.com"
                    autoFocus
                  />
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => handleUrlFetch(url)}
                  disabled={isFetchingMeta || !url}
                  className="shrink-0"
                >
                  {isFetchingMeta ? <Loader2 size={16} className="animate-spin" /> : <Link2 size={16} />}
                </Button>
              </div>
              {isFetchingMeta && (
                <p className="text-xs text-gray-400">Fetching metadata...</p>
              )}
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Title</label>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Display title"
                className="font-bold"
              />
            </div>

            {/* Icon */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Icon</label>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 border border-[#efefef] rounded-[4px] flex items-center justify-center overflow-hidden shrink-0">
                  {icon ? (
                    <img src={icon} alt="icon" className="w-6 h-6 object-contain" />
                  ) : (
                    <Globe size={18} className="text-gray-400" />
                  )}
                </div>
                <Input
                  value={icon}
                  onChange={e => setIcon(e.target.value)}
                  placeholder="Icon URL (auto-fetched)"
                  className="flex-1 text-sm"
                />
                {icon && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIcon('')}
                    className="shrink-0 text-gray-400 hover:text-red-500"
                  >
                    <X size={16} />
                  </Button>
                )}
              </div>
            </div>

            {/* Cover Image */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Cover Image</label>
              <div className="flex items-start gap-3">
                {image ? (
                  <div className="relative w-24 aspect-[4/3] rounded-[4px] overflow-hidden group/img shadow-md shrink-0 bg-gray-100 border border-[#efefef]">
                    <img src={image} className="w-full h-full object-cover" alt="preview" />
                    <button
                      onClick={() => setImage('')}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => mediaInputRef.current?.click()}
                    className="w-24 aspect-[4/3] border-2 border-dashed border-[#efefef] rounded-[4px] flex flex-col items-center justify-center text-gray-400 hover:border-black/20 hover:text-gray-900 transition-all gap-1 bg-gray-50/50 shrink-0"
                  >
                    <Upload size={16} />
                    <span className="text-[8px] font-bold tracking-wide">UPLOAD</span>
                  </button>
                )}
                <div className="flex-1">
                  <Input
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    placeholder="Image URL (auto-fetched)"
                    className="text-sm"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Used as card background</p>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subtitle</label>
              <Input
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
                placeholder="e.g. notion.so"
              />
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="space-y-4">
            {/* Media Upload/URL */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Media {mediaType === 'video' || isVideoUrl(image) ? '(Video)' : '(Image)'}
              </label>
              <div className="flex items-start gap-3">
                {image ? (
                  <div className="relative w-28 aspect-[4/3] rounded-[4px] overflow-hidden group/img shadow-md shrink-0 bg-gray-100 border border-[#efefef]">
                    {(mediaType === 'video' || isVideoUrl(image)) ? (
                      <video
                        src={image}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <img src={image} className="w-full h-full object-cover" alt="preview" />
                    )}
                    <button
                      onClick={() => { setImage(''); setMediaType(undefined); }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => mediaInputRef.current?.click()}
                      className="w-14 aspect-square border-2 border-dashed border-[#efefef] rounded-[4px] flex flex-col items-center justify-center text-gray-400 hover:border-black/20 hover:text-gray-900 transition-all gap-0.5 bg-gray-50/50"
                    >
                      <Upload size={16} />
                      <span className="text-[7px] font-bold tracking-wide">UPLOAD</span>
                    </button>
                    <button
                      onClick={() => setShowAssetSelector(true)}
                      className="w-14 aspect-square border-2 border-dashed border-[#efefef] rounded-[4px] flex flex-col items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all gap-0.5 bg-gray-50/50"
                    >
                      <FolderOpen size={16} />
                      <span className="text-[7px] font-bold tracking-wide">BROWSE</span>
                    </button>
                  </div>
                )}
                <div className="flex-1 space-y-2">
                  <Input
                    value={image}
                    onChange={e => {
                      const val = e.target.value;
                      setImage(val);
                      setMediaType(isVideoUrl(val) ? 'video' : 'image');
                    }}
                    placeholder="Image or video URL"
                    className="text-sm"
                    autoFocus={!image}
                  />
                  <p className="text-[10px] text-gray-400">Paste URL, upload, or browse assets</p>
                </div>
              </div>
            </div>

            {/* Asset Selector Modal */}
            <AssetSelectorModal
              isOpen={showAssetSelector}
              onClose={() => setShowAssetSelector(false)}
              onSelect={(path, type) => {
                setImage(path);
                setMediaType(type);
              }}
            />

            {/* Caption */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Caption</label>
              <Input
                value={caption}
                onChange={e => setCaption(e.target.value.slice(0, CAPTION_MAX_LENGTH))}
                placeholder="Optional caption"
                className="text-sm"
                maxLength={CAPTION_MAX_LENGTH}
              />
              <p className="text-[10px] text-gray-400">{caption.length}/{CAPTION_MAX_LENGTH}</p>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            {/* Text Content */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Text</label>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Text content..."
                autoFocus
                className="font-medium"
              />
            </div>

            {/* Alignment Controls */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Alignment</label>
              <div className="flex items-center gap-2">
                {/* Horizontal Alignment */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-0.5">
                  <button
                    type="button"
                    onClick={() => setTextAlign('left')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      textAlign === 'left' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                    )}
                    title="Align left"
                  >
                    <AlignLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTextAlign('center')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      textAlign === 'center' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                    )}
                    title="Align center"
                  >
                    <AlignCenter size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTextAlign('right')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      textAlign === 'right' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                    )}
                    title="Align right"
                  >
                    <AlignRight size={16} />
                  </button>
                </div>

                <div className="w-px h-6 bg-gray-200" />

                {/* Vertical Alignment */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-0.5">
                  <button
                    type="button"
                    onClick={() => setTextVAlign('top')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      textVAlign === 'top' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                    )}
                    title="Align top"
                  >
                    <AlignVerticalJustifyStart size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTextVAlign('middle')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      textVAlign === 'middle' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                    )}
                    title="Align middle"
                  >
                    <AlignVerticalJustifyCenter size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTextVAlign('bottom')}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      textVAlign === 'bottom' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                    )}
                    title="Align bottom"
                  >
                    <AlignVerticalJustifyEnd size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Size</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-0.5">
                <button
                  type="button"
                  onClick={() => setTextSize('small')}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-bold transition-colors",
                    textSize === 'small' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  S
                </button>
                <button
                  type="button"
                  onClick={() => setTextSize('medium')}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-bold transition-colors",
                    textSize === 'medium' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  M
                </button>
                <button
                  type="button"
                  onClick={() => setTextSize('large')}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-bold transition-colors",
                    textSize === 'large' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  L
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Title</label>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title..."
              autoFocus
            />
          </div>
        );
    }
  };

  return (
    <>
      {/* Inject keyframe animation */}
      <style>{`
        @keyframes popover-fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        ref={popoverRef}
        className={cn(
          "fixed z-[100] bg-white shadow-card border border-[#efefef] rounded-[16px] isolate"
        )}
        style={{
          width: POPOVER_WIDTH,
          ...popoverAnimationStyle,
          ...(state.mode === 'create'
            ? { bottom: window.innerHeight - state.anchorRect.top + POPOVER_GAP, left: position.left }
            : { top: position.top, left: position.left }
          ),
        }}
        onClick={e => e.stopPropagation()}
      >
        <Squircle
          cornerRadius={16}
          cornerSmoothing={0.6}
          className="h-full w-full overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#efefef] bg-gray-50/50">
            <div className="flex items-center gap-2 text-gray-700">
              {typeConfig.icon}
              <span className="font-bold text-sm">{state.mode === 'create' ? 'Add' : 'Edit'} {typeConfig.label}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onCancel}
              className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-700"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Form */}
          <div className="p-4">
            {renderFormFields()}
          </div>

          {/* Hidden file input - available for all card types */}
          <input
            type="file"
            ref={mediaInputRef}
            onChange={handleMediaFileChange}
            className="hidden"
            accept="image/*,video/mp4,video/webm,video/quicktime"
          />

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-[#efefef] bg-gray-50/50">
            <Button
              variant="ghost"
              size="sm"
              onClick={onCancel}
              className="text-gray-500"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleSave}
              className="gap-1"
            >
              <Check size={14} />
              {state.mode === 'create' ? 'Add' : 'Save'}
            </Button>
          </div>
        </Squircle>
      </div>
    </>
  );
};

export default CardEditorPopover;

