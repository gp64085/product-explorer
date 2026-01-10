# Product Explorer

A modern e-commerce product browsing application built with Next.js 16, featuring product discovery, filtering, and favorites management.

## Features

- **Product Catalog**: Browse products from the Fake Store API
- **Search & Filter**: Real-time search and category-based filtering
- **Favorites System**: Add/remove products to favorites with local storage persistence
- **Product Details**: Detailed product pages with images, descriptions, and ratings
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean interface with hover effects and smooth transitions

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **API**: Fake Store API for product data
- **State Management**: React Context for favorites
- **Package Manager**: pnpm

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)
   <img width="1912" height="919" alt="image" src="https://github.com/user-attachments/assets/bef27ad1-f24d-4f7e-b810-0995103702b7" />
   
   <img width="1663" height="962" alt="image" src="https://github.com/user-attachments/assets/e2a063f2-882a-466e-bd7a-e30abc8f0125" />


## Project Structure

```
src/app/
├── components/          # Reusable UI components
│   ├── ProductCard.tsx  # Individual product display
│   ├── ProductGrid.tsx  # Product listing with filters
│   ├── SearchFilterBar.tsx # Search and filter controls
│   └── Loading.tsx      # Loading component
├── contexts/            # React contexts
│   └── FavoritesContext.tsx # Favorites state management
├── hooks/               # Custom React hooks
│   ├── useFavorites.ts  # Favorites functionality
│   └── useProductFilters.ts # Product filtering logic
├── lib/                 # Utility functions and API
│   ├── api.ts          # API calls to Fake Store API
│   └── utils.ts        # Helper functions
├── products/[id]/       # Dynamic product detail pages
├── types/               # TypeScript type definitions
└── globals.css         # Global styles
```

## Key Features Explained

### Product Filtering
- **Search**: Filter products by title
- **Categories**: Filter by product categories (electronics, jewelry, etc.)
- **Favorites**: Show only favorited products
- **Clear Filters**: Reset all filters with one click

### Favorites System
- Heart icon on each product card
- Persistent storage using localStorage
- Filter to show only favorite products
- Visual feedback with filled/unfilled heart states

### Product Details
- Individual product pages with full descriptions
- High-quality product images
- Star ratings and review counts
- Category badges and pricing
- Responsive image optimization

## API Integration

The app uses the [Fake Store API](https://fakestoreapi.com/) for product data:
- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch single product
- `GET /products/categories` - Fetch all categories

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Deployment

The app is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Alternatively, build locally:
```bash
pnpm build
pnpm start
```
