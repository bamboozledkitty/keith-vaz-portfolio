# Keith Vaz Portfolio

A personal bento-style portfolio showcasing design systems work, apps, visual design samples, and ideas.

## Features

- 🎨 **Bento-style Grid**: A modular layout inspired by [bento.me](https://bento.me), featuring drag-and-drop customization.
- 📱 **Responsive Design**: Fluid transitions between desktop and mobile layouts.
- 🔐 **Admin Interface**: A secure dashboard for real-time content management, built with GitHub OAuth and Cloudflare Workers.
- 🔍 **SEO & AI Ready**: Statically generated (SSG) for instant loading, full search engine visibility, and LLM discoverability via `llms.txt`.
- 🚀 **Automation**: CI/CD pipeline with GitHub Actions for automated static export and deployment.

## Design Inspiration

This project is a tribute to the original [bento.me](https://bento.me). When they announced their shutdown, I wanted to preserve that unique "digital garden" feel and modular layout for my own work. This portfolio is an implementation of that aesthetic, built from scratch to be self-hosted and fully customizable.

## Tech Stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI
- **Drag & Drop**: @dnd-kit
- **Backend/Auth**: Cloudflare Workers, GitHub OAuth
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Live Site

View the live portfolio: [keithvaz.xyz](https://keithvaz.xyz/)

