import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  tags: string[];
  featured: boolean;
  date: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  published: boolean;
  content: string;
}

function getMdxFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith('.mdx'));
}

export function getProjects(): Project[] {
  const files = getMdxFiles(projectsDirectory);
  if (files.length === 0) return [];

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? '',
      description: data.description ?? '',
      image: data.image ?? '',
      url: data.url,
      github: data.github,
      tags: Array.isArray(data.tags) ? data.tags : [],
      featured: data.featured === true,
      date: data.date ?? '',
      content,
    } satisfies Project;
  });

  return projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    image: data.image ?? '',
    url: data.url,
    github: data.github,
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: data.featured === true,
    date: data.date ?? '',
    content,
  };
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getBlogPosts(): BlogPost[] {
  const files = getMdxFiles(blogDirectory);
  if (files.length === 0) return [];

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title ?? '',
        excerpt: data.excerpt ?? '',
        date: data.date ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        published: data.published === true,
        content,
      } satisfies BlogPost;
    })
    .filter((post) => post.published);

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post: BlogPost = {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    published: data.published === true,
    content,
  };

  if (!post.published) return undefined;

  return post;
}
