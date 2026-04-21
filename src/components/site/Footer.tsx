import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // ayush gupta
          </p>
          <p className="mt-1 text-sm text-foreground">
            ML Engineer focused on RAG, NLP, and real-world AI systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/AyushGupta16"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushgupta1606"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:ayushrajguptagn@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Ayush Gupta</span>
          <Link to="/contact" className="hover:text-primary">
            ayushrajguptagn@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
