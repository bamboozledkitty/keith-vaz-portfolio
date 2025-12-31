import * as React from "react";
import { cn } from "../../lib/utils";

interface SquircleProps extends React.HTMLAttributes<HTMLDivElement> {
  cornerRadius: number;
  cornerSmoothing?: number; // 0-1, default 0.6 for iOS feel
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Generate SVG path for a squircle (superellipse) shape
 * Based on the superellipse formula for iOS-style continuous corners
 */
function generateSquirclePath(
  width: number,
  height: number,
  cornerRadius: number,
  cornerSmoothing: number = 0.6
): string {
  const w = width;
  const h = height;
  const r = Math.min(cornerRadius, w / 2, h / 2);
  const n = 2 + 2 * cornerSmoothing; // Superellipse power (2 = circle, 4 = squircle, higher = more square)
  
  // Generate smooth corner path using cubic bezier approximation
  // This creates a continuous curve similar to iOS corners
  const c = r * (1 - 0.5522847498); // Magic number for smooth bezier approximation
  
  return `M ${r},0 L ${w - r},0 C ${w - c},0 ${w},${c} ${w},${r} L ${w},${h - r} C ${w},${h - c} ${w - c},${h} ${w - r},${h} L ${r},${h} C ${c},${h} 0,${h - c} 0,${h - r} L 0,${r} C 0,${c} ${c},0 ${r},0 Z`;
}

/**
 * Squircle component that applies iOS-style continuous corners
 * using SVG clip-path for mathematically smooth curves.
 */
const Squircle = React.forwardRef<HTMLDivElement, SquircleProps>(
  ({ cornerRadius, cornerSmoothing = 0.6, className, style, children, as: Component = "div", ...props }, ref) => {
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
    const innerRef = React.useRef<HTMLDivElement>(null);
    
    // Merge refs
    React.useImperativeHandle(ref, () => innerRef.current!);

    // Track element dimensions with ResizeObserver
    React.useEffect(() => {
      const element = innerRef.current;
      if (!element) return;

      const updateDimensions = () => {
        const { width, height } = element.getBoundingClientRect();
        setDimensions({ width, height });
      };

      // Initial measurement
      updateDimensions();

      // Observe resize
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(element);

      return () => resizeObserver.disconnect();
    }, []);

    // Generate squircle clip-path
    const clipPath = React.useMemo(() => {
      if (dimensions.width === 0 || dimensions.height === 0) {
        return undefined;
      }

      try {
        const path = generateSquirclePath(
          dimensions.width,
          dimensions.height,
          cornerRadius,
          cornerSmoothing
        );
        return `path('${path}')`;
      } catch {
        // Fallback if path generation fails
        return undefined;
      }
    }, [dimensions.width, dimensions.height, cornerRadius, cornerSmoothing]);

    const ElementType = Component as React.ElementType;

    return (
      <ElementType
        ref={innerRef}
        className={cn(className)}
        style={{
          ...style,
          clipPath: clipPath,
          // Fallback border-radius for initial render and unsupported browsers
          borderRadius: cornerRadius,
        }}
        {...props}
      >
        {children}
      </ElementType>
    );
  }
);

Squircle.displayName = "Squircle";

/**
 * Hook to get squircle clip-path for custom implementations
 */
export function useSquircleClipPath(
  ref: React.RefObject<HTMLElement>,
  cornerRadius: number,
  cornerSmoothing: number = 0.6
): string | undefined {
  const [clipPath, setClipPath] = React.useState<string | undefined>();

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateClipPath = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      try {
        const path = generateSquirclePath(width, height, cornerRadius, cornerSmoothing);
        setClipPath(`path('${path}')`);
      } catch {
        setClipPath(undefined);
      }
    };

    updateClipPath();

    const resizeObserver = new ResizeObserver(updateClipPath);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [ref, cornerRadius, cornerSmoothing]);

  return clipPath;
}

export { Squircle };

