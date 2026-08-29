"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  labelClassName?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  titleClassName,
  labelClassName,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={cn("mx-auto max-w-4xl text-center", className)}>
      <Badge variant="section" className={cn("mb-6", labelClassName)}>
        {label}
      </Badge>
      {title && (
        <h2 className={cn("section-title text-foreground", titleClassName)}>{title}</h2>
      )}
      {description && (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
