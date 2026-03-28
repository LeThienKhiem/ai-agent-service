'use client';

export default function Footer() {
  return (
    <footer className="bg-noir text-cream">
      <div className="h-px w-full bg-gold" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Top */}
        <div className="mb-10">
          <h3 className="font-display text-3xl text-cream mb-2 tracking-tight">
            AI Agent Services
          </h3>
          <p className="text-silver font-light text-sm leading-relaxed max-w-md">
            Đối tác chuyển đổi số AI hàng đầu cho doanh nghiệp Việt Nam.
          </p>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mb-10 pb-10 border-b border-pearl/20">
          <div>
            <div className="text-xs font-medium tracking-widest text-gold uppercase mb-5">Sản Phẩm</div>
            <ul className="space-y-2.5">
              {[
                { label: 'AI Trợ Lý Khách Hàng', href: '/products/ai-tro-ly-khach-hang' },
                { label: 'AI Chốt Đơn', href: '/products/ai-chot-don' },
                { label: 'AI Nhắc Việc', href: '/products/ai-nhac-viec' },
                { label: 'AI Kế Toán', href: '/products/ai-ke-toan' },
                { label: 'AI Social Post', href: '/products/ai-social-post' },
                { label: 'AI Tư Vấn Chiến Lược', href: '/products/ai-tu-van' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-silver hover:text-gold transition-colors text-sm font-light">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium tracking-widest text-gold uppercase mb-5">Công Ty</div>
            <ul className="space-y-2.5">
              {[
                { label: 'Câu chuyện', href: '#story' },
                { label: 'Quy trình', href: '#process' },
                { label: 'Khách hàng', href: '#testimonials' },
                { label: 'Blog', href: '/blog' },
                { label: 'Liên hệ', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-silver hover:text-gold transition-colors text-sm font-light">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium tracking-widest text-gold uppercase mb-5">Liên Hệ</div>
            <ul className="space-y-2.5 text-sm font-light text-silver">
              <li>0899 xxx xxx</li>
              <li>hello@aiagentservices.vn</li>
              <li>TP. Hồ Chí Minh, Việt Nam</li>
              <li>Zalo: AI Agent Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs font-light text-silver tracking-wide">
            &copy; 2026 AI Agent Services. All rights reserved.
          </p>
          <p className="text-xs font-light text-silver tracking-wide">
            Crafted with care in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
