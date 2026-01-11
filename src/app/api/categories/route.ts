import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ProductExplorer/1.0)',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(["electronics", "jewelery", "men's clothing", "women's clothing"]);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(["electronics", "jewelery", "men's clothing", "women's clothing"]);
  }
}