import React, { useState, useMemo, useEffect, useRef, Suspense, lazy } from 'react';
import { LogOut, Loader2, AlertCircle, Save, Camera } from 'lucide-react';
import {
  DndContext,
  closestCenter,
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
import { useNavigate } from 'react-router-dom';
import SortableItem from './components/SortableItem';
import BentoCard from './components/BentoCard';
import Toolbar from './components/Toolbar';
import type { EditorState } from './components/CardEditorPopover';
import { BentoItemData, ItemType, ItemSize, ViewMode, ViewLayout } from './types';
import { useAuth } from './contexts/AuthContext';
import { Button } from './components/ui/button';
import { cn, hideInitialLoader } from './lib/utils';
import { saveContentToGitHub } from './lib/github';
import { logError } from './lib/logger';

// Lazy load admin-only components to reduce initial bundle size
const CardEditorPopover = lazy(() => import('./components/CardEditorPopover'));
const ProfilePictureCropperModal = lazy(() => import('./components/ProfilePictureCropperModal'));

// Content data URL
const CONTENT_URL = `${import.meta.env.BASE_URL}content/data.json`;

const generateId = () => Math.random().toString(36).substr(2, 9);

// Helper to get view-specific layout or fallback to legacy size
const getItemLayout = (item: BentoItemData, view: ViewMode): ViewLayout => {
  const layout = view === 'desktop' ? item.desktopLayout : item.mobileLayout;
  if (layout) return layout;
  // Fallback for legacy items without view-specific layouts
  return { size: item.size, order: 0 };
};

// Helper to get size for current view
const getItemSize = (item: BentoItemData, view: ViewMode): ItemSize => {
  return getItemLayout(item, view).size;
};

// Migrate legacy item to have view-specific layouts
const migrateItem = (item: BentoItemData, index: number): BentoItemData => {
  if (item.desktopLayout && item.mobileLayout) return item;
  return {
    ...item,
    desktopLayout: item.desktopLayout || { size: item.size, order: index },
    mobileLayout: item.mobileLayout || { size: item.size, order: index },
  };
};

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
      dragOverlay: {
        rotate: '0deg',
        scale: '1',
      },
    },
  }),
};

interface AppProps {
  isAdmin?: boolean;
}

