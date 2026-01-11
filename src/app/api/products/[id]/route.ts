import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ProductExplorer/1.0)",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
