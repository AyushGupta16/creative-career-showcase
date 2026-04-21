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
  { value: "3", label: "Production-Oriented ML Projects" },
  { value: "2", label: "Industry Internships" },
  { value: "RAG · NLP · CV", label: "Systems Built" },
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

export type Project = {
  slug: string;
  title: string;
  domain: string;
  stack: string[];
  problem: string;
  built: string;
  highlights: string[];
  outcome: string;
  image: string;
  year?: string;
  role?: string;
  overview?: string;
  approach?: { title: string; desc: string }[];
  results?: string[];
  links?: { label: string; href: string }[];
  repo?: string;
};

export const projects: Project[] = [
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
      "Improved response relevance and reduced need for manual escalation in test scenarios.",
    image: "persona",
    repo: "https://github.com/AyushGupta16",
    year: "2024",
    role: "ML Engineer · Solo build",
    overview:
      "Most support bots speak in one tone to everyone. This project explores whether an LLM agent can read a user's intent and emotional state, then dynamically shift its persona — terse and technical for power users, calm and reassuring for frustrated customers — while staying grounded in a knowledge base via RAG.",
    approach: [
      {
        title: "Persona detection layer",
        desc: "A lightweight classifier on top of message embeddings tags each turn with intent (informational, transactional, complaint) and tone (neutral, frustrated, urgent).",
      },
      {
        title: "RAG grounding",
        desc: "Knowledge base chunks are embedded and stored in a vector index. Top-k passages are retrieved per turn and injected into the prompt to keep answers factual.",
      },
      {
        title: "Persona-conditioned prompting",
        desc: "A prompt template selects tone, verbosity, and structure based on detected persona — same facts, different delivery.",
      },
      {
        title: "FastAPI service",
        desc: "Wrapped behind a clean HTTP API with streaming responses, ready for integration into a chat UI or existing helpdesk.",
      },
    ],
    results: [
      "Higher perceived answer quality in blind A/B tests vs. a single-tone baseline",
      "Reduced escalation rate on simulated frustrated-user transcripts",
      "Add-a-persona time dropped to minutes by editing a single config",
    ],
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
      "Built a working multi-class detector on a custom dataset with a real-time inference pipeline.",
    image: "artifact",
    repo: "https://github.com/AyushGupta16",
    year: "2023",
    role: "ML Engineer · Academic project",
    overview:
      "A computer-vision system that recognises cultural artifacts in images — bridging heritage preservation and modern object detection. Built end-to-end from dataset curation to a real-time inference pipeline.",
    approach: [
      {
        title: "Dataset curation",
        desc: "Collected and cleaned images of cultural artifacts, then annotated bounding boxes in YOLO format with consistent class labels.",
      },
      {
        title: "Augmentation pipeline",
        desc: "Applied flips, rotations, brightness shifts, and mosaic augmentation to improve generalisation on a small dataset.",
      },
      {
        title: "YOLOv3 training & tuning",
        desc: "Fine-tuned YOLOv3 with anchor recalculation for the dataset's object scales; tracked mAP and per-class precision/recall.",
      },
      {
        title: "Inference pipeline",
        desc: "OpenCV-based pipeline draws bounding boxes and confidence scores on input images in real time.",
      },
    ],
    results: [
      "Multi-class detection working reliably on held-out test images",
      "Solid mAP across the curated artifact classes",
      "Presented as part of academic coursework on applied AI for heritage",
    ],
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
      "Built and compared multiple models, selecting the best-performing approach for churn prediction and interpretability.",
    image: "churn",
    repo: "https://github.com/AyushGupta16",
    year: "2023",
    role: "ML Engineer · Solo build",
    overview:
      "A classic but production-shaped churn pipeline: predict which customers are likely to leave, and — just as important — explain why, so the business can actually act on it.",
    approach: [
      {
        title: "EDA & cleaning",
        desc: "Profiled the dataset, handled missing values, and analysed churn rates across demographic and usage segments.",
      },
      {
        title: "Feature engineering",
        desc: "Derived tenure buckets, usage ratios, and contract-type encodings; one-hot and target encoding where appropriate.",
      },
      {
        title: "Model bake-off",
        desc: "Trained logistic regression, random forest, and gradient boosting with cross-validation; tuned hyperparameters via grid search.",
      },
      {
        title: "Explainability",
        desc: "Used feature importance and SHAP-style analysis to surface the strongest churn drivers in plain language.",
      },
    ],
    results: [
      "Best model beat the baseline on ROC-AUC and recall on the churn class",
      "Identified contract type, tenure, and monthly charges as top churn drivers",
      "Produced an interpretable report aimed at retention teams, not just data scientists",
    ],
  },
];

export const experience = [
  {
    role: "R&D Intern — Machine Learning",
    company: "LPU Innovation Studio",
    period: "2024 — Present",
    location: "Punjab, India",
    points: [
      "Prototyped end-to-end ML and GenAI workflows for internal research projects",
      "Built RAG and NLP pipelines for grounded, domain-specific question answering",
      "Collaborated on dataset design and evaluation strategy for ML workflows",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "AllSoft Solutions (IBM Partner)",
    period: "2023",
    location: "Remote",
    points: [
      "Built and evaluated supervised ML pipelines on real-world datasets",
      "Engineered features and preprocessing flows for predictive modelling tasks",
      "Documented experiments and presented findings to engineering mentors",
    ],
  },
];

export const skills = [
  {
    group: "Core Languages",
    items: ["Python", "C / C++", "Java"],
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
    group: "Libraries / Frameworks",
    items: ["scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy", "FastAPI"],
  },
  {
    group: "Tools / Data",
    items: ["SQL", "Git", "Linux", "Anaconda", "Google Colab", "Kaggle"],
  },
  {
    group: "Editors / Misc",
    items: ["Jupyter", "VS Code"],
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
