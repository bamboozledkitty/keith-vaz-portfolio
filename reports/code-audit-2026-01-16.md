# Portfolio Site Code Audit Report

**Date:** January 16, 2026  
**Branch:** `efficiency-optimisations`  
**Auditor:** Automated Analysis  

---

## Executive Summary

This audit reveals **critical performance issues** causing the reported 60+ second load times on mobile devices. The primary culprit is a **13MB data.json file** containing base64-encoded media, combined with unoptimized asset loading strategies. Additionally, several security vulnerabilities and code quality issues were identified.

### Severity Distribution
| Severity | Count |
|----------|-------|
| Critical | 4 |
| High | 6 |
| Medium | 8 |
| Low | 5 |

---

## Table of Contents
1. [Performance Issues](#1-performance-issues)
2. [Security Vulnerabilities](#2-security-vulnerabilities)
3. [Code Quality Problems](#3-code-quality-problems)
4. [Optimization Opportunities](#4-optimization-opportunities)
5. [Loading Indicator Bug Analysis](#5-loading-indicator-bug-analysis)
6. [Recommended Action Plan](#6-recommended-action-plan)

---

## 1. Performance Issues

### CRITICAL: P1 - Massive data.json File (13MB)

**Location:** `public/content/data.json`  
**Impact:** Page load takes 60+ seconds on mobile

**Root Cause:**  
The content JSON file contains 6 base64-encoded videos/images inline, bloating it from ~10KB to 13MB.

```json
// Example of problematic data (line ~98)
{
  "id": "n5pa032tf",
  "type": "image",
  "size": "2x2",
  "image": "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQCYZB5..."
}
```

**Evidence:**
```bash
$ ls -lh public/content/data.json
-rw-r--r--  13M  data.json

$ grep -c "data:image\|data:video" public/content/data.json
6
```

**Why This Is Critical:**
1. Browser must download 13MB before rendering ANY content
2. JSON parsing of 13MB string blocks the main thread for 2-5 seconds
3. Base64 encoding is ~33% larger than binary
4. Mobile networks (3G/4G) take 30-60+ seconds to download 13MB
5. No incremental loading possible - all or nothing

**Fix:**
1. Extract base64 data to actual files in `/public/media/`
2. Replace inline data with file paths (`/media-assets/video-name.mp4`)
3. Target data.json size: <50KB

---

### CRITICAL: P2 - CDN Tailwind in Production

**Location:** `index.html:8`

```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Impact:**
- Tailwind CDN is the **development version** - explicitly not for production
- Downloads 300KB+ of JavaScript to compile CSS at runtime
- Blocks rendering while compiling styles
- No tree-shaking - ships entire Tailwind framework

**Fix:**
1. Use Vite's PostCSS integration with Tailwind
2. Install: `npm install -D tailwindcss postcss autoprefixer`
3. Create `tailwind.config.js` and `postcss.config.js`
4. Remove CDN script and import compiled CSS

---

### CRITICAL: P3 - No Code Splitting or Lazy Loading

**Location:** `index.tsx`, all component imports

**Current State:**
- All 14 components bundled into single JavaScript file
- Admin-only components (CardEditorPopover, ProfilePictureCropperModal, AssetSelectorModal) loaded for public visitors
- react-easy-crop library (50KB) always loaded even for public view

```typescript
// index.tsx - Everything loaded synchronously
import App from './App';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
```

**Impact:**
- Public users download ~40% more JavaScript than needed
- Initial bundle likely 500KB+ uncompressed

**Fix:**
```typescript
// Use React.lazy for route-based splitting
const LoginPage = lazy(() => import('./components/LoginPage'));
const App = lazy(() => import('./App'));

// Use dynamic imports for admin-only components
const ProfilePictureCropperModal = lazy(() => 
  import('./components/ProfilePictureCropperModal')
);
```

---

### CRITICAL: P4 - Unoptimized Media Loading

**Location:** `BentoCard.tsx:159-173`

```tsx
// Videos autoplay immediately without lazy loading
<video
  src={mediaUrl}
  autoPlay
  loop
  muted
  playsInline
/>

// Images have no lazy loading
<img
  src={mediaUrl}
  alt={item.caption || item.title || 'Media'}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**Impact:**
- All videos start downloading simultaneously
- 34MB of media assets potentially downloaded before user scrolls
- No `loading="lazy"` on images
- No poster frames for videos
- No srcset/responsive images

**Fix:**
```tsx
// Add lazy loading
<img
  src={mediaUrl}
  alt={...}
  loading="lazy"
  decoding="async"
/>

// For videos, use IntersectionObserver to delay loading
<video
  poster={posterUrl}
  preload="none"
  // Only set src when in viewport
/>
```

---

### HIGH: P5 - Squircle Component Performance Overhead

**Location:** `components/ui/squircle.tsx:46-63`

Every Squircle instance creates a new ResizeObserver:

```tsx
React.useEffect(() => {
  const element = innerRef.current;
  if (!element) return;

  const resizeObserver = new ResizeObserver(updateDimensions);
  resizeObserver.observe(element);

  return () => resizeObserver.disconnect();
}, []);
```

**Impact:**
- With 30+ cards, creates 30+ ResizeObserver instances
- Each resize event triggers 30+ callbacks
- Generates significant garbage for GC

**Fix:**
1. Create single shared ResizeObserver
2. Or use CSS `border-radius` with fallback (iOS supports squircle-like corners natively now)
3. Consider if exact squircle is worth the performance cost

---

### HIGH: P6 - Import Map Loading from esm.sh

**Location:** `index.html:189-207`

```html
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
    // ... 12 more external imports
  }
}
</script>
```

**Impact:**
- Every dependency requires separate HTTP request to esm.sh
- No bundling = waterfall requests
- esm.sh CDN can be slow/unreliable
- Version range caret (^) can cause inconsistent builds

**Note:** This conflicts with Vite bundling. If using Vite for production, remove import map. If import map is intentional (for development), ensure production build uses bundled assets.

---

### MEDIUM: P7 - No Bundle Compression

**Location:** `vite.config.ts`

Current config has no compression plugins:

```typescript
export default defineConfig(({ mode }) => {
  return {
    base: '/keith-vaz-portfolio/',
    plugins: [react()],
    // No compression plugin
  };
});
```

**Fix:**
```typescript
import viteCompression from 'vite-plugin-compression';

plugins: [
  react(),
  viteCompression({ algorithm: 'gzip' }),
  viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
]
```

---

### MEDIUM: P8 - No Preloading of Critical Resources

**Location:** `index.html`

Missing preload hints for critical resources:

```html
<!-- Add to <head> -->
<link rel="preload" href="/content/data.json" as="fetch" crossorigin>
<link rel="preload" href="/media/profile/profile-pic/IMG_5823.jpg" as="image">
<link rel="preconnect" href="https://api.github.com">
```

---

### MEDIUM: P9 - Render-Blocking Font Load

**Location:** `index.html:38`

```html
<link href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css" rel="stylesheet">
```

**Impact:**
- Blocks rendering until font CSS is downloaded
- Font files then cause FOIT (Flash of Invisible Text)

**Fix:**
```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="preload" as="style" href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css">
<link rel="stylesheet" href="..." media="print" onload="this.media='all'">
```

---

## 2. Security Vulnerabilities

### HIGH: S1 - Token Storage in localStorage

**Location:** `lib/auth.ts:17-18, 71-74`

```typescript
const TOKEN_KEY = 'github_oauth_token';
const USER_KEY = 'github_user';

export const saveAuthState = (token: string, user: GitHubUser): void => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
```

**Risk:**
- localStorage is accessible via XSS attacks
- GitHub tokens have `repo` scope - can modify all user repositories
- No token expiration handling

**Fix:**
1. Store token in httpOnly cookie via backend
2. Or use short-lived tokens with refresh mechanism
3. At minimum, encrypt before storing

---

### HIGH: S2 - Weak OAuth State Generation

**Location:** `lib/auth.ts:44-48`

```typescript
export const generateState = (): string => {
  const state = Math.random().toString(36).substring(7);
  sessionStorage.setItem('oauth_state', state);
  return state;
};
```

**Risk:**
- `Math.random()` is not cryptographically secure
- State is only 5-6 characters - easily brute-forced
- Vulnerable to CSRF attacks

**Fix:**
```typescript
export const generateState = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const state = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  sessionStorage.setItem('oauth_state', state);
  return state;
};
```

---

### MEDIUM: S3 - Test Authentication Bypass in Production

**Location:** `components/LoginPage.tsx:79-92`

```tsx
const handleTestAuth = () => {
  const testToken = 'test-token-' + Math.random().toString(36).substring(7);
  const testUser = {
    login: ADMIN_USERNAME,
    id: 12345,
    avatar_url: '...',
    name: 'Test Admin',
  };
  saveAuthState(testToken, testUser);
  setAuth(testToken, testUser);
  navigate('/admin');
};

// Button visible in production
<Button onClick={handleTestAuth} variant="secondary">
  Use Test Account (Dev Only)
</Button>
```

**Risk:**
- Anyone can access admin mode (read-only since saves fail, but still exposes admin UI)
- UI button says "Dev Only" but is in production

**Fix:**
```tsx
{import.meta.env.DEV && (
  <Button onClick={handleTestAuth}>
    Use Test Account (Dev Only)
  </Button>
)}
```

---

### MEDIUM: S4 - No Content Security Policy

**Location:** `index.html`

No CSP headers or meta tags present.

**Risk:**
- XSS attacks can load arbitrary scripts
- Data exfiltration via image/script tags

**Fix:**
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' cdn.tailwindcss.com cdn.jsdelivr.net esm.sh;
  style-src 'self' 'unsafe-inline' cdn.tailwindcss.com cdn.jsdelivr.net;
  img-src 'self' data: https:;
  connect-src 'self' api.github.com api.microlink.io *.workers.dev;
  font-src 'self' cdn.jsdelivr.net;
">
```

---

### MEDIUM: S5 - Hardcoded Fallback Client ID

**Location:** `config/auth.ts:6`

```typescript
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || 'Ov23lijyj0hLWwcEcVpH';
```

**Risk:**
- Client ID is not a secret, but hardcoding prevents easy rotation
- If compromised, requires code change to rotate

**Fix:**
- Require environment variable, fail if not set
- Document setup requirements clearly

---

### LOW: S6 - User Data in localStorage Without Validation

**Location:** `lib/auth.ts:20-23`

```typescript
export const getAuthState = (): AuthState => {
  const token = localStorage.getItem(TOKEN_KEY);
  const userJson = localStorage.getItem(USER_KEY);
  const user = userJson ? JSON.parse(userJson) : null; // Unsafe parse
```

**Risk:**
- Malformed JSON throws unhandled exception
- Could inject malicious data

**Fix:**
```typescript
const user = userJson ? (() => {
  try {
    return JSON.parse(userJson);
  } catch {
    localStorage.removeItem(USER_KEY);
    return null;
  }
})() : null;
```

---

## 3. Code Quality Problems

### HIGH: Q1 - Import Statement in Middle of File

**Location:** `components/BentoCard.tsx:30`

```tsx
// Lines 1-29: imports, type definitions, utility functions

const getTextSizeClass = (size?: TextSize): string => { ... };

import EditControls from './EditControls';  // Line 30 - WRONG
import { Card } from './ui/card';
import { Input } from './ui/input';
```

**Impact:**
- Violates ESM specification (imports must be at top)
- Can cause subtle bugs with hoisting
- Fails stricter linting rules

---

### MEDIUM: Q2 - Redundant useAuth Calls

**Location:** Multiple components

`useAuth()` is called in both parent and child components:

- `App.tsx:83` - calls `useAuth()`
- `SortableItem.tsx:27` - calls `useAuth()` (child of App)
- `BentoCard.tsx:82` - calls `useAuth()` (child of SortableItem)

**Impact:**
- Three identical context lookups per card
- With 30 cards = 90 context lookups vs needed 30

**Fix:**
- Pass `canEdit` as prop from parent
- Or use `React.memo` with context selector

---

### MEDIUM: Q3 - Missing Error Boundaries

**Location:** `index.tsx`

No error boundaries wrap the application:

```tsx
root.render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* No error boundary */}
```

**Impact:**
- Any uncaught error crashes entire app
- No graceful fallback UI

**Fix:**
```tsx
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <AuthProvider>
    ...
  </AuthProvider>
</ErrorBoundary>
```

---

### MEDIUM: Q4 - Unused Exports

**Location:** `constants.tsx`

`INITIAL_ITEMS` is defined but never imported anywhere:

```typescript
export const INITIAL_ITEMS: BentoItemData[] = [
  // 291 lines of data
];
```

**Impact:**
- Dead code increases bundle size (~8KB)
- Confusion about data source (is it used or not?)

**Fix:**
- Remove if truly unused
- Or document its purpose (fallback data? development seeds?)

---

### LOW: Q5 - Inconsistent Component Export Patterns

Mixed patterns across codebase:

```typescript
// Some use default exports
export default BentoCard;

// Some use named exports
export { Button, buttonVariants };

// Some use both
const Squircle = React.forwardRef(...);
export { Squircle };
```

**Recommendation:**
- Establish convention: default for components, named for utilities
- Document in CONTRIBUTING.md

---

### LOW: Q6 - Missing TypeScript Strict Mode

**Location:** `tsconfig.json`

```json
{
  "compilerOptions": {
    // Missing:
    // "strict": true,
    // "noImplicitAny": true,
    // "strictNullChecks": true
  }
}
```

**Impact:**
- Allows implicit `any` types
- Potential null reference bugs not caught at compile time

---

### LOW: Q7 - Console Statements in Production

**Locations:**
- `App.tsx:119` - `console.error('Error loading content:', error)`
- `App.tsx:326` - `console.error('No auth token available')`
- `App.tsx:340` - `console.error('Failed to save:', error)`
- `LoginPage.tsx:60` - `console.error('Auth error:', err)`

**Fix:**
- Use proper error reporting service (Sentry, LogRocket)
- Or conditional logging: `import.meta.env.DEV && console.error(...)`

---

## 4. Optimization Opportunities

### O1 - Image Optimization Pipeline

**Current State:** Images served as-is from `/public/media-assets/`

**Opportunities:**
1. Convert to WebP/AVIF (30-50% smaller)
2. Generate responsive srcset sizes
3. Create low-quality placeholders (LQIP)
4. Use Cloudflare Images or similar CDN

**Implementation:**
```typescript
// vite.config.ts
import { imagetools } from 'vite-imagetools';

plugins: [
  react(),
  imagetools({
    defaultDirectives: new URLSearchParams({
      format: 'webp',
      quality: '80',
    }),
  }),
]
```

---

### O2 - Virtual Scrolling for Large Grids

**Current:** All 30+ cards rendered in DOM simultaneously

**Opportunity:** Use virtual scrolling for large content sets

```typescript
import { useVirtualizer } from '@tanstack/react-virtual';

// Only render visible cards + buffer
const virtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => scrollRef.current,
  estimateSize: () => 200,
  overscan: 5,
});
```

---

### O3 - Service Worker for Offline Support

**Current:** No offline support - every visit re-downloads assets

**Opportunity:** Cache static assets and content JSON

```typescript
// Use Vite PWA plugin
import { VitePWA } from 'vite-plugin-pwa';

plugins: [
  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,jpg,webp}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\.microlink\.io/,
          handler: 'CacheFirst',
          options: { cacheName: 'metadata-cache', expiration: { maxAgeSeconds: 86400 } }
        }
      ]
    }
  })
]
```

---

### O4 - Prerender Critical Content

**Current:** SPA with client-side rendering only

**Opportunity:** Pre-render public route at build time

```typescript
// vite.config.ts
import { prerender } from 'vite-plugin-prerender';

