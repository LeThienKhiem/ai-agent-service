"use client";

import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                AI Agent<span className="text-primary-light"> Services</span>
              </span>
            </a>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-6">
              Đối tác chuyển đổi số AI hàng đầu cho doanh nghiệp Việt Nam. Chúng tôi giúp doanh nghiệp truyền thống
              ứng dụng AI để tăng hiệu suất, giảm chi phí và bứt phá tăng trưởng.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wider">
              Dịch vụ
            </h4>
            <ul className="space-y-2.5">
              {[
                "AI Chatbot",
                "Tự động hóa Quy trình",
                "Phân tích Dữ liệu",
                "Giải pháp Tùy chỉnh",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wider">
              Công ty
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Về chúng tôi", href: "#" },
                { label: "Quy trình", href: "#process" },
                { label: "Khách hàng", href: "#testimonials" },
                { label: "Liên hệ", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-gray-500">
            © 2026 AI Agent Services. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-base text-gray-500">
            Made with <Heart className="w-4 h-4 text-accent-light fill-accent-light" /> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
