import React, { useState, useEffect } from 'react';
import { X, Play, Search, Image as ImageIcon, Film } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn, resolveMediaUrl } from '../lib/utils';

interface Asset {
  name: string;
  type: 'image' | 'video';
}

interface AssetSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (path: string, type: 'image' | 'video') => void;
}

const ASSETS_BASE_PATH = '/media-assets';

const AssetSelectorModal: React.FC<AssetSelectorModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  // Fetch manifest on mount
  useEffect(() => {
    if (!isOpen) return;

    const fetchManifest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const baseUrl = import.meta.env.BASE_URL || '/';
        const response = await fetch(`${baseUrl}media-assets/manifest.json`);
        if (!response.ok) throw new Error('Failed to load assets');
        const data = await response.json();
        setAssets(data.assets || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load assets');
      } finally {
        setIsLoading(false);
      }
    };

    fetchManifest();
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter assets
  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || asset.type === filter;
    return matchesSearch && matchesFilter;
  });

  // Handle asset selection
  const handleSelect = (asset: Asset) => {
    const path = `${ASSETS_BASE_PATH}/${asset.name}`;
    onSelect(path, asset.type);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90vw] max-w-[720px] max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Browse Assets</h2>
            <p className="text-sm text-gray-500 mt-0.5">Select an image or video from your library</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-9 w-9 rounded-full text-gray-400 hover:text-gray-700"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-gray-50/50">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search assets..."
              className="pl-9 h-9 text-sm"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-0.5">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-bold transition-colors",
                filter === 'all' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
              )}
            >
              All
            </button>
            <button
              onClick={() => setFilter('image')}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-bold transition-colors flex items-center gap-1",
                filter === 'image' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
              )}
            >
              <ImageIcon size={12} />
              Images
            </button>
            <button
              onClick={() => setFilter('video')}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-bold transition-colors flex items-center gap-1",
                filter === 'video' ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
              )}
            >
              <Film size={12} />
              Videos
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 text-red-500">
              <p className="font-medium">{error}</p>
              <Button variant="secondary" size="sm" className="mt-3" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          ) : filteredAssets.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <ImageIcon size={48} strokeWidth={1} />
              <p className="mt-3 font-medium">No assets found</p>
              {searchQuery && <p className="text-sm">Try a different search term</p>}
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {filteredAssets.map((asset) => (
                <button
                  key={asset.name}
                  onClick={() => handleSelect(asset)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 border-2 border-transparent hover:border-blue-500 transition-all focus:outline-none focus:border-blue-500"
                >
                  {asset.type === 'video' ? (
                    <>
                      <video
                        src={resolveMediaUrl(`${ASSETS_BASE_PATH}/${asset.name}`)}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        onMouseEnter={e => (e.target as HTMLVideoElement).play()}
                        onMouseLeave={e => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <Play size={18} className="text-gray-900 ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={resolveMediaUrl(`${ASSETS_BASE_PATH}/${asset.name}`)}
                      alt={asset.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  
                  {/* Filename tooltip on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-white truncate font-medium">
                      {decodeURIComponent(asset.name)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/50">
          <p className="text-xs text-gray-500">
            {filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''}
          </p>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssetSelectorModal;
