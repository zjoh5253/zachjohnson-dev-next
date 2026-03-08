import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  date,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="border-b border-[#262626] py-6 hover:bg-[#141414] px-4 -mx-4 rounded transition">
        <time className="text-[#6b6b6b] text-sm font-mono">{date}</time>
        <h3 className="font-heading text-xl uppercase text-[#fafafa] mt-1">{title}</h3>
        <p className="text-[#a1a1a1] text-sm mt-2">{excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#1a1a1a] text-[#6b6b6b] text-xs px-2 py-1 rounded font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
