import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/content";
import FadeIn from "@/app/components/FadeIn";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Zach Johnson" };
  }

  return {
    title: `${post.title} | Zach Johnson`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <FadeIn>
        <Link
          href="/blog"
          className="text-[#a1a1a1] hover:text-[#fafafa] font-mono text-sm transition"
        >
          ← Back to Blog
        </Link>

        <time className="block text-[#6b6b6b] font-mono text-sm mt-6">
          {formattedDate}
        </time>

        <h1 className="font-heading text-4xl md:text-5xl uppercase mt-2 text-[#fafafa]">
          {post.title}
        </h1>

        {/* Tags + reading time */}
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <span className="text-[#6b6b6b] font-mono text-xs">
            {readingTime} min read
          </span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#1a1a1a] text-[#6b6b6b] text-xs px-2 py-1 rounded font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="prose prose-invert max-w-none mt-8">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[#a1a1a1] leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
