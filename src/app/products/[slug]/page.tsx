import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products, getProduct } from "@/lib/products-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  return {
    title: `${product.name} | AI Agent Services`,
    description: product.description,
    openGraph: {
      title: `${product.name} | AI Agent Services`,
      description: product.description,
      images: [product.coverImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  // Get related products (excluding current)
  const relatedProducts = products
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <ProductPageClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  );
}
