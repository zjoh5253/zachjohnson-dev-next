import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug } from "@/lib/content";
import FadeIn from "@/app/components/FadeIn";
import MarkdownContent from "@/app/components/MarkdownContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Zach Johnson" };
  }

  return {
    title: `${project.title} | Zach Johnson`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <FadeIn>
        <Link
          href="/projects"
          className="text-[#a1a1a1] hover:text-[#fafafa] font-mono text-sm transition"
        >
          ← Back to Projects
        </Link>
      </FadeIn>

      <FadeIn delay={100}>
        {project.image && (
          <div className="mt-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        )}

        <h1 className="font-heading text-4xl md:text-5xl uppercase mt-8 text-[#fafafa]">
          {project.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <time className="text-[#6b6b6b] font-mono text-sm">{formattedDate}</time>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#1a1a1a] text-[#6b6b6b] text-xs px-2 py-1 rounded font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links row */}
        {(project.url || project.github) && (
          <div className="flex flex-wrap gap-3 mt-6">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1a1] hover:text-[#fafafa] font-mono text-sm border border-[#262626] px-4 py-2 rounded-lg hover:border-[#a1a1a1] transition"
              >
                Visit Site →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1a1] hover:text-[#fafafa] font-mono text-sm border border-[#262626] px-4 py-2 rounded-lg hover:border-[#a1a1a1] transition"
              >
                View Source →
              </a>
            )}
          </div>
        )}
      </FadeIn>

      <FadeIn delay={200}>
        <div className="max-w-none mt-8">
          <MarkdownContent content={project.content} />
        </div>
      </FadeIn>
    </div>
  );
}
