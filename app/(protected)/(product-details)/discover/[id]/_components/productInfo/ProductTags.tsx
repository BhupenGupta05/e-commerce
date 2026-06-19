interface Props {
  tags: string[];
}

export default function ProductTags({
  tags,
}: Props) {
  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className="
              rounded-full
              bg-emerald-100
              px-2 py-1
              text-[10px]
              font-medium
              text-emerald-800
            "
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}