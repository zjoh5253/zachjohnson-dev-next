import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import SectionHeader from "@/app/components/SectionHeader";
import FadeIn from "@/app/components/FadeIn";
import BlogCard from "@/app/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Zach Johnson",
  description:
    "Thoughts on development, design, entrepreneurship, and building things on the internet.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <SectionHeader title="BLOG" />

      {posts.length === 0 ? (
        <p className="text-[#a1a1a1]">No posts yet. Check back soon!</p>
      ) : (
        <div>
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 100}>
              <BlogCard
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
              />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
