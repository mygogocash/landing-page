# GoGoCash Landing Page

A modern, premium landing page built with Next.js 15, TypeScript, and Tailwind CSS, following the **Lucid Precision Framework** design system.

## Features

- 🎨 **Lucid Precision Framework** - Premium design system with tonal architecture
- ⚡ **Next.js 15** - App Router with Server Components
- 🎯 **TypeScript** - Full type safety
- 💅 **Tailwind CSS** - Utility-first styling with custom design tokens
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - Semantic HTML and ARIA labels

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Design System

This project follows the **Lucid Precision Framework** (see `DESIGN.md`):

- **No 1px borders** - Use background shifts for sectioning
- **Tonal Architecture** - Create hierarchy through color values
- **Glassmorphism** - For navigation and overlays
- **Ambient Shadows** - Subtle, color-matched shadows
- **Editorial Typography** - Generous spacing and clean fonts

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles & design tokens
├── components/
│   ├── header.tsx       # Navigation header
│   └── footer.tsx      # Footer with links
└── .cursor/
    └── rules/          # Cursor AI rules
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Fonts:** Noto Sans (with Thai support)
