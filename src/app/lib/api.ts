import { Product } from "../types";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
        'Referer': 'https://fakestoreapi.com'
      },
      cache: 'force-cache'
    });
    
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error('Products API failed');
  }
  
  return [
    {
      id: 1,
      title: "Sample Product 1",
      price: "29.99",
      description: "This is a sample product for demonstration.",
      category: "electronics",
      image: "https://via.placeholder.com/300x300?text=Product+1",
      rating: { rate: 4.5, count: 100 }
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: "49.99",
      description: "Another sample product for demonstration.",
      category: "clothing",
      image: "https://via.placeholder.com/300x300?text=Product+2",
      rating: { rate: 4.2, count: 85 }
    }
  ];
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
        'Referer': 'https://fakestoreapi.com'
      }
    });
    
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error('Product API failed');
  }
  
  return {
    id,
    title: `Sample Product ${id}`,
    price: "29.99",
    description: "This is a sample product for demonstration.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300?text=Product",
    rating: { rate: 4.5, count: 100 }
  };
}

export async function getCategories(): Promise<string[]> {
  return ["electronics", "jewelery", "men's clothing", "women's clothing"];
}
