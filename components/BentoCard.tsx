import React, { useState, useRef, useEffect } from 'react';
import { BentoItemData, ItemSize, MediaType, TextAlign, TextVAlign, TextSize, ViewMode } from '../types';
import { cn } from '../lib/utils';
import { Github, Linkedin, Twitter, Instagram, Youtube, Globe, Pencil, Film } from 'lucide-react';

// Text card alignment and size utilities
const getTextAlignClass = (align?: TextAlign): string => {
  switch (align) {
    case 'center': return 'text-center items-center';
    case 'right': return 'text-right items-end';
    default: return 'text-left items-start';
  }
};

const getTextVAlignClass = (vAlign?: TextVAlign): string => {
  switch (vAlign) {
    case 'top': return 'justify-start';
    case 'bottom': return 'justify-end';
    default: return 'justify-center';
  }
};

const getTextSizeClass = (size?: TextSize): string => {
  switch (size) {
    case 'small': return 'text-sm';
    case 'large': return 'text-xl';
    default: return 'text-base';
  }
};
import EditControls from './EditControls';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Squircle } from './ui/squircle';
import { useAuth } from '../contexts/AuthContext';

// Video file extensions
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v', '.ogg'];

// Detect if URL is a video
const isVideoUrl = (url?: string): boolean => {
  if (!url) return false;
  const lowerUrl = url.toLowerCase();
  return VIDEO_EXTENSIONS.some(ext => lowerUrl.includes(ext));
};

// Get media type from URL
const getMediaType = (url?: string, explicitType?: MediaType): MediaType => {
  if (explicitType) return explicitType;
  return isVideoUrl(url) ? 'video' : 'image';
};

// Caption character limit
const CAPTION_MAX_LENGTH = 50;

interface BentoCardProps {
  item: BentoItemData;
  currentView?: ViewMode;
  isAdminRoute?: boolean; // Whether we're on the admin route (not just authenticated)
  isOverlay?: boolean;
  isDragging?: boolean;
  onDelete?: (id: string) => void;
  onResize?: (id: string, size: ItemSize) => void;
  onUpdate?: (id: string, updates: Partial<BentoItemData>) => void;
  onStartEdit?: (id: string, anchorRect: DOMRect) => void;
}

const SocialIcon = ({ name, className }: { name?: string; className?: string }) => {
  if (name?.startsWith('data:') || name?.startsWith('http') || name?.startsWith('/') || name?.includes('drive')) {
    return <img src={name} alt="icon" className={cn("object-contain", className)} />;
  }
  switch (name?.toLowerCase()) {
    case 'github': return <Github className={className} />;
    case 'linkedin': return <Linkedin className={className} />;
    case 'twitter': return <Twitter className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'youtube': return <Youtube className={className} />;
    default: return <Globe className={className} />;
  }
};

