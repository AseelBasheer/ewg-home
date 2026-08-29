"use client";

import { Lightbulb, LightbulbOff } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card text-foreground transition-all hover:border-primary/40 hover:text-primary",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <LightbulbOff className="h-4 w-4" />
      ) : (
        <Lightbulb className="h-4 w-4 fill-primary/20 text-primary" />
      )}
    </button>
  );
}
