export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <p
      className="
        mt-3 max-w-xl text-xs lg:text-sm leading-6
        text-slate-600
      "
    >
      {description}
    </p>
  );
}