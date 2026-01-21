# Grit Training Co. - Website

A modern, dark-themed single-page website for Grit Training Co. gym, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark, Gritty Theme** - Custom color palette with charcoal blacks, steel grays, and accent colors
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🧭 **Smooth Scroll Navigation** - Floating navigation bar with active section highlighting
- ⚡ **Performance Optimized** - Built with Next.js 14+ App Router

## Sections

1. **Hero** - Full-screen landing with animated gradient effects
2. **About** - Gym philosophy and core pillars (Hard Work, Community, Health)
3. **Coaches** - Showcase of expert trainers with hover effects
4. **Schedule** - Interactive weekly class schedule with filtering
5. **Pricing** - Membership tiers with clear pricing and features
6. **Contact** - Contact form, location, hours, and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **clsx & tailwind-merge** - Utility functions

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and theme
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── components/
│   ├── Navigation.tsx   # Floating navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Coaches.tsx      # Coaches showcase
│   ├── Schedule.tsx     # Class schedule
│   ├── Pricing.tsx      # Pricing tiers
│   └── Contact.tsx      # Contact section
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `charcoal` - Dark background colors
- `steel` - Gray tones
- `accent` - Red, orange, and amber accents

### Content

Update component files in `components/` to modify:
- Coach information
- Class schedules
- Pricing tiers
- Contact information

## License

ISC
