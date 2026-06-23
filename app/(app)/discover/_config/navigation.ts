import { RiCompassDiscoverLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LuBot } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";

export const navigation = [
  {
    label: "Discover",
    href: "/discover",
    icon: RiCompassDiscoverLine
  },
  {
    label: "For you",
    href: "/for-you",
    icon: HiOutlineSparkles
  },
  {
    label: "Assistant",
    href: "/assistant",
    icon: LuBot
  },
  {
    label: "Saved",
    href: "/wishlist",
    icon: IoMdHeartEmpty
  },
];