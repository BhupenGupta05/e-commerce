interface Props {
  priceInPaisa: number;
}

export default function Price({
  priceInPaisa,
}: Props) {
  return (
    <p
      className="
        mt-3 text-2xl lg:text-3xl font-bold"
    >
      ₹{(priceInPaisa / 100).toLocaleString('en-IN')}
    </p>
  );
}