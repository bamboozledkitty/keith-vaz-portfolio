import { ReactNode } from "react";

export type ItemSize = '1x1' | '1x0.5' | '2x1' | '1x2' | '2x2';

export type ItemType = 'social' | 'link' | 'image' | 'text' | 'map';

export type CardVariant = 'default' | 'case-study' | 'app' | 'article' | 'media' | 'social-card';

export interface BentoItemData {
  id: string;
  type: ItemType;
  size: ItemSize;
  title?: string;
  subtitle?: string;
  content?: string; // For text or image URL
  url?: string;
  icon?: string; // For social icons
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: CardVariant;
}

export interface Section {
  id: string;
  title: string;
  items: BentoItemData[];
}

export interface DragItem {
  id: string;
  index: number;
}