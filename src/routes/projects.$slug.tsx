import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CornerFrame } from "@/components/site/CornerFrame";
import { Tag } from "@/components/site/Tag";
import { projects, type Project } from "@/data/portfolio";
import { projectImages } from "@/lib/project-images";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Ayush Gupta` },
          { name: "description", content: loaderData.project.problem },
          { property: "og:title", content: `${loaderData.project.title} — Ayush Gupta` },
          { property: "og:description", content: loaderData.project.problem },
        ]
      : [{ title: "Project — Ayush Gupta" }],
  }),
  notFoundComponent: () => (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// 404</p>
        <h1 className="mt-3 text-4xl font-bold">Project not found</h1>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </section>
    </Layout>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const image = projectImages[project.image];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <Tag variant="primary">{project.domain}</Tag>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                {project.overview ?? project.built}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 md:text-right">
              {project.year && (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Year
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-foreground">{project.year}</dd>
                </div>
              )}
              {project.role && (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Role
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-foreground">{project.role}</dd>
                </div>
              )}
            </dl>
          </div>

          {image && (
            <div className="mt-12">
              <CornerFrame>
                <img
                  src={image}
                  alt={`${project.title} screenshot`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full rounded-sm object-cover"
                />
              </CornerFrame>
            </div>
          )}
        </div>
      </section>

      {/* META */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
              // problem
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
              // what i built
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{project.built}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
              // outcome
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{project.outcome}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      {project.approach && project.approach.length > 0 && (
        <section className="border-t border-border/60 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How it was built
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {project.approach.map((a, i) => (
                <div
                  key={a.title}
                  className="rounded-lg border border-border bg-surface p-6 glow-on-hover"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    // {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESULTS / HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// results</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          What came out of it
        </h2>
        <ul className="mt-8 space-y-3">
          {(project.results ?? project.highlights).map((r) => (
            <li
              key={r}
              className="flex gap-3 rounded-lg border border-border bg-surface p-4 text-sm text-foreground"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {r}
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {l.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </section>

      {/* NEXT */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                // next project
              </p>
              <p className="mt-2 text-2xl font-bold text-foreground group-hover:text-primary sm:text-3xl">
                {next.title}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
              View case study <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
