# PayFlow - Payment Gateway Platform

A clean, modern, static marketing website for a fintech payment processing company.

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React (Icons)

## Architecture

This project follows a clean, component-based architecture:
- `/src/components` - Reusable UI components (Header, Footer, Hero, Cards, etc.)
- `/src/pages` - Route components corresponding to each page
- `/src/data` - Static content (JSON/TS) for features, pricing, etc.
- `/src/lib` - Utility functions

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

To build the static files for production:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static assets.

## Deployment (Vercel)

This project is fully ready to be deployed on Vercel as a static site.

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Vite and configure the build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

*Note: This project was built using Vite and React Router to ensure optimal compatibility with the AI Studio preview environment, while strictly adhering to the requested clean architecture, component structure, and static nature of the Next.js App Router pattern.*
