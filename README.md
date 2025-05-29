# BHIVE Workspace Website

A modern, responsive website for BHIVE Workspace showcasing their coworking spaces and services. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Engaging landing page with key value propositions
- **Why Choose Us**: Highlights BHIVE's unique selling points and benefits
- **Spaces Overview**: Interactive grid showcasing different coworking spaces with:
  - Space images and details
  - Day pass pricing
  - Special package deals with discounts
  - Direct Google Maps integration for location
- **App Download**: Mobile app promotion section
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean, professional design with smooth animations and transitions

## Project Structure

```
src/
├── app/              # Next.js app directory
│   └── page.tsx     # Main landing page
├── components/       # React components
│   ├── Hero.tsx
│   ├── WhyChooseUs.tsx
│   ├── SpacesOverview.tsx
│   ├── AppDownload.tsx
│   └── SectionHeader.tsx
├── types/           # TypeScript type definitions
├── lib/             # Utility functions
│   ├── getSpaces.ts # Space data fetching
│   └── getAsset.ts  # Asset management
└── public/          # Static assets
```

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

## Data Source

The project uses data from the [bhive-interview-project-data](https://github.com/MujtabaKably/bhive-interview-project-data) repository:

- Images and icons are in the `assets` folder
- Space and package details are in the `data` folder

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Design System

- Uses Geist font family for modern typography
- Custom color scheme with primary, secondary, and tertiary colors
- Consistent spacing and layout patterns
- Responsive breakpoints for different screen sizes

## Notes

- Font sizes are optimized for readability across devices
- Images are optimized using Next.js Image component
- Interactive elements have hover states and smooth transitions

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
