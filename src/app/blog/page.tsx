import { blogPosts, categoryLabels, categoryColors } from "@/lib/blog-data";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | AI Agent Services — Kiến thức AI cho Doanh nghiệp",
  description:
    "Cập nhật xu hướng AI, hướng dẫn triển khai, case study và chiến lược chuyển đổi số cho doanh nghiệp Việt Nam.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Blog & Insights
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Kiến thức <span className="gradient-text">AI</span> cho Doanh nghiệp
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Xu hướng AI mới nhất, hướng dẫn triển khai thực tế, và case study từ doanh nghiệp
              Việt Nam đã chuyển đổi thành công.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    categoryColors[featured.category]
                  }`}
                >
                  {categoryLabels[featured.category]}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{featured.publishedAt}</span>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Đọc bài viết <ArrowRight className="w-4 h-4" />
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
                className="group rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        categoryColors[post.category]
                      }`}
                    >
                      {categoryLabels[post.category]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400">{post.publishedAt}</span>
                    <span className="text-sm text-primary font-semibold">
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
