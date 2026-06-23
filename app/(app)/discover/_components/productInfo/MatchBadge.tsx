import { HiOutlineSparkles } from "react-icons/hi2";

export default function MatchBadge({
  score,
}: {
  score: number;
}) {
  return (
    <div
      className="
        inline-flex gap-1 w-fit font-medium items-center rounded-full
        bg-emerald-100 px-2 py-1 text-emerald-800
      "
    >
      <HiOutlineSparkles size={14} /> <span className="text-[10px]">{score}% Match</span>
    </div>
  );
}