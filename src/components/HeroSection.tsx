"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bot, Zap, Brain } from "lucide-react";

const liveMessages = [
  { title: "Đang phân tích đơn hàng...", detail: "Xử lý 1,247 đơn hàng từ Shopee, Lazada, Tiki" },
  { title: "Tạo báo cáo doanh thu Q1...", detail: "Tổng hợp dữ liệu bán hàng • Phân tích xu hướng • Dự báo Q2" },
  { title: "Trả lời khách hàng tự động...", detail: "Zalo: 34 tin nhắn • Facebook: 21 tin nhắn • Website: 18 chat" },
  { title: "Tối ưu quy trình kho vận...", detail: "Giảm 45% thời gian xử lý • Đề xuất nhập hàng cho 12 SKU" },
  { title: "Phân tích hành vi khách hàng...", detail: "Segment A: 2,340 KH • Tỷ lệ chuyển đổi tăng 23%" },
  { title: "Gửi email marketing tự động...", detail: "Chiến dịch 'Ưu đãi tháng 4' • 5,200 email • Tỷ lệ mở: 34%" },
  { title: "Kiểm soát chất lượng sản phẩm...", detail: "Quét 890 sản phẩm • Phát hiện 3 lỗi • Đã thông báo QC" },
  { title: "Đồng bộ dữ liệu ERP...", detail: "SAP ↔ Google Sheets ↔ CRM • 12,400 records đã cập nhật" },
];

export default function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [displayDetail, setDisplayDetail] = useState("");
  const [isTypingTitle, setIsTypingTitle] = useState(true);

  // Parallax orbs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Live typing effect
  useEffect(() => {
    const msg = liveMessages[currentMsg];
    let titleIdx = 0;
    let detailIdx = 0;
    setDisplayTitle("");
    setDisplayDetail("");
    setIsTypingTitle(true);

    // Type title
    const titleTimer = setInterval(() => {
      if (titleIdx < msg.title.length) {
        setDisplayTitle(msg.title.slice(0, titleIdx + 1));
        titleIdx++;
      } else {
        clearInterval(titleTimer);
        setIsTypingTitle(false);
        // Type detail
        const detailTimer = setInterval(() => {
          if (detailIdx < msg.detail.length) {
            setDisplayDetail(msg.detail.slice(0, detailIdx + 1));
            detailIdx++;
          } else {
            clearInterval(detailTimer);
            // Wait then move to next message
            setTimeout(() => {
              setCurrentMsg((prev) => (prev + 1) % liveMessages.length);
            }, 2500);
          }
        }, 20);
        return () => clearInterval(detailTimer);
      }
    }, 40);

    return () => clearInterval(titleTimer);
  }, [currentMsg]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={orbRef}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow transition-transform duration-1000 ease-out"
        />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] animate-float opacity-15">
          <Bot className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-[30%] right-[15%] animate-float-slow opacity-15">
          <Zap className="w-10 h-10 text-secondary" />
        </div>
        <div className="absolute bottom-[25%] left-[20%] animate-float opacity-15" style={{ animationDelay: "2s" }}>
          <Brain className="w-14 h-14 text-neon-green" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-base font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Chuyển đổi doanh nghiệp với sức mạnh AI</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-8">
            <span className="text-gray-900">AI Agent cho </span>
            <span className="gradient-text">Doanh nghiệp</span>
            <br />
            <span className="text-gray-900">Việt Nam</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tự động hóa quy trình, tăng hiệu suất gấp <span className="text-secondary font-semibold">10 lần</span>,
            giảm chi phí vận hành. Đưa doanh nghiệp của bạn vào kỷ nguyên AI chỉ trong{" "}
            <span className="text-neon-green font-semibold">vài tuần</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              Tư vấn miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 px-10 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              Khám phá dịch vụ
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Doanh nghiệp tin dùng" },
              { value: "10x", label: "Tăng hiệu suất" },
              { value: "24/7", label: "Hoạt động liên tục" },
              { value: "70%", label: "Giảm chi phí" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image with LIVE typing bar */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-primary/10">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop"
              alt="AI Dashboard"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

            {/* LIVE Agent Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 p-4 bg-white/90 backdrop-blur-lg rounded-xl border border-gray-200 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-green to-secondary flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-semibold text-gray-900 flex items-center gap-1">
                  {displayTitle}
                  {isTypingTitle && (
                    <span className="inline-block w-0.5 h-5 bg-primary animate-pulse" />
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-0.5 flex items-center gap-1 min-h-[1.25rem]">
                  {displayDetail}
                  {!isTypingTitle && displayDetail.length < (liveMessages[currentMsg]?.detail.length || 0) && (
                    <span className="inline-block w-0.5 h-4 bg-secondary animate-pulse" />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <span className="text-[10px] text-neon-green font-medium uppercase tracking-wider">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
