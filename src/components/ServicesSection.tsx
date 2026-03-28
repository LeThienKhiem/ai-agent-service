"use client";

import {
  MessageSquare,
  Workflow,
  BarChart3,
  Puzzle,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbot & Hỗ trợ Khách hàng",
    description:
      "Bot thông minh trả lời khách hàng 24/7 bằng tiếng Việt tự nhiên. Tích hợp Zalo, Facebook, Website — giảm 80% tải cho đội ngũ CSKH.",
    features: [
      "Hiểu ngữ cảnh tiếng Việt",
      "Tích hợp đa kênh",
      "Tự học từ dữ liệu",
      "Chuyển giao nhân viên khi cần",
    ],
    gradient: "from-primary to-primary-light",
    shadowColor: "shadow-primary/10",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Workflow,
    title: "AI Tự động hóa Quy trình",
    description:
      "Tự động hóa các tác vụ lặp đi lặp lại: nhập liệu, xử lý đơn hàng, gửi email, tạo báo cáo — giúp nhân viên tập trung vào công việc sáng tạo.",
    features: [
      "Xử lý đơn hàng tự động",
      "Tạo báo cáo định kỳ",
      "Đồng bộ dữ liệu đa hệ thống",
      "Quy trình phê duyệt thông minh",
    ],
    gradient: "from-secondary to-secondary-light",
    shadowColor: "shadow-secondary/10",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: BarChart3,
    title: "AI Phân tích Dữ liệu",
    description:
      "Biến dữ liệu thô thành insight hành động. Dự báo xu hướng, phân tích khách hàng, tối ưu hoá chiến lược kinh doanh bằng AI.",
    features: [
      "Dashboard trực quan",
      "Dự báo doanh thu",
      "Phân tích hành vi KH",
      "Cảnh báo bất thường",
    ],
    gradient: "from-neon-green to-secondary",
    shadowColor: "shadow-neon-green/10",
    iconBg: "bg-neon-green/10",
    iconColor: "text-neon-green",
  },
  {
    icon: Puzzle,
    title: "Giải pháp AI Tùy chỉnh",
    description:
      "Xây dựng giải pháp AI riêng biệt cho doanh nghiệp của bạn. Từ OCR chứng từ, nhận diện sản phẩm đến hệ thống đề xuất thông minh.",
    features: [
      "OCR & xử lý tài liệu",
      "Nhận diện hình ảnh",
      "Hệ thống đề xuất",
      "Tích hợp ERP/CRM",
    ],
    gradient: "from-accent to-accent-light",
    shadowColor: "shadow-accent/10",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-base font-medium mb-4">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Giải pháp AI <span className="gradient-text">toàn diện</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Từ chatbot thông minh đến phân tích dữ liệu nâng cao — chúng tôi cung cấp
            mọi công cụ AI mà doanh nghiệp bạn cần để bứt phá.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white border border-gray-200 p-8 hover:border-gray-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.iconBg} mb-6`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-base text-gray-700">
                    <Check className={`w-5 h-5 ${service.iconColor} shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-base font-semibold ${service.iconColor} group-hover:gap-3 transition-all`}
              >
                Tìm hiểu thêm
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Gradient accent line at top */}
              <div
                className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
