import { Product } from "../types";

const BASE_URL = 'https://fakestoreapi.com/products';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(BASE_URL, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch products: ${response.status}`);
      return [];
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product> {
  const url = `${BASE_URL}/${id}`;
    
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}`);
  }
  return response.json();
}

export async function getCategories(): Promise<string[]> {
  try {
    const url = `${BASE_URL}/categories`;
      
    const response = await fetch(url);
    if (!response.ok) {
      return [];
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
