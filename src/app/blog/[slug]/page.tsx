import {
  blogPosts,
  getBlogPost,
  categoryLabels,
} from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
        <ul key={`list-${listKey++}`} className="space-y-3 mb-8 ml-1">
          {currentList.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg text-slate leading-relaxed"
            >
              <span className="w-1 h-1 rounded-full bg-gold mt-3 shrink-0" />
              <span
                dangerouslySetInnerHTML={{ __html: inlineFormat(item) }}
              />
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const inlineFormat = (text: string) => {
    return text
      .replace(
        /\*\*(.+?)\*\*/g,
        '<strong class="font-semibold text-charcoal">$1</strong>'
      )
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={i}
          className="font-display text-xl text-charcoal mt-10 mb-4"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(4)) }}
        />
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={i}
          className="font-display text-2xl sm:text-3xl text-charcoal mt-12 mb-5"
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
          className="text-lg text-slate leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
        />
      );
    }
  }
  flushList();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-silver hover:text-charcoal transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-gold">
              {categoryLabels[post.category]}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-silver">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-silver">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-silver">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight mb-8">
            {post.title}
          </h1>

          <div className="w-16 h-px bg-gold mb-10" />

          {/* Cover image */}
          <div className="relative overflow-hidden mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold" />
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {renderMarkdown(post.content)}
          </div>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-pearl">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-4 h-4 text-silver" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-pearl text-xs tracking-[0.1em] uppercase text-slate"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 bg-charcoal p-10 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
              Bắt Đầu Ngay
            </p>
            <h3 className="font-display text-2xl text-white mb-4">
              Bạn muốn ứng dụng AI cho doanh nghiệp?
            </h3>
            <p className="text-silver mb-8 max-w-lg mx-auto">
              Đặt lịch tư vấn miễn phí — chúng tôi sẽ phân tích cơ hội AI phù
              hợp nhất cho bạn.
            </p>
            <Link
              href="/#contact"
              className="btn-luxury btn-luxury-gold inline-flex"
            >
              Tư Vấn Miễn Phí
            </Link>
          </div>
        </article>

        {/* Related posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
              Đọc Thêm
            </p>
            <h2 className="font-display text-2xl text-charcoal">
              Bài Viết Liên Quan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group border border-pearl overflow-hidden hover-lift bg-white"
              >
                <div className="h-44 overflow-hidden img-zoom">
                  <img
                    src={rp.coverImage}
                    alt={rp.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs tracking-[0.2em] uppercase text-gold mb-2 block">
                    {categoryLabels[rp.category]}
                  </span>
                  <h3 className="font-display text-base text-charcoal group-hover:text-gold transition-colors line-clamp-2">
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
