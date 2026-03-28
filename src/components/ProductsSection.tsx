'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products-data';

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-16 lg:py-20 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-widest text-gold font-medium">
            Bộ Sưu Tập
          </span>
        </div>

        {/* Main heading */}
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-3 leading-tight">
          Trợ Lý AI Cao Cấp
        </h2>

        {/* Subtitle */}
        <p className="text-slate text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
          Khám phá bộ sưu tập các giải pháp AI tinh tế, được thiết kế riêng cho doanh nghiệp hiện đại.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="border border-pearl bg-white hover-lift transition-all duration-500">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4] bg-pearl">
                  <img
                    src={product.coverImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gold font-medium mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-display text-xl text-charcoal mb-1 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-slate text-sm mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-pearl/50">
                    <span className="text-xs uppercase tracking-widest text-gold font-medium">
                      Liên hệ
                    </span>
                    <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors">
                      Khám Phá
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
