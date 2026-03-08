export interface Skill {
  name: string;
  slug: string;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'ai';
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", slug: "react", category: "frontend" },
  { name: "Next.js", slug: "nextdotjs", category: "frontend" },
  { name: "TypeScript", slug: "typescript", category: "frontend" },
  { name: "JavaScript", slug: "javascript", category: "frontend" },
  { name: "HTML5", slug: "html5", category: "frontend" },
  { name: "CSS3", slug: "css3", category: "frontend" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "frontend" },

  // Backend
  { name: "Python", slug: "python", category: "backend" },
  { name: "Node.js", slug: "nodedotjs", category: "backend" },
  { name: "C#", slug: "csharp", category: "backend" },
  { name: "Flask", slug: "flask", category: "backend" },
  { name: "Firebase", slug: "firebase", category: "backend" },

  // Tools
  { name: "Git", slug: "git", category: "tools" },
  { name: "GitHub", slug: "github", category: "tools" },
  { name: "Docker", slug: "docker", category: "tools" },
  { name: "AWS", slug: "amazonaws", category: "tools" },

  // Design
  { name: "Figma", slug: "figma", category: "design" },
  { name: "Photoshop", slug: "adobephotoshop", category: "design" },
  { name: "Illustrator", slug: "adobeillustrator", category: "design" },
  { name: "Lightroom", slug: "adobelightroom", category: "design" },

  // AI
  { name: "Claude", slug: "anthropic", category: "ai" },
  { name: "OpenAI", slug: "openai", category: "ai" },
];

export const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Dev Tools",
  design: "Design",
  ai: "AI & ML",
};
