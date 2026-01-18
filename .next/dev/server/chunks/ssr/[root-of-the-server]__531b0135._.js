module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "resolveMediaUrl",
    ()=>resolveMediaUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function resolveMediaUrl(url) {
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
}),
"[project]/Projects/keith-vaz-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-button text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-black text-white hover:bg-black/90",
            destructive: "bg-red-500 text-white hover:bg-red-500/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            primary: "bg-[#4ade80] hover:bg-[#43c973] text-white shadow-sm active:scale-95",
            icon: "hover:bg-gray-100 text-gray-600"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 px-3",
            lg: "h-11 px-8",
            icon: "h-10 w-10",
            xl: "h-12 w-12"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/Projects/keith-vaz-portfolio/components/ui/squircle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Squircle",
    ()=>Squircle,
    "useSquircleClipPath",
    ()=>useSquircleClipPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
// Simple debounce utility
function debounce(fn, delay, options) {
    let timeoutId = null;
    let hasCalledLeading = false;
    return (...args)=>{
        if (options?.leading && !hasCalledLeading) {
            fn(...args);
            hasCalledLeading = true;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            if (!options?.leading) {
                fn(...args);
            }
            hasCalledLeading = false;
        }, delay);
    };
}
/**
 * Generate SVG path for a squircle (superellipse) shape
 * Based on the superellipse formula for iOS-style continuous corners
 */ function generateSquirclePath(width, height, cornerRadius, cornerSmoothing = 0.6) {
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
 */ const Squircle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ cornerRadius, cornerSmoothing = 0.6, className, style, children, as: Component = "div", ...props }, ref)=>{
    const [dimensions, setDimensions] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        width: 0,
        height: 0
    });
    const innerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    // Merge refs
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>innerRef.current);
    // Track element dimensions with ResizeObserver (debounced for performance)
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const element = innerRef.current;
        if (!element) return;
        const updateDimensions = ()=>{
            const { width, height } = element.getBoundingClientRect();
            setDimensions({
                width,
                height
            });
        };
        // Debounced version for resize events
        const debouncedUpdate = debounce(updateDimensions, 100, {
            leading: true
        });
        // Initial measurement (immediate)
        updateDimensions();
        // Observe resize with debounced callback
        const resizeObserver = new ResizeObserver(debouncedUpdate);
        resizeObserver.observe(element);
        return ()=>resizeObserver.disconnect();
    }, []);
    // Generate squircle clip-path
    const clipPath = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (dimensions.width === 0 || dimensions.height === 0) {
            return undefined;
        }
        try {
            const path = generateSquirclePath(dimensions.width, dimensions.height, cornerRadius, cornerSmoothing);
            return `path('${path}')`;
        } catch  {
            // Fallback if path generation fails
            return undefined;
        }
    }, [
        dimensions.width,
        dimensions.height,
        cornerRadius,
        cornerSmoothing
    ]);
    const ElementType = Component;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ElementType, {
        ref: innerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
        style: {
            ...style,
            clipPath: clipPath,
            // Fallback border-radius for initial render and unsupported browsers
            borderRadius: cornerRadius
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/squircle.tsx",
        lineNumber: 119,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Squircle.displayName = "Squircle";
function useSquircleClipPath(ref, cornerRadius, cornerSmoothing = 0.6) {
    const [clipPath, setClipPath] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const element = ref.current;
        if (!element) return;
        const updateClipPath = ()=>{
            const { width, height } = element.getBoundingClientRect();
            if (width === 0 || height === 0) return;
            try {
                const path = generateSquirclePath(width, height, cornerRadius, cornerSmoothing);
                setClipPath(`path('${path}')`);
            } catch  {
                setClipPath(undefined);
            }
        };
        // Debounced version for resize events
        const debouncedUpdate = debounce(updateClipPath, 100, {
            leading: true
        });
        // Initial measurement
        updateClipPath();
        const resizeObserver = new ResizeObserver(debouncedUpdate);
        resizeObserver.observe(element);
        return ()=>resizeObserver.disconnect();
    }, [
        ref,
        cornerRadius,
        cornerSmoothing
    ]);
    return clipPath;
}
;
}),
"[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/squircle.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const EditControls = ({ onDelete, onResize, currentSize, isHeading })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-3 -left-3 z-[60] animate-in fade-in zoom-in-90 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "destructive",
                    size: "icon",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onDelete();
                    },
                    className: "rounded-[4px] shadow-xl bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 hover:scale-110 transition-all duration-200 w-10 h-10 border border-gray-200",
                    "aria-label": "Delete card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isHeading && onResize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-14 left-1/2 -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-bottom-3 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-6 left-0 right-0 h-6 bg-transparent pointer-events-auto"
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                        cornerRadius: 10,
                        className: "flex items-center bg-black p-1.5 shadow-2xl border border-white/10 gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onResize('1x1');
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white", currentSize === '1x1' && "bg-white text-black scale-110 hover:bg-white"),
                                title: "Square (1x1)",
                                "aria-label": "Resize to small square (1x1)",
                                "aria-pressed": currentSize === '1x1',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border-2 border-current rounded-[2px]"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                    lineNumber: 57,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                lineNumber: 45,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onResize('1x0.5');
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white", currentSize === '1x0.5' && "bg-white text-black scale-110 hover:bg-white"),
                                title: "Narrow (1x0.5)",
                                "aria-label": "Resize to narrow strip (1x0.5)",
                                "aria-pressed": currentSize === '1x0.5',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-2.5 border-2 border-current rounded-[1px]"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                    lineNumber: 73,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                lineNumber: 61,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onResize('2x1');
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white", currentSize === '2x1' && "bg-white text-black scale-110 hover:bg-white"),
                                title: "Wide Rectangle (2x1)",
                                "aria-label": "Resize to wide rectangle (2x1)",
                                "aria-pressed": currentSize === '2x1',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-4 border-2 border-current rounded-[2px] flex items-center justify-end pr-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-3 bg-current rounded-[1px] opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                    lineNumber: 89,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                lineNumber: 77,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onResize('1x2');
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white", currentSize === '1x2' && "bg-white text-black scale-110 hover:bg-white"),
                                title: "Vertical Rectangle (1x2)",
                                "aria-label": "Resize to vertical rectangle (1x2)",
                                "aria-pressed": currentSize === '1x2',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-5.5 border-2 border-current rounded-[2px] flex flex-col items-center justify-end pb-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2.5 bg-current rounded-[1px] opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                lineNumber: 95,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onResize('2x2');
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-[4px] transition-all duration-300 hover:bg-white/10 text-white", currentSize === '2x2' && "bg-white text-black scale-110 hover:bg-white"),
                                title: "Large Square (2x2)",
                                "aria-label": "Resize to large square (2x2)",
                                "aria-pressed": currentSize === '2x2',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5.5 h-5.5 border-2 border-current rounded-[2px] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-current rounded-[1px] opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                                lineNumber: 113,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = EditControls;
}),
"[project]/Projects/keith-vaz-portfolio/components/LazyVideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
/**
 * LazyVideo component that only loads video content when it enters the viewport.
 * Uses IntersectionObserver for efficient visibility detection.
 */ const LazyVideo = ({ src, poster, className, ...props })=>{
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasLoaded, setHasLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, no need to observe anymore
                observer.disconnect();
            }
        }, {
            rootMargin: '100px',
            threshold: 0
        });
        observer.observe(video);
        return ()=>observer.disconnect();
    }, []);
    // When video becomes visible, set the src
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible && videoRef.current && !hasLoaded) {
            videoRef.current.src = src;
            setHasLoaded(true);
        }
    }, [
        isVisible,
        src,
        hasLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        ref: videoRef,
        poster: poster,
        preload: "none",
        className: className,
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/LazyVideo.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LazyVideo;
}),
"[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/squircle.tsx [app-ssr] (ecmascript)");
;
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-white text-gray-950 rounded-card border border-[#efefef] isolate", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
            cornerRadius: 24,
            cornerSmoothing: 0.6,
            className: "h-full w-full relative overflow-hidden",
            children: children
        }, void 0, false, {
            fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-gray-400", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/Projects/keith-vaz-portfolio/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-12 w-full rounded-input border border-[#efefef] bg-gray-50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/5 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/film.js [app-ssr] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$EditControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/EditControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$LazyVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/LazyVideo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/squircle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Text card alignment and size utilities
const getTextAlignClass = (align)=>{
    switch(align){
        case 'center':
            return 'text-center items-center';
        case 'right':
            return 'text-right items-end';
        default:
            return 'text-left items-start';
    }
};
const getTextVAlignClass = (vAlign)=>{
    switch(vAlign){
        case 'top':
            return 'justify-start';
        case 'bottom':
            return 'justify-end';
        default:
            return 'justify-center';
    }
};
const getTextSizeClass = (size)=>{
    switch(size){
        case 'small':
            return 'text-sm';
        case 'large':
            return 'text-xl';
        default:
            return 'text-base';
    }
};
// Video file extensions
const VIDEO_EXTENSIONS = [
    '.mp4',
    '.webm',
    '.mov',
    '.m4v',
    '.ogg'
];
// Detect if URL is a video
const isVideoUrl = (url)=>{
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return VIDEO_EXTENSIONS.some((ext)=>lowerUrl.includes(ext));
};
// Get media type from URL
const getMediaType = (url, explicitType)=>{
    if (explicitType) return explicitType;
    return isVideoUrl(url) ? 'video' : 'image';
};
// Caption character limit
const CAPTION_MAX_LENGTH = 50;
const SocialIcon = ({ name, className })=>{
    if (name?.startsWith('data:') || name?.startsWith('http') || name?.startsWith('/') || name?.includes('drive')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(name),
            alt: "icon",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("object-contain", className)
        }, void 0, false, {
            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
            lineNumber: 70,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
        className: className
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
        lineNumber: 72,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const BentoCard = ({ item, currentView = 'desktop', isAdminRoute = false, isOverlay, isDragging, onDelete, onResize, onUpdate, onStartEdit })=>{
    const { isAuthenticated, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // canEdit requires BOTH route context (isAdminRoute) AND auth state
    const canEdit = isAdminRoute && isAuthenticated && isAdmin;
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get size for current view
    const currentSize = (()=>{
        const layout = currentView === 'desktop' ? item.desktopLayout : item.mobileLayout;
        return layout?.size || item.size;
    })();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditingCaption, setIsEditingCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempCaption, setTempCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(item.caption || '');
    const captionInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync tempCaption with item prop when item changes externally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTempCaption(item.caption || '');
    }, [
        item.caption
    ]);
    // Focus caption input when entering edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEditingCaption && captionInputRef.current) {
            captionInputRef.current.focus();
        }
    }, [
        isEditingCaption
    ]);
    // Handle click - navigate to URL or open editor
    const handleCardClick = (e)=>{
        // Prevent navigation if clicking on edit controls, caption, or other interactive elements
        if (e.target.closest('.edit-controls, input, button')) {
            return;
        }
        // Cmd/Ctrl + Click always opens URL (even in admin mode) for testing links
        if ((e.metaKey || e.ctrlKey) && item.url) {
            e.preventDefault();
            window.open(item.url, '_blank', 'noopener,noreferrer');
            return;
        }
        // In edit mode, regular click opens the editor popover
        if (canEdit && onStartEdit && cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            onStartEdit(item.id, rect);
            return;
        }
        // Not in edit mode - navigate to URL if present
        if (item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };
    // Handle keyboard activation (Enter/Space)
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick(e);
        }
    };
    // Check if this is a media-only card (edge-to-edge media with caption)
    const isMediaCard = item.variant === 'media' || item.type === 'image';
    // Check if this is a text card
    const isTextCard = item.type === 'text';
    // Determine if card is interactive (needs tabIndex and role)
    // Text cards without URLs are not interactive in public view
    const isTextCardWithoutUrl = isTextCard && !item.url;
    const isInteractive = (!!item.url || canEdit) && !(isTextCardWithoutUrl && !canEdit);
    // Save caption inline
    const handleSaveCaption = ()=>{
        onUpdate?.(item.id, {
            caption: tempCaption
        });
        setIsEditingCaption(false);
    };
    // Cancel caption editing
    const handleCancelCaption = ()=>{
        setTempCaption(item.caption || '');
        setIsEditingCaption(false);
    };
    // Render edge-to-edge media (image or video) with hover caption
    const renderMediaCard = ()=>{
        const mediaUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(item.image);
        const mediaType = getMediaType(mediaUrl, item.mediaType);
        const hasMedia = !!mediaUrl;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full relative group overflow-hidden bg-gray-100 flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full",
                    children: hasMedia && mediaType === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$LazyVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: mediaUrl,
                        className: "absolute inset-0 w-full h-full object-cover",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : hasMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: mediaUrl,
                        alt: item.caption || item.title || 'Media',
                        loading: "lazy",
                        decoding: "async",
                        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                            size: 32,
                            className: "text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !isEditingCaption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-200", // Always show if caption exists, otherwise only on hover for edit mode
                    item.caption ? "opacity-100" : canEdit && isHovered ? "opacity-100" : "opacity-0"),
                    role: canEdit ? "button" : undefined,
                    "aria-label": canEdit ? "Edit caption" : undefined,
                    tabIndex: canEdit ? 0 : undefined,
                    onClick: canEdit ? (e)=>{
                        e.stopPropagation();
                        setIsEditingCaption(true);
                    } : undefined,
                    onKeyDown: canEdit ? (e)=>{
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsEditingCaption(true);
                        }
                    } : undefined,
                    children: item.caption ? // Caption exists - show it with dark background
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-sm rounded-lg max-w-full", canEdit && "cursor-text hover:bg-black/70 transition-colors"),
                        children: [
                            canEdit && isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                size: 16,
                                className: "text-white/70 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 225,
                                columnNumber: 42
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-white truncate",
                                children: item.caption
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 226,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 221,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : canEdit ? // No caption - show add prompt (only in edit mode on hover)
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm cursor-text hover:bg-white transition-colors max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                size: 16,
                                className: "text-gray-500 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 231,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 italic",
                                children: "Add caption..."
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 232,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 230,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : null
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                isEditingCaption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 p-3",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            ref: captionInputRef,
                            value: tempCaption,
                            onChange: (e)=>setTempCaption(e.target.value.slice(0, CAPTION_MAX_LENGTH)),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') {
                                    handleSaveCaption();
                                } else if (e.key === 'Escape') {
                                    handleCancelCaption();
                                }
                            },
                            onBlur: handleSaveCaption,
                            placeholder: "Add caption...",
                            maxLength: CAPTION_MAX_LENGTH,
                            className: "bg-white border-gray-300 shadow-lg text-sm h-10 max-w-[280px]"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xs text-white/70 mt-1 ml-1",
                            children: [
                                tempCaption.length,
                                "/",
                                CAPTION_MAX_LENGTH
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render text card with alignment options
    const renderTextCard = ()=>{
        const alignClass = getTextAlignClass(item.textAlign);
        const vAlignClass = getTextVAlignClass(item.textVAlign);
        const sizeClass = getTextSizeClass(item.textSize);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex flex-col p-4 bg-white", alignClass, vAlignClass),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium text-gray-900 leading-relaxed", sizeClass),
                children: item.title
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 282,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderContent = ()=>{
        // 0. Heading - Section title (380×60px like bento.me)
        if (item.type === 'heading' || currentSize === 'full') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center px-4 bg-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-gray-900 tracking-tight",
                    children: item.title
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Media card - edge-to-edge with caption (for any size with media variant)
        if (isMediaCard) {
            return renderMediaCard();
        }
        // Text card - no icon, just text with alignment
        if (isTextCard) {
            return renderTextCard();
        }
        // 1. Small Square (1x1) - Icon Top, Text Bottom with uniform padding
        if (currentSize === '1x1') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex flex-col justify-between p-5 group bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                        cornerRadius: 12,
                        className: "w-10 h-10 bg-gray-50 border border-[#f3f3f3] flex items-center justify-center text-gray-800 shrink-0 group-hover:scale-110 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                            name: item.icon || item.image,
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium text-gray-900 leading-snug text-sm", item.subtitle ? "line-clamp-2" : "line-clamp-3"),
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-1 font-normal line-clamp-1 bento-subtitle",
                                children: item.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 326,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 317,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // 2. Narrow Rectangle (1x0.5) - Horizontal strip for quick links/stats
        if (currentSize === '1x0.5') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center h-full w-full px-4 md:px-5 gap-3 md:gap-4 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                        cornerRadius: 10,
                        className: "w-10 h-10 bg-gray-50 border border-[#efefef] flex items-center justify-center shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                            name: item.icon || item.image,
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium text-gray-900 text-sm leading-snug", item.subtitle ? "truncate" : "line-clamp-2"),
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-0.5 font-normal truncate bento-subtitle",
                                children: item.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 344,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // 3. Wide Rectangle (2x1) - bento.me style: icon + text grouped at top-left, image right
        if (currentSize === '2x1') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full bg-white group p-5 gap-3 md:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-start min-w-0 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                                cornerRadius: 12,
                                className: "w-10 h-10 overflow-hidden flex items-center justify-center bg-gray-50 border border-[#efefef] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                    name: item.icon,
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium text-gray-900 leading-tight text-base tracking-tight", item.subtitle ? "line-clamp-2" : item.image ? "line-clamp-3" : "line-clamp-4"),
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1 font-normal truncate bento-subtitle",
                                        children: item.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                        lineNumber: 364,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                        cornerRadius: 12,
                        className: "w-[55%] h-full overflow-hidden bg-gray-50 border border-[#efefef] shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(item.image),
                            alt: item.title || '',
                            loading: "lazy",
                            decoding: "async",
                            className: "h-full w-full object-cover transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 370,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 369,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 353,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // 4. Vertical Rectangle (1x2) - icon + text grouped at top, image at bottom (48% height)
        if (currentSize === '1x2') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full w-full bg-white group p-5 gap-3 md:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                                cornerRadius: 12,
                                className: "w-10 h-10 overflow-hidden flex items-center justify-center bg-gray-50 border border-[#efefef] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                    name: item.icon,
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 389,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium text-gray-900 leading-tight text-base tracking-tight", item.subtitle ? "line-clamp-2" : "line-clamp-5"),
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1.5 font-normal line-clamp-2 bento-subtitle",
                                        children: item.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                        lineNumber: 397,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                        cornerRadius: 12,
                        className: "h-[55%] w-full overflow-hidden bg-gray-50 border border-[#efefef] shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(item.image),
                            alt: item.title || '',
                            loading: "lazy",
                            decoding: "async",
                            className: "h-full w-full object-cover transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 403,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                        lineNumber: 402,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // 5. Large Square (2x2) - Hero-style card with full bleed image
        if (currentSize === '2x2') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full relative group overflow-hidden bg-gray-50",
                children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(item.image),
                            alt: item.title || '',
                            loading: "lazy",
                            decoding: "async",
                            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 423,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                                    cornerRadius: 12,
                                    className: "w-10 h-10 overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-sm mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                        name: item.icon,
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                        lineNumber: 433,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 432,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-medium text-xl leading-tight tracking-tight",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 435,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-sm mt-2 font-normal bento-subtitle",
                                    children: item.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 436,
                                    columnNumber: 35
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 431,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full flex flex-col p-6 justify-between bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                            cornerRadius: 12,
                            className: "w-14 h-14 bg-gray-100 border border-gray-200 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                name: item.icon,
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                lineNumber: 442,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 441,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium text-2xl text-gray-900 leading-tight tracking-tight",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 445,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-3 font-normal bento-subtitle",
                                    children: item.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                                    lineNumber: 446,
                                    columnNumber: 35
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                            lineNumber: 444,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                    lineNumber: 440,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 419,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: "Card"
        }, void 0, false, {
            fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
            lineNumber: 454,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    const isHeading = item.type === 'heading' || currentSize === 'full';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        tabIndex: isInteractive ? 0 : undefined,
        role: item.url ? 'link' : canEdit ? 'button' : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-full w-full group select-none transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", isDragging ? "z-[100]" : "", isOverlay ? "rotate-[3deg] scale-[1.02]" : "rotate-0", isInteractive && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-card"),
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        onClick: handleCardClick,
        onKeyDown: isInteractive ? handleKeyDown : undefined,
        children: [
            isHeading ? // Heading - no card wrapper, just the content
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex items-center transition-opacity duration-300", isDragging ? "opacity-50" : "", canEdit && "cursor-grab active:cursor-grabbing hover:opacity-80"),
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 477,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full w-full shadow-card transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] p-0 relative", isDragging ? "shadow-card-drag" : // Text cards without URLs in public view should have no interactive styling
                isTextCardWithoutUrl && !canEdit ? "" // No hover/click effects
                 : "hover:shadow-card-hover cursor-grab active:scale-[0.98]"),
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 485,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            canEdit && isHovered && !isDragging && !isOverlay && onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$EditControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onDelete: ()=>onDelete(item.id),
                onResize: isHeading ? undefined : onResize ? (size)=>onResize(item.id, size) : undefined,
                currentSize: currentSize,
                isHeading: isHeading
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
                lineNumber: 499,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx",
        lineNumber: 460,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BentoCard;
}),
"[project]/Projects/keith-vaz-portfolio/components/utils.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSizeClasses",
    ()=>getSizeClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const getSizeClasses = (size)=>{
    // Fixed-width flex-based layout for wrapping bento grid
    // Card widths are fixed so they wrap rather than shrink
    // Uses CSS custom properties for responsive sizing: --card-unit (150px desktop, 140px mobile)
    // Height is determined by aspect ratio via data-item-size attribute in CSS
    switch(size){
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
}),
"[project]/Projects/keith-vaz-portfolio/components/SortableItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$BentoCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/squircle.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Helper to get size for current view
const getViewSize = (item, view)=>{
    const layout = view === 'desktop' ? item.desktopLayout : item.mobileLayout;
    return layout?.size || item.size;
};
const SortableItem = ({ item, currentView, isAdminRoute = false, onDelete, onResize, onUpdate, onStartEdit })=>{
    const { isAuthenticated, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // canEdit requires BOTH route context (isAdminRoute) AND auth state
    const canEdit = isAdminRoute && isAuthenticated && isAdmin;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id: item.id,
        data: {
            item
        },
        disabled: !canEdit
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Translate.toString(transform),
        transition: transition || 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: isDragging ? 100 : undefined
    };
    // Get size for current view
    const currentSize = getViewSize(item, currentView);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...canEdit ? attributes : {},
        ...canEdit ? listeners : {},
        "data-item-size": currentSize,
        "data-item-id": item.id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSizeClasses"])(currentSize), // Only apply touch-none in edit mode to allow scrolling on public page
        canEdit && "touch-none", "relative hover:z-[70]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$squircle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Squircle"], {
                cornerRadius: 20,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-gray-200/50 border-2 border-dashed border-gray-300/50 transition-opacity duration-300", isDragging ? "opacity-100" : "opacity-0 pointer-events-none")
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/SortableItem.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 h-full w-full transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", isDragging ? "opacity-0" : "opacity-100"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$BentoCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    item: item,
                    currentView: currentView,
                    isAdminRoute: isAdminRoute,
                    onDelete: onDelete,
                    onResize: onResize,
                    onUpdate: onUpdate,
                    onStartEdit: onStartEdit
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/SortableItem.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/SortableItem.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/SortableItem.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SortableItem;
}),
"[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/link.js [app-ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/film.js [app-ssr] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-ssr] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Toolbar = ({ onStartCreate, currentView, onViewChange })=>{
    const { isAuthenticated, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const canEdit = isAuthenticated && isAdmin;
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleAddClick = (type)=>{
        if (toolbarRef.current) {
            const rect = toolbarRef.current.getBoundingClientRect();
            onStartCreate(type, rect);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: toolbarRef,
        className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center bg-white p-1.5 rounded-[8px] shadow-2xl border border-[#efefef]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "primary",
                    size: "lg",
                    className: "rounded-[4px] font-bold mr-2",
                    children: "Share my Portfolio"
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-8 bg-gray-200 mx-1"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "icon",
                                    size: "icon",
                                    onClick: ()=>handleAddClick('heading'),
                                    className: "rounded-[4px]",
                                    title: "Add Section Heading",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "icon",
                                    size: "icon",
                                    onClick: ()=>handleAddClick('link'),
                                    className: "rounded-[4px]",
                                    title: "Add Link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "icon",
                                    size: "icon",
                                    onClick: ()=>handleAddClick('image'),
                                    className: "rounded-[4px]",
                                    title: "Add Media (Image/Video)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "icon",
                                    size: "icon",
                                    onClick: ()=>handleAddClick('text'),
                                    className: "rounded-[4px]",
                                    title: "Add Text",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-8 bg-gray-200 mx-1"
                        }, void 0, false, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: currentView === 'desktop' ? 'default' : 'icon',
                                    size: "icon",
                                    onClick: ()=>onViewChange('desktop'),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-[4px] transition-all", currentView === 'desktop' ? "bg-black shadow-md text-white" : "text-gray-400 hover:text-gray-600"),
                                    title: "Desktop View",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: currentView === 'mobile' ? 'default' : 'icon',
                                    size: "icon",
                                    onClick: ()=>onViewChange('mobile'),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-[4px] transition-all", currentView === 'mobile' ? "bg-black shadow-md text-white" : "text-gray-400 hover:text-gray-600"),
                                    title: "Mobile View",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Toolbar;
}),
"[project]/Projects/keith-vaz-portfolio/lib/github.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * GitHub API integration for content management
 * 
 * Uses GitHub Contents API to read/write portfolio content
 * https://docs.github.com/en/rest/repos/contents
 */ __turbopack_context__.s([
    "deleteMediaFromGitHub",
    ()=>deleteMediaFromGitHub,
    "fetchContentFromGitHub",
    ()=>fetchContentFromGitHub,
    "saveContentToGitHub",
    ()=>saveContentToGitHub,
    "uploadMediaToGitHub",
    ()=>uploadMediaToGitHub
]);
// Repository configuration
const REPO_OWNER = 'bamboozledkitty';
const REPO_NAME = 'keith-vaz-portfolio';
const CONTENT_PATH = 'public/content/data.json';
const MEDIA_PATH = 'public/media';
// GitHub API base URL
const GITHUB_API = 'https://api.github.com';
async function fetchContentFromGitHub(token) {
    const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json'
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.status}`);
    }
    const data = await response.json();
    // UTF-8 safe base64 decoding
    const content = decodeURIComponent(escape(atob(data.content)));
    return JSON.parse(content);
}
async function saveContentToGitHub(token, items, commitMessage = 'Update portfolio content') {
    // First, get the current file SHA (required for updates)
    const currentFile = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json'
        }
    });
    if (!currentFile.ok) {
        throw new Error(`Failed to get current file: ${currentFile.status}`);
    }
    const currentData = await currentFile.json();
    // Prepare new content
    const newContent = {
        version: 1,
        lastUpdated: new Date().toISOString(),
        items
    };
    // UTF-8 safe base64 encoding
    const jsonString = JSON.stringify(newContent, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(jsonString)));
    // Update the file
    const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: commitMessage,
            content: contentBase64,
            sha: currentData.sha
        })
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to save content: ${error.message || response.status}`);
    }
}
// GitHub Contents API file size limit (1MB)
const MAX_FILE_SIZE = 1_000_000;
async function uploadMediaToGitHub(token, file, folder) {
    // Check file size limit
    if (file.size > MAX_FILE_SIZE) {
        const sizeMB = (file.size / 1_000_000).toFixed(1);
        throw new Error(`File is too large (${sizeMB}MB). Maximum size is 1MB. ` + `Please compress the file or upload it manually via git.`);
    }
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `${MEDIA_PATH}/${folder}/${fileName}`;
    // Read file as base64
    const content = await new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            const result = reader.result;
            // Remove data URL prefix (data:image/png;base64,)
            const base64 = result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
    // Check if file already exists (to get SHA for update)
    let sha;
    try {
        const existingFile = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json'
            }
        });
        if (existingFile.ok) {
            const data = await existingFile.json();
            sha = data.sha;
        }
    } catch  {
    // File doesn't exist, that's fine
    }
    // Upload the file
    const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: `Add media: ${fileName}`,
            content,
            ...sha && {
                sha
            }
        })
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to upload media: ${error.message || response.status}`);
    }
    // Return path relative to public folder (without base URL)
    // Base URL will be prepended at render time for GitHub Pages compatibility
    return `/media/${folder}/${fileName}`;
}
async function deleteMediaFromGitHub(token, mediaPath) {
    // Convert content path to repo path
    const repoPath = `public${mediaPath}`;
    // Get file SHA
    const fileResponse = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${repoPath}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json'
        }
    });
    if (!fileResponse.ok) {
        throw new Error(`Failed to get file: ${fileResponse.status}`);
    }
    const fileData = await fileResponse.json();
    // Delete the file
    const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${repoPath}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: `Delete media: ${mediaPath}`,
            sha: fileData.sha
        })
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to delete media: ${error.message || response.status}`);
    }
}
}),
"[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioContent",
    ()=>PortfolioContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$SortableItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/SortableItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$BentoCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/BentoCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/Toolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$github$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/github.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
