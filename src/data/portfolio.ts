export const profile = {
  name: "Ayush Gupta",
  initials: "AG",
  title: "Machine Learning Engineer",
  tagline:
    "Focused on ML engineering, GenAI workflows, and building real-world AI systems.",
  summary:
    "Computer Science & Engineering student specialising in Machine Learning & AI at Lovely Professional University. I design and ship end-to-end ML systems — from RAG and NLP pipelines to computer vision and predictive modelling — with a bias for clean engineering and real-world impact.",
  email: "ayushrajguptagn@gmail.com",
  phone: "+91-9876543210",
  location: "Punjab, India",
  github: "https://github.com/AyushGupta16",
  githubHandle: "AyushGupta16",
  linkedin: "https://www.linkedin.com/in/ayushgupta1606",
  linkedinHandle: "ayushgupta1606",
  medium: "https://medium.com/@ayushrajguptagn",
};

export const stats = [
  { value: "3+", label: "ML Projects" },
  { value: "6", label: "Certifications" },
  { value: "2", label: "Internships" },
];

export const systemExperience = [
  {
    title: "RAG-based workflows",
    desc: "Retrieval logic, vector indexing, and grounded generation for domain-specific Q&A.",
  },
  {
    title: "NLP, CV & predictive modelling",
    desc: "End-to-end pipelines across language, vision, and tabular ML tasks.",
  },
  {
    title: "API-backed ML integrations",
    desc: "Wrapping models behind clean APIs and integrating them with product workflows.",
  },
  {
    title: "Practical system design",
    desc: "Designing for latency, cost, and maintainability — not just accuracy.",
  },
];

export const projects = [
  {
    slug: "persona-adaptive-agent",
    title: "Persona-Adaptive Customer Support Agent",
    domain: "NLP / GenAI",
    stack: ["Python", "LLMs", "Prompt Engineering", "RAG", "FastAPI"],
    problem:
      "Generic support bots fail to match user tone and context, leading to low resolution rates.",
    built:
      "A persona-adaptive conversational agent that detects user intent and emotional tone, then adapts response style, depth, and formality accordingly.",
    highlights: [
      "Designed prompt + retrieval pipeline that grounds answers in knowledge base",
      "Persona-detection layer routes between concise, empathetic, or technical modes",
      "Modular architecture so new personas and domains can be added quickly",
    ],
    outcome:
      "Improved perceived response quality and reduced hand-off rate to human agents in test scenarios.",
  },
  {
    slug: "cultural-artifact-recognition",
    title: "AI-Driven Cultural Artifact Recognition",
    domain: "Computer Vision",
    stack: ["Python", "YOLOv3", "OpenCV", "Deep Learning"],
    problem:
      "Manual identification of cultural artifacts is slow and inaccessible to non-experts.",
    built:
      "A YOLOv3-based detection system trained on a curated dataset of cultural artifacts with a lightweight inference pipeline.",
    highlights: [
      "Custom dataset curation, annotation, and augmentation pipeline",
      "Trained and tuned YOLOv3 for multi-class artifact detection",
      "Real-time inference on images with bounding boxes and confidence scores",
    ],
    outcome:
      "Demonstrated practical CV-driven cultural preservation; presented as part of academic work.",
  },
  {
    slug: "churn-prediction",
    title: "Customer Churn Prediction",
    domain: "Predictive ML",
    stack: ["Python", "scikit-learn", "Pandas", "EDA"],
    problem:
      "Telecom-style businesses lose revenue when at-risk customers are not identified early.",
    built:
      "An end-to-end churn prediction pipeline — EDA, feature engineering, model selection, and evaluation.",
    highlights: [
      "Cleaned and engineered features from raw customer data",
      "Compared logistic regression, random forest, and gradient boosting",
      "Surfaced top churn drivers via feature importance for business action",
    ],
    outcome:
      "Delivered a model that outperformed baselines and produced an interpretable churn-driver report.",
  },
];

export const experience = [
  {
    role: "R&D Intern — Machine Learning",
    company: "LPU Innovation Studio",
    period: "2024 — Present",
    location: "Punjab, India",
    points: [
      "Prototyped ML and GenAI workflows for internal research projects",
      "Built RAG and NLP pipelines for grounded question answering",
      "Collaborated with mentors on dataset design and evaluation strategies",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "AllSoft Solutions (IBM Partner)",
    period: "2023",
    location: "Remote",
    points: [
      "Worked on supervised learning and data preprocessing pipelines",
      "Implemented predictive models on real-world business datasets",
      "Documented experiments and presented findings to mentors",
    ],
  },
];

export const skills = [
  {
    group: "Core Languages",
    items: ["Python", "C / C++", "Java", "SQL"],
  },
  {
    group: "Machine Learning Foundations",
    items: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation"],
  },
  {
    group: "Deep Learning & AI Domains",
    items: ["Neural Networks", "NLP", "Computer Vision", "GenAI / LLMs", "RAG"],
  },
  {
    group: "Libraries / Frameworks / Tools",
    items: ["scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy", "FastAPI"],
  },
  {
    group: "Systems / Workflow Tools",
    items: ["Git", "Jupyter", "VS Code", "Anaconda", "Linux", "Windows"],
  },
  {
    group: "Platforms / Design Tools",
    items: ["Google Colab", "Kaggle", "Canva", "Adobe Illustrator"],
  },
];

export const certifications = [
  { title: "Neural Networks and Deep Learning", issuer: "Coursera (DeepLearning.AI)", year: "2024" },
  { title: "Supervised Machine Learning", issuer: "Coursera (DeepLearning.AI)", year: "2024" },
  { title: "Google Data Science Professional", issuer: "Google", year: "2024" },
  { title: "Natural Language Processing", issuer: "Coursera", year: "2024" },
  { title: "Python — PathShala", issuer: "PathShala", year: "2023" },
  { title: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2024" },
];

export const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech in Computer Science & Engineering (Machine Learning & AI)",
    period: "2022 — 2026",
  },
  {
    school: "Class XII — CBSE",
    degree: "Senior Secondary, Science Stream",
    period: "2022",
  },
  {
    school: "Class X — CBSE",
    degree: "Secondary School",
    period: "2020",
  },
];

export const achievements = [
  "Smart India Hackathon — Participant & finalist",
  "NSS Navjeevan — Active volunteer",
  "Hostel Directing Committee — Member",
  "School of Computer Science & Engineering — Student contributor",
];

export const blogPosts = [
  {
    title:
      "I built a local RAG system to index my ML notes without touching the OpenAI API",
    excerpt:
      "How I wired up a fully local retrieval-augmented generation stack — embeddings, vector store, and a small LLM — to query my own ML study notes.",
    href: "https://medium.com/@ayushrajguptagn",
    tag: "RAG · Local LLMs",
  },
];
