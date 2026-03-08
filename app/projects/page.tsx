import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import SectionHeader from "@/app/components/SectionHeader";
import FadeIn from "@/app/components/FadeIn";
import ProjectCard from "@/app/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Zach Johnson",
  description:
    "A collection of projects I've built — from web apps and design systems to side experiments and client work.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader title="ALL PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 100}>
            <ProjectCard
              title={project.title}
              slug={project.slug}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
