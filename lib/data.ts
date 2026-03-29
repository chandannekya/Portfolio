export const personal = {
  name: "Chandan Nekya",
  firstName: "Chandan",
  email: "chandannekya@gmail.com",
  phone: "7900792164",
  location: "Lucknow, Uttar Pradesh, India",
  portfolio: "https://chandannekya.vercel.app",
  linkedin: "https://www.linkedin.com/in/chandannekya/",
  github: "https://github.com/chandannekya",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/chandannekya/",
  instagram: "https://www.instagram.com/chandannekya/",
  tagline: "Full-Stack Engineer",
  bio: "I build scalable systems and ship products that matter. Passionate about microservices, AI agents, and crafting developer-first experiences. Currently pursuing B.Tech in Computer Science while working on open-source AI infrastructure.",
};

export const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "University of Lucknow",
    period: "2022 - Present",
  },
  {
    degree: "Intermediate (PCM)",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2021 - 2022",
  },
];

export const experience = [
  {
    role: "Full-Stack Product Engineering Intern",
    company: "NexPanda Lab LLP",
    period: "June 2025 — Nov 2025",
    highlights: [
      "Built and shipped core features for a custom embedded Shopify app (React, Rails, GraphQL) serving 1000+ merchant stores",
      "Designed dynamic product option engines with conditional logic, reducing merchant configuration time by 40%",
      "Engineered automated store validation and blocking system to detect unauthorized stores",
      "Integrated Shopify Admin APIs and custom GraphQL services for product, metafield, and tag orchestration",
      "Fixed CSP frame-ancestor security issues ensuring stable embedded-app rendering across storefronts",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Softricity Pvt Ltd",
    period: "Jan 2025 — Mar 2025",
    highlights: [
      "Built scalable RESTful APIs using Node.js and Express, handling 10k+ daily requests and reducing response time by 35%",
      "Architected microservices system with Kafka-driven event communication across 5+ independent services",
      "Integrated Redis caching, improving read latency by 40%",
      "Secured backend with JWT-based authentication, RBAC, and API hardening",
      "Containerized and deployed microservices using Docker with CI/CD pipelines, cutting deploy time by 50%",
    ],
  },
];

export type Project = {
  name: string;
  type: string;
  featured: boolean;
  techStack: string[];
  github: string | null;
  demo: string | null;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "AutonomiX",
    type: "Autonomous AI Agent Platform",
    featured: true,
    techStack: ["Next.js", "Express.js", "LangChain", "ChromaDB", "PostgreSQL", "Gemini AI", "SSE"],
    github: "https://github.com/chandannekya",
    demo: null,
    highlights: [
      "Full-stack no-code platform for creating and deploying autonomous AI agents",
      "Multi-step reasoning loop — agents plan and execute tools autonomously",
      "ChromaDB vector memory for long-term context retention via embeddings",
      "Real-time SSE execution streaming with reasoning traces and tool execution logs",
      "Role-aware prompt orchestration for domain-specific agent behavior",
    ],
  },
  {
    name: "Wagging Wonders",
    type: "Pet Care & Adoption Platform",
    featured: true,
    techStack: ["React", "Node.js", "MongoDB", "Kafka", "Socket.IO", "Docker", "Tailwind CSS"],
    github: "https://github.com/chandannekya/Wagging_Wonders",
    demo: null,
    highlights: [
      "Microservices-based platform for pet adoption and vet services",
      "Event-driven workflows using Apache Kafka across all services",
      "Real-time chat and notifications via Socket.IO",
      "JWT auth + fully Dockerized service containers",
    ],
  },
  {
    name: "Clean Breath",
    type: "Web App",
    featured: false,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/chandannekya/Clean-Breath",
    demo: "https://cleanbreath.netlify.app/",
    highlights: [
      "Clean air platform suggesting plants to reduce indoor pollution",
      "Includes informational blogs and plant purchasing flow",
    ],
  },
  {
    name: "Agent Manager",
    type: "MERN App",
    featured: false,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/chandannekya/Agent-Manger",
    demo: "https://agent-manger.vercel.app/",
    highlights: [
      "Efficient task management with CSV uploads and agent assignment",
      "JWT authentication and RBAC permission system",
    ],
  },
  {
    name: "Note App",
    type: "MERN App",
    featured: false,
    techStack: ["React", "MongoDB", "Express", "Tailwind CSS", "Vite"],
    github: "https://github.com/chandannekya/NOTES",
    demo: "https://notes-frontend-6q0b.onrender.com/",
    highlights: [
      "Note-taking app with OTP-based authentication",
      "Built with Vite for fast development and MERN stack backend",
    ],
  },
  {
    name: "Schedule EMI Calc",
    type: "Finance Tool",
    featured: false,
    techStack: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/chandannekya",
    demo: null,
    highlights: [
      "Calculates EMIs and renders full amortization schedule",
      "Supports multiple payment frequencies and loan types",
    ],
  },
];

export const skills = {
  Frontend:  ["HTML5", "CSS3", "React.js", "Next.js", "Redux", "Tailwind CSS"],
  Backend:   ["Node.js", "Express.js", "Ruby on Rails", "REST APIs", "GraphQL", "JWT", "Webhooks", "Socket.IO"],
  Database:  ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "ChromaDB"],
  "AI / ML": ["LangChain", "ChromaDB", "Vector Databases", "LLM Integration", "Gemini AI", "Embedding Models"],
  DevOps:    ["Docker", "CI/CD", "Linux", "Kafka"],
  Languages: ["JavaScript", "TypeScript", "Ruby", "Java", "Python", "C"],
};

export const achievements = [
  {
    value: "400+",
    title: "DSA Problems",
    detail: "Sliding Window, Two Pointers, Trees, Graphs, Dynamic Programming",
  },
  {
    value: "60+",
    title: "Contributors Mentored",
    detail: "Project Maintainer & Mentor at GirlScript Summer of Code 2025",
  },
  {
    value: "1000+",
    title: "Merchant Stores",
    detail: "Via embedded Shopify app at NexPanda Lab LLP",
  },
  {
    value: "VP",
    title: "Coding Club",
    detail: "Vice President — led technical initiatives & peer coding sessions",
  },
];
