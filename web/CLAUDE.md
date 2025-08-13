# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Nuxt 3 application. Use these commands for development:

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally
- `npm install` - Install dependencies

## Architecture Overview

This is a single-page Nuxt 3 application for "Noktah Inovasi Teknologi" company website.

### Technology Stack
- **Framework**: Nuxt 3 (Vue 3 with TypeScript support)
- **UI Library**: PrimeVue 4.2.5 with theme disabled (`theme: "none"`)
- **Styling**: Tailwind CSS 3.4.17 with custom TailwindCSS PrimeUI plugin
- **Build Tools**: PostCSS with autoprefixer and postcss-import

### Project Structure
- `app.vue` - Main application component containing the entire website content
- `assets/styles/` - Custom CSS including base styles and extensive PrimeVue component overrides
- `nuxt.config.ts` - Nuxt configuration with PrimeVue module and PostCSS setup
- `tailwind.config.js` - Tailwind configuration with PrimeUI plugin
- `public/` - Static assets (favicon, robots.txt)

### Key Design Patterns
- Single-page application with all content in `app.vue`
- Uses Composition API with `<script setup>`
- Custom styling approach: PrimeVue components with Tailwind classes and extensive CSS overrides
- Responsive design with Tailwind utility classes
- Custom color scheme with `#F2EFE9` background and black accents

### Styling Architecture
The application uses a hybrid approach:
- PrimeVue components with disabled theming
- Tailwind CSS for layout and utilities
- Extensive custom CSS overrides in `assets/styles/primevue/` for each PrimeVue component
- Custom base styles in `assets/styles/base.css`

### Current Implementation
The main page displays company information with sections for branding, about, history, and values. The layout uses Tailwind flexbox classes for responsive design with a distinctive visual style featuring large typography and custom dividers.