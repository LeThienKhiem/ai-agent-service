'use client';

const testimonials = [
  {
    name: 'Hoàng Gia Thế',
    role: 'CEO, Locked Escape',
    industry: 'Giải trí',
    content: 'AI Agent đã thay đổi hoàn toàn cách chúng tôi tương tác với khách hàng. Từ hệ thống đặt phòng tự động đến chatbot tư vấn trải nghiệm, mọi thứ chạy mượt mà 24/7. Lượng booking online tăng 55% chỉ sau 2 tháng triển khai.',
    avatar: '/avatars/hoang-gia-the.svg',
  },
  {
    name: 'Ngân Đoàn',
    role: 'Chủ tịch, Khu Văn Hoá Ẩm Thực Sen Tây Hồ',
    industry: 'F&B',
    content: 'Hệ thống AI phân tích dữ liệu giúp tôi biết chính xác món nào bán chạy theo mùa, tối ưu nhân sự và quản lý chuỗi cung ứng. Giảm 40% lãng phí nguyên liệu và tăng doanh thu đáng kể.',
    avatar: '/avatars/ngan-doan.svg',
  },
  {
    name: 'Lê Văn Đức',
    role: 'Chủ tịch HĐQT, Tập đoàn Sản xuất Đức Thành',
    industry: 'Sản xuất',
    content: 'AI workflow automation đã thay đổi hoàn toàn cách vận hành nhà máy. Từ quản lý đơn hàng đến kiểm soát chất lượng, mọi thứ được tự động hóa. Tiết kiệm 2 tỷ đồng/năm chi phí vận hành.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-champagne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs font-medium tracking-widest text-gold uppercase">Khách Hàng</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-12 leading-tight max-w-3xl">
          Câu Chuyện Thành Công
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-pearl p-8 flex flex-col">
              <div className="font-display text-5xl text-gold font-light leading-none mb-4">&ldquo;</div>
              <p className="font-display italic text-charcoal text-base lg:text-lg leading-relaxed mb-6 flex-grow">
                {t.content}
              </p>
              <div className="h-px w-10 bg-gold mb-4" />
              <div className="flex items-start gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div className="min-w-0">
                  <div className="font-display text-charcoal font-medium text-sm">{t.name}</div>
                  <div className="text-slate text-xs leading-snug">{t.role}</div>
                  <div className="text-xs text-gold font-medium tracking-widest uppercase mt-1">{t.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
