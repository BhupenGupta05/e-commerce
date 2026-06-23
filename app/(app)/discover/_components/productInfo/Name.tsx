export default function Name({
  name,
}: {
  name: string;
}) {
  return (
    <h1
      className="
      mt-2
        text-2xl tracking-wide lg:text-3xl font-bold
      "
    >
      {name}
    </h1>
  );
}