"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hoàng Gia Thế",
    role: "CEO, Locked Escape",
    content:
      "AI Agent đã thay đổi hoàn toàn cách chúng tôi tương tác với khách hàng. Từ hệ thống đặt phòng tự động đến chatbot tư vấn trải nghiệm, mọi thứ chạy mượt mà 24/7. Lượng booking online tăng 55% chỉ sau 2 tháng triển khai.",
    avatar: "/avatars/hoang-gia-the.svg",
    industry: "Giải trí",
  },
  {
    name: "Ngân Đoàn",
    role: "Chủ tịch, Khu Văn Hoá Ẩm Thực Sen Tây Hồ",
    content:
      "Hệ thống AI phân tích dữ liệu giúp tôi biết chính xác món nào bán chạy theo mùa, tối ưu nhân sự và quản lý chuỗi cung ứng. Giảm 40% lãng phí nguyên liệu và tăng doanh thu đáng kể.",
    avatar: "/avatars/ngan-doan.svg",
    industry: "F&B",
  },
  {
    name: "Lê Văn Đức",
    role: "Chủ tịch HĐQT, Tập đoàn Sản xuất Đức Thành",
    content:
      "AI workflow automation đã thay đổi hoàn toàn cách vận hành nhà máy. Từ quản lý đơn hàng đến kiểm soát chất lượng, mọi thứ được tự động hóa. Tiết kiệm 2 tỷ đồng/năm chi phí vận hành.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    industry: "Sản xuất",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-base font-medium mb-4">
            Khách hàng nói gì
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Câu chuyện <span className="gradient-text">chuyển đổi</span> thành công
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Hàng chục doanh nghiệp đã thay đổi cách vận hành và bứt phá tăng trưởng
            nhờ AI Agent Services.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500 truncate">{item.role}</div>
                </div>
                <span className="text-sm px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {item.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-neon-green/5 border border-gray-200 p-8 md:p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Doanh nghiệp" },
              { value: "2M+", label: "Tác vụ AI xử lý/tháng" },
              { value: "98%", label: "Khách hàng hài lòng" },
              { value: "3x", label: "ROI trung bình" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-base text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
