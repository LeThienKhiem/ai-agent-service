'use client';

export default function ProcessSection() {
  const steps = [
    { number: '01', title: 'Khám Phá', description: 'Tìm hiểu sâu về doanh nghiệp, quy trình, và nhu cầu cụ thể của bạn' },
    { number: '02', title: 'Thiết Kế', description: 'Xây dựng giải pháp AI tùy chỉnh phù hợp với mục tiêu kinh doanh' },
    { number: '03', title: 'Triển Khai', description: 'Tích hợp hệ thống và đào tạo toàn bộ đội ngũ của bạn' },
    { number: '04', title: 'Tối Ưu', description: 'Theo dõi hiệu suất, tối ưu hóa và phát triển liên tục' },
  ];

  return (
    <section id="process" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs font-medium tracking-widest text-gold uppercase">Quy Trình</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-12 leading-tight max-w-3xl">
          Từ Ý Tưởng Đến Hiện Thực
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col">
                <span className="font-display text-5xl lg:text-6xl text-gold font-light tracking-tight mb-4">
                  {step.number}
                </span>
                <h3 className="font-display text-xl lg:text-2xl text-charcoal mb-3">
                  {step.title}
                </h3>
                <div className="h-px w-10 bg-gold mb-3" />
                <p className="text-slate text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-gold" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