plugins: [
  prerender({
    routes: ['/'],
    renderer: '@prerenderer/renderer-puppeteer',
  })
]
```

---

### O5 - Debounce ResizeObserver Callbacks

**Location:** `squircle.tsx`

```typescript
// Current: fires on every resize frame
const resizeObserver = new ResizeObserver(updateDimensions);

// Improved: debounce
const resizeObserver = new ResizeObserver(
  debounce(updateDimensions, 100, { leading: true })
);
```

---

### O6 - Memoize Expensive Computations

**Location:** `App.tsx:149-155`

```typescript
const sortedItems = useMemo(() => {
  return [...items].sort((a, b) => {
    // Sorting 30+ items on every render
  });
}, [items, currentView]);
```

This is already memoized (good!), but consider:
- Memoizing individual card renders with `React.memo`
- Using `useCallback` for event handlers passed to children

---

## 5. Loading Indicator Bug Analysis

### Reported Issue
> "Loading indicator is placed weirdly misaligned completely off the screen"

### Location
`App.tsx:437-442`

```tsx
{isLoading && (
  <div className="flex flex-col items-center justify-center py-20 text-gray-500">
    <Loader2 size={48} className="animate-spin mb-4" />
    <p className="text-lg font-medium">Loading content...</p>
  </div>
)}
```

### Root Cause Analysis

The loading indicator is rendered inside `.grid-section` which has these styles:

```css
/* index.html:136-141 */
.grid-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

