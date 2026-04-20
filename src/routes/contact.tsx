import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayush Gupta" },
      {
        name: "description",
        content:
          "Get in touch with Ayush Gupta for ML engineering opportunities, collaborations, and technical conversations.",
      },
      { property: "og:title", content: "Contact — Ayush Gupta" },
      {
        property: "og:description",
        content: "Open to ML opportunities, collaborations, and technical discussions.",
      },
      { property: "og:image", content: "/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-default.jpg" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items: Array<{
    icon: typeof Mail;
    label: string;
    value: string;
    href?: string;
  }> = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            // get in touch
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Let's build something <span className="text-primary text-glow">intelligent</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            I'm open to ML internships, freelance ML/AI work, collaborations, and technical
            conversations about real-world AI systems.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow"
          >
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => {
            const Inner = (
              <>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <it.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {it.label}
                  </p>
                  <p className="truncate text-sm text-foreground">{it.value}</p>
                </div>
              </>
            );
            return it.href ? (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 glow-on-hover"
              >
                {Inner}
              </a>
            ) : (
              <div
                key={it.label}
                className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5"
              >
                {Inner}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
