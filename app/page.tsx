import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects, getBlogPosts } from "@/lib/content";
import { skills, categoryLabels } from "@/lib/skills";
import SectionHeader from "@/app/components/SectionHeader";
import FadeIn from "@/app/components/FadeIn";
import ProjectCard from "@/app/components/ProjectCard";
import BlogCard from "@/app/components/BlogCard";
import SkillBadge from "@/app/components/SkillBadge";

const categories = ["frontend", "backend", "mobile", "data", "tools", "design", "ai"] as const;

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
                Product Leader. Builder. Dad.
              </p>
              <p className="text-[#a1a1a1] mt-6 leading-relaxed">
                I&apos;m a product leader who codes. I&apos;ve led the creation of 5 major
                products from scratch that have generated over $10M in revenue. I build
                with small, skilled teams and AI-powered tools to ship faster than anyone
                expects.
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
              I&apos;m a product leader who codes. Since joining Impact Suite in December
              2020, I&apos;ve led the creation of 5 major products from scratch that have
              generated over $10M in revenue across B2B and consumer markets.
            </p>
            <p>
              Most recently, I led a strategic pivot to K-12 education. When our
              compliance partner withdrew, my 2-person dev team and I built the entire
              Impact Suite for Schools platform in 5 months — a project typically
              requiring 10 engineers and a year. Using AI-powered development tools, we
              achieved $300K ARR and a $3M+ pipeline by October 2025, serving 20 school
              districts.
            </p>
            <p>
              I&apos;m passionate about mental health technology, AI-native product
              development, and proving that small, skilled teams with the right tools can
              outpace traditional development timelines.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader title="EXPERIENCE" />
        <div className="space-y-10">
          {[
            {
              company: "Impact Suite",
              role: "VP of Product",
              dates: "Mar 2024 – Present",
              location: "Logan, UT",
              description:
                "Led company's strategic pivot into K-12 education. Built entire Impact Suite for Schools platform with 2-person dev team in 5 months. $300K ARR, 20 school districts, $3M+ pipeline.",
            },
            {
              company: "Impact Suite",
              role: "Software Engineer",
              dates: "Dec 2020 – Present",
              location: "Logan, UT",
              description:
                "Led or contributed to 5 major 0-to-1 product builds generating $10M+ revenue. Technical architect for products serving 25K+ monthly active users.",
            },
            {
              company: "Nexant",
              role: "Software Engineer",
              dates: "Jul 2019 – May 2021",
              location: "Murray, UT",
              description:
                "Built internal tools and APIs using Python, PHP, JavaScript, ASP.NET C#. Integrated VOIP APIs and managed data across PostgreSQL, MySQL, Oracle, and SQL Server.",
            },
            {
              company: "BoomCloud",
              role: "Lead Software Engineer",
              dates: "May 2018 – Aug 2019",
              location: "Draper, UT",
              description:
                "Refactored legacy ASP.NET app, migrated to AWS, built React frontends. Managed team serving 300+ dental practices.",
            },
            {
              company: "WorkSumo",
              role: "Co-Founder & Chief of Product",
              dates: "Jan 2017 – Jan 2020",
              location: "Salt Lake City, UT",
              description:
                "Led design and development of on-demand employment platform. Managed customer relations and investor engagement.",
            },
            {
              company: "iWT Health",
              role: "Web Developer & Salesforce CRM",
              dates: "Jan 2016 – Oct 2017",
              location: "",
              description:
                "Led web development and Salesforce CRM administration. Built responsive sites with HTML5, SCSS, JavaScript.",
            },
          ].map((exp, i) => (
            <FadeIn key={`${exp.company}-${exp.role}`} delay={i * 80}>
              <div className="border-l-2 border-[#262626] pl-6 relative">
                <span className="absolute -left-[5px] top-2 w-2 h-2 bg-[#a1a1a1] rounded-full" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-lg uppercase text-[#fafafa]">
                    {exp.company}
                  </h3>
                  <span className="text-[#a1a1a1] text-sm">{exp.role}</span>
                </div>
                <p className="font-mono text-xs text-[#6b6b6b] mt-1">
                  {exp.dates}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
                <p className="text-[#a1a1a1] text-sm mt-2">{exp.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
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
