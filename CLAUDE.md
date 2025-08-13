# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 application configured with NuxtHub for deployment. The project uses pnpm as the package manager and follows a minimal starter structure.

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
- **Package Manager**: pnpm 10.7.0
- **Deployment**: NuxtHub Core (Cloudflare Workers)
- **TypeScript**: Configured with Nuxt's TypeScript setup

### Project Structure

```
app/
  app.vue           # Root application component
public/             # Static assets
  favicon.ico
  robots.txt
nuxt.config.ts      # Nuxt configuration
```

## Key Configuration

- **Nuxt Config**: Located at `nuxt.config.ts`, includes NuxtHub module
- **TypeScript**: Uses Nuxt's built-in TypeScript configuration with references to generated tsconfig files
- **Workspace**: pnpm workspace configured for monorepo with specific build dependencies (esbuild, sharp, workerd)

## Development Notes

- The application currently shows the default Nuxt welcome page
- NuxtHub is configured for Cloudflare deployment with Wrangler
- DevTools are enabled in development mode
- Uses modern Vue 3 Composition API patterns