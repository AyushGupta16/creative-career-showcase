import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ayush Gupta" },
      {
        name: "description",
        content:
          "ML internships and R&D experience including LPU Innovation Studio and AllSoft Solutions (IBM Partner).",
      },
      { property: "og:title", content: "Experience — Ayush Gupta" },
      {
        property: "og:description",
        content: "ML internships and R&D experience.",
      },
      { property: "og:image", content: "/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-default.jpg" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          eyebrow="experience"
          title="Where I've worked"
          description="Internship and R&D roles where I shipped ML and AI work."
        />

        <ol className="relative space-y-10 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={e.role + e.company} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground">{e.role}</h3>
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="text-foreground">{e.company}</span> · {e.location}
              </p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}
