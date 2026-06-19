import { IoStar } from "react-icons/io5";

interface Props {
  rating: number;
  reviews: number;
}

export default function ProductRating({
  rating,
  reviews,
}: Props) {
  return (
    <div className="flex items-center gap-1 text-xs lg:text-sm mt-2">
      <IoStar className="text-black" />

      <span className="font-medium">
        {rating}
      </span>

      <span className="text-slate-700">
        ({reviews.toLocaleString()} reviews)
      </span>
    </div>
  );
}