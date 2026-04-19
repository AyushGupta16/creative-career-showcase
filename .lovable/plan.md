# Ayush Gupta — ML Engineer Portfolio (DevSync style)

A dark, high-impact developer portfolio inspired by DevSync — neon green accents on near-black, mono-font touches, subtle grid backgrounds, and glow effects. Multi-route TanStack site so each section is SEO-friendly and shareable.

## Visual direction

- **Palette**: Near-black background (`#0A0A0A`), elevated surface (`#111`), neon green primary (`~#B6FF3C` / lime), muted gray text, subtle white borders.
- **Typography**: Large bold display sans for headings, mono accents for labels/tags, clean sans for body.
- **Motifs**: Faint grid/dot background, corner brackets on the portrait frame (matches your uploaded image), pill-shaped tags, glow on hover, animated marquee for skills.

## Routes & content

`**/` — Home**

- Sticky top nav (logo "AG" + links + "Get in touch" CTA)
- Hero: Left = stronger positioning headline such as "Building intelligent systems, not just models" or "ML Engineer focused on real-world AI systems" or "Focused on ML engineering, GenAI workflows, and building real-world AI systems.", followed by a concise intro from your CV summary, primary + secondary CTAs, and a credible stats row (3+ major ML projects, 6 certifications, 2 internship experiences). Right = your green-lit portrait inside corner-bracket frame.
- ML System Experience preview includes:
  - RAG-based workflows and retrieval logic
  - NLP, CV, and predictive modeling pipelines
  - API-backed ML integrations
  - Practical system design thinking
- About snippet, featured projects (3 cards), ML System Experience preview, skills marquee, footer.

`**/about**` —  Full bio expanded from CV summary with a stronger professional positioning block, portrait, education timeline (LPU [B.Tech](http://B.Tech) in Computer Science & Engineering (Machine Learning & AI), Class XII, Class X), achievements (Smart India Hackathon), extracurriculars (NSS Navjeevan, Hostel Directing Committee, SCSE), and a final "What I bring" section.

`/projects` — All 3 projects as case-study-style cards with domain, stack tags, problem statement, what I built, key highlights, and outcome/value:

- Persona-Adaptive Customer Support Agent (NLP/GenAI)
- AI-Driven Cultural Artifact Recognition (CV/YOLOv3)
- Churn Customer ML Project

`**/experience**` — Timeline of internships (LPU Innovation Studio R&D, AllSoft Solutions IBM Partner) with achievements & contacts.

`**/skills**` — Structured grouped grid: Core Languages, Machine Learning Foundations, Deep Learning & AI Domains, Libraries / Frameworks / Tools, Systems / Workflow Tools, and Platforms / Design Tools.

`**/certifications**` — Grid of 6 certificate cards (Neural Networks & DL, Supervised ML, Google Data Science, NLP, Python PathShala, NVIDIA Deep Learning) with issuer, date, badge.

`/blog` —  Writing index showcasing Medium articles. Styled as a minimal blog index with external links (no internal CMS), designed for future expansion. Include featured posts:

- "I built a local RAG system to index my ML notes without touching the OpenAI API"
- Link to full Medium profile: [https://medium.com/@ayushrajguptagn](https://medium.com/@ayushrajguptagn)

`**/contact**` —  Big headline, strong professional subheading, email (mailto), GitHub (AyushGupta16), LinkedIn (ayushgupta1606), phone, location. No form; framed for opportunities, collaboration, and technical discussions.

## Shared components

- `Header` with active-link underline glow
- `Footer` with socials + copyright
- `SectionHeading` with mono "// section" prefix
- `ProjectCard`, `CertCard`, `TimelineItem`, `SkillTag`
- Reusable `CornerFrame` wrapper for the portrait

## Tech notes

- TanStack Start file-based routes, each with its own `head()` meta (title, description, og)
- Tailwind v4 theme tokens updated in `src/styles.css` for the dark/neon palette
- Portrait copied to `src/assets/` and imported as ES module
- Smooth scroll, subtle Framer-style fade/slide-in on scroll using CSS only
- Fully responsive (mobile nav drawer, stacked hero)