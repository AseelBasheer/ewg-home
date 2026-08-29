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
              { href: "#why-us", label: "Why Us" },
              { href: "#services", label: "Solutions" },
              { href: "#platforms", label: "Platforms" },
              { href: "#approach", label: "Approach" },
              { href: "#ai-intelligence", label: "AI & Data" },
              { href: "#security", label: "Security" },
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

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-medium text-foreground">
              East West Global LLC
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Automation | Digital Transformation | Intelligent Systems
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              We build technology that connects operations, data, and decisions.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {currentYear} East West Global LLC
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <a
              href="mailto:info@ewglobal-llc.com"
              className="block transition-colors hover:text-foreground"
            >
              info@ewglobal-llc.com
            </a>
            <a
              href="https://ewglobal-llc.com"
              className="mt-1 block transition-colors hover:text-foreground"
            >
              ewglobal-llc.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
