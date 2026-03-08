import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects, getBlogPosts } from "@/lib/content";
import { skills, categoryLabels } from "@/lib/skills";
import SectionHeader from "@/app/components/SectionHeader";
import FadeIn from "@/app/components/FadeIn";
import ProjectCard from "@/app/components/ProjectCard";
import BlogCard from "@/app/components/BlogCard";
import SkillBadge from "@/app/components/SkillBadge";

const categories = ["frontend", "backend", "tools", "design", "ai"] as const;

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="text-[#a1a1a1] font-mono text-sm mb-3">Hi, I&apos;m</p>
              <h1 className="font-heading text-6xl md:text-8xl leading-none text-[#fafafa]">
                ZACH JOHNSON
              </h1>
              <p className="text-[#a1a1a1] text-xl mt-4 font-body">
                Developer. Designer. Dad.
              </p>
              <p className="text-[#a1a1a1] mt-6 leading-relaxed">
                I&apos;m an entrepreneur, developer, dreamer, and most recently a Dad.
                I&apos;m passionate about design and creating great digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/projects"
                  className="bg-[#fafafa] text-[#0a0a0a] px-6 py-3 rounded-lg font-heading uppercase tracking-wider hover:bg-[#e5e5e5] transition"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#262626] text-[#fafafa] px-6 py-3 rounded-lg hover:border-[#a1a1a1] transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right — headshot */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/headshot.jpg"
                  alt="Zach Johnson"
                  fill
                  className="object-cover grayscale contrast-125"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader title="ABOUT" />
        <FadeIn>
          <div className="max-w-2xl space-y-5 text-[#a1a1a1] leading-relaxed">
            <p>
              I&apos;m an entrepreneur, developer, dreamer, and most recently a Dad.
              Based in Salt Lake City, I build digital products and experiences that
              make a difference.
            </p>
            <p>
              I&apos;m passionate about design. I have a knack for creating user
              experiences and love to keep up with the ever changing world of software
              development. From startups to consulting, I bring ideas to life through
              code.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader title="SKILLS" />
        <div className="space-y-10">
          {categories.map((cat, i) => {
            const categorySkills = skills.filter((s) => s.category === cat);
            if (categorySkills.length === 0) return null;
            return (
              <FadeIn key={cat} delay={i * 80}>
                <div>
                  <h3 className="font-mono text-sm text-[#6b6b6b] uppercase tracking-wider mb-4">
                    {categoryLabels[cat]}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <SkillBadge key={skill.slug} name={skill.name} slug={skill.slug} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader title="FEATURED WORK" />
        <FadeIn>
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  slug={project.slug}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              ))}
            </div>
          ) : (
            <p className="text-[#6b6b6b] font-mono text-sm">Projects coming soon.</p>
          )}
        </FadeIn>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-[#fafafa] text-[#0a0a0a] px-6 py-3 rounded-lg font-heading uppercase tracking-wider hover:bg-[#e5e5e5] transition"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* ── LATEST BLOG POSTS ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader title="LATEST POSTS" />
        <FadeIn>
          {latestPosts.length > 0 ? (
            <div>
              {latestPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  date={post.date}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <p className="text-[#6b6b6b] font-mono text-sm">Posts coming soon.</p>
          )}
        </FadeIn>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block border border-[#262626] text-[#fafafa] px-6 py-3 rounded-lg hover:border-[#a1a1a1] transition"
          >
            View All Posts
          </Link>
        </div>
      </section>

      {/* ── PRESS ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          title="PRESS"
          subtitle="Some cool things written about me and my projects"
        />
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.utahbusiness.com/20-in-their-20s-honorees/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#262626] rounded-lg p-6 hover:border-[#a1a1a1] transition block"
            >
              <p className="font-mono text-xs text-[#6b6b6b] uppercase tracking-wider mb-2">
                Utah Business
              </p>
              <h3 className="font-heading text-xl text-[#fafafa]">
                20 IN THEIR 20S
              </h3>
              <p className="text-[#a1a1a1] text-sm mt-2">
                Named one of Utah Business Magazine&apos;s 20 in their 20s honorees.
              </p>
            </a>

            <a
              href="https://utahstories.com/2019/04/worksumo-company-wants-to-help-workers-grow-careers/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] border border-[#262626] rounded-lg p-6 hover:border-[#a1a1a1] transition block"
            >
              <p className="font-mono text-xs text-[#6b6b6b] uppercase tracking-wider mb-2">
                Utah Stories
              </p>
              <h3 className="font-heading text-xl text-[#fafafa]">
                WORKSUMO — UTAH STORIES
              </h3>
              <p className="text-[#a1a1a1] text-sm mt-2">
                Featured for building WorkSumo, a platform to help workers grow their careers.
              </p>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-6xl text-[#fafafa]">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-[#a1a1a1] mt-6 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m always open to new
            opportunities and conversations.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-[#fafafa] text-[#0a0a0a] px-8 py-4 rounded-lg font-heading uppercase tracking-wider hover:bg-[#e5e5e5] transition text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
