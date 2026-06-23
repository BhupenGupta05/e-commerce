import { HiOutlineSparkles } from "react-icons/hi2";

interface Props {
  value: number;
}

export default function MatchBadge({
  value,
}: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] lg:text-xs font-medium text-emerald-800">
      <HiOutlineSparkles size={12} />
      {value}% Match
    </div>
  );
}