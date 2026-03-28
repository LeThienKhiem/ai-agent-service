"use client";

import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-green/10 text-neon-green text-base font-medium mb-4">
            Liên hệ ngay
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sẵn sàng <span className="gradient-text">chuyển đổi</span>?
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Đặt lịch tư vấn miễn phí — chúng tôi sẽ phân tích cơ hội AI cho doanh nghiệp bạn
            và đưa ra lộ trình cụ thể.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Hotline</div>
                    <div className="text-gray-900 text-lg font-medium">0899 xxx xxx</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Email</div>
                    <div className="text-gray-900 text-lg font-medium">hello@aiagentservices.vn</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-neon-green" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Văn phòng</div>
                    <div className="text-gray-900 text-lg font-medium">TP. Hồ Chí Minh, Việt Nam</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Zalo</div>
                    <div className="text-gray-900 text-lg font-medium">AI Agent Services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick note */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/15 p-6">
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Tư vấn miễn phí 30 phút</span> — Chúng tôi sẽ phân tích
                quy trình hiện tại và đề xuất giải pháp AI phù hợp nhất cho doanh nghiệp của bạn. Không cam kết, không ràng buộc.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-base text-gray-700 font-medium mb-2">
                    Họ và tên <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base text-gray-700 font-medium mb-2">
                    Số điện thoại <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0899 xxx xxx"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-base text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base text-gray-700 font-medium mb-2">Tên công ty</label>
                  <input
                    type="text"
                    placeholder="Công ty ABC"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-base text-gray-700 font-medium mb-2">
                  Dịch vụ quan tâm
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-base focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all">
                  <option value="">Chọn dịch vụ</option>
                  <option value="chatbot">AI Chatbot & Hỗ trợ Khách hàng</option>
                  <option value="automation">AI Tự động hóa Quy trình</option>
                  <option value="analytics">AI Phân tích Dữ liệu</option>
                  <option value="custom">Giải pháp AI Tùy chỉnh</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-base text-gray-700 font-medium mb-2">
                  Mô tả nhu cầu
                </label>
                <textarea
                  rows={4}
                  placeholder="Mô tả ngắn gọn về doanh nghiệp và nhu cầu ứng dụng AI của bạn..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Đã gửi thành công!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Gửi yêu cầu tư vấn
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
