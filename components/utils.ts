import { cn } from '../lib/utils';

export { cn };

export const getSizeClasses = (size: string) => {
  switch (size) {
    case '1x1': 
      return 'col-span-1 aspect-square'; 
    case '1x0.5':
      return 'col-span-2 aspect-[4/1]'; 
    case '2x1': 
      return 'col-span-2 aspect-[2/1]'; 
    case '1x2':
      return 'col-span-1 aspect-[1/2]'; 
    case '2x2':
      return 'col-span-2 aspect-square'; 
    default: 
      return 'col-span-1 aspect-square';
  }
};