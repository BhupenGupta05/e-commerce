interface Props {
  priceInPaisa: number;
}

export default function ProductPrice({
  priceInPaisa,
}: Props) {
  return (
    <p
      className="
        mt-3 text-2xl lg:text-3xl font-bold"
    >
      ₹{(priceInPaisa / 100).toLocaleString()}
    </p>
  );
}