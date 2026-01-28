# FurniFind - AI-Powered Furniture Discovery Platform

> Discover furniture with AI-powered visual search. Upload any furniture image and find similar products from top stores.

## Features

- **AI Visual Search**: Upload any furniture image and get AI-powered product recommendations
- **Smart Filtering**: Filter by category, price range, and store
- **50+ Products**: Curated furniture from Wayfair, IKEA, Article, West Elm, and Pottery Barn
- **Modern UI**: Beautiful, responsive design with Tailwind CSS and shadcn/ui
- **Production-Ready**: Built with Next.js 14, TypeScript, and modern best practices

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + React 18
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
furnifind/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ImageUpload.tsx
│   ├── FilterBar.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── Footer.tsx
├── lib/                   # Utility files
│   ├── types.ts          # TypeScript types
│   └── products.ts       # Product data
└── components/ui/         # shadcn/ui components
```

## Phase 1 Features (Current)

- Landing page with hero section
- Image upload with drag & drop
- Mock AI analysis (2-second simulation)
- Product grid with 50 hardcoded products
- Filtering by category, price, and store
- Responsive design (mobile, tablet, desktop)
- Professional UI/UX

## Phase 2 (Coming Soon)

- Real AI integration with Ximilar API
- FastAPI backend
- PostgreSQL database
- User authentication
- Saved searches
- Product recommendations

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/furnifind)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

## License

MIT
