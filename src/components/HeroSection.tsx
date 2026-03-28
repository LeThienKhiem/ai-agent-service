'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-cream pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5 grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-widest font-light text-slate">
                Bộ Sưu Tập AI Agent 2026
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-charcoal mb-6 leading-tight">
              Nâng Tầm<br />
              <span className="gold-text">Doanh Nghiệp</span>
              <br />
              Với Trí Tuệ Nhân Tạo
            </h1>

            <p className="text-base font-light text-slate leading-relaxed mb-8 max-w-lg">
              Khám phá bộ sưu tập AI Agent tinh tế, được thiết kế riêng cho các doanh nghiệp hiện đại.
              Mỗi giải pháp là một tác phẩm nghệ thuật kỹ thuật số.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#products" className="btn-luxury btn-luxury-primary text-xs inline-flex items-center justify-center gap-2">
                Khám Phá Bộ Sưu Tập
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/#contact" className="btn-luxury btn-luxury-outline text-xs inline-flex items-center justify-center">
                Đặt Lịch Tư Vấn
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-pearl">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-light text-charcoal mb-1">50+</div>
                  <div className="text-xs uppercase tracking-widest text-slate font-light">Doanh Nghiệp</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-charcoal mb-1">10x</div>
                  <div className="text-xs uppercase tracking-widest text-slate font-light">Hiệu Suất</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-charcoal mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-widest text-slate font-light">Hỗ Trợ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Editorial Image */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative aspect-[4/5] max-h-[520px]">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold pointer-events-none z-10" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop&q=80"
                alt="Luxury Business Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold pointer-events-none z-10" />
            </div>

            <div className="absolute bottom-4 right-4 bg-cream/95 backdrop-blur-sm border border-pearl px-6 py-4">
              <div className="text-xs uppercase tracking-widest text-slate font-light mb-1">Công Nghệ Tiên Tiến</div>
              <p className="font-display text-base text-charcoal font-light">Giải Pháp Tối Ưu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
