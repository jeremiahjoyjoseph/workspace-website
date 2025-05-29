# BHIVE Workspace Website

A modern website for BHIVE Workspace built with Next.js and Tailwind CSS.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── types/           # TypeScript type definitions
├── lib/             # Utility functions
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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Notes

Although h6 is final, we have some font-elements hitting 14px.
