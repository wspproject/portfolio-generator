import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const buttonClass = (buttonName: string) =>
    `rounded-full ${
      buttonName == theme
        ? "bg-white text-black dark:bg-black dark:text-white"
        : "bg-black text-white dark:bg-white dark:text-black"
    } px-2 py-1 font-bold text-xs `;

  return (
    <div className="flex rounded-full border-2 border-black bg-black dark:border-white dark:bg-white">
      <button className={buttonClass("light")} onClick={() => setTheme("light")}>
        Light
      </button>

      <button className={buttonClass("system")} onClick={() => setTheme("system")}>
        System
      </button>

      <button className={buttonClass("dark")} onClick={() => setTheme("dark")}>
        Dark
      </button>
    </div>
  );
};