function App({ isAdmin = false }: AppProps) {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin: authIsAdmin, logout, token } = useAuth();
  const canEdit = isAdmin && isAuthenticated && authIsAdmin;

  // Content loading states
  const [items, setItems] = useState<BentoItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const [currentView, setCurrentView] = useState<ViewMode>('desktop');

  // Profile picture editing state
  const profileInputRef = useRef<HTMLInputElement>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);
  const [showProfileCropper, setShowProfileCropper] = useState(false);
  const [croppedProfilePicture, setCroppedProfilePicture] = useState<string | null>(null);

  // Hide inline loader when content is loaded
  useEffect(() => {
    if (!isLoading) {
      hideInitialLoader();
    }
  }, [isLoading]);

  // Helper to process loaded data
  const processLoadedData = (data: { items?: BentoItemData[] }) => {
    const migratedItems = (data.items || []).map((item: BentoItemData, index: number) =>
      migrateItem(item, index)
    );
    setItems(migratedItems);
  };

  // Load content from JSON on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);
        
        const response = await fetch(CONTENT_URL);
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        
        const data = await response.json();
        processLoadedData(data);
      } catch (error) {
        logError('Error loading content:', error);
        setLoadError(error instanceof Error ? error.message : 'Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  // Auto-detect viewport size for public view (non-admin)
  useEffect(() => {
    // Only auto-detect on public page (non-admin)
    // Admin page uses manual toggle via toolbar
    if (isAdmin) return;

    const handleResize = () => {
      // Use 768px as breakpoint (matching Tailwind's md)
      const isMobile = window.innerWidth < 768;
      setCurrentView(isMobile ? 'mobile' : 'desktop');
    };

    // Set initial value
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isAdmin]);

  // Sort items by current view's order
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const orderA = getItemLayout(a, currentView).order;
      const orderB = getItemLayout(b, currentView).order;
      return orderA - orderB;
    });
  }, [items, currentView]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    if (!canEdit) return;
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (_event: DragOverEvent) => {
    // No-op: reordering handled in handleDragEnd to prevent state thrashing
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!canEdit || !over || active.id === over.id) return;

    // Find indices in sorted items (current view's order)
    const oldIndex = sortedItems.findIndex(item => item.id === active.id);
    const newIndex = sortedItems.findIndex(item => item.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
      // Reorder and update order values for current view only
      const reordered = arrayMove(sortedItems, oldIndex, newIndex);
      const layoutKey = currentView === 'desktop' ? 'desktopLayout' : 'mobileLayout';

      // Update order for all items in current view
      const updatedItems = items.map(item => {
        const newOrder = reordered.findIndex(r => r.id === item.id);
        const currentLayout = getItemLayout(item, currentView);
        return {
          ...item,
          [layoutKey]: { ...currentLayout, order: newOrder },
        };
      });

      setItems(updatedItems);
      setHasUnsavedChanges(true);
    }
  };

  // Open popover for creating a new card
  const handleStartCreate = (type: ItemType, anchorRect: DOMRect) => {
    if (!canEdit) return;
    setEditorState({
      mode: 'create',
      type,
      anchorRect,
    });
  };

  // Open popover for editing an existing card
  const handleStartEdit = (id: string, anchorRect: DOMRect) => {
    if (!canEdit) return;
    const item = items.find(i => i.id === id);
    if (!item) return;
    setEditorState({
      mode: 'edit',
      type: item.type,
      cardId: id,
      anchorRect,
      existingData: item,
    });
  };

  // Handle save from popover
  const handleEditorSave = (data: Partial<BentoItemData>) => {
    if (!editorState) return;

    if (editorState.mode === 'create') {
      // Create new item with both view layouts
      const size = data.size || '1x1';
      const newLayout: ViewLayout = { size, order: 0 };
      const newItem: BentoItemData = {
        id: generateId(),
        type: editorState.type,
        size, // Keep for backwards compatibility
        ...data,
        desktopLayout: newLayout,
        mobileLayout: { ...newLayout }, // Copy for mobile
      } as BentoItemData;

      // Shift existing items' order by 1 in both views
      const updatedItems = items.map(item => ({
        ...item,
        desktopLayout: item.desktopLayout
          ? { ...item.desktopLayout, order: item.desktopLayout.order + 1 }
          : { size: item.size, order: 1 },
        mobileLayout: item.mobileLayout
          ? { ...item.mobileLayout, order: item.mobileLayout.order + 1 }
          : { size: item.size, order: 1 },
      }));

      setItems([newItem, ...updatedItems]);
      setHasUnsavedChanges(true);
    } else if (editorState.cardId) {
      // Update existing item - content only (layout stays the same)
      setItems(prev => prev.map(item =>
        item.id === editorState.cardId ? { ...item, ...data } : item
      ));
      setHasUnsavedChanges(true);
    }

    setEditorState(null);
  };

  // Handle cancel from popover
  const handleEditorCancel = () => {
    setEditorState(null);
  };

  const handleDeleteItem = (id: string) => {
    if (!canEdit) return;
    setItems(prev => prev.filter(item => item.id !== id));
    setHasUnsavedChanges(true);
  };

  const handleUpdateItem = (id: string, updates: Partial<BentoItemData>) => {
    if (!canEdit) return;
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, ...updates } : item
    ));
    setHasUnsavedChanges(true);
  };

  // Handle resize for current view only
  const handleResize = (id: string, size: ItemSize) => {
    if (!canEdit) return;
    const layoutKey = currentView === 'desktop' ? 'desktopLayout' : 'mobileLayout';

    setItems(prev => prev.map(item => {
      if (item.id !== id) return item;
      const currentLayout = getItemLayout(item, currentView);
      return {
        ...item,
        size, // Also update legacy size for backwards compatibility
        [layoutKey]: { ...currentLayout, size },
      };
    }));
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const activeItem = sortedItems.find(item => item.id === activeId) || null;

  // Return null while loading - inline HTML loader handles the visual
  if (isLoading) {
    return null;
  }

  // Full-screen error state
  if (loadError) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <AlertCircle size={32} className="text-red-500 mb-4" />
        <p className="text-lg font-medium text-red-500">Failed to load content</p>
        <p className="text-sm text-gray-500 mt-2">{loadError}</p>
        <Button
          onClick={() => window.location.reload()}
          variant="secondary"
          className="mt-4"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white pb-32">
      {/* Admin Header */}
      {canEdit && (
        <div className="bg-black text-white py-3 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className={cn(
              "w-2 h-2 rounded-full",
              hasUnsavedChanges ? "bg-yellow-400" : "bg-green-400 animate-pulse"
            )}></div>
            Admin Mode {hasUnsavedChanges ? '- Unsaved Changes' : '- Editing Enabled'}
          </div>
          <div className="flex items-center gap-2">
            {hasUnsavedChanges && (
              <Button
                onClick={async () => {
                  if (!token) {
                    logError('No auth token available');
                    return;
                  }
                  
                  if (token.startsWith('test-token-')) {
                    alert('You are currently using a Test Account. Changes cannot be saved to GitHub in test mode. Please log out and sign in with your GitHub account to save changes.');
                    return;
                  }

                  setIsSaving(true);
                  try {
                    await saveContentToGitHub(token, items);
                    setHasUnsavedChanges(false);
                  } catch (error) {
                    logError('Failed to save:', error);
                    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                    alert(`Failed to save changes: ${errorMessage}\n\nPlease check your token permissions or try logging in again.`);
                  } finally {
                    setIsSaving(false);
                  }
                }}
                variant="secondary"
                size="sm"
                disabled={isSaving}
                className="bg-green-500 hover:bg-green-600 text-white border-green-600"
              >
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            )}
            <Button
              onClick={handleLogout}
              variant="secondary"
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      )}

      <div className="layout-container">

        {/* Left Sidebar - Profile & Stats (ABSOLUTE left on desktop) */}
        <aside className="about-section">
          <div className="flex flex-col items-start text-left w-full">
            <div
              className={cn(
                "w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden mb-8 transition-transform duration-500 ease-out relative group",
                canEdit && "hover:scale-[1.02] cursor-pointer hover:ring-4 hover:ring-black/20"
              )}
              onClick={canEdit ? () => profileInputRef.current?.click() : undefined}
            >
              <img
                src={croppedProfilePicture || `${import.meta.env.BASE_URL}media/profile/profile-pic/IMG_5823.jpg`}
                alt="Keith Vaz"
                className="w-full h-full object-cover"
              />
              {canEdit && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={32} className="text-white" />
                </div>
              )}
            </div>
            {/* Hidden file input for profile picture */}
            <input
              type="file"
              ref={profileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setProfileImageSrc(reader.result as string);
                    setShowProfileCropper(true);
                  };
                  reader.readAsDataURL(file);
                }
                // Reset input so same file can be selected again
                e.target.value = '';
              }}
            />

            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight w-full">
              Keith Vaz <span className="inline-block hover:rotate-12 transition-transform cursor-default duration-500">👋</span>
            </h1>

            <div className="flex flex-col gap-2 text-gray-500 text-xl font-normal mb-8">
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

        {/* Right Section - Bento Grid (aligned to RIGHT on desktop) */}
        <main className="grid-section min-h-[60vh]">
          <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={sortedItems.map(item => item.id)}
                strategy={rectSortingStrategy}
              >
                <div
                  className="bento-grid"
                >
                  {sortedItems.map((item) => (
                    <SortableItem
                      key={item.id}
                      item={item}
                      currentView={currentView}
                      isAdminRoute={isAdmin}
                      onDelete={handleDeleteItem}
                      onResize={handleResize}
                      onUpdate={handleUpdateItem}
                      onStartEdit={handleStartEdit}
                    />
                  ))}
                </div>
              </SortableContext>

              <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
                {activeItem ? (
                  <div className="w-full h-full cursor-grabbing">
                    <BentoCard item={activeItem} currentView={currentView} isAdminRoute={isAdmin} isOverlay isDragging />
                  </div>
                ) : null}
              </DragOverlay>
            </DndContext>
        </main>
      </div>

      {canEdit && (
        <Toolbar
          onStartCreate={handleStartCreate}
          currentView={currentView}
          onViewChange={setCurrentView}
        />
      )}

      {/* Card Editor Popover - Lazy loaded */}
      {editorState && (
        <Suspense fallback={null}>
          <CardEditorPopover
            state={editorState}
            onSave={handleEditorSave}
            onCancel={handleEditorCancel}
          />
        </Suspense>
      )}

      {/* Profile Picture Cropper Modal - Lazy loaded */}
      {showProfileCropper && profileImageSrc && (
        <Suspense fallback={null}>
          <ProfilePictureCropperModal
            imageSrc={profileImageSrc}
            onSave={(croppedImage) => {
              setCroppedProfilePicture(croppedImage);
              setShowProfileCropper(false);
              setProfileImageSrc(null);
              setHasUnsavedChanges(true);
            }}
            onCancel={() => {
              setShowProfileCropper(false);
              setProfileImageSrc(null);
            }}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
