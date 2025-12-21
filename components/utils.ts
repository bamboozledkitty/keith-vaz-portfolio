import { cn } from '../lib/utils';

export { cn };

export const getSizeClasses = (size: string) => {
  // Row-span based layout for proper bento grid stacking
  // Base row height is calculated in CSS to be 1/2 of column width
  // So 1x1 (square) = 2 rows, 1x2 (tall) = 4 rows, etc.
  switch (size) {
    case '1x1': 
      return 'col-span-1 row-span-2'; 
    case '1x0.5':
      return 'col-span-2 row-span-1'; 
    case '2x1': 
      return 'col-span-2 row-span-2'; 
    case '1x2':
      return 'col-span-1 row-span-4'; 
    case '2x2':
      return 'col-span-2 row-span-4';
    case 'full':
      return 'col-span-full row-span-1'; 
    default: 
      return 'col-span-1 row-span-2';
  }
};