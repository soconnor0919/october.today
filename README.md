# october.today

A simple, elegant counter showing how many days it's been since October 1, 2019.

Built with Next.js, shadcn/ui, and the "Soft, Translucent, Alive" design philosophy.

## Features

- **Dynamic Counter**: Calculates and displays days since October 1, 2019
- **Smooth Animations**: Number counting animation and interactive hover effects
- **Share Functionality**: Share via SMS with a single click
- **Modern Design**: Glassmorphism UI with "Living Blob" background animation
- **Typography**: Editorial-style typography using Playfair Display and Inter
- **Analytics**: Optional Umami tracking support

## Development

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build
# or
npm run build

# Type check
bun typecheck
```

## Deployment

This project is configured for static export and deploys automatically to GitHub Pages via GitHub Actions.

### Setup

1. Enable GitHub Pages in repository settings (Source: GitHub Actions)
2. (Optional) Add repository secrets for Umami analytics:
   - `NEXT_PUBLIC_UMAMI_URL`
   - `NEXT_PUBLIC_UMAMI_WEBSITE_ID`

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Fonts**: Playfair Display (headings), Inter (body)
- **Package Manager**: Bun
- **Deployment**: GitHub Pages

## Design Philosophy

The design follows three core principles:

- **Soft**: Deep border radii (1rem-1.5rem) for organic, friendly shapes
- **Translucent**: Glassmorphism effects with backdrop blur
- **Alive**: Continuous subtle animations that make the UI feel dynamic

## License

MIT
