'use client';

export default function WhyAISection() {
  const stats = [
    { number: '95%', label: 'Khách hàng hài lòng' },
    { number: '10x', label: 'Tăng hiệu suất vận hành' },
    { number: '70%', label: 'Giảm chi phí' },
    { number: '24/7', label: 'Không ngừng nghỉ' },
  ];

  return (
    <section id="story" className="relative py-16 lg:py-20 bg-champagne">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-widest text-gold font-medium">
            Câu Chuyện Của Chúng Tôi
          </span>
        </div>

        {/* Main heading */}
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-10 leading-tight max-w-3xl">
          Nghệ Thuật Tối Ưu Doanh Nghiệp
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side: Editorial text */}
          <div className="space-y-5">
            <p className="text-charcoal text-base lg:text-lg leading-relaxed">
              AI không chỉ là công nghệ — nó là một triết lý để tái tạo cách thức hoạt động của doanh nghiệp. Chúng tôi tin rằng sự tối ưu hóa thực sự đến từ sự hiểu biết sâu sắc về quy trình của bạn.
            </p>
            <p className="text-charcoal text-base lg:text-lg leading-relaxed">
              Mỗi giải pháp mà chúng tôi tạo ra được thiết kế như một tác phẩm nghệ thuật — chi tiết, tinh tế, và tập trung vào kết quả. Chúng tôi không chỉ cung cấp công cụ, mà đem lại một sự biến đổi dài hạn.
            </p>
            <p className="text-slate text-base lg:text-lg leading-relaxed">
              Với kinh nghiệm thực tiễn, chúng tôi hiểu rằng mỗi doanh nghiệp là duy nhất. Đó là lý do tại sao chúng tôi cung cấp các giải pháp được tùy chỉnh hoàn toàn.
            </p>
          </div>

          {/* Right side: Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="font-display text-4xl md:text-5xl text-charcoal mb-2 leading-none group-hover:text-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="w-6 h-px bg-gold mx-auto mb-3" />
                <p className="text-slate text-xs uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <p className="text-center text-slate text-xs uppercase tracking-widest font-medium">
            Tin tưởng bởi những doanh nghiệp hàng đầu
          </p>
        </div>
      </div>
    </section>
  );
}
