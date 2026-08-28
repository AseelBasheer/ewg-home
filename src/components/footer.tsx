import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo size="sm" />

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#dashboard", label: "Platform" },
              { href: "#workflow", label: "Workflow" },
              { href: "#services", label: "Services" },
              { href: "#vision", label: "Vision" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} East West Global LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            <a
              href="https://ewglobal-llc.com"
              className="transition-colors hover:text-foreground"
            >
              ewglobal-llc.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
