import { getProductById } from "../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice } from "../../lib/utils";
import { ArrowLeft } from "lucide-react";
import { Product } from "@/app/types";

interface Props {
  params: Promise<{ id: string }>;
}

function ProductContent({ product }: {product: Product}) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-blue-500 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="bg-white rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
        <div className="relative h-100 md:h-150 bg-white p-8 border-r border-gray-100 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col bg-white">
          <div className="mb-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4 capitalize">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {"★".repeat(Math.round(product.rating.rate))}
                <span className="text-gray-300">
                  {"★".repeat(5 - Math.round(product.rating.rate))}
                </span>
              </div>
              <span className="text-gray-500 text-sm">
                ({product.rating.count} reviews)
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {product.description}
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-4xl font-bold text-gray-900 mb-6">
              {formatPrice(product.price)}
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProductPage({ params }: Props) {
  const id = (await params).id;
  const product = await getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return <ProductContent product={product} />;
}
