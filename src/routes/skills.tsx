import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Tag } from "@/components/site/Tag";
import { skills } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Ayush Gupta" },
      {
        name: "description",
        content:
          "Technical skills across languages, ML foundations, deep learning, frameworks, and tools.",
      },
      { property: "og:title", content: "Skills — Ayush Gupta" },
      {
        property: "og:description",
        content: "Languages, ML foundations, deep learning domains, frameworks, and tools.",
      },
      { property: "og:image", content: "/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-default.jpg" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="skills"
          title="Tech stack & capabilities"
          description="Grouped by what they help me build, not just what's on a CV checklist."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((g) => (
            <div
              key={g.group}
              className="rounded-lg border border-border bg-surface p-6 glow-on-hover"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                // {g.group}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
