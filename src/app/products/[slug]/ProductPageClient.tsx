"use client";

import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import type { Product } from "@/lib/products-data";

interface ProductPageClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPageClient({
  product,
  relatedProducts,
}: ProductPageClientProps) {
  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-silver">
          <a href="/" className="hover:text-charcoal transition-colors">
            Trang chủ
          </a>
          <span>/</span>
          <a
            href="/#products"
            className="hover:text-charcoal transition-colors"
          >
            Sản phẩm
          </a>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={product.coverImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold" />
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              {product.category}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="font-display text-xl text-slate italic mb-8">
              {product.tagline}
            </p>

            <div className="w-12 h-px bg-gold mb-8" />

            <p className="text-lg text-slate leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-pearl">
              <span className="text-xs tracking-[0.2em] uppercase text-silver">
                Đầu tư
              </span>
              <span className="font-display text-2xl text-gold">Liên hệ</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="btn-luxury btn-luxury-primary justify-center"
              >
                Đặt Lịch Tư Vấn
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#products"
                className="btn-luxury btn-luxury-outline justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
                Bộ Sưu Tập
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details section */}
      <section className="bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Long description */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Chi Tiết
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-8">
                Về Sản Phẩm
              </h2>
              <div className="space-y-6">
                {product.longDescription.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-lg text-slate leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Features + Benefits */}
            <div className="space-y-12">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                  Tính Năng
                </p>
                <h3 className="font-display text-2xl text-charcoal mb-6">
                  Điểm Nổi Bật
                </h3>
                <div className="space-y-4">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 pb-4 border-b border-pearl/50 last:border-0"
                    >
                      <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                      <span className="text-slate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                  Lợi Ích
                </p>
                <h3 className="font-display text-2xl text-charcoal mb-6">
                  Giá Trị Mang Lại
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="bg-white/70 p-5 border border-pearl/30"
                    >
                      <span className="font-display text-3xl text-gold block mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-slate">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {product.galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {product.galleryImages.map((img, i) => (
              <div key={i} className="aspect-[3/2] overflow-hidden img-zoom">
                <img
                  src={img}
                  alt={`${product.name} - ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Sẵn Sàng Bắt Đầu?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-6">
            Đặt Lịch Tư Vấn Miễn Phí
          </h2>
          <p className="text-silver mb-10 max-w-xl mx-auto">
            Đội ngũ chuyên gia sẽ phân tích nhu cầu doanh nghiệp và đề xuất
            giải pháp {product.name} phù hợp nhất cho bạn.
          </p>
          <a
            href="/#contact"
            className="btn-luxury btn-luxury-gold justify-center inline-flex"
          >
            Liên Hệ Ngay
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Khám Phá Thêm
          </p>
          <h2 className="font-display text-3xl text-charcoal">
            Sản Phẩm Liên Quan
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((rp) => (
            <a
              key={rp.slug}
              href={`/products/${rp.slug}`}
              className="group block hover-lift"
            >
              <div className="aspect-[4/5] overflow-hidden mb-5 img-zoom">
                <img
                  src={rp.coverImage}
                  alt={rp.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                {rp.category}
              </p>
              <h3 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors">
                {rp.name}
              </h3>
              <p className="text-sm text-silver mt-1">{rp.tagline}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
