import React, { useState, useEffect } from 'react';
import { MapPin, Eye, LayoutGrid } from 'lucide-react';
import {
  DndContext,
  closestCorners,
  pointerWithin,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
  defaultDropAnimationSideEffects,
  DropAnimation,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './components/SortableItem';
import BentoCard from './components/BentoCard';
import Toolbar from './components/Toolbar';
import { INITIAL_SECTIONS } from './constants';
import { BentoItemData, ItemType, Section } from './types';

const generateId = () => Math.random().toString(36).substr(2, 9);

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
    },
  }),
};

function App() {
  const [sections, setSections] = useState<Section[]>(INITIAL_SECTIONS);
  const [activeId, setActiveId] = useState<string | null>(null);

  // #region agent log
  useEffect(() => {
    const imageSrc = '/image-assets/profile-pic/IMG_5823.jpg';
    fetch('http://127.0.0.1:7243/ingest/202e2174-18be-4cb4-92d9-b8f0e6bce2ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:42',message:'App component mounted - checking image path configuration',data:{imageSrc,basePath:import.meta.env.BASE_URL,currentUrl:window.location.href,expectedUrl:import.meta.env.BASE_URL + 'image-assets/profile-pic/IMG_5823.jpg'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }, []);
  // #endregion

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeSectionIndex = sections.findIndex(section => section.items.find(item => item.id === active.id));
    const overSectionIndex = sections.findIndex(section => section.items.find(item => item.id === over.id));

    if (activeSectionIndex !== -1 && activeSectionIndex === overSectionIndex) {
      setSections((prevSections) => {
        const newSections = prevSections.map((s, idx) => 
          idx === activeSectionIndex 
            ? {
                ...s,
                items: (() => {
                  const oldIndex = s.items.findIndex((item) => item.id === active.id);
                  const newIndex = s.items.findIndex((item) => item.id === over.id);
                  
                  if (oldIndex !== newIndex) {
                    return arrayMove(s.items, oldIndex, newIndex);
                  }
                  return s.items;
                })()
              }
            : s
        );
        return newSections;
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
  };

  const handleAddItem = (type: ItemType) => {
    const newItem: BentoItemData = {
      id: generateId(),
      type,
      size: '1x1',
      title: 'New Content',
      subtitle: 'Add a subtitle',
      image: undefined,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    };
    
    setSections(prev => {
      const newSections = [...prev];
      if (newSections.length > 0) newSections[0].items = [newItem, ...newSections[0].items];
      return newSections;
    });
  };

  const handleDeleteItem = (id: string) => {
    setSections(prev => prev.map(section => ({
      ...section,
      items: section.items.filter(item => item.id !== id)
    })));
  };

  const handleUpdateItem = (id: string, updates: Partial<BentoItemData>) => {
    setSections(prev => prev.map(section => ({
      ...section,
      items: section.items.map(item => item.id === id ? { ...item, ...updates } : item)
    })));
  };

  const findActiveItem = () => {
    for (const section of sections) {
      const item = section.items.find(i => i.id === activeId);
      if (item) return item;
    }
    return null;
  };

  const activeItem = findActiveItem();

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-gray-900 selection:bg-black selection:text-white pb-32">
      
      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto p-6 md:p-12 lg:p-20 gap-12 lg:gap-24 items-start">
        
        {/* Left Sidebar - Profile & Stats */}
        <aside className="w-full lg:w-[340px] lg:sticky lg:top-20 shrink-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[8px] border-white mb-10 transition-transform hover:scale-[1.02] cursor-pointer duration-500 ease-out">
              {/* #region agent log */}
              <img 
                src="/image-assets/profile-pic/IMG_5823.jpg" 
                alt="Keith Vaz" 
                className="w-full h-full object-cover"
                onLoad={() => {
                  fetch('http://127.0.0.1:7243/ingest/202e2174-18be-4cb4-92d9-b8f0e6bce2ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:140',message:'Profile image loaded successfully',data:{src:'/image-assets/profile-pic/IMG_5823.jpg',actualUrl:window.location.href + 'image-assets/profile-pic/IMG_5823.jpg',basePath:import.meta.env.BASE_URL},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
                }}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  fetch('http://127.0.0.1:7243/ingest/202e2174-18be-4cb4-92d9-b8f0e6bce2ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:140',message:'Profile image failed to load',data:{src:img.src,currentUrl:window.location.href,basePath:import.meta.env.BASE_URL,expectedUrl:import.meta.env.BASE_URL + 'image-assets/profile-pic/IMG_5823.jpg'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
                }}
              />
              {/* #endregion */}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
              Keith Vaz <span className="inline-block hover:rotate-12 transition-transform cursor-default duration-500">👋</span>
            </h1>
            
            <div className="flex flex-col gap-4 text-gray-500 text-lg font-medium mb-10">
              <div className="flex items-center gap-3">
                 <span className="text-xl">👨🏽‍💻</span>
                 <span>Design Systems Designer</span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-xl">📍</span>
                 <span>Bangalore</span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-xl">🏡</span>
                 <span>Goa</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Section - Grid Content */}
        <main className="flex-1 w-full">
          <DndContext 
            sensors={sensors} 
            collisionDetection={closestCorners} 
            onDragStart={handleDragStart} 
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <div className="flex flex-col gap-24">
              {sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-2xl font-black mb-10 text-gray-900 tracking-tight ml-2 opacity-90">{section.title}</h2>
                  <SortableContext items={section.items.map(i => i.id)} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 grid-flow-dense">
                      {section.items.map((item) => (
                        <SortableItem 
                          key={item.id} 
                          item={item} 
                          onDelete={handleDeleteItem}
                          onResize={(id, size) => handleUpdateItem(id, { size })}
                          onUpdate={handleUpdateItem}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </div>
              ))}
            </div>
            <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
              {activeItem ? (
                <div className="w-full h-full scale-105 cursor-grabbing">
                  <BentoCard item={activeItem} isOverlay isDragging />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </main>
      </div>

      <Toolbar onAddItem={handleAddItem} />
    </div>
  );
}

export default App;