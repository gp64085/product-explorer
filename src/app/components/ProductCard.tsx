"use client";

import { Product } from "@/app/types";
import { FunctionComponent } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { capitalizeFirstLetter, formatPrice } from "../lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <div className="group relative border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(product.id);
        }}
        className="absolute cursor-pointer top-2 right-2 z-10 p-2 bg-white rounded-full hover:bg-white"
        aria-label={favorite ? "Romove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`w-5 h-5 ${
            favorite ? "fill-red-500 text-red-500" : "text-zinc-400}"
          }`}
        />
      </button>

      <Link href={`/products/${product.id}`} className="grow flex flex-col">
        <div className="relative h-48 w-full mb-4">
          <Image
            src={product.image}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-200"
            alt={product.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            onLoad={(event) => {
                const img = event.target as HTMLImageElement;
                img.classList.remove('opacity-0');
              }}
          />
        </div>
        <div className="mt-auto">
          <h2
            className="text-sm font-medium text-gray-700 line-clamp-2 min-h-10"
            title={product.title}
          >
            {product.title}
          </h2>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs bg-gray-100 rounded-full px-2 py-1 text-gray-500">
              {capitalizeFirstLetter(product.category)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
