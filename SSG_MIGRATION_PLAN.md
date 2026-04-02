# Portfolio Migration Plan: CSR to Hybrid SSG/CSR

**Project:** Keith Vaz Portfolio
**Current Architecture:** React 19 + Vite (Pure Client-Side Rendering)
**Target Architecture:** Next.js 14 + Static Export (Hybrid SSG/CSR)
**Date:** January 17, 2026
**Estimated Timeline:** 3-4 days

---

## Table of Contents

1. [Problem Statement & Analysis](#problem-statement--analysis)
2. [Recommendation & Justification](#recommendation--justification)
3. [Migration Strategy](#migration-strategy)
4. [Detailed Implementation Plan](#detailed-implementation-plan)
5. [Code Examples & Configuration](#code-examples--configuration)
6. [Testing & Validation](#testing--validation)
7. [Rollback Plan](#rollback-plan)
8. [Post-Migration Checklist](#post-migration-checklist)

---

## Problem Statement & Analysis

### Current Limitation

The portfolio is currently a **pure client-side rendered (CSR) React application**. This creates real limitations with tangible consequences:

#### What We're Losing:

1. **SEO**: Search engines struggle with client-side rendered content. While Google has improved JavaScript execution, pre-rendered content still indexes more reliably and faster.

2. **Web Scrapers/Bots**: Tools like web fetchers, LinkedIn preview crawlers, and social media link preview generators cannot execute JavaScript, so they see "Waking up..." instead of actual portfolio content.

3. **Performance Perception**: Users see "Waking up..." before content loads. Even if loading is fast, it adds a perception delay.

4. **Accessibility**: Screen readers and assistive technologies sometimes struggle with heavily JavaScript-dependent sites.

#### When This Matters:

- ✅ Portfolio needs to rank in search results
- ✅ Sharing links on LinkedIn/Twitter should show rich previews
- ✅ Recruiters/hiring managers might use reader modes or accessibility tools
- ✅ Reaching the widest possible audience is important

#### When It Doesn't Matter:

- ❌ Only sending URLs directly to specific people (they'll see it fine in browsers)
- ❌ Traffic comes primarily from direct outreach, not organic search
- ❌ Showcasing React/frontend skills is the sole purpose of the portfolio

### Current Technical Stack

**Framework & Technology:**
- React 19.2.3 (Client-side SPA)
- Vite 6.2.0 (Build tool)
- React Router DOM 6.21.0 with `HashRouter`
- TypeScript 5.8.2
- Tailwind CSS 4.1.18
- Radix UI components
- @dnd-kit for drag-and-drop

**Build & Deployment:**
- Build output: `/dist` directory
- Deployment: GitHub Pages via GitHub Actions
- Node 20 runtime
- Zero-cost hosting

**Routing Structure:**
```
HashRouter (uses URL hash #)
├── / (public portfolio - isAdmin=false)
├── /admin (protected admin dashboard - requires auth)
├── /admin/login (GitHub OAuth login)
├── /admin/callback (OAuth callback handler)
└── /* (fallback to /)
```

**Key Features:**
- GitHub OAuth authentication (Cloudflare Workers backend)
- Live content editing with instant updates
- GitHub API integration to save changes to repository
- Profile picture cropping
- Responsive layout editor (desktop/mobile views)
- Drag-and-drop card reordering

**Content Management:**
- Content stored in `public/content/data.json`
- Loaded at runtime via fetch
- Editable through admin panel
- Saved back to GitHub repository via API

---

## Recommendation & Justification

### Recommended Solution: Hybrid SSG/CSR with Next.js Static Export

After analyzing the codebase and considering all constraints, the **optimal solution** is:

**Next.js 14 with App Router + Static Export (`output: 'export'`)**

### Option Comparison Matrix

| Feature | **SSR (Next.js on Vercel)** | **Pure SSG (Next.js Export)** | **Hybrid SSG/CSR** ⭐ |
|---------|---------------------------|------------------------------|---------------------|
| **SEO-friendly HTML** | ✅ Excellent | ✅ Excellent | ✅ Excellent |
| **GitHub Pages Compatible** | ❌ No - needs Node.js | ✅ Yes | ✅ Yes |
| **Hosting Cost** | 💰 $20+/month | ✅ Free | ✅ Free |
| **Admin Panel Support** | ✅ Full support | ⚠️ Complex | ✅ Full support |
| **Migration Effort** | 🔴 High (full rewrite) | 🟡 Medium-High | 🟢 Medium |
| **Build Time** | Fast (on-demand) | Fast (static) | Fast (static) |
| **Scalability** | Excellent | Good | Excellent |
| **Maturity** | Very mature | Very mature | Very mature |
| **Initial Load Speed** | ⚡ Fastest | ⚡ Very fast | ⚡ Very fast |
| **Social Previews** | ✅ Perfect | ✅ Perfect | ✅ Perfect |

### Target Architecture

```
┌─────────────────────────────────────────────┐
│  PUBLIC ROUTES (SSG - Pre-rendered HTML)   │
├─────────────────────────────────────────────┤
│  / (portfolio)  →  Static HTML + hydration  │
│  /llms.txt      →  Static file             │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│  ADMIN ROUTES (CSR - Client-side only)     │
├─────────────────────────────────────────────┤
│  /admin         →  Client-side rendering    │
│  /admin/login   →  GitHub OAuth flow       │
│  /admin/callback→  OAuth callback          │
└─────────────────────────────────────────────┘
```

### Why This Solution?

#### ✅ Solves SEO Problem

- Public portfolio page is pre-rendered as static HTML at build time
- Search engines see full content immediately
- Social media crawlers get rich preview data
- No "Waking up..." placeholder for public visitors

#### ✅ Maintains GitHub Pages Hosting

- Next.js `output: 'export'` generates pure static files
- No server runtime needed
- Deploy to `/dist` → GitHub Pages (same as current setup)
- **Zero hosting costs** (critical constraint met)

#### ✅ Preserves Admin Functionality

- Admin routes stay client-side rendered with `'use client'` directive
- GitHub OAuth still works exactly as before
- Live editing, drag-drop, all current features remain intact
- No disruption to existing workflow

#### ✅ Best Performance

- **Public visitors:** Instant HTML load → SEO-friendly
- **Admin users:** Full React app with all interactivity
- Optimized bundle splitting
- Better Core Web Vitals scores

#### ✅ Future-Proof Architecture

**Growth Path:**
```
Current:     Pure CSR (Vite)
    ↓
Step 1:      Hybrid SSG/CSR (Next.js Static Export)  ← RECOMMENDED
    ↓
Step 2:      ISR (Incremental Static Regeneration) if needed
    ↓
Step 3:      Full SSR (if dynamic per-request rendering becomes necessary)
```

### Maturity & Scalability Assessment

#### Maturity: ⭐⭐⭐⭐⭐ (5/5)

- **Next.js**: Industry-standard framework used by Vercel, Netflix, TikTok, Twitch, Nike, Uber
- **Static Export**: Proven pattern with 6+ years of production use
- **Community**: Massive ecosystem, extensive documentation, large developer community
- **Stability**: Long-term support, strong backward compatibility guarantees

#### Scalability: ⭐⭐⭐⭐☆ (4/5)

**Perfect for portfolio because:**
- ✅ Handles portfolio growth (100s of projects easily)
- ✅ Fast build times even with large datasets
- ✅ Can add ISR (Incremental Static Regeneration) later if needed
- ✅ Easy migration path to full SSR if requirements change
- ⚠️ Not optimal for thousands of daily content updates (but portfolio doesn't need this)

### Alternative Considered: Vite-Plugin-SSG

**Lower-effort alternative:**
- vite-plugin-ssr or vite-plugin-ssg
- Stay with current Vite + React stack
- Add pre-rendering plugin
- Generate static HTML for public routes only

**Trade-offs:**
- ✅ Minimal code changes (1-2 days effort)
- ✅ Keep familiar Vite setup
- ⚠️ **Maturity**: ⭐⭐⭐☆☆ (3/5) - Smaller ecosystem
- ⚠️ **Scalability**: ⭐⭐⭐☆☆ (3/5) - Good but less proven
- ⚠️ Less community support, harder to find help
- ⚠️ May require custom meta tag handling

**Verdict:** Not recommended due to lower maturity and less clear migration path.

---

## Migration Strategy

### Overview

The migration will be executed in **4 phases** over **3-4 days**:

1. **Phase 1:** Setup Next.js (Day 1)
2. **Phase 2:** Port Public Portfolio (Day 2-3)
3. **Phase 3:** Port Admin Panel (Day 3-4)
4. **Phase 4:** Update Deployment Pipeline (Day 4)

### Critical Constraints

1. ✅ Must maintain GitHub Pages hosting
2. ✅ Must preserve all admin panel functionality
3. ✅ Must not break existing GitHub OAuth flow
4. ✅ Must maintain zero hosting costs
5. ✅ Must improve SEO and social preview capabilities

### Risk Mitigation

- **Parallel development:** Create migration on a separate branch
- **Feature parity testing:** Verify all existing features work
- **Rollback plan:** Keep current Vite setup intact until full verification
- **Incremental deployment:** Test thoroughly before merging to main

---

## Detailed Implementation Plan

### Phase 1: Setup Next.js (Day 1 - ~4 hours)

#### Step 1.1: Install Next.js Dependencies

```bash
# Install Next.js 14 and required dependencies
npm install next@14 react@18 react-dom@18

# Note: Next.js 14 officially supports React 18
# React 19 support may be experimental - test thoroughly
```

**Action Items:**
- [ ] Install Next.js 14.x.x
- [ ] Downgrade React to 18.x (Next.js 14 stable support)
- [ ] Install required Next.js plugins

**Files to create:**
- `next.config.js` - Next.js configuration
- `app/layout.tsx` - Root layout component
- `app/page.tsx` - Homepage (portfolio)

#### Step 1.2: Configure Next.js for Static Export

Create `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true, // Important for GitHub Pages
}

module.exports = nextConfig
```

**Key configurations:**
- `output: 'export'` - Generates static HTML files
- `images.unoptimized: true` - No server-side image optimization
- `trailingSlash: true` - Ensures GitHub Pages routing works

#### Step 1.3: Configure Tailwind CSS for Next.js

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ... existing theme config
    },
  },
  plugins: [],
}
```

Create `app/globals.css` (move from current `index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Existing custom styles */
```

#### Step 1.4: Update TypeScript Configuration

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### Step 1.5: Create Next.js App Structure

```
keith-vaz-portfolio/
├── app/
│   ├── layout.tsx           # Root layout (replaces index.html)
│   ├── page.tsx             # Homepage (public portfolio)
│   ├── globals.css          # Global styles (Tailwind)
│   ├── admin/
│   │   ├── layout.tsx       # Admin layout
│   │   ├── page.tsx         # Admin dashboard
│   │   ├── login/
│   │   │   └── page.tsx     # Login page
│   │   └── callback/
│   │       └── page.tsx     # OAuth callback
│   └── api/ (not used for static export)
├── components/              # Existing components (reuse)
├── contexts/                # Existing contexts (reuse)
├── lib/                     # Existing utilities (reuse)
├── public/                  # Static assets (keep as-is)
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
├── tsconfig.json            # TypeScript config
└── package.json             # Updated dependencies
```

---

### Phase 2: Port Public Portfolio (Day 2-3 - ~8 hours)

#### Step 2.1: Create Root Layout

Create `app/layout.tsx`:

```tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keith Vaz - Portfolio',
  description: 'Portfolio showcasing projects, experience, and skills',
  openGraph: {
    title: 'Keith Vaz - Portfolio',
    description: 'Portfolio showcasing projects, experience, and skills',
    type: 'website',
    url: 'https://keithvaz.xyz',
    images: [
      {
        url: '/media/profile-picture.jpg', // Update with actual path
        width: 1200,
        height: 630,
        alt: 'Keith Vaz Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keith Vaz - Portfolio',
    description: 'Portfolio showcasing projects, experience, and skills',
    images: ['/media/profile-picture.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
```

**Key additions:**
- SEO-optimized metadata
- OpenGraph tags for social media previews
- Twitter Card meta tags

#### Step 2.2: Create Homepage (Portfolio)

Create `app/page.tsx`:

```tsx
import { PortfolioContent } from '@/components/PortfolioContent'
import { readFileSync } from 'fs'
import { join } from 'path'

// This runs at BUILD TIME for static export
export default async function HomePage() {
  // Read data.json at build time
  const dataPath = join(process.cwd(), 'public', 'content', 'data.json')
  const fileContents = readFileSync(dataPath, 'utf8')
  const portfolioData = JSON.parse(fileContents)

  return <PortfolioContent initialData={portfolioData} isAdmin={false} />
}

// Generate metadata dynamically from portfolio data
export async function generateMetadata() {
  const dataPath = join(process.cwd(), 'public', 'content', 'data.json')
  const fileContents = readFileSync(dataPath, 'utf8')
  const portfolioData = JSON.parse(fileContents)

  // Extract title from heading card if available
  const headingCard = portfolioData.items.find(
    (item: any) => item.type === 'heading'
  )

  return {
    title: headingCard?.title || 'Keith Vaz - Portfolio',
    description: headingCard?.subtitle || 'Portfolio showcasing projects and skills',
  }
}
```

**Key changes:**
- Data is loaded at **build time**, not runtime
- Pre-rendered HTML includes all portfolio content
- Search engines see full content immediately

#### Step 2.3: Refactor App Component

Create `components/PortfolioContent.tsx`:

```tsx
'use client' // Mark as client component for interactivity

import { useState } from 'react'
import BentoCard from './BentoCard'
// ... other imports

interface PortfolioContentProps {
  initialData: PortfolioData
  isAdmin: boolean
}

export function PortfolioContent({ initialData, isAdmin }: PortfolioContentProps) {
  const [portfolioData, setPortfolioData] = useState(initialData)

  // Rest of your existing App.tsx logic
  // - Card rendering
  // - Layout logic
  // - Admin toolbar (if isAdmin)
  // - etc.

  return (
    <div className="min-h-screen bg-background">
      {/* Portfolio content */}
    </div>
  )
}
```

**Key changes:**
- Component receives `initialData` as prop (pre-loaded at build time)
- Client-side interactivity preserved with `'use client'`
- State management remains the same

#### Step 2.4: Update BentoCard Component

Minimal changes needed - ensure it's marked as client component if using interactivity:

```tsx
'use client'

// Rest of BentoCard.tsx remains the same
```

---

### Phase 3: Port Admin Panel (Day 3-4 - ~8 hours)

#### Step 3.1: Create Admin Layout

Create `app/admin/layout.tsx`:

```tsx
import { AuthProvider } from '@/contexts/AuthContext'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthProvider>{children}</AuthProvider>
}
```

#### Step 3.2: Create Admin Dashboard

Create `app/admin/page.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'
import { PortfolioContent } from '@/components/PortfolioContent'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()
  const [portfolioData, setPortfolioData] = useState(null)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, loading, router])

  useEffect(() => {
    // Load portfolio data client-side for admin
    fetch('/content/data.json')
      .then((res) => res.json())
      .then(setPortfolioData)
  }, [])

  if (loading || !portfolioData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <PortfolioContent initialData={portfolioData} isAdmin={true} />
}
```

#### Step 3.3: Create Login Page

Create `app/admin/login/page.tsx`:

```tsx
'use client'

import { LoginPage } from '@/components/LoginPage'

export default function AdminLoginPage() {
  return <LoginPage />
}
```

**LoginPage component remains unchanged** - it's already a client component.

#### Step 3.4: Create OAuth Callback Handler

Create `app/admin/callback/page.tsx`:

```tsx
'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function CallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()

  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (code && state) {
      // Handle OAuth callback (existing logic from current implementation)
      handleOAuthCallback(code, state)
    }
  }, [searchParams])

  async function handleOAuthCallback(code: string, state: string) {
    try {
      // Exchange code for token via Cloudflare Worker
      // (Existing OAuth logic)
      const token = await exchangeCodeForToken(code, state)

      // Store token and update auth state
      login(token)

      // Redirect to admin dashboard
      router.push('/admin')
    } catch (error) {
      console.error('OAuth callback error:', error)
      router.push('/admin/login?error=auth_failed')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-lg">Authenticating...</div>
    </div>
  )
}
```

#### Step 3.5: Update AuthContext for Next.js

Update `contexts/AuthContext.tsx`:

```tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation' // Changed from react-router-dom

// Rest of AuthContext implementation remains largely the same
// Key changes:
// - Use Next.js router instead of React Router
// - Use usePathname() instead of useLocation()
// - Update redirect logic for Next.js routing
```

#### Step 3.6: Update ProtectedRoute Component

Update `components/ProtectedRoute.tsx`:

```tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
```

---

### Phase 4: Update Deployment Pipeline (Day 4 - ~2 hours)

#### Step 4.1: Update package.json Scripts

Update `package.json`:

```json
{
  "name": "keith-vaz-portfolio",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "generate-llms": "node scripts/generate-llms-txt.js",
    "prebuild": "npm run generate-llms",
    "export": "next build"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.562.0",
    "react-easy-crop": "^5.5.6",
    "tailwind-merge": "^3.4.0",
    "uuid": "^13.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^22.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.23",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18",
    "typescript": "~5.8.2"
  }
}
```

**Key changes:**
- Remove Vite dependencies
- Add Next.js and required types
- Update scripts to use Next.js commands

#### Step 4.2: Update GitHub Actions Workflow

Update `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Next.js site
        run: npm run build
        env:
          VITE_GITHUB_CLIENT_ID: ${{ vars.VITE_GITHUB_CLIENT_ID }}
          NEXT_PUBLIC_GITHUB_CLIENT_ID: ${{ vars.VITE_GITHUB_CLIENT_ID }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out' # Next.js static export outputs to 'out' directory

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Key changes:**
- Change artifact path from `./dist` to `./out`
- Add `NEXT_PUBLIC_` prefix for environment variables (Next.js convention)
- Add npm cache for faster builds

#### Step 4.3: Update .gitignore

Update `.gitignore`:

```
# Dependencies
node_modules/

# Next.js build outputs
.next/
out/

# Legacy Vite build (remove after migration)
dist/

# Environment variables
.env
.env.local
.env.production.local

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

#### Step 4.4: Create .nojekyll File

Ensure `.nojekyll` exists in `public/` directory (for GitHub Pages):

```bash
touch public/.nojekyll
```

This prevents GitHub Pages from processing the site with Jekyll.

#### Step 4.5: Update 404.html for Next.js

Update `public/404.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/">
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to homepage...</p>
</body>
</html>
```

**Note:** Next.js static export handles 404s differently - this redirects to homepage.

---

## Code Examples & Configuration

### Example: Complete app/layout.tsx

```tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://keithvaz.xyz'),
  title: {
    default: 'Keith Vaz - Portfolio',
    template: '%s | Keith Vaz',
  },
  description: 'Portfolio showcasing projects, experience, and skills in software engineering',
  keywords: ['portfolio', 'software engineer', 'developer', 'projects'],
  authors: [{ name: 'Keith Vaz' }],
  creator: 'Keith Vaz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keithvaz.xyz',
    siteName: 'Keith Vaz Portfolio',
    title: 'Keith Vaz - Portfolio',
    description: 'Portfolio showcasing projects, experience, and skills in software engineering',
    images: [
      {
        url: '/media/profile-picture.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Vaz Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keith Vaz - Portfolio',
    description: 'Portfolio showcasing projects, experience, and skills',
    images: ['/media/profile-picture.jpg'],
    creator: '@keithvaz', // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
```

### Example: Complete next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Important for GitHub Pages routing
  trailingSlash: true,

  // If deploying to a subdirectory, set basePath
  // basePath: '/portfolio',

  // Disable TypeScript and ESLint checks during build (optional)
  // typescript: {
  //   ignoreBuildErrors: false,
  // },
  // eslint: {
  //   ignoreDuringBuilds: false,
  // },

  // Compress output
  compress: true,

  // React strict mode
  reactStrictMode: true,

  // Experimental features (optional)
  experimental: {
    optimizeCss: true, // Optimize CSS output
  },
}

module.exports = nextConfig
```

### Example: Environment Variables Setup

Create `.env.local` (for local development):

```env
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_oauth_client_id
NEXT_PUBLIC_OAUTH_REDIRECT_URI=http://localhost:3000/admin/callback
NEXT_PUBLIC_CLOUDFLARE_WORKER_URL=https://your-worker.workers.dev
```

Create `.env.production` (for production build):

```env
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_production_github_oauth_client_id
NEXT_PUBLIC_OAUTH_REDIRECT_URI=https://keithvaz.xyz/admin/callback
NEXT_PUBLIC_CLOUDFLARE_WORKER_URL=https://your-worker.workers.dev
```

**Note:** Next.js requires `NEXT_PUBLIC_` prefix for client-side environment variables.

### Example: Data Loading in Public Page

```tsx
// app/page.tsx
import { PortfolioContent } from '@/components/PortfolioContent'
import type { PortfolioData } from '@/types'
import { promises as fs } from 'fs'
import path from 'path'

// This function runs at BUILD TIME
async function getPortfolioData(): Promise<PortfolioData> {
  const filePath = path.join(process.cwd(), 'public', 'content', 'data.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export default async function HomePage() {
  const portfolioData = await getPortfolioData()

  return (
    <main>
      <PortfolioContent initialData={portfolioData} isAdmin={false} />
    </main>
  )
}

// Generate metadata from portfolio data
export async function generateMetadata() {
  const portfolioData = await getPortfolioData()
  const headingCard = portfolioData.items.find(item => item.type === 'heading')

  return {
    title: headingCard?.title || 'Keith Vaz - Portfolio',
    description: headingCard?.subtitle || 'Portfolio showcase',
  }
}
```

---

## Testing & Validation

### Pre-Migration Testing Checklist

- [ ] Document all current features and functionality
- [ ] Test current OAuth flow and admin panel features
- [ ] Capture screenshots of current portfolio layout
- [ ] Document current build and deployment process
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices

### Post-Migration Testing Checklist

#### Functionality Testing

**Public Portfolio:**
- [ ] Portfolio page loads and displays all content
- [ ] All images load correctly
- [ ] All links work correctly
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] No console errors in browser
- [ ] Page loads without "Waking up..." placeholder

**Admin Panel:**
- [ ] Can access admin login page
- [ ] GitHub OAuth login works
- [ ] OAuth callback redirects correctly
- [ ] Admin dashboard loads after authentication
- [ ] Can edit card content
- [ ] Can reorder cards via drag-and-drop
- [ ] Can upload and crop profile picture
- [ ] Changes save to GitHub repository
- [ ] Can log out successfully

#### SEO & Performance Testing

**SEO Validation:**
- [ ] Run Lighthouse SEO audit (target score: 95+)
- [ ] Verify meta tags in page source (view-source:)
- [ ] Test with Google Rich Results Test
- [ ] Verify OpenGraph tags with Facebook Debugger
- [ ] Verify Twitter Card with Twitter Card Validator
- [ ] Check robots.txt accessibility
- [ ] Verify sitemap.xml generation (if applicable)

**Performance Validation:**
- [ ] Run Lighthouse performance audit (target score: 90+)
- [ ] Measure First Contentful Paint (FCP) - target: <1.8s
- [ ] Measure Largest Contentful Paint (LCP) - target: <2.5s
- [ ] Measure Cumulative Layout Shift (CLS) - target: <0.1
- [ ] Measure Time to Interactive (TTI) - target: <3.8s
- [ ] Test on slow 3G network (Chrome DevTools throttling)

**Social Media Preview Testing:**
- [ ] Share link on LinkedIn - verify preview shows correctly
- [ ] Share link on Twitter - verify card shows correctly
- [ ] Share link on Facebook - verify preview shows correctly
- [ ] Test link in messaging apps (WhatsApp, Slack, Discord)

#### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

#### Build & Deployment Testing

- [ ] Local build completes without errors: `npm run build`
- [ ] Local preview works: `npm run start`
- [ ] Static export generates correct files in `/out`
- [ ] GitHub Actions workflow completes successfully
- [ ] Deployed site loads correctly on GitHub Pages
- [ ] Custom domain routing works (if applicable)
- [ ] HTTPS certificate works correctly

---

## Rollback Plan

### If Critical Issues Arise

**Step 1: Immediate Rollback**

```bash
# Switch back to main branch
git checkout main

# Force push main to deployment (if needed)
git push origin main --force

# Or merge previous working commit
git reset --hard <previous-working-commit-sha>
git push origin main --force
```

**Step 2: Restore Vite Configuration**

If migration branch has issues, the main branch retains the working Vite setup.

**Step 3: Document Issues**

- Log all errors encountered
- Capture screenshots of broken functionality
- Document steps to reproduce
- Create GitHub issues for tracking

### Gradual Migration Alternative

If full migration is too risky:

1. **Deploy both versions in parallel:**
   - Keep Vite version at `keithvaz.xyz`
   - Deploy Next.js version at `next.keithvaz.xyz` (subdomain)
   - Test thoroughly on subdomain
   - Switch DNS when ready

2. **Feature flags:**
   - Add feature flag to toggle between old/new rendering
   - Gradually enable for percentage of users
   - Monitor errors and performance

---

## Post-Migration Checklist

### Immediate Tasks (Day 1 after deployment)

- [ ] Monitor GitHub Actions for successful deployments
- [ ] Check error logs for any runtime errors
- [ ] Verify analytics tracking still works (if applicable)
- [ ] Test admin panel thoroughly in production
- [ ] Monitor performance metrics

### Week 1 Tasks

- [ ] Submit new sitemap to Google Search Console
- [ ] Request re-indexing of portfolio page
- [ ] Monitor search engine indexing progress
- [ ] Check social media preview rendering
- [ ] Gather user feedback (if sharing with others)
- [ ] Monitor Core Web Vitals in production

### Week 2-4 Tasks

- [ ] Analyze SEO improvements in Google Search Console
- [ ] Compare before/after analytics metrics
- [ ] Document any new issues or improvements needed
- [ ] Optimize images if needed (WebP, compression)
- [ ] Add structured data (JSON-LD) if beneficial

### Cleanup Tasks

- [ ] Remove old Vite configuration files
- [ ] Remove `index.html` from root
- [ ] Remove Vite-specific dependencies
- [ ] Update documentation and README
- [ ] Archive migration branch (or delete if merged)
- [ ] Remove `dist/` references from .gitignore

---

## Additional Considerations

### React 19 Compatibility

**Note:** Next.js 14 officially supports React 18. React 19 support may be experimental.

**Options:**
1. **Recommended:** Downgrade to React 18 for stable Next.js 14 support
2. **Alternative:** Wait for Next.js 15 (stable React 19 support)
3. **Experimental:** Test with React 19 using Next.js canary builds

**Migration Path:**
```bash
# Downgrade to React 18 (recommended for stability)
npm install react@18.3.1 react-dom@18.3.1 @types/react@18.3.0 @types/react-dom@18.3.0
```

### OAuth Redirect URI Updates

**Current:** `https://keithvaz.xyz/#/admin/callback` (hash-based)
**New:** `https://keithvaz.xyz/admin/callback` (clean URL)

**Action Required:**
- [ ] Update GitHub OAuth App redirect URI settings
- [ ] Update Cloudflare Worker allowed redirect URIs
- [ ] Test OAuth flow with new URLs

### Environment Variables Migration

**Current:** `VITE_*` prefix
**New:** `NEXT_PUBLIC_*` prefix

**Files to update:**
- [ ] `.env.local`
- [ ] `.env.production`
- [ ] GitHub Actions workflow
- [ ] All code references to `import.meta.env.VITE_*`

**Find and replace:**
```bash
# Find all Vite env var references
grep -r "VITE_" --include="*.tsx" --include="*.ts"

# Replace with Next.js equivalent
# VITE_GITHUB_CLIENT_ID → NEXT_PUBLIC_GITHUB_CLIENT_ID
```

### Performance Optimization Opportunities

After migration, consider:

1. **Image Optimization:**
   - Use Next.js `<Image>` component (requires server, not available in static export)
   - Or use external image CDN (Cloudinary, Imgix)
   - Or manually optimize images (WebP, compression)

2. **Code Splitting:**
   - Next.js automatically code-splits by route
   - Consider dynamic imports for heavy components
   - Use `next/dynamic` for client-only components

3. **Font Optimization:**
   - Use `next/font` for automatic font optimization
   - Self-host fonts to reduce external requests

4. **Bundle Analysis:**
   ```bash
   npm install @next/bundle-analyzer
   ```
   - Analyze bundle size
   - Identify optimization opportunities

### Monitoring & Analytics

**Recommended tools to add:**

1. **Web Vitals Monitoring:**
   ```tsx
   // app/layout.tsx
   import { Analytics } from '@vercel/analytics/react'

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

2. **Error Tracking:**
   - Sentry for error monitoring
   - LogRocket for session replay

3. **Performance Monitoring:**
   - Google Lighthouse CI
   - WebPageTest
   - Chrome User Experience Report

---

## Timeline Summary

| Phase | Duration | Tasks | Deliverables |
|-------|----------|-------|--------------|
| **Phase 1: Setup** | 4 hours | Install Next.js, configure, create structure | Working Next.js dev environment |
| **Phase 2: Public Portfolio** | 8 hours | Port homepage, add SEO, test rendering | Pre-rendered public portfolio |
| **Phase 3: Admin Panel** | 8 hours | Port admin routes, test OAuth, verify features | Fully functional admin panel |
| **Phase 4: Deployment** | 2 hours | Update CI/CD, deploy, verify | Production deployment |
| **Testing & QA** | 4 hours | Cross-browser, SEO, performance testing | Validated production site |
| **Total** | **26 hours** (3-4 days) | | Fully migrated portfolio |

---

## Success Metrics

### Technical Metrics

- ✅ Lighthouse SEO score: **95+**
- ✅ Lighthouse Performance score: **90+**
- ✅ First Contentful Paint: **< 1.8s**
- ✅ Largest Contentful Paint: **< 2.5s**
- ✅ Cumulative Layout Shift: **< 0.1**
- ✅ Total Blocking Time: **< 200ms**

### Functional Metrics

- ✅ All existing features work identically
- ✅ Admin panel fully functional
- ✅ Zero broken links or images
- ✅ OAuth authentication works
- ✅ GitHub API integration works

### SEO Metrics (measured after 2-4 weeks)

- ✅ Portfolio indexed by Google
- ✅ Rich snippets appear in search results
- ✅ Social media previews render correctly
- ✅ Organic search traffic increases

---

## Conclusion

This migration plan provides a comprehensive path from the current pure CSR architecture to a hybrid SSG/CSR solution using Next.js. The approach:

- ✅ **Solves the SEO problem** while preserving all functionality
- ✅ **Maintains zero hosting costs** via GitHub Pages
- ✅ **Uses mature, industry-standard technology** (Next.js)
- ✅ **Provides a clear growth path** for future enhancements
- ✅ **Minimizes risk** through phased implementation and testing

The estimated **3-4 day timeline** is realistic for a developer familiar with React and TypeScript. The investment will pay dividends in improved discoverability, professional presentation, and better user experience.

---

## Questions & Support

If issues arise during migration:

1. **Next.js Documentation:** https://nextjs.org/docs
2. **Next.js Static Export Guide:** https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
3. **GitHub Pages + Next.js:** https://github.com/vercel/next.js/tree/canary/examples/github-pages
4. **Stack Overflow:** Tag questions with `next.js` and `github-pages`

---

**Document Version:** 1.0
**Last Updated:** January 17, 2026
**Author:** AI Assistant
**Status:** Ready for Implementation
