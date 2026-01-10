import { Product } from "../types";

const BASE_URL = "https://fakestoreapi.com/products";
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
};

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: HEADERS,
      next: { revalidate: 3600 }, // cache for 1 hour
    });

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
    const res = await fetch(`${BASE_URL}/${id}`, { headers: HEADERS });

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
    const res = await fetch(`${BASE_URL}/categories`, { headers: HEADERS });

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
