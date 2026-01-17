'use client';

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
import { useRouter } from 'next/navigation';
import SortableItem from './SortableItem';
import BentoCard from './BentoCard';
import Toolbar from './Toolbar';
import type { EditorState } from './CardEditorPopover';
import { BentoItemData, ItemType, ItemSize, ViewMode, ViewLayout, PortfolioData } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { saveContentToGitHub } from '../lib/github';
import { logError } from '../lib/logger';

// Lazy load admin-only components to reduce initial bundle size
const CardEditorPopover = lazy(() => import('./CardEditorPopover'));
const ProfilePictureCropperModal = lazy(() => import('./ProfilePictureCropperModal'));

const generateId = () => Math.random().toString(36).substr(2, 9);

const getItemLayout = (item: BentoItemData, view: ViewMode): ViewLayout => {
    const layout = view === 'desktop' ? item.desktopLayout : item.mobileLayout;
    if (layout) return layout;
    return { size: item.size, order: 0 };
};

const getItemSize = (item: BentoItemData, view: ViewMode): ItemSize => {
    return getItemLayout(item, view).size;
};

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

interface PortfolioContentProps {
    initialData: PortfolioData | null;
    isAdmin?: boolean;
}

export function PortfolioContent({ initialData, isAdmin = false }: PortfolioContentProps) {
    const router = useRouter();
    const { isAuthenticated, isAdmin: authIsAdmin, logout, token } = useAuth();
    const canEdit = isAdmin && isAuthenticated && authIsAdmin;

    const [items, setItems] = useState<BentoItemData[]>(() => {
        if (initialData?.items) {
            return initialData.items.map((item, index) => migrateItem(item, index));
        }
        return [];
    });

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

    // Auto-detect viewport size for public view (non-admin)
    useEffect(() => {
        if (isAdmin) return;
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setCurrentView(isMobile ? 'mobile' : 'desktop');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isAdmin]);

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

    const handleDragOver = (_event: DragOverEvent) => { };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!canEdit || !over || active.id === over.id) return;

        const oldIndex = sortedItems.findIndex(item => item.id === active.id);
        const newIndex = sortedItems.findIndex(item => item.id === over.id);

        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
            const reordered = arrayMove(sortedItems, oldIndex, newIndex);
            const layoutKey = currentView === 'desktop' ? 'desktopLayout' : 'mobileLayout';

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

    const handleStartCreate = (type: ItemType, anchorRect: DOMRect) => {
        if (!canEdit) return;
        setEditorState({ mode: 'create', type, anchorRect });
    };

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

    const handleEditorSave = (data: Partial<BentoItemData>) => {
        if (!editorState) return;

        if (editorState.mode === 'create') {
            const size = data.size || '1x1';
            const newLayout: ViewLayout = { size, order: 0 };
            const newItem: BentoItemData = {
                id: generateId(),
                type: editorState.type,
                size,
                ...data,
                desktopLayout: newLayout,
                mobileLayout: { ...newLayout },
            } as BentoItemData;

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
            setItems(prev => prev.map(item =>
                item.id === editorState.cardId ? { ...item, ...data } : item
            ));
            setHasUnsavedChanges(true);
        }
        setEditorState(null);
    };

    const handleEditorCancel = () => setEditorState(null);

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

    const handleResize = (id: string, size: ItemSize) => {
        if (!canEdit) return;
        const layoutKey = currentView === 'desktop' ? 'desktopLayout' : 'mobileLayout';

        setItems(prev => prev.map(item => {
            if (item.id !== id) return item;
            const currentLayout = getItemLayout(item, currentView);
            return {
                ...item,
                size,
                [layoutKey]: { ...currentLayout, size },
            };
        }));
    };

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const activeItem = sortedItems.find(item => item.id === activeId) || null;

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white pb-32">
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
                                    if (!token) return;
                                    if (token.startsWith('test-token-')) {
                                        alert('Use GitHub account to save changes.');
                                        return;
                                    }
                                    setIsSaving(true);
                                    try {
                                        await saveContentToGitHub(token, items);
                                        setHasUnsavedChanges(false);
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
                                src={croppedProfilePicture || `/media/profile/profile-pic/IMG_5823.jpg`}
                                alt="Keith Vaz"
                                className="w-full h-full object-cover"
                            />
                            {canEdit && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera size={32} className="text-white" />
                                </div>
                            )}
                        </div>
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
                                e.target.value = '';
                            }}
                        />

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight w-full">
                            Keith Vaz <span className="inline-block hover:rotate-12 transition-transform cursor-default duration-500">👋</span>
                        </h1>

                        <div className="flex flex-col gap-2 text-gray-500 text-base font-normal mb-8">
                            <div className="flex items-center gap-3">
                                <span className="text-base">👨🏽‍💻</span>
                                <span>Design Systems Designer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-base">📍</span>
                                <span>Bangalore</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-base">🏡</span>
                                <span>Goa</span>
                            </div>
                        </div>
                    </div>
                </aside>

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
                            <div className="bento-grid">
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

            {editorState && (
                <Suspense fallback={null}>
                    <CardEditorPopover
                        state={editorState}
                        onSave={handleEditorSave}
                        onCancel={handleEditorCancel}
                    />
                </Suspense>
            )}

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
