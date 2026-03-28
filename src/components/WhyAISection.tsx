"use client";

import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    problem: "Nhân viên tốn 60% thời gian cho công việc lặp đi lặp lại",
    solution: "AI tự động hóa, nhân viên tập trung vào sáng tạo & chiến lược",
  },
  {
    icon: DollarSign,
    problem: "Chi phí vận hành cao, lợi nhuận bị ăn mòn",
    solution: "Giảm 70% chi phí vận hành với AI Agent làm việc 24/7",
  },
  {
    icon: Users,
    problem: "Khách hàng phải chờ đợi, trải nghiệm kém",
    solution: "Phản hồi tức thì mọi lúc, tăng mức độ hài lòng 95%",
  },
  {
    icon: TrendingUp,
    problem: "Ra quyết định dựa trên cảm tính, thiếu dữ liệu",
    solution: "AI phân tích dữ liệu real-time, đưa ra insight chính xác",
  },
];

export default function WhyAISection() {
  return (
    <section id="why-ai" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-base font-medium mb-4">
            Tại sao cần AI?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Doanh nghiệp truyền thống đang{" "}
            <span className="gradient-text-warm">tụt lại phía sau</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Trong khi đối thủ đã ứng dụng AI để tăng tốc, nhiều doanh nghiệp Việt Nam
            vẫn đang vận hành theo cách cũ. Đã đến lúc thay đổi.
          </p>
        </div>

        {/* Before/After comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Before */}
          <div className="relative rounded-2xl bg-red-50 border border-red-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-red-600">Trước khi có AI</h3>
            </div>
            <div className="space-y-4">
              {[
                "Xử lý thủ công, sai sót nhiều",
                "Phản hồi chậm, mất khách hàng",
                "Chi phí nhân sự tăng liên tục",
                "Dữ liệu nằm rải rác, không khai thác được",
                "Quy trình phức tạp, tốn thời gian",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 shrink-0" />
                  <span className="text-lg text-red-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl bg-emerald-50 border border-emerald-200 p-8 glow-cyan">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-neon-green" />
              </div>
              <h3 className="text-2xl font-bold text-neon-green">Sau khi ứng dụng AI</h3>
            </div>
            <div className="space-y-4">
              {[
                "Tự động hóa 80% tác vụ lặp lại",
                "Phản hồi tức thì 24/7, khách hàng hài lòng",
                "Giảm 70% chi phí vận hành",
                "Dữ liệu tập trung, insight rõ ràng",
                "Quy trình tinh gọn, ra quyết định nhanh",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-green mt-2.5 shrink-0" />
                  <span className="text-lg text-emerald-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pain points cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl bg-white border border-gray-200 p-6 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-base text-red-500 mb-2 line-through">
                {item.problem}
              </div>
              <div className="flex items-start gap-2 mt-3">
                <ArrowRight className="w-4 h-4 text-neon-green mt-1 shrink-0" />
                <span className="text-base text-neon-green font-semibold">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
