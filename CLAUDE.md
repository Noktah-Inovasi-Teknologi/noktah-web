# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Noktah Inovasi Teknologi**, built with Nuxt 4. The project showcases Noktah's cross-field innovation approach and brand portfolio: Eskala and Venyu.

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

- **Nuxt Config**: Located at `nuxt.config.ts`, includes the Nuxt UI module
- **TypeScript**: Uses Nuxt's built-in TypeScript configuration
- **Workspace**: pnpm workspace configured for monorepo
- **Routing**: File-based routing with pages directory
- **Color Mode**: Dark/light mode toggle implemented
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Current Implementation

### Website Sections
1. **Hero Section** - Full-screen intro with company logo and tagline
2. **About/Vision** - "Built to Innovate" with company values (Bold, Creative, Adaptable, Innovative)
3. **Brand Portfolio** - Showcase of 2 brands:
   - **Eskala** (https://eskala.id) - Digital marketing for healthcare facilities: social media management and paid advertising, grounded in Indonesian health regulations
   - **Venyu** (https://venyu.co.id) - Scheduling and booking management for sports venues: schedules, bookings, subscriptions, members, payments
4. **Cross-Field Innovation** - "Where Industries Meet" with technology categories
5. **For Different Audiences** - Customer/Partner/Talent sections with routing
6. **Culture/Values** - Company culture and innovation approach
7. **Footer** - Complete company information, social links, and legal pages

### Design System

A Liquid Glass material system lives in `app/assets/css/glass.css`. Use the
classes below rather than hand-rolling glass from utilities — the previous
approach repeated a four-class recipe 72 times with no saturation, which is
why it never read as glass.

- **`.glass`** — the default panel material (blur + saturate + tint + specular edge)
- **`.glass-thin`** — chips/badges and anything nested *on* glass (nested backdrop-filters compound)
- **`.glass-thick`** — nav bars and sheets that must stay legible over scrolling content
- **`.glass-interactive`** — adds the hover lift (brighter + 2px closer; never scale)

Constraints to respect when editing:

1. **Sections must stay transparent.** `AmbientField.vue` renders one fixed,
   drifting colour field behind the whole page. `backdrop-filter` can only blur
   what is behind it, so an opaque section background kills every panel above it.
2. **The glass rules are deliberately unlayered CSS.** Nuxt UI's `bg-default`
   lives in `@layer utilities` and would otherwise outrank the material.
3. **The edge is an inset ring in `box-shadow`, not `border`** — that leaves the
   `border-*` utilities free for brand-specific card styling.
4. Tokens are CSS variables (`--glass-tint`, `--glass-blur`, `--glass-saturate`, …)
   redefined under `.dark`. Light glass is *more* opaque than dark glass, not less.
5. Fallbacks exist for `prefers-reduced-transparency`, `prefers-reduced-motion`, and
   browsers without `backdrop-filter`. Keep them working.

**Backdrop — `app/assets/css/blueprint.css` + `AmbientField.vue`.** The backdrop
reads as a drafting sheet, not a lava lamp: a neutral luminance wash, a ruled
64px/256px grid, registration crosshairs, and square scaffolding that traces
itself in and dissolves. It is deliberately monochrome.

- The **hero's breathing circle is the only saturated colour on the site.**
  That is the point — keep it, and keep everything else neutral so it stays
  the focal moment.
- The luminance wash is **not decoration**. Fine linework is smeared to flat
  grey by a 20px backdrop blur, so the wash is the only thing the glass panels
  actually have to refract. Remove it and the glass goes flat.
- Do **not** reintroduce per-section decorative blobs. There used to be 15 such
  wrappers duplicated across the pages (three shipping a colliding SVG
  `id="dots"`); one global backdrop replaces all of them.
- Brand-coloured glows inside the brand cards on `/brands` are brand identity,
  not ambient decoration, and are intentionally kept.


Other conventions: pill shapes (rounded-full / rounded-2xl), interactive brand
filtering with Vue transitions, arrow icons on external links, mobile-first grids.


### Company Information
- **Full Name**: Noktah Inovasi Teknologi
- **Parent Company**: CV. Amerta Meta Data
- **Address**: Jl. Perumnas Seturan No. 279, Kledokan, Caturtunggal, Kec. Depok, Kab. Sleman, Yogyakarta, Indonesia 55281
- **Email**: core@noktah.co
- **Phone/WhatsApp**: +62 851 9098 0511
- **Social Media**: Instagram (@noktah.it), LinkedIn (company/noktah-it)

### Navigation Structure
- **Main Nav**: Home, About Us, Brands, Contact Us
- **Brand Links**: All brands link to their respective websites
- **Legal Pages**: Privacy Policy, Terms of Service (routes to be implemented)

## Internationalisation

The site ships **Bahasa Indonesia (default) and English**, via `@nuxtjs/i18n`.

- **URLs:** Indonesian is the default and carries no prefix — `noktah.co/about`.
  English lives under `/en` — `noktah.co/en/about` (`strategy: prefix_except_default`).
- **Detection:** the browser's `Accept-Language` header, **not IP geolocation**. IP
  needs a third-party lookup, is wrong for VPN users and the diaspora, and varies
  per request in a way that breaks caching and prerendering. A visitor's explicit
  choice is stored in the `noktah_lang` cookie and wins from then on.
- **Copy is written natively in each language, not machine-translated.** When adding
  copy, write the Indonesian as Indonesian — do not translate the English string.
  The legal pages use real Indonesian statutory names (KUHPerdata, UU ITE, UU PDP
  No. 27 Tahun 2022, BPSK), which a translation would mangle.

### Where the strings live

`i18n/locales/<id|en>/{common,home,about,brands,contact,privacy,terms}.json` — split
per page because 4,000+ words in one blob is unreviewable. Both locales must stay at
identical key parity.

### Gotchas that have already bitten

1. **`@` is special in vue-i18n messages.** A bare email address in a message
   (`your.email@example.com`) is parsed as a linked-message reference and throws at
   render time. Escape it: `your.email{'@'}example.com`.
2. **Headings with a coloured accent word use `<i18n-t>` with an `{accent}` slot,**
   not two concatenated strings — Indonesian puts the accent in a different position
   ("Built to **Innovate**" vs "Lahir untuk **Berinovasi**"; "Our **Culture** of
   Innovation" vs "**Budaya** Inovasi Kami").
3. **Lists, FAQ entries and select options must be `computed()`,** not plain arrays,
   or they keep stale strings after a language switch without a reload.
4. Per-locale `<html lang>`, canonical and hreflang come from `useLocaleHead()` in
   `app.vue`. Do not reintroduce a hardcoded `canonical` in `nuxt.config.ts` — the
   previous one pointed every page at the homepage.

## Development Notes

- **Brand Filtering**: Interactive Vue transitions with staggered animations
- **External Links**: All brand and social links open in new tabs with visual indicators
- **Theme Support**: Full dark/light mode compatibility
- **Performance**: Optimized gradients and CSS animations
- **Glassmorphism**: Custom styling system for consistent glass effects
- **Brand Accuracy**: Eskala description updated to reflect professional-grade + AI approach
- **Clean Design**: Removed status badges, category tags for minimalist approach
