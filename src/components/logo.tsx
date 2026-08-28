import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const LOGO_ASPECT = 1320 / 1040;

const heights = {
  sm: 44,
  md: 56,
  lg: 96,
  xl: 160,
};

export function Logo({ className, size = "md" }: LogoProps) {
  const height = heights[size];
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/logo.jpg"
      alt="East West Global LLC"
      width={width}
      height={height}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ maxHeight: height, maxWidth: width }}
      priority={size === "lg" || size === "xl"}
    />
  );
}
