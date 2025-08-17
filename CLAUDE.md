# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Run linting**: `npm run lint`

## Project Architecture

This is a Next.js 15 application built with TypeScript and Tailwind CSS v4. The site serves as a modern portfolio website for Luo Yuhan (luoyuhan.com) with a futuristic monospace aesthetic.

### Key Structure

- **App Router**: Uses Next.js 15 App Router with all pages in `src/app/`
- **Components**: Modern portfolio components in `src/app/components/`
  - `Header.tsx`: Profile image, name, and website header
  - `LinkTree.tsx`: Social media and professional links with icons
  - `About.tsx`: Personal bio and technology stack showcase
- **Fonts**: JetBrains Mono and Inter fonts from Google Fonts
- **Styling**: Tailwind CSS v4 with Apple-inspired design system

### Technology Stack

- **Framework**: Next.js 15.2.1 with React 19
- **Styling**: Tailwind CSS v4 with custom monospace typography
- **TypeScript**: Full TypeScript support with strict typing
- **Build**: Standard Next.js build with PostCSS integration

### Key Features

- **Portfolio Layout**: Profile image, social links, and about section
- **Monospace Typography**: JetBrains Mono for headings and UI elements
- **Apple-Inspired Design**: Clean, minimal interface with subtle interactions
- **Social Integration**: Links to GitHub, LinkedIn, Twitter, and email
- **Technology Showcase**: Skills and tech stack display

### Content Management

Social links are managed in `LinkTree.tsx` through the `links` array. Each link has:
- `title`: Platform name
- `url`: Target URL or mailto link
- `icon`: Emoji icon for visual identification

### Styling Approach

The site uses a clean, Apple-inspired aesthetic with:
- Pure white background for maximum clarity
- Gray scale color palette (gray-50 to gray-800)
- Monospace typography for futuristic feel
- Subtle hover animations and transitions
- Rounded corners and soft shadows for depth