import type {
  AiCapability,
  Article,
  Certification,
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  Stat,
  TechCategory,
  Testimonial,
} from "@/types";

export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const resumeHref = "/assets/documents/aditya-imam-zuhdi-resume.pdf";
export const githubHref = "https://github.com/adityaimamz";

export interface SiteContent {
  nav: {
    links: NavLink[];
    hireMe: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    rolePrefix: string;
    roles: string[];
    roleSuffix: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    scroll: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    roles: string[];
    paragraphs: string[];
    fileName: string;
  };
  stats: Stat[];
  projects: {
    eyebrow: string;
    heading: string;
    description: string;
    viewAll: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    description: string;
    meta: string;
    current: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    viewAll: string;
    items: EducationItem[];
    certifications: Certification[];
  };
  thoughts: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    viewAll: string;
    items: Article[];
  };
  tech: {
    eyebrow: string;
    heading: string;
    description: string;
    viewOnGithub: string;
    categories: TechCategory[];
    capabilities: AiCapability[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    relationLabels: Record<string, string>;
    items: Testimonial[];
  };
  aiTwin: {
    eyebrow: string;
    heading: string;
    description: string;
    cta: string;
    badges: string[];
    chatName: string;
    online: string;
    placeholder: string;
    send: string;
    disclaimer: string;
    demoResponse: string;
  };
  contact: {
    marquee: string;
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    cta: string;
    ctaHref: string;
    socials: {
      label: string;
      href: string;
      icon: "linkedin" | "github" | "instagram";
    }[];
    status: string;
    copyright: string;
  };
}

