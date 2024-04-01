"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItems = [
  {
    title: "Trending",
    param: "fetchTrending",
  },
  {
    title: "TopRated",
    param: "fetchTopRated",
  },
];
export default function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <nav className="flex gap-6 justify-center items-center bg-amber-200 dark:bg-gray-600 py-4">
      {NavItems.map((item) => (
        <Link
          href={`?genre=${item.param}`}
          key={item.title}
          className={`hover:text-amber-600 font-semibold ${
            genre === item.param
              ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
