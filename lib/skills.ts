export interface Skill {
  name: string;
  slug: string;
  category: 'frontend' | 'backend' | 'mobile' | 'data' | 'tools' | 'design' | 'ai';
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
  { name: "Ruby on Rails", slug: "rubyonrails", category: "backend" },
  { name: "Python", slug: "python", category: "backend" },
  { name: "Django", slug: "django", category: "backend" },
  { name: "Flask", slug: "flask", category: "backend" },
  { name: "Node.js", slug: "nodedotjs", category: "backend" },
  { name: "Express.js", slug: "express", category: "backend" },
  { name: "Go", slug: "go", category: "backend" },
  { name: "C#", slug: "csharp", category: "backend" },
  { name: "ASP.NET", slug: "dotnet", category: "backend" },

  // Mobile
  { name: "Flutter", slug: "flutter", category: "mobile" },
  { name: "Dart", slug: "dart", category: "mobile" },
  { name: "Swift", slug: "swift", category: "mobile" },
  { name: "Kotlin", slug: "kotlin", category: "mobile" },

  // Data
  { name: "PostgreSQL", slug: "postgresql", category: "data" },
  { name: "MySQL", slug: "mysql", category: "data" },
  { name: "Microsoft SQL Server", slug: "microsoftsqlserver", category: "data" },
  { name: "Oracle", slug: "oracle", category: "data" },
  { name: "Firebase", slug: "firebase", category: "data" },

  // Tools
  { name: "Git", slug: "git", category: "tools" },
  { name: "GitHub", slug: "github", category: "tools" },
  { name: "Docker", slug: "docker", category: "tools" },
  { name: "AWS", slug: "amazonaws", category: "tools" },
  { name: "Segment", slug: "segment", category: "tools" },
  { name: "Mixpanel", slug: "mixpanel", category: "tools" },
  { name: "Salesforce", slug: "salesforce", category: "tools" },

  // Design
  { name: "Figma", slug: "figma", category: "design" },
  { name: "Photoshop", slug: "adobephotoshop", category: "design" },
  { name: "Illustrator", slug: "adobeillustrator", category: "design" },
  { name: "Lightroom", slug: "adobelightroom", category: "design" },

  // AI & ML
  { name: "Claude", slug: "anthropic", category: "ai" },
  { name: "OpenAI", slug: "openai", category: "ai" },
  { name: "Google Gemini", slug: "googlegemini", category: "ai" },
  { name: "LangChain", slug: "langchain", category: "ai" },
  { name: "Eleven Labs", slug: "elevenlabs", category: "ai" },
];

export const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  data: "Databases",
  tools: "Dev Tools",
  design: "Design",
  ai: "AI & ML",
};
