import { Product } from "../types";

const API_BASE = "https://fakestoreapi.com";
const DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  Accept: "application/json",
};

async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: DEFAULT_HEADERS,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getProducts(): Promise<Product[]> {
  try {
    return await apiRequest<Product[]>("/products", { cache: "force-cache" });
  } catch (error) {
    console.error("Products API failed");
    return [];
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    return await apiRequest<Product>(`/products/${id}`);
  } catch (error) {
    throw new Error(`Product ${id} not found`);
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    return await apiRequest<string[]>("/products/categories");
  } catch (error) {
    console.error("Categories API failed");
    return [];
  }
}
