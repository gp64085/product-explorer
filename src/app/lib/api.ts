import { Product } from "../types";

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "109.95",
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: "22.3",
    description: "Slim-fitting style, contrast raglan long sleeve.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 }
  }
];

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products');
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error("API failed, using fallback data");
  }
  return FALLBACK_PRODUCTS;
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`/api/products/${id}`);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error("API failed for product", id);
  }
  
  const fallback = FALLBACK_PRODUCTS.find(p => p.id === id);
  if (!fallback) {
    throw new Error(`Product ${id} not found`);
  }
  return fallback;
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch('/api/categories');
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error("Categories API failed");
  }
  return ["electronics", "jewelery", "men's clothing", "women's clothing"];
}
