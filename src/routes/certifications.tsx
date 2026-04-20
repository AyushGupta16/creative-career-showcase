import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Ayush Gupta" },
      {
        name: "description",
        content:
          "Certifications in deep learning, NLP, supervised ML, data science from Coursera, Google, NVIDIA and more.",
      },
      { property: "og:title", content: "Certifications — Ayush Gupta" },
      {
        property: "og:description",
        content: "ML and AI certifications from Coursera, Google, NVIDIA and more.",
      },
      { property: "og:image", content: "/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-default.jpg" },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="certifications"
          title="Continuous learning"
          description="A snapshot of structured courses I've completed across the ML and AI stack."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 glow-on-hover"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground group-hover:text-primary">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
