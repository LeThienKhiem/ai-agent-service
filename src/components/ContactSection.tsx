'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs font-medium tracking-widest text-gold uppercase">Liên Hệ</span>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-8 tracking-tight leading-tight">
              Bắt Đầu Hành Trình
            </h2>
            <p className="text-slate text-base leading-relaxed mb-8 font-light">
              Đặt lịch tư vấn miễn phí với chúng tôi. Chúng tôi sẽ phân tích doanh nghiệp của bạn và đề xuất lộ trình triển khai AI chi tiết.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {[
                { label: 'Điện Thoại', value: '0899 xxx xxx' },
                { label: 'Email', value: 'hello@aiagentservices.vn' },
                { label: 'Văn Phòng', value: 'TP. Hồ Chí Minh, Việt Nam' },
                { label: 'Zalo', value: 'AI Agent Services' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-xs font-medium tracking-widest text-gold uppercase mb-1">{item.label}</div>
                  <p className="text-charcoal text-sm font-light">{item.value}</p>
                  <div className="h-px w-10 bg-gold/30 mt-3" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white border border-pearl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Họ Và Tên', type: 'text', required: true, placeholder: 'Nguyễn Văn A' },
                { label: 'Số Điện Thoại', type: 'tel', required: true, placeholder: '0899 xxx xxx' },
                { label: 'Email', type: 'email', required: false, placeholder: 'email@company.com' },
                { label: 'Tên Công Ty', type: 'text', required: false, placeholder: 'Công ty ABC' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-xs font-medium tracking-widest text-charcoal uppercase mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full border-b border-pearl bg-transparent text-charcoal text-sm placeholder-silver focus:outline-none focus:border-gold transition-colors pb-2 font-light"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium tracking-widest text-charcoal uppercase mb-2">Sản Phẩm Quan Tâm</label>
                <select className="w-full border-b border-pearl bg-transparent text-charcoal text-sm focus:outline-none focus:border-gold transition-colors pb-2 font-light">
                  <option value="">Chọn sản phẩm</option>
                  <option value="tro-ly">AI Trợ Lý Khách Hàng</option>
                  <option value="chot-don">AI Chốt Đơn</option>
                  <option value="nhac-viec">AI Nhắc Việc</option>
                  <option value="ke-toan">AI Kế Toán</option>
                  <option value="social">AI Social Post</option>
                  <option value="tu-van">AI Tư Vấn Chiến Lược</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-widest text-charcoal uppercase mb-2">Mô Tả Nhu Cầu</label>
                <textarea
                  rows={3}
                  placeholder="Mô tả nhu cầu của doanh nghiệp..."
                  className="w-full border-b border-pearl bg-transparent text-charcoal text-sm placeholder-silver focus:outline-none focus:border-gold transition-colors pb-2 font-light resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-charcoal text-cream uppercase text-xs font-medium tracking-widest py-3.5 hover:bg-gold transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <><CheckCircle2 className="w-4 h-4" /> Gửi Thành Công</>
                  ) : (
                    <><Send className="w-4 h-4" /> Gửi Yêu Cầu Tư Vấn</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
