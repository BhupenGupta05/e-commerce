interface Props {
  tags: string[];
}

export default function Tags({
  tags,
}: Props) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#DDE5E0] bg-[#F7FAF8] px-3 py-1 text-[10px] lg:text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}