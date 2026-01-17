import { ReactNode } from "react";

export type ItemSize = '1x1' | '1x0.5' | '2x1' | '1x2' | '2x2' | 'full';

export type ItemType = 'link' | 'image' | 'text' | 'map' | 'heading';

export type CardVariant = 'default' | 'case-study' | 'app' | 'article' | 'media';

export type MediaType = 'image' | 'video';

export type TextAlign = 'left' | 'center' | 'right';
export type TextVAlign = 'top' | 'middle' | 'bottom';
export type TextSize = 'small' | 'medium' | 'large';

// View mode for responsive editing
export type ViewMode = 'desktop' | 'mobile';

// View-specific layout properties
export interface ViewLayout {
  size: ItemSize;
  order: number;
}

export interface BentoItemData {
  id: string;
  type: ItemType;
  // Legacy size field - kept for backwards compatibility
  size: ItemSize;
  // View-specific layouts
  desktopLayout?: ViewLayout;
  mobileLayout?: ViewLayout;
  title?: string;
  subtitle?: string;
  content?: string; // For text or image URL
  url?: string;
  icon?: string; // For social icons
  image?: string; // Image or video URL for media cards
  mediaType?: MediaType; // Auto-detected from file extension
  caption?: string; // Caption for media cards (shown on hover)
  backgroundColor?: string;
  textColor?: string;
  variant?: CardVariant;
  // Text card specific properties
  textAlign?: TextAlign;
  textVAlign?: TextVAlign;
  textSize?: TextSize;
}

// Legacy Section type - kept for migration, prefer flat items array
export interface Section {
  id: string;
  title: string;
  items: BentoItemData[];
}

export interface DragItem {
  id: string;
  index: number;
}