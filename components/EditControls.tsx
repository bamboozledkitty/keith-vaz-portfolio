import React from 'react';
import { Trash2 } from 'lucide-react';
import { ItemSize } from '../types';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Squircle } from './ui/squircle';

interface EditControlsProps {
  onDelete: () => void;
  onResize?: (size: ItemSize) => void;
  currentSize: ItemSize;
  isHeading?: boolean;
}

const EditControls: React.FC<EditControlsProps> = ({ onDelete, onResize, currentSize, isHeading }) => {
  return (
    <>
      {/* Delete Button - Top Left */}
      <div 
        className="absolute -top-3 -left-3 z-[60] animate-in fade-in zoom-in-90 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Button 
          variant="destructive"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="rounded-[4px] shadow-xl bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 hover:scale-110 transition-all duration-200 w-10 h-10 border border-gray-200"
        >
          <Trash2 size={18} />
        </Button>
      </div>

      {/* Size Variant Bar - Bottom Center */}
      {!isHeading && onResize && (
      <div 
        className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-bottom-3 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bridge to prevent mouseleave when moving from card to controls */}
        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent pointer-events-auto" />
        
        <Squircle cornerRadius={10} className="flex items-center bg-black p-1.5 shadow-2xl border border-white/10 gap-0.5">
        {/* 1. Small Square (1x1) */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onResize('1x1'); }}
          className={cn(
            "w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white",
            currentSize === '1x1' && "bg-white text-black scale-110 hover:bg-white"
          )}
          title="Square (1x1)"
        >
          <div className="w-4 h-4 border-2 border-current rounded-[2px]" />
        </Button>
        
        {/* 2. Narrow Rectangle (1x0.5) */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onResize('1x0.5'); }}
          className={cn(
            "w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white",
            currentSize === '1x0.5' && "bg-white text-black scale-110 hover:bg-white"
          )}
          title="Narrow (1x0.5)"
        >
          <div className="w-4 h-2.5 border-2 border-current rounded-[1px]" />
        </Button>

        {/* 3. Wide Rectangle (2x1) */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onResize('2x1'); }}
          className={cn(
            "w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white",
            currentSize === '2x1' && "bg-white text-black scale-110 hover:bg-white"
          )}
          title="Wide Rectangle (2x1)"
        >
          <div className="w-6 h-4 border-2 border-current rounded-[2px] flex items-center justify-end pr-0.5">
            <div className="w-2 h-3 bg-current rounded-[1px] opacity-60" />
          </div>
        </Button>

        {/* 4. Vertical Rectangle (1x2) */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onResize('1x2'); }}
          className={cn(
            "w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white",
            currentSize === '1x2' && "bg-white text-black scale-110 hover:bg-white"
          )}
          title="Vertical Rectangle (1x2)"
        >
          <div className="w-3 h-5.5 border-2 border-current rounded-[2px] flex flex-col items-center justify-end pb-0.5">
            <div className="w-2 h-2.5 bg-current rounded-[1px] opacity-60" />
          </div>
        </Button>

        {/* 5. Large Square (2x2) */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); onResize('2x2'); }}
          className={cn(
            "w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white",
            currentSize === '2x2' && "bg-white text-black scale-110 hover:bg-white"
          )}
          title="Large Square (2x2)"
        >
          <div className="w-5.5 h-5.5 border-2 border-current rounded-[2px] flex items-center justify-center">
            <div className="w-3 h-3 bg-current rounded-[1px] opacity-60" />
          </div>
        </Button>
        </Squircle>
      </div>
      )}
    </>
  );
};

export default EditControls;