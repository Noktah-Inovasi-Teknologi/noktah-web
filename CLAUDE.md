# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Noktah Inovasi Teknologi**, built with Nuxt 4 and configured with NuxtHub for deployment. The project showcases Noktah's cross-field innovation approach and brand portfolio including Eskala, Memomancy, Fieldpass, and Heavy Station.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate
```

## Architecture

- **Framework**: Nuxt 4 with Vue 3.5
- **UI Framework**: Nuxt UI (built on Tailwind CSS)
- **Package Manager**: pnpm 10.7.0
- **Deployment**: NuxtHub Core (Cloudflare Workers)
- **TypeScript**: Configured with Nuxt's TypeScript setup
- **Styling**: Tailwind CSS with custom glassmorphism design system
- **Icons**: Heroicons and Simple Icons

### Project Structure

```
app/
  app.vue                 # Root application component
  pages/
    index.vue            # Main landing page with all sections
  components/
    AppNavbar.vue        # Navigation header with glassmorphism
  assets/
    # Custom stylesheets and images
public/
  favicon.ico
  robots.txt
  images/
    noktah-logo.png      # Company logo
nuxt.config.ts           # Nuxt configuration
CLAUDE.md               # This file
```

## Key Configuration

- **Nuxt Config**: Located at `nuxt.config.ts`, includes NuxtHub and Nuxt UI modules
- **TypeScript**: Uses Nuxt's built-in TypeScript configuration
- **Workspace**: pnpm workspace configured for monorepo
- **Routing**: File-based routing with pages directory
- **Color Mode**: Dark/light mode toggle implemented
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Current Implementation

### Website Sections
1. **Hero Section** - Full-screen intro with company logo and tagline
2. **About/Vision** - "Built to Innovate" with company values (Bold, Creative, Adaptable, Innovative)
3. **Brand Portfolio** - Interactive filtered showcase of 4 brands:
   - **Eskala** (https://eskala.id) - Professional creative partner with AI agents
   - **Memomancy** (https://memomancy.com) - Photography services
   - **Fieldpass** (https://fieldpass.co) - Sports reservation app (in development)
   - **Heavy Station** (https://heavystation.id) - PC hardware brand (in development)
4. **Cross-Field Innovation** - "Where Industries Meet" with technology categories
5. **For Different Audiences** - Customer/Partner/Talent sections with routing
6. **Culture/Values** - Company culture and innovation approach
7. **Footer** - Complete company information, social links, and legal pages

### Design System
- **Glassmorphism**: Consistent glass-effect styling with backdrop-blur and transparency
- **Pill Shapes**: Rounded-full buttons and high-radius containers (rounded-3xl)
- **Smooth Transitions**: Seamless gradient flows between all sections
- **Interactive Filtering**: Animated brand filtering with Vue transitions
- **External Link Indicators**: Arrow icons for all external links
- **Responsive Grid Layouts**: Mobile-first design approach

### Company Information
- **Full Name**: Noktah Inovasi Teknologi
- **Parent Company**: CV. Amerta Meta Data
- **Address**: Bukit Menganti Regency C-10, Boteng, Menganti, Gresik, Jawa Timur, Indonesia 61174
- **Email**: core@noktah.co
- **Phone/WhatsApp**: +62 851-7301-7749
- **Social Media**: Instagram (@noktah.it), LinkedIn (company/noktah-inovasi-teknologi)

### Navigation Structure
- **Main Nav**: Home, About Us, Brands, Contact Us
- **Brand Links**: All brands link to their respective websites
- **Legal Pages**: Privacy Policy, Terms of Service (routes to be implemented)

## Development Notes

- **Brand Filtering**: Interactive Vue transitions with staggered animations
- **External Links**: All brand and social links open in new tabs with visual indicators
- **Theme Support**: Full dark/light mode compatibility
- **Performance**: Optimized gradients and CSS animations
- **Glassmorphism**: Custom styling system for consistent glass effects
- **Brand Accuracy**: Eskala description updated to reflect professional-grade + AI approach
- **Clean Design**: Removed status badges, category tags for minimalist approach

## Future Routes to Implement
- `/about` - About Us page
- `/brands` - Brand portfolio page
- `/contact` - Contact form page
- `/privacy-policy` - Privacy policy page
- `/terms-of-service` - Terms of service page