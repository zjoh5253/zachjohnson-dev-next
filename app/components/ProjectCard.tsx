import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  slug,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block group">
      <div className="bg-[#141414] border border-[#262626] rounded-lg overflow-hidden hover:border-[#a1a1a1] transition">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={800}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-heading text-xl uppercase text-[#fafafa]">{title}</h3>
          <p className="text-[#a1a1a1] text-sm mt-2">{description}</p>

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
      </div>
    </Link>
  );
}
