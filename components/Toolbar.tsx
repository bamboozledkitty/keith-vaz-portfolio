import React from 'react';
import { Link as LinkIcon, Image as ImageIcon, Type, MapPin, Github, Smartphone, Monitor } from 'lucide-react';
import { ItemType } from '../types';
import { Button } from './ui/button';

interface ToolbarProps {
  onAddItem: (type: ItemType) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddItem }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-500">
      
      {/* Main Action Bar */}
      <div className="flex items-center bg-white p-1.5 rounded-full shadow-2xl border border-gray-100">
        
        {/* Share Button (Primary) */}
        <Button variant="bento" size="lg" className="rounded-full font-bold mr-2">
          Share my Bento
        </Button>

        <div className="w-px h-8 bg-gray-200 mx-1"></div>

        {/* Add Tools */}
        <div className="flex items-center gap-1 px-2">
           <Button variant="icon" size="icon" onClick={() => onAddItem('link')} className="rounded-full" title="Add Link">
             <LinkIcon size={20} />
           </Button>
           <Button variant="icon" size="icon" onClick={() => onAddItem('image')} className="rounded-full" title="Add Image">
             <ImageIcon size={20} />
           </Button>
           <Button variant="icon" size="icon" onClick={() => onAddItem('text')} className="rounded-full" title="Add Text">
             <Type size={20} />
           </Button>
           <Button variant="icon" size="icon" onClick={() => onAddItem('map')} className="rounded-full" title="Add Location">
             <MapPin size={20} />
           </Button>
           <Button variant="icon" size="icon" onClick={() => onAddItem('social')} className="rounded-full" title="Add Social">
             <Github size={20} />
           </Button>
        </div>

        <div className="w-px h-8 bg-gray-200 mx-1"></div>

        {/* View Toggle */}
         <div className="flex items-center gap-1 px-2">
           <Button variant="default" size="icon" className="rounded-full bg-black shadow-md">
             <Monitor size={20} />
           </Button>
            <Button variant="icon" size="icon" className="rounded-full text-gray-400">
             <Smartphone size={20} />
           </Button>
         </div>

      </div>
    </div>
  );
};

export default Toolbar;