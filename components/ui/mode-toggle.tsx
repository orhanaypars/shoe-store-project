"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Eğer `theme` undefined ise, bileşeni render etmeyin
  if (!theme) return null;

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
        className="bg-gray-300 dark:bg-gray-600"
      />
    </div>
  );
}
