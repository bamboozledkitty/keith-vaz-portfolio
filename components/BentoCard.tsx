import React, { useState, useRef } from 'react';
import { BentoItemData, ItemSize } from '../types';
import { cn } from '../lib/utils';
import { Github, Linkedin, Twitter, Instagram, Youtube, MapPin, Globe, Check, X, Upload, Trash2 } from 'lucide-react';
import EditControls from './EditControls';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface BentoCardProps {
  item: BentoItemData;
  isOverlay?: boolean;
  isDragging?: boolean;
  onDelete?: (id: string) => void;
  onResize?: (id: string, size: ItemSize) => void;
  onUpdate?: (id: string, updates: Partial<BentoItemData>) => void;
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

const BentoCard: React.FC<BentoCardProps> = ({ item, isOverlay, isDragging, onDelete, onResize, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(item);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdate?.(item.id, tempData);
    setIsEditing(false);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTempData(item);
    setIsEditing(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData({ ...tempData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const renderEditor = () => {
    return (
      <div className="absolute inset-0 z-50 bg-white/98 backdrop-blur-xl p-6 flex flex-col gap-5 overflow-y-auto animate-in fade-in zoom-in-95 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h4 className="font-extrabold text-xl tracking-tight">Widget Settings</h4>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleCancel} className="rounded-full h-10 w-10">
                <X size={20}/>
            </Button>
            <Button variant="default" size="icon" onClick={handleSave} className="rounded-full h-10 w-10">
                <Check size={20}/>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Content Title</label>
            <Input 
              value={tempData.title || ''} 
              onChange={e => setTempData({...tempData, title: e.target.value})}
              className="font-bold"
              placeholder="Display Title"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Caption / Link</label>
            <Input 
              value={tempData.subtitle || ''} 
              onChange={e => setTempData({...tempData, subtitle: e.target.value})}
              placeholder="e.g. bento.me/keith"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Image Upload</label>
            <div className="flex items-center gap-4">
              {tempData.image ? (
                <div className="relative w-28 h-28 rounded-[24px] overflow-hidden group/img shadow-md">
                  <img src={tempData.image} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setTempData({...tempData, image: undefined})}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white"
                  >
                    <Trash2 size={24} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-28 h-28 border-2 border-dashed border-gray-200 rounded-[24px] flex flex-col items-center justify-center text-gray-400 hover:border-black/20 hover:text-gray-900 transition-all gap-2 bg-gray-50/50"
                >
                  <Upload size={24} />
                  <span className="text-[11px] font-black tracking-wide">CHOOSE FILE</span>
                </button>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    // 1. Small Square (1x1) - Icon Top, Text Bottom
    if (item.size === '1x1') {
      return (
        <div className="h-full w-full flex flex-col justify-between p-4 group bg-white">
          <div className="w-10 h-10 rounded-[12px] bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-800 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <SocialIcon name={item.icon || item.image} className="w-5 h-5" />
          </div>
          <div className="min-w-0 w-full">
            <h3 className="font-bold text-gray-900 leading-snug text-[13px] line-clamp-2">{item.title}</h3>
            {item.subtitle && <p className="text-[10px] text-gray-400 mt-1 font-medium line-clamp-1">{item.subtitle}</p>}
          </div>
        </div>
      );
    }

    // 2. Narrow Rectangle (1x0.5) - Horizontal strip for quick links/stats (no image)
    if (item.size === '1x0.5') {
      return (
        <div className="flex items-center h-full w-full px-4 gap-3 bg-white">
          <div className="w-8 h-8 rounded-[10px] bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
            <SocialIcon name={item.icon || item.image} className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">{item.title}</h3>
            {item.subtitle && <p className="text-[10px] text-gray-400 mt-0.5 font-medium truncate">{item.subtitle}</p>}
          </div>
        </div>
      );
    }

    // 3. Wide Rectangle (2x1) - More space for text
    if (item.size === '2x1') {
      return (
        <div className="flex h-full w-full bg-white group">
          <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
            <div className="w-10 h-10 rounded-[12px] overflow-hidden flex items-center justify-center bg-gray-50 border border-gray-100">
              <SocialIcon name={item.icon} className="w-5 h-5" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-gray-900 leading-tight text-base tracking-tight line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium truncate">{item.subtitle}</p>
            </div>
          </div>
          {item.image && (
            <div className="w-[38%] h-full p-2.5 pl-0 shrink-0">
              <div className="w-full h-full rounded-[12px] overflow-hidden relative bg-gray-50 shadow-inner">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          )}
        </div>
      );
    }

    // 4. Vertical Rectangle (1x2) - Stacked layout with text on top and image on bottom
    if (item.size === '1x2') {
      return (
        <div className="flex flex-col h-full w-full bg-white group">
          <div className="p-5 pb-3">
            <div className="w-10 h-10 rounded-[14px] overflow-hidden flex items-center justify-center bg-gray-50 border border-gray-100 mb-3">
              <SocialIcon name={item.icon} className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 leading-tight text-base tracking-tight line-clamp-2">{item.title}</h3>
            <p className="text-xs text-gray-400 mt-1.5 font-medium line-clamp-2">{item.subtitle}</p>
          </div>
          {item.image && (
            <div className="flex-1 p-2.5 pt-0">
              <div className="w-full h-full rounded-[12px] overflow-hidden relative bg-gray-50 shadow-inner">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          )}
        </div>
      );
    }

    // 5. Large Square (2x2) - Hero-style card for featured case studies or media
    if (item.size === '2x2') {
      return (
        <div className="h-full w-full relative group overflow-hidden bg-gray-50">
          {item.image ? (
            <>
              <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="w-10 h-10 rounded-[14px] overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-sm mb-3">
                  <SocialIcon name={item.icon} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl leading-tight tracking-tight">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2 font-medium">{item.subtitle}</p>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col p-6 justify-between">
              <div className="w-14 h-14 rounded-[18px] bg-gray-100 border border-gray-200 flex items-center justify-center">
                <SocialIcon name={item.icon} className="w-8 h-8" />
              </div>
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

  return (
    <div
      className={cn(
        "relative h-full w-full group select-none transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isDragging ? "z-[100]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !isEditing && setIsEditing(true)}
    >
      <Card className={cn(
        "h-full w-full overflow-hidden border-gray-100 shadow-bento transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] p-0 border",
        isDragging ? "shadow-bento-drag ring-1 ring-black/5" : "hover:shadow-bento-hover cursor-grab active:scale-[0.98]"
      )}>
        {renderContent()}
        {isEditing && renderEditor()}
      </Card>

      {isHovered && !isDragging && !isOverlay && !isEditing && onDelete && onResize && (
        <EditControls 
          onDelete={() => onDelete(item.id)}
          onResize={(size) => onResize(item.id, size)}
          onEdit={() => setIsEditing(true)}
          currentSize={item.size}
        />
      )}
    </div>
  );
};

export default BentoCard;