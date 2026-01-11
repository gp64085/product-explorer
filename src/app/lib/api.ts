import { Product } from "../types";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      headers: {
        'Accept': 'application/json'
      },
      cache: 'force-cache'
    });
    
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error('Products API failed');
  }
  
  return [];
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Product ${id} not found`);
  }
  
  return response.json();
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error('Categories API failed');
  }
  
  return ["electronics", "jewelery", "men's clothing", "women's clothing"];
}
