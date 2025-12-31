import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BentoCard from './BentoCard';
import { BentoItemData, ItemSize, ViewMode } from '../types';
import { getSizeClasses, cn } from './utils';
import { useAuth } from '../contexts/AuthContext';
import { Squircle } from './ui/squircle';

// Helper to get size for current view
const getViewSize = (item: BentoItemData, view: ViewMode): ItemSize => {
  const layout = view === 'desktop' ? item.desktopLayout : item.mobileLayout;
  return layout?.size || item.size;
};

interface SortableItemProps {
  item: BentoItemData;
  currentView: ViewMode;
  onDelete: (id: string) => void;
  onResize: (id: string, size: ItemSize) => void;
  onUpdate: (id: string, updates: Partial<BentoItemData>) => void;
  onStartEdit?: (id: string, anchorRect: DOMRect) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ item, currentView, onDelete, onResize, onUpdate, onStartEdit }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const canEdit = isAuthenticated && isAdmin;
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, data: { item }, disabled: !canEdit });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: transition || 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
    zIndex: isDragging ? 100 : 'auto',
  };

  // Get size for current view
  const currentSize = getViewSize(item, currentView);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(canEdit ? attributes : {})}
      {...(canEdit ? listeners : {})}
      data-item-size={currentSize}
      data-item-id={item.id}
      className={cn(
        getSizeClasses(currentSize), 
        "touch-none relative hover:z-50 h-full w-full"
      )} 
    >
      {/* Drop Zone Placeholder */}
      <Squircle cornerRadius={20} className={cn(
        "absolute inset-0 bg-gray-200/50 border-2 border-dashed border-gray-300/50 transition-opacity duration-300",
        isDragging ? "opacity-100" : "opacity-0 pointer-events-none"
      )} />

      {/* Actual Content */}
      <div className={cn(
        "h-full w-full transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", 
        isDragging ? "opacity-0" : "opacity-100"
      )}>
         <BentoCard 
           item={item} 
           currentView={currentView}
           onDelete={onDelete} 
           onResize={onResize} 
           onUpdate={onUpdate}
           onStartEdit={onStartEdit}
         />
      </div>
    </div>
  );
};

export default SortableItem;