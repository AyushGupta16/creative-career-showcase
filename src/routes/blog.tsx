import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Tag } from "@/components/site/Tag";
import { blogPosts, profile } from "@/data/portfolio";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Ayush Gupta" },
      {
        name: "description",
        content:
          "Writing on ML engineering, RAG, local LLMs, and applied AI systems by Ayush Gupta.",
      },
      { property: "og:title", content: "Blog — Ayush Gupta" },
      {
        property: "og:description",
        content: "Notes on ML engineering, RAG, and applied AI.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          eyebrow="writing"
          title="Notes from building ML systems"
          description="Short, practical write-ups about things I build and learn. Cross-posted on Medium."
        />

        <div className="space-y-5">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 glow-on-hover"
            >
              <div className="flex items-center justify-between">
                <Tag variant="primary">{post.tag}</Tag>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </a>
          ))}

          <a
            href={profile.medium}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-dashed border-border bg-surface/40 p-8 text-center text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            More posts on{" "}
            <span className="font-mono text-primary">@ayushrajguptagn</span> on Medium →
          </a>
        </div>
      </section>
    </Layout>
  );
}