const techIcons = {
  frontend: [
    { name: "HTML", icon: "/images/tech/html5.svg" },
    { name: "CSS", icon: "/images/tech/css3.svg" },
    { name: "JavaScript", icon: "/images/tech/javascript.svg" },
    { name: "React", icon: "/images/tech/react.svg" },
    { name: "Next.js", icon: "/images/tech/nextjs.svg" },
    { name: "Tailwind", icon: "/images/tech/tailwindcss.svg" },
    { name: "Laravel", icon: "/images/tech/laravel.svg" },
    { name: "Bootstrap", icon: "/images/tech/bootstrap.svg" },
    { name: "Livewire", icon: "/images/tech/livewire.svg" },
  ],
  backend: [
    { name: "Python", icon: "/images/tech/python.svg" },
    { name: "Django", icon: "/images/tech/djangorest.svg" },
    { name: "Golang", icon: "/images/tech/go.svg" },
    { name: "Java", icon: "/images/tech/java.svg" },
    { name: "Spring", icon: "/images/tech/spring.svg" },
    { name: "NestJS", icon: "/images/tech/nestjs.svg" },
    { name: "FastAPI", icon: "/images/tech/fastapi.svg" },
    { name: "Flask", icon: "/images/tech/flask.svg" },
    { name: "Express", icon: "/images/tech/express.svg" },
  ],
  tools: [
    { name: "MySQL", icon: "/images/tech/mysql.svg" },
    { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
    { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
    { name: "Supabase", icon: "/images/tech/supabase.svg" },
    { name: "RabbitMQ", icon: "/images/tech/rabbitmq.svg" },
    { name: "Docker", icon: "/images/tech/docker.svg" },
    { name: "Node.js", icon: "/images/tech/nodejs.svg" },
    { name: "OpenAI", icon: "/images/tech/openai.svg" },
    { name: "Gemini", icon: "/images/tech/gemini.svg" },
  ],
};

const projectImages = {
  celestial: "/images/projects/celestial-scroll.webp",
  eLearning: "/images/projects/e-learning-platform.webp",
  pos: "/images/projects/pos-cemanting-art.webp",
  portfolio: "/images/projects/whatsapp-ai-chatbot-rag.webp",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/izaditya",
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    href: githubHref,
    icon: "github" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adityaimamz/",
    icon: "instagram" as const,
  },
];

const id: SiteContent = {
  nav: {
    links: [
      { label: "Beranda", href: "#home" },
      { label: "Proyek", href: "#projects" },
      { label: "Pengalaman", href: "#experience" },
      { label: "Tulisan", href: "#thoughts" },
      { label: "Hubungi Saya", href: "#contact" },
    ],
    hireMe: "Hubungi Saya",
    resume: "Resume",
  },
  hero: {
    eyebrow: "IT Enthusiast",
    name: "Aditya Imam Zuhdi",
    rolePrefix: "Seorang",
    roles: ["AI Enthusiast", "Builder", "Full-Stack", "Backend"],
    roleSuffix: "berbasis di Indonesia.",
    description:
      "Berpengalaman membangun aplikasi web modern, backend yang scalable, dan integrasi AI untuk produk digital.",
    primaryCta: { label: "Lihat Proyek", href: "#projects" },
    secondaryCta: { label: "Hubungi saya...", href: "#contact" },
    scroll: "Gulir",
  },
  about: {
    eyebrow: "Tentang Saya",
    heading: "Engineer di balik karya.",
    roles: [
      "FULL-STACK ENGINEER",
      "AI SYSTEMS DEVELOPER",
      "BACKEND ARCHITECTURE SPECIALIST",
    ],
    paragraphs: [
      "Saya Aditya Imam Zuhdi, seorang Full-Stack Software Engineer yang berbasis di Indonesia dan saat ini bekerja di Telkomsigma. Saya berfokus pada pengembangan aplikasi web modern dan sistem backend menggunakan teknologi seperti JavaScript, Python, Go, dan Java, serta framework seperti Next.js, Laravel, Django, dan FastAPI.",
      "Saya senang membangun sistem yang andal, scalable, dan mudah dipelihara untuk mendukung kebutuhan bisnis nyata. Mulai dari merancang antarmuka yang intuitif hingga mengembangkan layanan backend dan API yang kuat, saya menikmati proses mengubah masalah kompleks menjadi solusi perangkat lunak yang efisien.",
    ],
    fileName: "Aditya.jpg",
  },
  stats: [
    { value: "3+", label: "TAHUN PENGALAMAN" },
    { value: "10+", label: "PROYEK SELESAI" },
    { value: "10+", label: "KLIEN YANG DILAYANI" },
  ],
  projects: {
    eyebrow: "Karya Pilihan",
    heading: "Proyek unggulan",
    description:
      "Pilihan proyek yang pernah saya kerjakan, dari konsep hingga peluncuran.",
    viewAll: "Lihat semua karya",
    items: [
      {
        slug: "celestial-scroll",
        title: "Celestial Scroll - Novel Reader",
        description:
          "Platform membaca berbasis web modern untuk pembaca light novel dengan pengalaman baca yang dapat dikustomisasi dan dukungan Progressive Web App.",
        image: projectImages.celestial,
        year: "2026",
        category: "FULL-STACK · PWA",
        tags: ["Full-Stack", "PWA", "React", "Supabase"],
      },
      {
        slug: "e-learning-platform",
        title: "E-Learning School Platform",
        description:
          "Platform pembelajaran online dengan fitur manajemen materi kursus, pelacakan tugas, dan alat komunikasi untuk siswa serta guru.",
        image: projectImages.eLearning,
        year: "2023",
        category: "FULL-STACK",
        tags: ["Full-Stack", "Laravel", "Livewire", "MySQL"],
      },
      {
        slug: "pos-cemanting-art",
        title: "POS System - Cemanting Art",
        description:
          "Sistem POS full-stack yang dirancang untuk membantu usaha kecil mengelola transaksi, catatan keuangan, serta laporan laba rugi.",
        image: projectImages.pos,
        year: "2024",
        category: "FULL-STACK · REST API",
        tags: ["Full-Stack", "Backend", "Node.js", "MySQL"],
      },
      {
        slug: "modern-portfolio",
        title: "Modern Portfolio Website",
        description:
          "Website portofolio premium yang dibangun dengan Next.js, Framer Motion, dan Aceternity UI, dilengkapi dukungan multibahasa dan integrasi AI chat.",
        image: projectImages.portfolio,
        year: "2026",
        category: "SISTEM AI / RAG",
        tags: ["Full-Stack", "Next.js", "AI / RAG", "i18n"],
      },
    ],
  },
  experience: {
    eyebrow: "Pengalaman Saya",
    heading: "Riwayat kerja.",
    description:
      "Perusahaan dan peran yang membentuk perjalanan engineering saya.",
    meta: "3 Peran · 3+ Tahun",
    current: "Saat ini",
    items: [
      {
        start: "Jul 2024",
        end: "Sekarang",
        role: "Programmer",
        company: "PT Sigma Cipta Caraka (Telkomsigma)",
        current: true,
        points: [
          "Mengembangkan backend services dan enterprise-grade API menggunakan Django REST Framework, Golang, Java Spring Boot, FastAPI, Flask, dan NestJS.",
          "Menerapkan fitur AI berbasis LLM termasuk chatbot cerdas, perbandingan dokumen, dan versioning dokumen otomatis.",
          "Migrasi dan upgrade komponen sistem KPEI e-CLEARS menggunakan Java Spring Boot untuk mendukung arsitektur microservices modern dan Java 17+.",
          "Berkolaborasi dengan tim lintas fungsi untuk membangun dan meningkatkan aplikasi internal maupun client-facing.",
        ],
      },
      {
        start: "Feb 2024",
        end: "Jun 2024",
        role: "Backend Developer (Freelance)",
        company: "Cemanting Art",
        points: [
          "Membangun sistem Point of Sale (POS) full-stack untuk mengelola transaksi penjualan dan pencatatan keuangan.",
          "Merancang REST API menggunakan Node.js dan Express dengan database MySQL.",
          "Mengimplementasikan laporan laba rugi otomatis untuk mempermudah pemilik usaha memantau performa bisnis.",
        ],
      },
      {
        start: "Aug 2023",
        end: "Jan 2024",
        role: "Full-Stack Developer (Project)",
        company: "E-Learning School",
        points: [
          "Mengembangkan platform e-learning dengan Laravel dan Livewire untuk manajemen materi dan tugas.",
          "Membangun fitur komunikasi antara siswa dan guru serta pelacakan progres belajar.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Pendidikan & Sertifikasi",
    viewAll: "Lihat semua",
    items: [
      {
        degree: "Sarjana Teknik Informatika",
        institution: "Universitas Telkom",
        meta: "Beasiswa Akademik Penuh · IPK 3.94",
        period: "2020 - 2024",
        badge: "S1",
      },
    ],
    certifications: [
      {
        initials: "AI",
        title: "Prompt Engineering untuk Developer",
        issuer: "Sertifikasi",
        year: "2025",
      },
      {
        initials: "AZ",
        title: "Microsoft Azure AI Fundamentals",
        issuer: "Microsoft",
        year: "2025",
      },
      {
        initials: "WD",
        title: "Junior Web Developer",
        issuer: "BNSP Indonesia",
        year: "2024",
      },
      {
        initials: "NS",
        title: "NestJS Zero to Hero",
        issuer: "Udemy",
        year: "2025",
      },
    ],
  },
  thoughts: {
    eyebrow: "Jurnal",
    headingLead: "Catatan",
    headingAccent: "terbaru",
    description: "Catatan dan pemikiran tentang teknologi dan kehidupan.",
    viewAll: "Lihat semua tulisan",
    items: [
      {
        title: "Prompt Engineering untuk Coding Agen",
        category: "Prompt Engineering",
        readingTime: "8 menit baca",
        date: "27 April 2026",
        href: "/blog/prompt-engineering-for-coding-agents",
      },
      {
        title: "Di Balik Layar: Arsitektur Portofolio Saya",
        category: "Full-Stack Engineering",
        readingTime: "8 menit baca",
        date: "27 April 2026",
        href: "/blog/behind-the-scenes-portfolio-architecture",
      },
      {
        title:
          "Backend Jalan Bukan Berarti Siap Ramai: Kesalahan yang Sering Terjadi di Awal Pengembangan",
        category: "Backend Engineering",
        readingTime: "10 menit baca",
        date: "28 April 2026",
        href: "/blog/backend-that-works-is-not-always-ready-for-traffic",
      },
      {
        title:
          "Bukan Sekadar Endpoint: Cara Backend Engineer Mendesain API yang Mudah Dipakai dan Dirawat",
        category: "Backend Engineering",
        readingTime: "12 menit baca",
        date: "28 April 2026",
        href: "/blog/not-just-an-endpoint-how-backend-engineers-design-maintainable-apis",
      },
    ],
  },
  tech: {
    eyebrow: "Kapabilitas",
    heading: "Tech & AI stack.",
    description:
      "Teknologi dan sistem AI yang saya gunakan untuk membangun produk.",
    viewOnGithub: "Lihat di GitHub",
    categories: [
      { label: "FRONTEND", count: "9 teknologi", items: techIcons.frontend },
      { label: "BACKEND", count: "9 teknologi", items: techIcons.backend },
      { label: "TOOLS & AI", count: "13 teknologi", items: techIcons.tools },
    ],
    capabilities: [
      {
        title: "Sistem RAG",
        description:
          "Merancang pipeline Retrieval-Augmented Generation yang menggabungkan LLM dengan vector database untuk respons kontekstual dan berbasis data.",
        tags: ["LangChain", "Vector DB", "OpenAI", "Gemini"],
      },
      {
        title: "Integrasi LLM",
        description:
          "Mengintegrasikan OpenAI GPT dan Google Gemini ke aplikasi web untuk otomasi, workflow cerdas, dan fitur berbasis AI.",
        tags: ["OpenAI API", "FastAPI", "NestJS"],
      },
      {
        title: "AI Chatbots & Asisten",
        description:
          "Membangun AI percakapan dengan memori multi-gilir, kloning kepribadian, dan integrasi platform WhatsApp.",
        tags: ["WhatsApp API", "RAG", "RabbitMQ"],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimoni",
    heading: "Apa kata mereka.",
    relationLabels: {
      "PT Sigma Cipta Caraka (Telkomsigma)": "Rekan Kerja",
      "Owner Ecoprint Purbalingga": "Klien",
    },
    items: [
      {
        quote:
          "Working alongside Aditya on the backend team was a great experience. He writes clean, maintainable code and always takes time to explain tricky logic before we ship it. Definitely someone I'd want on my team again.",
        name: "Safa Muazam",
        initials: "SM",
        role: "Backend Engineer",
        relation: "PT Sigma Cipta Caraka (Telkomsigma)",
      },
      {
        quote:
          "Aditya has a solid understanding of how the database layer affects application performance, which made our collaboration smooth. He's proactive about flagging query issues early instead of leaving them for the DBA to catch.",
        name: "Restu Agil Arjun",
        initials: "RA",
        role: "Database Administrator",
        relation: "PT Sigma Cipta Caraka (Telkomsigma)",
      },
      {
        quote:
          "Aditya helped me understand the challenges in my business and translated them into a practical system that simplified cashier operations and financial record-keeping. The solution has made our daily workflow much more organized and efficient.",
        name: "Lilis Kurnia",
        initials: "LK",
        role: "Business Owner",
        relation: "Owner Ecoprint Purbalingga",
      },
    ],
  },
  aiTwin: {
    eyebrow: "AI Digital Twin",
    heading: "Punya pertanyaan? Tanya AI twin saya.",
    description:
      "Saya melatih AI ini berdasarkan pengalaman, proyek, dan cara kerja saya yang sebenarnya. Jawabannya nyata, bukan templated.",
    cta: "Mulai ngobrol sekarang",
    badges: [
      "24/7 SELALU ONLINE",
      "RAG BERBASIS PENGETAHUAN",
      "ID / EN BILINGUAL",
    ],
    chatName: "AI Twin Aditya",
    online: "Online",
    placeholder: "Tanyakan sesuatu...",
    send: "Kirim",
    disclaimer:
      "Respons AI mungkin tidak selalu akurat. Untuk informasi resmi, silakan hubungi langsung melalui email atau bagian kontak.",
    demoResponse:
      "Terima kasih atas pertanyaannya! Ini demo AI Twin. Di situs asli, jawaban dihasilkan dari sistem RAG berbasis pengalaman dan proyek Aditya.",
  },
  contact: {
    marquee: "MEMBANGUN PRODUK DIGITAL",
    eyebrow: "Punya proyek?",
    headingLead: "Mari bangun sesuatu",
    headingAccent: "yang berdampak.",
    cta: "Mari Terhubung",
    ctaHref: "https://wa.me/6281927070239",
    socials,
    status: "Terbuka untuk peluang",
    copyright: "© 2026 Aditya Imam Zuhdi",
  },
};

const en: SiteContent = {
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Thoughts", href: "#thoughts" },
      { label: "Contact Me", href: "#contact" },
    ],
    hireMe: "Contact Me",
    resume: "Resume",
  },
  hero: {
    eyebrow: "IT Enthusiast",
    name: "Aditya Imam Zuhdi",
    rolePrefix: "A",
    roles: ["AI Enthusiast", "Builder", "Full-Stack", "Backend"],
    roleSuffix: "based in Indonesia.",
    description:
      "Experienced in building modern web applications, scalable backends, and AI integrations for digital products.",
    primaryCta: { label: "See Projects", href: "#projects" },
    secondaryCta: { label: "Reach out...", href: "#contact" },
    scroll: "Scroll",
  },
  about: {
    eyebrow: "About Me",
    heading: "The engineer behind the work.",
    roles: [
      "FULL-STACK ENGINEER",
      "AI SYSTEMS DEVELOPER",
      "BACKEND ARCHITECTURE SPECIALIST",
    ],
    paragraphs: [
      "I'm Aditya Imam Zuhdi, a Full-Stack Software Engineer based in Indonesia, currently working at Telkomsigma. I focus on building modern web applications and backend systems using technologies such as JavaScript, Python, Go, and Java, along with frameworks like Next.js, Laravel, Django, and FastAPI.",
      "I enjoy building reliable, scalable, and maintainable systems that support real-world business needs. From designing intuitive user interfaces to developing robust backend services and APIs, I'm passionate about turning complex problems into efficient software solutions.",
    ],
    fileName: "Aditya.jpg",
  },
  stats: [
    { value: "3+", label: "YEARS EXPERIENCE" },
    { value: "10+", label: "PROJECTS COMPLETED" },
    { value: "10+", label: "SATISFIED CLIENTS" },
  ],
  projects: {
    eyebrow: "Selected Work",
    heading: "Featured projects",
    description:
      "A selection of projects I've worked on, from concept to launch.",
    viewAll: "View all work",
    items: [
      {
        slug: "celestial-scroll",
        title: "Celestial Scroll - Novel Reader",
        description:
          "A modern web-based reading platform for light novel readers featuring customizable reading experiences and Progressive Web App support.",
        image: projectImages.celestial,
        year: "2026",
        category: "FULL-STACK · PWA",
        tags: ["Full-Stack", "PWA", "React", "Supabase"],
      },
      {
        slug: "e-learning-platform",
        title: "E-Learning School Platform",
        description:
          "An online learning platform featuring course material management, assignment tracking, and communication tools for students and teachers.",
        image: projectImages.eLearning,
        year: "2023",
        category: "FULL-STACK",
        tags: ["Full-Stack", "Laravel", "Livewire", "MySQL"],
      },
      {
        slug: "pos-cemanting-art",
        title: "POS System - Cemanting Art",
        description:
          "A full-stack POS system designed to help small businesses manage transactions, financial records, and profit/loss reporting.",
        image: projectImages.pos,
        year: "2024",
        category: "FULL-STACK · REST API",
        tags: ["Full-Stack", "Backend", "Node.js", "MySQL"],
      },
      {
        slug: "modern-portfolio",
        title: "Modern Portfolio Website",
        description:
          "A premium portfolio website built with Next.js, Framer Motion, and Aceternity UI, featuring multi-language support and AI chat integration.",
        image: projectImages.portfolio,
        year: "2026",
        category: "AI / RAG SYSTEM",
        tags: ["Full-Stack", "Next.js", "AI / RAG", "i18n"],
      },
    ],
  },
  experience: {
    eyebrow: "My Experience",
    heading: "Work history.",
    description: "Companies and roles that shaped my engineering journey.",
    meta: "3 Roles · 3+ Years",
    current: "Currently",
    items: [
      {
        start: "Jul 2024",
        end: "Now",
        role: "Programmer",
        company: "PT Sigma Cipta Caraka (Telkomsigma)",
        current: true,
        points: [
          "Developing backend services and enterprise-grade APIs using Django REST Framework, Golang, Java Spring Boot, FastAPI, Flask, and NestJS.",
          "Implementing LLM-based AI features including intelligent chatbots, document comparison, and automated document versioning.",
          "Migrating and upgrading KPEI e-CLEARS system components using Java Spring Boot to support a modern microservices architecture and Java 17+.",
          "Collaborating with cross-functional teams to build and improve internal and client-facing applications.",
        ],
      },
      {
        start: "Feb 2024",
        end: "Jun 2024",
        role: "Backend Developer (Freelance)",
        company: "Cemanting Art",
        points: [
          "Built a full-stack Point of Sale (POS) system to manage sales transactions and financial records.",
          "Designed REST APIs using Node.js and Express with a MySQL database.",
          "Implemented automated profit/loss reports to help business owners monitor performance.",
        ],
      },
      {
        start: "Aug 2023",
        end: "Jan 2024",
        role: "Full-Stack Developer (Project)",
        company: "E-Learning School",
        points: [
          "Developed an e-learning platform with Laravel and Livewire for material and assignment management.",
          "Built communication features between students and teachers along with learning progress tracking.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education & Certifications",
    viewAll: "View all",
    items: [
      {
        degree: "Bachelor of Informatics Engineering",
        institution: "Telkom University",
        meta: "Full Academic Scholarship · GPA 3.94",
        period: "2020 - 2024",
        badge: "S1",
      },
    ],
    certifications: [
      {
        initials: "AI",
        title: "Prompt Engineering for Developers",
        issuer: "Certification",
        year: "2025",
      },
      {
        initials: "AZ",
        title: "Microsoft Azure AI Fundamentals",
        issuer: "Microsoft",
        year: "2025",
      },
      {
        initials: "WD",
        title: "Junior Web Developer",
        issuer: "BNSP Indonesia",
        year: "2024",
      },
      {
        initials: "NS",
        title: "NestJS Zero to Hero",
        issuer: "Udemy",
        year: "2025",
      },
    ],
  },
  thoughts: {
    eyebrow: "Journal",
    headingLead: "Notes",
    headingAccent: "& thoughts",
    description: "Notes and thoughts on technology and life.",
    viewAll: "View all writing",
    items: [
      {
        title: "Prompt Engineering for Coding Agents",
        category: "Prompt Engineering",
        readingTime: "8 min read",
        date: "27 April 2026",
        href: "/blog/prompt-engineering-for-coding-agents",
      },
      {
        title: "Behind the Scenes: My Portfolio Architecture Explained",
        category: "Full-Stack Engineering",
        readingTime: "8 min read",
        date: "27 April 2026",
        href: "/blog/behind-the-scenes-portfolio-architecture",
      },
      {
        title:
          "Backend That Works Is Not Always Ready for Traffic: Common Mistakes Developers Make Early in Development",
        category: "Backend Engineering",
        readingTime: "10 min read",
        date: "28 April 2026",
        href: "/blog/backend-that-works-is-not-always-ready-for-traffic",
      },
      {
        title:
          "Not Just an Endpoint: How Backend Engineers Design APIs That Are Easy to Use and Maintain",
        category: "Backend Engineering",
        readingTime: "12 min read",
        date: "28 April 2026",
        href: "/blog/not-just-an-endpoint-how-backend-engineers-design-maintainable-apis",
      },
    ],
  },
  tech: {
    eyebrow: "Capabilities",
    heading: "Tech & AI stack.",
    description: "Technologies and AI systems I build with.",
    viewOnGithub: "View on GitHub",
    categories: [
      { label: "FRONTEND", count: "9 technologies", items: techIcons.frontend },
      { label: "BACKEND", count: "9 technologies", items: techIcons.backend },
      { label: "TOOLS & AI", count: "13 technologies", items: techIcons.tools },
    ],
    capabilities: [
      {
        title: "RAG Systems",
        description:
          "Designing Retrieval-Augmented Generation pipelines combining LLMs with vector databases for context-aware, grounded responses.",
        tags: ["LangChain", "Vector DB", "OpenAI", "Gemini"],
      },
      {
        title: "LLM Integration",
        description:
          "Integrating OpenAI GPT and Google Gemini into web apps for automation, intelligent workflows, and AI-driven features.",
        tags: ["OpenAI API", "FastAPI", "NestJS"],
      },
      {
        title: "AI Chatbots & Assistants",
        description:
          "Building conversational AI with multi-turn memory, personality cloning, and WhatsApp platform integration.",
        tags: ["WhatsApp API", "RAG", "RabbitMQ"],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    heading: "What people say.",
    relationLabels: {
      "PT Sigma Cipta Caraka (Telkomsigma)": "Colleague",
      "Owner Ecoprint Purbalingga": "Client",
    },
    items: [
      {
        quote:
          "Working alongside Aditya on the backend team was a great experience. He writes clean, maintainable code and always takes time to explain tricky logic before we ship it. Definitely someone I'd want on my team again.",
        name: "Safa Muazam",
        initials: "SM",
        role: "Backend Engineer",
        relation: "PT Sigma Cipta Caraka (Telkomsigma)",
      },
      {
        quote:
          "Aditya has a solid understanding of how the database layer affects application performance, which made our collaboration smooth. He's proactive about flagging query issues early instead of leaving them for the DBA to catch.",
        name: "Restu Agil Arjun",
        initials: "RA",
        role: "Database Administrator",
        relation: "PT Sigma Cipta Caraka (Telkomsigma)",
      },
      {
        quote:
          "Aditya helped me understand the challenges in my business and translated them into a practical system that simplified cashier operations and financial record-keeping. The solution has made our daily workflow much more organized and efficient.",
        name: "Lilis Kurnia",
        initials: "LK",
        role: "Business Owner",
        relation: "Owner Ecoprint Purbalingga",
      },
    ],
  },
  aiTwin: {
    eyebrow: "AI Digital Twin",
    heading: "Have a question? Ask my AI twin.",
    description:
      "I trained this AI on my real experience, projects, and how I actually work. The answers are real, not templated.",
    cta: "Start chatting now",
    badges: ["24/7 ALWAYS ONLINE", "RAG KNOWLEDGE-BASED", "ID / EN BILINGUAL"],
    chatName: "Aditya's AI Twin",
    online: "Online",
    placeholder: "Ask me something...",
    send: "Send",
    disclaimer:
      "AI responses may not always be accurate. For official information, please reach out directly via email or the contact section.",
    demoResponse:
      "Thanks for your question! This is an AI Twin demo. On the live site, answers are generated from a RAG system based on Aditya's real experience and projects.",
  },
  contact: {
    marquee: "BUILDING DIGITAL PRODUCTS",
    eyebrow: "Got a project?",
    headingLead: "Let's build something",
    headingAccent: "impactful.",
    cta: "Let's Connect",
    ctaHref: "https://wa.me/6281927070239",
    socials,
    status: "Open to opportunities",
    copyright: "© 2026 Aditya Imam Zuhdi",
  },
};

export const content: Record<Locale, SiteContent> = { id, en };

export const defaultContent: SiteContent = id;
