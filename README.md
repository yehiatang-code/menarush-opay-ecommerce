# MENARUSH.TECH Website

A modern, multi-page corporate website for MENARUSH.TECH built with Next.js 14 (App Router), featuring bilingual support (English/Arabic) with full RTL layout support.

## Features

- 🌐 **Bilingual Support**: English (LTR) and Arabic (RTL) with locale-based routing
- 🎨 **Modern Design**: Clean, minimal, Apple-style design with dark tech color palette
- 📱 **Responsive**: Fully responsive design for desktop, tablet, and mobile
- ⚡ **Performance**: Built with Next.js 14 App Router for optimal performance
- 🎯 **SEO Friendly**: Optimized structure for search engines

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: 
  - English: Inter
  - Arabic: Noto Sans Arabic

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-based routes
│   │   ├── layout.tsx      # Locale layout with Header/Footer
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About Us page
│   │   ├── services/       # Service Project page
│   │   └── contact/        # Connect Us page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── ContactForm.tsx     # Contact form component
├── locales/
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
└── lib/
    └── i18n.ts             # Internationalization utilities
```

## Pages

- **Home** (`/en` or `/ar`): Hero page with company overview
- **About Us** (`/en/about` or `/ar/about`): Company information and mission
- **Service Project** (`/en/services` or `/ar/services`): Detailed service offerings
- **Connect Us** (`/en/contact` or `/ar/contact`): Contact form

## Building for Production

```bash
npm run build
npm start
```

## Code Quality

- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for styling
- Responsive design patterns

## Known Issues

- TypeScript linter errors will be resolved after running `npm install`
- Contact form currently uses a mock submission (TODO: implement backend API)

## License

© MENARUSH.TECH – Egypt


