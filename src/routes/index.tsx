import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CornerFrame } from "@/components/site/CornerFrame";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Tag } from "@/components/site/Tag";
import portrait from "@/assets/portrait.png";
import { profile, projects, stats, systemExperience, skills } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Gupta — Machine Learning Engineer" },
      {
        name: "description",
        content:
          "ML Engineer focused on RAG, NLP, computer vision, and building real-world AI systems.",
      },
      { property: "og:title", content: "Ayush Gupta — Machine Learning Engineer" },
      {
        property: "og:description",
        content:
          "ML Engineer focused on RAG, NLP, computer vision, and building real-world AI systems.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const allSkills = skills.flatMap((g) => g.items);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              // {profile.title}
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Building <span className="text-primary text-glow">intelligent</span>
              <br />
              systems, not just <br />
              models.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              {profile.tagline} I design and ship ML products end-to-end — from data and
              modelling to APIs and integration.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" aria-hidden />
              <CornerFrame className="relative">
                <img
                  src={portrait}
                  alt="Portrait of Ayush Gupta"
                  className="h-[420px] w-[340px] rounded-sm object-cover sm:h-[480px] sm:w-[380px]"
                />
              </CornerFrame>
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-md border border-border bg-surface/90 px-4 py-2 backdrop-blur">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  status
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="about"
          title="Engineer-minded, ML-focused."
          description={profile.summary}
        />
        <Link
          to="/about"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary hover:underline"
        >
          Read full bio <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="featured work"
            title="Selected projects"
            description="A few systems I've designed, built, and shipped end-to-end."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projects"
                className="group flex flex-col rounded-lg border border-border bg-surface p-6 glow-on-hover"
              >
                <Tag variant="primary">{p.domain}</Tag>
                <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.problem}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  Case study <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="ml system experience"
          title="What I work on"
          description="Practical capabilities I bring to ML and AI engineering work."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {systemExperience.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-border bg-surface p-6 glow-on-hover"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <section className="border-y border-border/60 bg-surface/30 py-10">
        <div className="overflow-hidden">
          <div className="marquee">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// next step</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Have an ML idea worth shipping?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          I'm open to internships, collaborations, and technical conversations around real-world AI
          systems.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow"
        >
          Let's talk <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
}
