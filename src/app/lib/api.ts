import { Product } from "../types";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      console.error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
      return []; // Return empty array instead of throwing
    }

    return res.json();
  } catch (error) {
    console.error("Network error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}`);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/categories`);

    if (!res.ok) {
      console.error("Failed to fetch categories, using fallback.");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Network error fetching categories:", error);
    return [];
  }
}
