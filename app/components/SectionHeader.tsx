interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wider text-[#fafafa]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#a1a1a1] mt-2 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
