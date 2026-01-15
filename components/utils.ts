import { cn } from '../lib/utils';

export { cn };

export const getSizeClasses = (size: string) => {
  // Fixed-width flex-based layout for wrapping bento grid
  // Card widths are fixed so they wrap rather than shrink
  // Uses CSS custom properties for responsive sizing: --card-unit (150px desktop, 140px mobile)
  // Height is determined by aspect ratio via data-item-size attribute in CSS
  switch (size) {
    case '1x1':
      // Square: 1 unit wide
      return 'bento-card bento-card-1x1';
    case '1x0.5':
      // Wide half-height: 2 units wide
      return 'bento-card bento-card-2x1 bento-card-half-height';
    case '2x1':
      // Wide: 2 units wide
      return 'bento-card bento-card-2x1';
    case '1x2':
      // Tall: 1 unit wide, double height
      return 'bento-card bento-card-1x2';
    case '2x2':
      // Large square: 2 units wide
      return 'bento-card bento-card-2x2';
    case 'full':
      // Full width
      return 'bento-card bento-card-full';
    default:
      return 'bento-card bento-card-1x1';
  }
};