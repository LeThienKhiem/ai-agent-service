import { blogPosts, getBlogPost, categoryLabels, categoryColors } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Bài viết không tồn tại" };
  return {
    title: `${post.title} | AI Agent Services Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "vi_VN",
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listKey = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="space-y-2 mb-6 ml-1">
          {currentList.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-gray-700 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const inlineFormat = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={i}
          className="text-xl font-bold text-gray-900 mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(4)) }}
        />
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={i}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-5"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(3)) }}
        />
      );
    } else if (line.startsWith("- ")) {
      currentList.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={i}
          className="text-lg text-gray-700 leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
        />
      );
    }
  }
  flushList();

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-base text-gray-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                categoryColors[post.category]
              }`}
            >
              {categoryLabels[post.category]}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>

          {/* Cover image */}
          <div className="relative rounded-2xl overflow-hidden mb-10 border border-gray-200">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose-custom">{renderMarkdown(post.content)}</div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/15 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Bạn muốn ứng dụng AI cho doanh nghiệp?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Đặt lịch tư vấn miễn phí 30 phút — chúng tôi sẽ phân tích cơ hội AI phù hợp nhất cho bạn.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Tư vấn miễn phí
            </Link>
          </div>
        </article>

        {/* Related posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết liên quan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={rp.coverImage}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      categoryColors[rp.category]
                    } mb-2`}
                  >
                    {categoryLabels[rp.category]}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
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
