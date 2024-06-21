"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    // ENABLE THIS IF YOU WANT TO USE SYSTEM THEME AS DEFAULT

    // const checkTheSystemThemeIsDark =
    //   document.documentElement.classList.contains("dark");

    // if (checkTheSystemThemeIsDark) {
    //   setChecked(true);
    //   setIsThemeDark(true);
    // } else {
    //   setIsThemeDark(false);
    //   setChecked(false);
    // }

    // //THEME SHOULD BE DARK BY DEFAULT
    setTheme("light");
    // setChecked(true);
  }, []);

  return (
    <div className="px-4">
      <Switch
        aria-readonly
        checked={checked}
        onCheckedChange={(e) => {
          if (e) {
            setTheme("dark");
            setChecked(true);
          } else {
            setTheme("light");
            setChecked(false);

            localStorage.setItem("theme", "light");
          }
        }}
      />
    </div>
  );
}
