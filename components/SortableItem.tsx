import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BentoCard from './BentoCard';
import { BentoItemData, ItemSize } from '../types';
import { getSizeClasses, cn } from './utils';
import { useAuth } from '../contexts/AuthContext';

interface SortableItemProps {
  item: BentoItemData;
  onDelete: (id: string) => void;
  onResize: (id: string, size: ItemSize) => void;
  onUpdate: (id: string, updates: Partial<BentoItemData>) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ item, onDelete, onResize, onUpdate }) => {
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

  const sizeClasses = getSizeClasses(item.size);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(canEdit ? attributes : {})}
      {...(canEdit ? listeners : {})}
      className={cn(
        getSizeClasses(item.size), 
        "touch-none relative hover:z-50 h-full w-full"
      )} 
    >
      <div className={cn(
        "h-full w-full transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", 
        isDragging ? "opacity-0" : "opacity-100"
      )}>
         <BentoCard 
           item={item} 
           onDelete={onDelete} 
           onResize={onResize} 
           onUpdate={onUpdate}
         />
      </div>
    </div>
  );
};

export default SortableItem;