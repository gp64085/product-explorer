export const dynamic = 'force-dynamic';

import { getCategories, getProducts } from "./lib/api";
import { ProductGrid } from "./components/ProductGrid";
import { Suspense } from "react";
import Loading from "./components/Loading";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Explorer</h1>
      <Suspense fallback={<Loading />}>
      <ProductGrid products={products} categories={categories} /></Suspense>
    </main>
  );
}
