"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {mounted &&
        (currentTheme == "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ))}
    </div>
  );
}
