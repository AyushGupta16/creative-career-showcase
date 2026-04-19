import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/certifications", label: "Certifications" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground shadow-glow">
            AG
          </span>
          <span className="font-mono text-sm tracking-tight text-foreground">
            ayush<span className="text-primary">.</span>gupta
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "relative rounded-md px-3 py-2 text-sm text-foreground [&>span]:opacity-100",
              }}
            >
              {l.label}
              <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-primary opacity-0 shadow-glow transition-opacity" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-glow"
          >
            Get in touch →
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{
                  className: "rounded-md px-3 py-2 text-sm bg-muted text-foreground",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground"
            >
              Get in touch →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
