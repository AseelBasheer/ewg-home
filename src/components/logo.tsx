import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const LOGO_ASPECT = 1774 / 887;

const heights = {
  sm: 40,
  md: 52,
  lg: 120,
  xl: 220,
};

export function Logo({ className, size = "md" }: LogoProps) {
  const height = heights[size];
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/logo.png"
      alt="East West Global LLC — Automate. Connect. Transform."
      width={width}
      height={height}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ maxHeight: height, maxWidth: width }}
      priority={size === "lg" || size === "xl"}
    />
  );
}
