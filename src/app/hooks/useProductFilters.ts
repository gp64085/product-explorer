import { useMemo, useState } from "react";
import { Product } from "../types";
import { useFavorites } from "./useFavorites";

export function useProductFilters(products: Product[]) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites } = useFavorites();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category ? product.category === category : true;

      const matchesFavorites = showFavoritesOnly
        ? favorites.includes(product.id)
        : true;

      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [products, search, category, showFavoritesOnly, favorites]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    showFavoritesOnly,
    setShowFavoritesOnly,
    filteredProducts,
  };
}