const BentoCard: React.FC<BentoCardProps> = ({ item, currentView = 'desktop', isAdminRoute = false, isOverlay, isDragging, onDelete, onResize, onUpdate, onStartEdit }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  // canEdit requires BOTH route context (isAdminRoute) AND auth state
  const canEdit = isAdminRoute && isAuthenticated && isAdmin;
  const cardRef = useRef<HTMLDivElement>(null);

  // Get size for current view
  const currentSize: ItemSize = (() => {
    const layout = currentView === 'desktop' ? item.desktopLayout : item.mobileLayout;
    return layout?.size || item.size;
  })();

  const [isHovered, setIsHovered] = useState(false);
  const [isEditingCaption, setIsEditingCaption] = useState(false);
  const [tempCaption, setTempCaption] = useState(item.caption || '');
  const captionInputRef = useRef<HTMLInputElement>(null);

  // Sync tempCaption with item prop when item changes externally
  useEffect(() => {
    setTempCaption(item.caption || '');
  }, [item.caption]);

  // Focus caption input when entering edit mode
  useEffect(() => {
    if (isEditingCaption && captionInputRef.current) {
      captionInputRef.current.focus();
    }
  }, [isEditingCaption]);

  // Handle click - navigate to URL or open editor
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on edit controls, caption, or other interactive elements
    if ((e.target as HTMLElement).closest('.edit-controls, input, button')) {
      return;
    }

    // Cmd/Ctrl + Click always opens URL (even in admin mode) for testing links
    if ((e.metaKey || e.ctrlKey) && item.url) {
      e.preventDefault();
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }

    // In edit mode, regular click opens the editor popover
    if (canEdit && onStartEdit && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onStartEdit(item.id, rect);
      return;
    }

    // Not in edit mode - navigate to URL if present
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Save caption inline
  const handleSaveCaption = () => {
    onUpdate?.(item.id, { caption: tempCaption });
    setIsEditingCaption(false);
  };

  // Cancel caption editing
  const handleCancelCaption = () => {
    setTempCaption(item.caption || '');
    setIsEditingCaption(false);
  };

  // Render edge-to-edge media (image or video) with hover caption
  const renderMediaCard = () => {
    const mediaUrl = item.image;
    const mediaType = getMediaType(mediaUrl, item.mediaType);
    const hasMedia = !!mediaUrl;

    return (
      <div className="h-full w-full relative group overflow-hidden bg-gray-100 flex items-center justify-center">
        {/* Media - 4:3 Aspect Ratio Container */}
        <div className="relative w-full aspect-[4/3]">
          {hasMedia && mediaType === 'video' ? (
            <video
              src={mediaUrl}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : hasMedia ? (
            <img
              src={mediaUrl}
              alt={item.caption || item.title || 'Media'}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100">
              <Film size={48} className="text-gray-300" />
            </div>
          )}
        </div>

        {/* Caption Overlay - Bottom Left (always visible when caption exists) */}
        {!isEditingCaption && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-200",
              // Always show if caption exists, otherwise only on hover for edit mode
              item.caption ? "opacity-100" : (canEdit && isHovered ? "opacity-100" : "opacity-0")
            )}
            onClick={canEdit ? (e) => {
              e.stopPropagation();
              setIsEditingCaption(true);
            } : undefined}
          >
            {item.caption ? (
              // Caption exists - show it with dark background
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-sm rounded-lg max-w-full",
                canEdit && "cursor-text hover:bg-black/70 transition-colors"
              )}>
                {canEdit && isHovered && <Pencil size={12} className="text-white/70 shrink-0" />}
                <span className="text-sm text-white truncate">{item.caption}</span>
              </div>
            ) : canEdit ? (
              // No caption - show add prompt (only in edit mode on hover)
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm cursor-text hover:bg-white transition-colors max-w-full">
                <Pencil size={12} className="text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400 italic">Add caption...</span>
              </div>
            ) : null}
          </div>
        )}

        {/* Inline Caption Editor */}
        {isEditingCaption && (
          <div
            className="absolute bottom-0 left-0 right-0 p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Input
              ref={captionInputRef}
              value={tempCaption}
              onChange={(e) => setTempCaption(e.target.value.slice(0, CAPTION_MAX_LENGTH))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSaveCaption();
                } else if (e.key === 'Escape') {
                  handleCancelCaption();
                }
              }}
              onBlur={handleSaveCaption}
              placeholder="Add caption..."
              maxLength={CAPTION_MAX_LENGTH}
              className="bg-white border-gray-300 shadow-lg text-sm h-10 max-w-[280px]"
            />
            <p className="text-[10px] text-white/70 mt-1 ml-1">
              {tempCaption.length}/{CAPTION_MAX_LENGTH}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Check if this is a media-only card (edge-to-edge media with caption)
  const isMediaCard = item.variant === 'media' || item.type === 'image';

  // Check if this is a text card
  const isTextCard = item.type === 'text';

  // Render text card with alignment options
  const renderTextCard = () => {
    const alignClass = getTextAlignClass(item.textAlign);
    const vAlignClass = getTextVAlignClass(item.textVAlign);
    const sizeClass = getTextSizeClass(item.textSize);

    return (
      <div className={cn(
        "h-full w-full flex flex-col p-4 bg-white",
        alignClass,
        vAlignClass
      )}>
        <p className={cn(
          "font-medium text-gray-900 leading-relaxed",
          sizeClass
        )}>
          {item.title}
        </p>
      </div>
    );
  };

  const renderContent = () => {
    // 0. Heading - Section title (380×60px like bento.me)
    if (item.type === 'heading' || currentSize === 'full') {
      return (
        <div className="h-full w-full flex items-center px-4 bg-transparent">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            {item.title}
          </h2>
        </div>
      );
    }

    // Media card - edge-to-edge with caption (for any size with media variant)
    if (isMediaCard) {
      return renderMediaCard();
    }

    // Text card - no icon, just text with alignment
    if (isTextCard) {
      return renderTextCard();
    }

    // 1. Small Square (1x1) - Icon Top, Text Bottom with uniform padding
    if (currentSize === '1x1') {
      return (
        <div className="h-full w-full flex flex-col justify-between p-5 group bg-white">
          <Squircle cornerRadius={12} className="w-10 h-10 bg-gray-50 border border-[#f3f3f3] flex items-center justify-center text-gray-800 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <SocialIcon name={item.icon || item.image} className="w-5 h-5" />
          </Squircle>
          <div className="min-w-0 w-full">
            <h3 className="font-bold text-gray-900 leading-snug text-sm line-clamp-2">{item.title}</h3>
            {item.subtitle && <p className="text-xs text-gray-400 mt-1 font-medium line-clamp-1">{item.subtitle}</p>}
          </div>
        </div>
      );
    }

    // 2. Narrow Rectangle (1x0.5) - Horizontal strip for quick links/stats
    if (currentSize === '1x0.5') {
      return (
        <div className="flex items-center h-full w-full px-5 gap-4 bg-white">
          <Squircle cornerRadius={10} className="w-10 h-10 bg-gray-50 border border-[#efefef] flex items-center justify-center shrink-0">
            <SocialIcon name={item.icon || item.image} className="w-5 h-5" />
          </Squircle>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">{item.title}</h3>
            {item.subtitle && <p className="text-xs text-gray-400 mt-0.5 font-medium truncate">{item.subtitle}</p>}
          </div>
        </div>
      );
    }

    // 3. Wide Rectangle (2x1) - bento.me style: icon + text grouped at top-left, image right
    if (currentSize === '2x1') {
      return (
        <div className="flex h-full w-full bg-white group p-5 gap-4">
          {/* Text content - left side, icon + text grouped at top */}
          <div className="flex-1 flex flex-col justify-start min-w-0 gap-3">
            <Squircle cornerRadius={12} className="w-10 h-10 overflow-hidden flex items-center justify-center bg-gray-50 border border-[#efefef] shrink-0">
              <SocialIcon name={item.icon} className="w-5 h-5" />
            </Squircle>
            <div>
              <h3 className="font-bold text-gray-900 leading-tight text-base tracking-tight line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium truncate">{item.subtitle}</p>
            </div>
          </div>
          {/* Image - right side, 100% height, ~48% width like bento.me */}
          {item.image && (
            <Squircle cornerRadius={12} className="w-[48%] h-full overflow-hidden bg-gray-50 shrink-0">
              <img 
                src={item.image} 
                alt={item.title || ''} 
                className="h-full w-full object-cover transition-transform duration-500" 
              />
            </Squircle>
          )}
        </div>
      );
    }

    // 4. Vertical Rectangle (1x2) - icon + text grouped at top, image at bottom (48% height)
    if (currentSize === '1x2') {
      return (
        <div className="flex flex-col h-full w-full bg-white group p-5 gap-4">
          {/* Text content - top, icon + text grouped together */}
          <div className="flex-1 flex flex-col justify-start gap-3">
            <Squircle cornerRadius={12} className="w-10 h-10 overflow-hidden flex items-center justify-center bg-gray-50 border border-[#efefef] shrink-0">
              <SocialIcon name={item.icon} className="w-5 h-5" />
            </Squircle>
            <div>
              <h3 className="font-bold text-gray-900 leading-tight text-base tracking-tight line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1.5 font-medium line-clamp-2">{item.subtitle}</p>
            </div>
          </div>
          {/* Image - bottom, 48% height to match 2x1's 48% width ratio */}
          {item.image && (
            <Squircle cornerRadius={12} className="h-[48%] w-full overflow-hidden bg-gray-50 shrink-0">
              <img 
                src={item.image} 
                alt={item.title || ''} 
                className="h-full w-full object-cover transition-transform duration-500" 
              />
            </Squircle>
          )}
        </div>
      );
    }

    // 5. Large Square (2x2) - Hero-style card with full bleed image
    if (currentSize === '2x2') {
      return (
        <div className="h-full w-full relative group overflow-hidden bg-gray-50">
          {item.image ? (
            <>
              {/* Full bleed image */}
              <img 
                src={item.image} 
                alt={item.title || ''} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500" 
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <Squircle cornerRadius={12} className="w-10 h-10 overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-sm mb-3">
                  <SocialIcon name={item.icon} className="w-5 h-5 text-white" />
                </Squircle>
                <h3 className="text-white font-bold text-xl leading-tight tracking-tight">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2 font-medium">{item.subtitle}</p>
              </div>
            </>
          ) : (
            <div className="h-full w-full flex flex-col p-6 justify-between bg-white">
              <Squircle cornerRadius={12} className="w-14 h-14 bg-gray-100 border border-gray-200 flex items-center justify-center">
                <SocialIcon name={item.icon} className="w-8 h-8" />
              </Squircle>
              <div>
                <h3 className="font-bold text-2xl text-gray-900 leading-tight tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-3 font-medium">{item.subtitle}</p>
              </div>
            </div>
          )}
        </div>
      );
    }

    return <div className="p-4">Card</div>;
  };

  const isHeading = item.type === 'heading' || currentSize === 'full';

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative h-full w-full group select-none transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isDragging ? "z-[100]" : "",
        isOverlay ? "rotate-[3deg] scale-[1.02]" : "rotate-0"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {isHeading ? (
        // Heading - no card wrapper, just the content
        <div className={cn(
          "h-full w-full flex items-center transition-opacity duration-300",
          isDragging ? "opacity-50" : "",
          canEdit && "cursor-grab active:cursor-grabbing hover:opacity-80"
        )}>
          {renderContent()}
        </div>
      ) : (
        <Card className={cn(
          "h-full w-full shadow-card transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] p-0 relative",
          isDragging ? "shadow-card-drag" : "hover:shadow-card-hover cursor-grab active:scale-[0.98]"
        )}>
          {renderContent()}
        </Card>
      )}

      {canEdit && isHovered && !isDragging && !isOverlay && onDelete && (
        <EditControls
          onDelete={() => onDelete(item.id)}
          onResize={isHeading ? undefined : (onResize ? (size) => onResize(item.id, size) : undefined)}
          currentSize={currentSize}
          isHeading={isHeading}
        />
      )}
    </div>
  );
};

export default BentoCard;