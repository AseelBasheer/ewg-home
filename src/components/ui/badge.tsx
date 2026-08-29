import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent font-semibold whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "h-5 px-2 py-0.5 text-xs [&>svg:not([class*='size-'])]:size-3 bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "h-5 px-2 py-0.5 text-xs [&>svg:not([class*='size-'])]:size-3 border border-border bg-card text-foreground [a]:hover:bg-card/90",
        destructive:
          "h-5 px-2 py-0.5 text-xs [&>svg:not([class*='size-'])]:size-3 bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "h-auto px-4 py-1.5 text-xs sm:text-sm tracking-wide border-primary/50 bg-primary text-primary-foreground [a]:hover:bg-primary/90",
        section:
          "h-auto px-5 py-2.5 text-sm uppercase tracking-widest sm:px-6 sm:py-3 sm:text-base md:text-lg border-primary/50 bg-primary text-primary-foreground [a]:hover:bg-primary/90",
        ghost:
          "h-5 px-2 py-0.5 text-xs [&>svg:not([class*='size-'])]:size-3 text-foreground hover:bg-card hover:text-foreground dark:hover:bg-card/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
