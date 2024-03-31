import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";

const MENUITEMS = [
  {
    title: "Home",
    url: "/",
    icon: <AiFillHome />,
  },
  {
    title: "About",
    url: "/about",
    icon: <BsFillInfoCircleFill />,
  },
];
export default function MenuBar() {
  return (
    <div className=" flex justify-between items-center">
      <div className="flex gap-4 uppercase">
        {MENUITEMS.map((menu) => (
          <MenuItem menu={menu} key={menu.title} />
        ))}
      </div>
      <div className="flex gap-1 items-center">
        <Link
          href="/"
          className="bg-amber-500 text-white text-xl px-4 py-1 rounded-lg"
        >
          IMDb
        </Link>
        <span className="text-xl hidden sm:block">Clone</span>
      </div>
    </div>
  );
}
