import React, { useRef } from 'react';
import { Link as LinkIcon, Film, Type, Smartphone, Monitor, Heading1 } from 'lucide-react';
import { ItemType, ViewMode } from '../types';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { cn } from '../lib/utils';

interface ToolbarProps {
  onStartCreate: (type: ItemType, anchorRect: DOMRect) => void;
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onStartCreate, currentView, onViewChange }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const canEdit = isAuthenticated && isAdmin;
  const toolbarRef = useRef<HTMLDivElement>(null);

  const handleAddClick = (type: ItemType) => {
    if (toolbarRef.current) {
      const rect = toolbarRef.current.getBoundingClientRect();
      onStartCreate(type, rect);
    }
  };
  
  return (
    <div 
      ref={toolbarRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-500"
    >
      
      {/* Main Action Bar */}
      <div className="flex items-center bg-white p-1.5 rounded-full shadow-2xl border border-gray-100">
        
        {/* Share Button (Primary) */}
        <Button variant="primary" size="lg" className="rounded-full font-bold mr-2">
          Share my Portfolio
        </Button>

        {canEdit && (
          <>
            <div className="w-px h-8 bg-gray-200 mx-1"></div>

            {/* Add Tools */}
            <div className="flex items-center gap-1 px-2">
              <Button variant="icon" size="icon" onClick={() => handleAddClick('heading')} className="rounded-full" title="Add Section Heading">
                <Heading1 size={20} />
              </Button>
              <Button variant="icon" size="icon" onClick={() => handleAddClick('link')} className="rounded-full" title="Add Link">
                <LinkIcon size={20} />
              </Button>
              <Button variant="icon" size="icon" onClick={() => handleAddClick('image')} className="rounded-full" title="Add Media (Image/Video)">
                <Film size={20} />
              </Button>
              <Button variant="icon" size="icon" onClick={() => handleAddClick('text')} className="rounded-full" title="Add Text">
                <Type size={20} />
              </Button>
            </div>

            <div className="w-px h-8 bg-gray-200 mx-1"></div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 px-2">
              <Button 
                variant={currentView === 'desktop' ? 'default' : 'icon'} 
                size="icon" 
                onClick={() => onViewChange('desktop')}
                className={cn(
                  "rounded-full transition-all",
                  currentView === 'desktop' ? "bg-black shadow-md text-white" : "text-gray-400 hover:text-gray-600"
                )}
                title="Desktop View"
              >
                <Monitor size={20} />
              </Button>
              <Button 
                variant={currentView === 'mobile' ? 'default' : 'icon'} 
                size="icon" 
                onClick={() => onViewChange('mobile')}
                className={cn(
                  "rounded-full transition-all",
                  currentView === 'mobile' ? "bg-black shadow-md text-white" : "text-gray-400 hover:text-gray-600"
                )}
                title="Mobile View"
              >
                <Smartphone size={20} />
              </Button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Toolbar;