// Lazy load admin-only components to reduce initial bundle size
const CardEditorPopover = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Projects/keith-vaz-portfolio/components/CardEditorPopover.tsx [app-ssr] (ecmascript, async loader)"));
const ProfilePictureCropperModal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Projects/keith-vaz-portfolio/components/ProfilePictureCropperModal.tsx [app-ssr] (ecmascript, async loader)"));
const generateId = ()=>Math.random().toString(36).substr(2, 9);
const getItemLayout = (item, view)=>{
    const layout = view === 'desktop' ? item.desktopLayout : item.mobileLayout;
    if (layout) return layout;
    return {
        size: item.size,
        order: 0
    };
};
const getItemSize = (item, view)=>{
    return getItemLayout(item, view).size;
};
const migrateItem = (item, index)=>{
    if (item.desktopLayout && item.mobileLayout) return item;
    return {
        ...item,
        desktopLayout: item.desktopLayout || {
            size: item.size,
            order: index
        },
        mobileLayout: item.mobileLayout || {
            size: item.size,
            order: index
        }
    };
};
const dropAnimationConfig = {
    sideEffects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDropAnimationSideEffects"])({
        styles: {
            active: {
                opacity: '0.5'
            },
            dragOverlay: {
                rotate: '0deg',
                scale: '1'
            }
        }
    })
};
function PortfolioContent({ initialData, isAdmin = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated, isAdmin: authIsAdmin, logout, token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const canEdit = isAdmin && isAuthenticated && authIsAdmin;
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (initialData?.items) {
            return initialData.items.map((item, index)=>migrateItem(item, index));
        }
        return [];
    });
    const [hasUnsavedChanges, setHasUnsavedChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorState, setEditorState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('desktop');
    // Profile picture editing state
    const profileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [profileImageSrc, setProfileImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showProfileCropper, setShowProfileCropper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [croppedProfilePicture, setCroppedProfilePicture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Auto-detect viewport size for public view (non-admin)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAdmin) return;
        const handleResize = ()=>{
            const isMobile = window.innerWidth < 768;
            setCurrentView(isMobile ? 'mobile' : 'desktop');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, [
        isAdmin
    ]);
    const sortedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...items
        ].sort((a, b)=>{
            const orderA = getItemLayout(a, currentView).order;
            const orderB = getItemLayout(b, currentView).order;
            return orderA - orderB;
        });
    }, [
        items,
        currentView
    ]);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    const handleDragStart = (event)=>{
        if (!canEdit) return;
        setActiveId(event.active.id);
    };
    const handleDragOver = (_event)=>{};
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        setActiveId(null);
        if (!canEdit || !over || active.id === over.id) return;
        const oldIndex = sortedItems.findIndex((item)=>item.id === active.id);
        const newIndex = sortedItems.findIndex((item)=>item.id === over.id);
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
            const reordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayMove"])(sortedItems, oldIndex, newIndex);
            const layoutKey = currentView === 'desktop' ? 'desktopLayout' : 'mobileLayout';
            const updatedItems = items.map((item)=>{
                const newOrder = reordered.findIndex((r)=>r.id === item.id);
                const currentLayout = getItemLayout(item, currentView);
                return {
                    ...item,
                    [layoutKey]: {
                        ...currentLayout,
                        order: newOrder
                    }
                };
            });
            setItems(updatedItems);
            setHasUnsavedChanges(true);
        }
    };
    const handleStartCreate = (type, anchorRect)=>{
        if (!canEdit) return;
        setEditorState({
            mode: 'create',
            type,
            anchorRect
        });
    };
    const handleStartEdit = (id, anchorRect)=>{
        if (!canEdit) return;
        const item = items.find((i)=>i.id === id);
        if (!item) return;
        setEditorState({
            mode: 'edit',
            type: item.type,
            cardId: id,
            anchorRect,
            existingData: item
        });
    };
    const handleEditorSave = (data)=>{
        if (!editorState) return;
        if (editorState.mode === 'create') {
            const size = data.size || '1x1';
            const newLayout = {
                size,
                order: 0
            };
            const newItem = {
                id: generateId(),
                type: editorState.type,
                size,
                ...data,
                desktopLayout: newLayout,
                mobileLayout: {
                    ...newLayout
                }
            };
            const updatedItems = items.map((item)=>({
                    ...item,
                    desktopLayout: item.desktopLayout ? {
                        ...item.desktopLayout,
                        order: item.desktopLayout.order + 1
                    } : {
                        size: item.size,
                        order: 1
                    },
                    mobileLayout: item.mobileLayout ? {
                        ...item.mobileLayout,
                        order: item.mobileLayout.order + 1
                    } : {
                        size: item.size,
                        order: 1
                    }
                }));
            setItems([
                newItem,
                ...updatedItems
            ]);
            setHasUnsavedChanges(true);
        } else if (editorState.cardId) {
            setItems((prev)=>prev.map((item)=>item.id === editorState.cardId ? {
                        ...item,
                        ...data
                    } : item));
            setHasUnsavedChanges(true);
        }
        setEditorState(null);
    };
    const handleEditorCancel = ()=>setEditorState(null);
    const handleDeleteItem = (id)=>{
        if (!canEdit) return;
        setItems((prev)=>prev.filter((item)=>item.id !== id));
        setHasUnsavedChanges(true);
    };
    const handleUpdateItem = (id, updates)=>{
        if (!canEdit) return;
        setItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    ...updates
                } : item));
        setHasUnsavedChanges(true);
    };
    const handleResize = (id, size)=>{
        if (!canEdit) return;
        const layoutKey = currentView === 'desktop' ? 'desktopLayout' : 'mobileLayout';
        setItems((prev)=>prev.map((item)=>{
                if (item.id !== id) return item;
                const currentLayout = getItemLayout(item, currentView);
                return {
                    ...item,
                    size,
                    [layoutKey]: {
                        ...currentLayout,
                        size
                    }
                };
            }));
    };
    const handleLogout = ()=>{
        logout();
        router.push('/');
    };
    const activeItem = sortedItems.find((item)=>item.id === activeId) || null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white pb-32",
        children: [
            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black text-white py-3 px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", hasUnsavedChanges ? "bg-yellow-400" : "bg-green-400 animate-pulse")
                            }, void 0, false, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                lineNumber: 260,
                                columnNumber: 25
                            }, this),
                            "Admin Mode ",
                            hasUnsavedChanges ? '- Unsaved Changes' : '- Editing Enabled'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                        lineNumber: 259,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            hasUnsavedChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: async ()=>{
                                    if (!token) return;
                                    if (token.startsWith('test-token-')) {
                                        alert('Use GitHub account to save changes.');
                                        return;
                                    }
                                    setIsSaving(true);
                                    try {
                                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$github$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveContentToGitHub"])(token, items);
                                        setHasUnsavedChanges(false);
                                    } finally{
                                        setIsSaving(false);
                                    }
                                },
                                variant: "secondary",
                                size: "sm",
                                disabled: isSaving,
                                className: "bg-green-500 hover:bg-green-600 text-white border-green-600",
                                children: [
                                    isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 16,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                        lineNumber: 288,
                                        columnNumber: 45
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                        lineNumber: 288,
                                        columnNumber: 94
                                    }, this),
                                    isSaving ? 'Saving...' : 'Save'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                lineNumber: 268,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleLogout,
                                variant: "secondary",
                                size: "sm",
                                className: "bg-white/10 hover:bg-white/20 text-white border-white/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                        lineNumber: 298,
                                        columnNumber: 29
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                lineNumber: 292,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                        lineNumber: 266,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                lineNumber: 258,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "layout-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "about-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start text-left w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden mb-8 transition-transform duration-500 ease-out relative group", canEdit && "hover:scale-[1.02] cursor-pointer hover:ring-4 hover:ring-black/20"),
                                    onClick: canEdit ? ()=>profileInputRef.current?.click() : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: croppedProfilePicture || `/media/profile/profile-pic/IMG_5823.jpg`,
                                            alt: "Keith Vaz",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 315,
                                            columnNumber: 29
                                        }, this),
                                        canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                size: 32,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                lineNumber: 322,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 321,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                    lineNumber: 308,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    ref: profileInputRef,
                                    accept: "image/*",
                                    className: "hidden",
                                    onChange: (e)=>{
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = ()=>{
                                                setProfileImageSrc(reader.result);
                                                setShowProfileCropper(true);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                        e.target.value = '';
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                    lineNumber: 326,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight w-full",
                                    children: [
                                        "Keith Vaz ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block hover:rotate-12 transition-transform cursor-default duration-500",
                                            children: "👋"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 346,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                    lineNumber: 345,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 text-gray-500 text-base font-normal mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base",
                                                    children: "👨🏽‍💻"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Design Systems Designer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 350,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base",
                                                    children: "📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Bangalore"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 354,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base",
                                                    children: "🏡"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Goa"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 358,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                    lineNumber: 349,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                            lineNumber: 307,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "grid-section min-h-[60vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
                            sensors: sensors,
                            collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestCenter"],
                            onDragStart: handleDragStart,
                            onDragOver: handleDragOver,
                            onDragEnd: handleDragEnd,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                    items: sortedItems.map((item)=>item.id),
                                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectSortingStrategy"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bento-grid",
                                        children: sortedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$SortableItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                item: item,
                                                currentView: currentView,
                                                isAdminRoute: isAdmin,
                                                onDelete: handleDeleteItem,
                                                onResize: handleResize,
                                                onUpdate: handleUpdateItem,
                                                onStartEdit: handleStartEdit
                                            }, item.id, false, {
                                                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                                lineNumber: 380,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                        lineNumber: 378,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                    lineNumber: 374,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragOverlay"], {
                                    adjustScale: false,
                                    dropAnimation: dropAnimationConfig,
                                    children: activeItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full cursor-grabbing",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$BentoCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            item: activeItem,
                                            currentView: currentView,
                                            isAdminRoute: isAdmin,
                                            isOverlay: true,
                                            isDragging: true
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                            lineNumber: 397,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                        lineNumber: 396,
                                        columnNumber: 33
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                                    lineNumber: 394,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                            lineNumber: 367,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                        lineNumber: 366,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, this),
            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onStartCreate: handleStartCreate,
                currentView: currentView,
                onViewChange: setCurrentView
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                lineNumber: 406,
                columnNumber: 17
            }, this),
            editorState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardEditorPopover, {
                    state: editorState,
                    onSave: handleEditorSave,
                    onCancel: handleEditorCancel
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                    lineNumber: 415,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                lineNumber: 414,
                columnNumber: 17
            }, this),
            showProfileCropper && profileImageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfilePictureCropperModal, {
                    imageSrc: profileImageSrc,
                    onSave: (croppedImage)=>{
                        setCroppedProfilePicture(croppedImage);
                        setShowProfileCropper(false);
                        setProfileImageSrc(null);
                        setHasUnsavedChanges(true);
                    },
                    onCancel: ()=>{
                        setShowProfileCropper(false);
                        setProfileImageSrc(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                    lineNumber: 425,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
                lineNumber: 424,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/keith-vaz-portfolio/components/PortfolioContent.tsx",
        lineNumber: 256,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__531b0135._.js.map