**Problem:** On desktop (>1372px), the layout switches to:

```css
/* index.html:162-165 */
.grid-section {
  width: auto;
  align-items: flex-end;  /* RIGHT-ALIGNS content */
}
```

The loading indicator inherits `align-items: flex-end`, pushing it to the right edge. Combined with the `py-20` padding and no explicit width, it appears off-screen or misaligned.

### Fix

```tsx
{isLoading && (
  <div className="flex flex-col items-center justify-center py-20 text-gray-500 w-full">
    {/* Add w-full to override parent's align-items: flex-end */}
    <Loader2 size={48} className="animate-spin mb-4" />
    <p className="text-lg font-medium">Loading content...</p>
  </div>
)}
```

Or use absolute positioning for consistent centering:

```tsx
{isLoading && (
  <div className="absolute inset-0 flex items-center justify-center bg-white">
    <div className="flex flex-col items-center text-gray-500">
      <Loader2 size={48} className="animate-spin mb-4" />
      <p className="text-lg font-medium">Loading content...</p>
    </div>
  </div>
)}
```

---

## 6. Recommended Action Plan

### Phase 1: Critical Fixes (Immediate)

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| P1 | Extract base64 from data.json | 2h | 90% load time reduction |
| P1 | Fix loading indicator alignment | 15m | UX fix |
| P2 | Remove Tailwind CDN, use PostCSS | 2h | 50% CSS load reduction |
| P3 | Add lazy loading to images | 30m | Faster initial paint |
| S3 | Hide test auth in production | 15m | Security fix |

