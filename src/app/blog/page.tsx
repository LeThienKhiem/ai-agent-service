import { blogPosts, categoryLabels, categoryColors } from "@/lib/blog-data";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | AI Agent Services — Insights & Xu Hướng AI",
  description:
    "Cập nhật xu hướng AI, case study và chiến lược ứng dụng AI cho doanh nghiệp Việt Nam.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Blog & Insights
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-charcoal mb-6">
              Kiến Thức AI cho Doanh Nghiệp
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="text-lg text-slate leading-relaxed">
              Xu hướng AI mới nhất, hướng dẫn triển khai thực tế, và case study
              từ doanh nghiệp Việt Nam đã chuyển đổi thành công.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-0 border border-pearl overflow-hidden hover-lift"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden img-zoom">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-[0.2em] uppercase text-gold">
                  {categoryLabels[featured.category]}
                </span>
                <span className="text-xs text-silver">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl lg:text-3xl text-charcoal mb-4 group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-silver">
                  {featured.publishedAt}
                </span>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-charcoal group-hover:text-gold transition-colors">
                  Đọc bài viết{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Post grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-pearl overflow-hidden hover-lift bg-white"
              >
                <div className="relative h-52 overflow-hidden img-zoom">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-[0.2em] uppercase text-gold">
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-xs text-silver">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-pearl">
                    <span className="text-xs text-silver">
                      {post.publishedAt}
                    </span>
                    <span className="text-xs tracking-[0.1em] uppercase text-charcoal group-hover:text-gold transition-colors">
                      Đọc thêm →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
