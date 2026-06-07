import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LuBot } from "react-icons/lu";

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
  // {
  //   label: "Dashboard",
  //   href: "#",
  //   icon: MdOutlineDashboardCustomize
  // },
];