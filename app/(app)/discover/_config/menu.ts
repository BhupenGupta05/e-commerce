import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";

export const menu = [
  {
    label: "Search",
    href: "/search",
    icon: IoSearchOutline
  },
  {
    label: "Cart",
    href: "/cart",
    icon: AiOutlineShopping
  },
];

export const menuDrawer = [
  {
    label: "Profile",
    href: "/profile",
    icon: PiUserCircle
  },
  {
    label: "Order",
    href: "/orders",
    icon: PiUserCircle
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: PiUserCircle
  },
]