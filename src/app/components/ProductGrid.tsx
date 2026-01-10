"use client";

import { FunctionComponent } from "react";
import { Product } from "../types";
import { useProductFilters } from "../hooks/useProductFilters";
import { ProductCard } from "./ProductCard";
import { SearchFilterBar } from "./SearchFilterBar";

interface ProductGridProps {
  products: Product[];
  categories: string[];
}

export const ProductGrid: FunctionComponent<ProductGridProps> = ({
  products,
  categories,
}) => {
  const {
    search,
    setSearch,
    category,
    setCategory,
    showFavoritesOnly,
    setShowFavoritesOnly,
    filteredProducts,
  } = useProductFilters(products);

  return (
    <div className="space-y-6">
      <SearchFilterBar
        search={search}
        onSearchChange={setSearch}
        categories={categories}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={setShowFavoritesOnly}
        category={category}
        onCategoryChange={setCategory}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-500">No products found.</p>
          <button
            type="button"
            className="text-blue-600 hover:underline mt-2 cursor-pointer"
            onClick={() => {
              setSearch("");
              setCategory("");
              setShowFavoritesOnly(false);
            }}
          >
            Clear all filter
          </button>
        </div>
      )}
    </div>
  );
};
