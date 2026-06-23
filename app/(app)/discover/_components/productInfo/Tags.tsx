interface Props {
  tags: string[];
}

//  NEED TAG BACKGROUND COLOUR
export default function Tags({
  tags,
}: Props) {
  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className="
              rounded-md
              text-white
              bg-gray-500
              px-2 py-1
              text-[10px]
              font-medium
            "
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}