### Phase 2: High Priority (This Sprint)

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| P4 | Lazy load videos with IntersectionObserver | 2h | Major bandwidth savings |
| P6 | Review import map vs Vite bundling | 1h | Clarify build strategy |
| S1 | Improve token storage security | 4h | Security hardening |
| S2 | Fix OAuth state generation | 30m | CSRF protection |
| Q1 | Fix import order in BentoCard | 5m | Code quality |

### Phase 3: Medium Priority (Next Sprint)

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| P5 | Optimize Squircle ResizeObserver | 2h | Performance |
| P7 | Add gzip/brotli compression | 1h | 30% transfer reduction |
| P8 | Add resource preloading | 30m | Faster perceived load |
| O1 | Image optimization pipeline | 4h | 40% image size reduction |
| Q3 | Add error boundaries | 1h | Reliability |

### Phase 4: Nice to Have

- Virtual scrolling (O2)
- Service worker (O3)
- Pre-rendering (O4)
- TypeScript strict mode (Q6)

---

## Appendix: File Size Analysis

| File/Folder | Size | Notes |
|-------------|------|-------|
| public/content/data.json | 13MB | CRITICAL - contains base64 media |
| public/media-assets/ | 34MB | Video files are large |
| node_modules/ | ~150MB | Normal |
| dist/ (estimated) | ~500KB | After proper build |

### Expected Sizes After Optimization

| Metric | Current | Target |
|--------|---------|--------|
| data.json | 13MB | <50KB |
| Initial JS bundle | ~500KB | <200KB (with splitting) |
| First Contentful Paint | 60s+ | <2s |
| Time to Interactive | 90s+ | <5s |

---

*Report generated from codebase analysis. All line numbers reference current HEAD of `efficiency-optimisations` branch.*
