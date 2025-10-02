# GressPro Privacy Site

A modern, high-performance landing page for GressPro built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router for optimal performance
- **Framer Motion** for smooth, accessible animations
- **Tailwind CSS** with custom animations and responsive design
- **TypeScript** for type safety
- **Optimized images** with Next.js Image component
- **Mobile-first** responsive design
- **Accessibility** features including reduced motion support
- **Performance optimized** with lazy loading and code splitting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static export ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

1. Build for production:
```bash
npm run build
```

2. Analyze bundle size:
```bash
npm run analyze
```

3. Start production server:
```bash
npm start
```

## Performance Features

- **Minimal JavaScript on first load** - Server-side rendering for static content
- **Lazy loading** - Heavy components loaded on demand
- **CSS-powered transitions** - GPU-accelerated animations
- **Optimized images** - WebP/AVIF support with Next.js Image
- **Bundle optimization** - Tree-shaking and code splitting
- **Mobile-first** - Responsive design with graceful degradation

## Animation Guidelines

- Staggered animations for better UX
- Respects `prefers-reduced-motion`
- GPU-accelerated transforms only
- Performance-tested on mid-tier devices

## Color Scheme

- **Background**: `#0b0b0f` (Dark)
- **Brand**: `#60a5fa` (Blue)
- **Foreground**: `#f8fafc` (Light)
- **Muted**: `#64748b` (Gray)

## Pages

- `/` - Home page with hero, features, and CTA
- `/privacy` - Privacy policy
- `/support` - Support contact
- `/confirmed` - Email confirmation page
