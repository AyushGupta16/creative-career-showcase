import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Tag } from "@/components/site/Tag";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ayush Gupta" },
      {
        name: "description",
        content:
          "Case studies of ML projects: persona-adaptive GenAI agent, computer vision artifact recognition, and churn prediction.",
      },
      { property: "og:title", content: "Projects — Ayush Gupta" },
      {
        property: "og:description",
        content: "Case studies of GenAI, computer vision and predictive ML projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="projects"
          title="Selected case studies"
          description="Each project below is presented as a problem → build → outcome — the way I think about real ML work."
        />

        <div className="space-y-8">
          {projects.map((p, idx) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block overflow-hidden rounded-xl border border-border bg-surface glow-on-hover"
            >
              <div className="grid md:grid-cols-[180px_1fr]">
                <div className="flex flex-col items-start gap-3 border-b border-border/60 bg-surface-elevated p-6 md:border-b-0 md:border-r">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    // {String(idx + 1).padStart(2, "0")}
                  </span>
                  <Tag variant="primary">{p.domain}</Tag>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {p.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                        Problem
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{p.problem}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                        What I built
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{p.built}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{p.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                      Highlights
                    </p>
                    <ul className="mt-2 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    Read case study <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
