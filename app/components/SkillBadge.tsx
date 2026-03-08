"use client";

import { useEffect, useState } from "react";

interface SkillBadgeProps {
  name: string;
  slug: string;
}

function GenericCodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function SkillBadge({ name, slug }: SkillBadgeProps) {
  const [iconSvg, setIconSvg] = useState<string | null>(null);

  useEffect(() => {
    // Attempt to load simple-icons dynamically
    import("simple-icons")
      .then((si) => {
        // simple-icons exports icons as `si${PascalCase}` e.g. siReact, siTypescript
        const key =
          "si" +
          slug
            .replace(/[^a-zA-Z0-9]/g, "")
            .charAt(0)
            .toUpperCase() +
          slug.replace(/[^a-zA-Z0-9]/g, "").slice(1).toLowerCase();

        const icon = (si as unknown as Record<string, { svg: string } | undefined>)[key];
        if (icon?.svg) {
          setIconSvg(icon.svg);
        }
      })
      .catch(() => {
        // simple-icons not installed — silently fall back to generic icon
      });
  }, [slug]);

  return (
    <span className="flex items-center gap-2 bg-[#141414] border border-[#262626] rounded-full px-3 py-1.5">
      {iconSvg ? (
        <span
          className="w-4 h-4 flex-shrink-0 text-[#a1a1a1]"
          style={{ width: 16, height: 16 }}
          dangerouslySetInnerHTML={{
            __html: iconSvg.replace(
              "<svg",
              '<svg width="16" height="16" fill="#a1a1a1"'
            ),
          }}
        />
      ) : (
        <span className="text-[#a1a1a1] flex-shrink-0">
          <GenericCodeIcon />
        </span>
      )}
      <span className="text-sm text-[#a1a1a1] font-mono">{name}</span>
    </span>
  );
}
