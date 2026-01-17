import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Resolves media URLs for proper display on GitHub Pages
 * Local paths (/media/...) need BASE_URL prepended
 * External URLs (https://...) are returned as-is
 */
export function resolveMediaUrl(url?: string): string | undefined {
  if (!url) return undefined;

  // External URLs - return as-is
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }

  // Local paths starting with / need BASE_URL
  if (url.startsWith('/')) {
    const baseUrl = '/';
    // Remove leading slash from url since BASE_URL ends with /
    return `${baseUrl}${url.slice(1)}`;
  }

  return url;
}