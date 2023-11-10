//dependency: react-icons https://react-icons.github.io/react-icons
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";


export const routes = [
  {
    title: "Home",
    href: "home",
    Icon: BiHomeAlt2,
  },
  {
    title: "Explore",
    href: "explore",
    Icon: FiSearch,
  },
  {
    title: "Pricing",
    href: "pricing",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "about",
    Icon: PiChatCircleBold,
  },
];