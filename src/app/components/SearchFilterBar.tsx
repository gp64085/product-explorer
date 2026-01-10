"use client";

import { FunctionComponent } from "react";
import { capitalizeFirstLetter } from "../lib/utils";

interface SearchFilterBarProps {
  search: string;
  category: string;
  categories: string[];
  showFavoritesOnly: boolean;
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: string) => void;
  onToggleFavorites: (checked: boolean) => void;
}

export const SearchFilterBar: FunctionComponent<SearchFilterBarProps> = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
  showFavoritesOnly,
  onToggleFavorites,
}) => {
  return (
    <section className="bg-white p-4 rounded-lg shadow-sm border space-y-4 md:space-y-0 md:flex md:gap-4 items-center">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500 outline-none"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="w-full md:w-48 border p-2 rounded focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500 outline-none cursor-pointer"
        value={category}
        onChange={(e) => {
          onCategoryChange(e.target.value);
        }}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {capitalizeFirstLetter(category)}
          </option>
        ))}
      </select>
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={showFavoritesOnly}
          onChange={(e) => onToggleFavorites(e.target.checked)}
          className="w-5 h-5 accent-blue-600 rounded"
        />
        <span className="text-sm font-medium text-gray-900">Favorites Only</span>
      </label>
    </section>
  );
};
