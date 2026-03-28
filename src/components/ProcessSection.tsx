"use client";

import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Khảo sát & Phân tích",
    description:
      "Đội ngũ chuyên gia phân tích quy trình hiện tại, xác định điểm nghẽn và cơ hội áp dụng AI mang lại hiệu quả cao nhất.",
    duration: "1-2 tuần",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Thiết kế Giải pháp",
    description:
      "Xây dựng giải pháp AI tùy chỉnh phù hợp với quy mô, ngân sách và mục tiêu kinh doanh cụ thể của doanh nghiệp.",
    duration: "1-2 tuần",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Triển khai & Đào tạo",
    description:
      "Triển khai AI Agent, tích hợp với hệ thống hiện có và đào tạo đội ngũ sử dụng hiệu quả nhất.",
    duration: "2-4 tuần",
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
    borderColor: "border-neon-green/20",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Tối ưu & Phát triển",
    description:
      "Theo dõi hiệu quả, tối ưu liên tục và mở rộng giải pháp AI theo sự phát triển của doanh nghiệp.",
    duration: "Liên tục",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-green/10 text-neon-green text-base font-medium mb-4">
            Quy trình triển khai
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Từ ý tưởng đến <span className="gradient-text">triển khai</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Quy trình rõ ràng, minh bạch — đưa AI vào doanh nghiệp của bạn chỉ trong vài tuần,
            không phải vài tháng.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.25rem)] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}

              <div
                className={`relative rounded-2xl bg-white border ${item.borderColor} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Step number */}
                <div className={`text-6xl font-black ${item.color} opacity-10 absolute top-4 right-4`}>
                  {item.step}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-5`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Duration badge */}
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.bgColor} ${item.color}`}
                >
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
