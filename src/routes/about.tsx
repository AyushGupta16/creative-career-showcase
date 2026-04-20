import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CornerFrame } from "@/components/site/CornerFrame";
import portrait from "@/assets/portrait.png";
import { profile, education, achievements } from "@/data/portfolio";
import { Download } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayush Gupta" },
      {
        name: "description",
        content:
          "About Ayush Gupta — ML Engineer, education at LPU, achievements, and what I bring to engineering teams.",
      },
      { property: "og:title", content: "About — Ayush Gupta" },
      {
        property: "og:description",
        content: "Background, education, achievements and engineering values.",
      },
      { property: "og:image", content: "/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-default.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_360px]">
        <div>
          <SectionHeading
            eyebrow="about me"
            title="ML engineer with a builder's instinct."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{profile.summary}</p>
            <p>
              My focus is on the boring-but-critical parts of ML — clean data pipelines, honest
              evaluation, and shipping models behind reliable APIs. I care more about systems that
              work in production than benchmark scores in a notebook.
            </p>
            <p>
              I've built RAG systems, NLP pipelines, computer-vision detectors, and predictive
              models — each as a small case study in turning a vague problem into a working
              product.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/Ayush-Gupta-CV.pdf"
              download
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
        <div className="md:pt-16">
          <CornerFrame>
            <img
              src={portrait}
              alt="Portrait of Ayush Gupta"
              className="h-[420px] w-full rounded-sm object-cover"
            />
          </CornerFrame>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="education" title="Academic timeline" />
          <ol className="relative space-y-8 border-l border-border pl-6">
            {education.map((e) => (
              <li key={e.school} className="relative">
                <span className="absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center">
                  <span className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">
                  {e.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{e.school}</h3>
                <p className="text-sm text-muted-foreground">{e.degree}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="achievements & extracurriculars"
          title="Beyond the code"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={a}
              className="rounded-lg border border-border bg-surface p-5 text-sm text-foreground glow-on-hover"
            >
              <span className="mr-2 font-mono text-primary">▸</span>
              {a}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="what i bring" title="How I show up on a team" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Engineering rigor",
                d: "Clean code, reproducible experiments, and version-controlled everything.",
              },
              {
                t: "Product mindset",
                d: "Models are means to an end — the goal is real-world impact and good UX.",
              },
              {
                t: "Always learning",
                d: "Comfortable picking up new frameworks, papers, and infra fast.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-lg border border-border bg-surface p-6 glow-on-hover"
              >
                <h3 className="font-semibold text-foreground">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
