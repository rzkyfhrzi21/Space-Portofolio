import type {
  Article,
  Certification,
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  Stat,
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
    headingLead: string;
    headingAccent: string;
    roles: string[];
    paragraphs: string[];
    fileName: string;
    name: string;
    role: string;
    available: string;
    greeting: string;
  };
  stats: Stat[];
  projects: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    viewAll: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    meta: string;
    current: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
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
    headingLead: string;
    headingAccent: string;
    description: string;
    viewOnGithub: string;
    capabilities: { title: string; description: string; tags: string[] }[];
  };
  testimonials: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    relationLabels: Record<string, string>;
    items: Testimonial[];
  };
  aiTwin: {
    badge: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    cta: string;
    stats: { value: string; label: string }[];
    chatName: string;
    online: string;
    greeting: string;
    suggestion: string;
    placeholder: string;
    disclaimer: string;
  };
  chat: {
    trigger: string;
    title: string;
    status: string;
    initialMessage: string;
    placeholder: string;
    disclaimer: string;
    closeLabel: string;
    sendLabel: string;
    fallback: string;
    suggestedQuestions: string[];
    responses: { question: string; answer: string }[];
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

const projectImages = {
  celestial: "/images/projects/celestial-scroll.webp",
  familyTree: "/images/projects/family-tree.webp",
  eLearning: "/images/projects/e-learning-platform.webp",
  beyondStudio: "/images/projects/beyond-studio.webp",
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
    headingLead: "Engineer",
    headingAccent: "di balik karya.",
    roles: [
      "Full-Stack Engineer",
      "AI Systems Developer",
      "Backend Architecture Specialist",
    ],
    paragraphs: [
      "Saya Aditya Imam Zuhdi, seorang Full-Stack Software Engineer yang berbasis di Indonesia dan saat ini bekerja di Telkomsigma. Saya mengembangkan aplikasi web dan sistem backend menggunakan teknologi seperti JavaScript, Python, Go, dan Java, serta framework seperti Next.js, Laravel, Django, dan FastAPI.",
      "Saya senang membangun aplikasi yang membantu menyelesaikan masalah nyata, mulai dari membuat UI/UX yang nyaman digunakan hingga mengembangkan backend dan API. Saat ini saya juga terus memperdalam arsitektur backend modern dan penerapan AI untuk menciptakan produk digital yang bermanfaat.",
    ],
    fileName: "aditya.jpg",
    name: "Aditya Imam Zuhdi",
    role: "Programmer - Telkomsigma",
    available: "Tersedia",
    greeting: "Salam hangat,",
  },
  stats: [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "15+", label: "Proyek Selesai" },
    { value: "10+", label: "Klien yang Dilayani" },
  ],
  projects: {
    eyebrow: "Karya Pilihan",
    headingLead: "Proyek",
    headingAccent: "unggulan",
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
        category: "Full-Stack - PWA",
        categoryShort: "Full-Stack / PWA",
        accent: "#4E85BF",
        href: "https://github.com/adityaimamz/CelestialScroll",
        tags: ["Full-Stack", "PWA", "React", "Supabase"],
      },
      {
        slug: "family-tree",
        title: "Template Website Silsilah Keluarga",
        description:
          "Template website full-stack yang reusable untuk arsip keluarga dan silsilah interaktif, dilengkapi halaman publik, profil anggota, galeri, timeline, serta admin panel berbasis database.",
        image: projectImages.familyTree,
        year: "2026",
        category: "Full-Stack",
        categoryShort: "Full-Stack",
        accent: "#8B6BAE",
        href: "https://github.com/adityaimamz/family-tree",
        tags: [
          "Full-Stack",
          "Silsilah Keluarga",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Admin Panel",
          "Vercel",
        ],
      },
      {
        slug: "e-learning-platform",
        title: "E-Learning School Platform",
        description:
          "Platform pembelajaran online dengan fitur manajemen materi kursus, pelacakan tugas, dan alat komunikasi untuk siswa serta guru.",
        image: projectImages.eLearning,
        year: "2023",
        category: "Full-Stack",
        categoryShort: "Full-Stack",
        accent: "#6B9E78",
        href: "https://github.com/adityaimamz/E-learning-Laravel",
        tags: ["Full-Stack", "Laravel", "Livewire", "MySQL"],
      },
      {
        slug: "beyond-studio",
        title: "Landing Page Beyond Studio",
        description:
          "Landing page modern dan responsif untuk Beyond Studio, layanan pembuatan website custom yang ditujukan untuk bisnis, mahasiswa, freelancer, dan profesional. Dirancang dengan fokus pada penyampaian layanan yang jelas, harga transparan, showcase portofolio, serta CTA konsultasi WhatsApp untuk meningkatkan konversi. Website dilengkapi animasi yang smooth, layout responsif, dark/light mode, dan arsitektur komponen modular agar mudah dikembangkan dan dipelihara.",
        image: projectImages.beyondStudio,
        year: "2026",
        category: "Full-Stack",
        categoryShort: "Full-Stack",
        accent: "#8B7355",
        href: "https://beyond-studio-lac.vercel.app/",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Responsive Web Design",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Pengalaman Saya",
    headingLead: "Riwayat",
    headingAccent: "kerja.",
    description:
      "Perusahaan dan peran yang membentuk perjalanan engineering saya.",
    meta: "3 Peran dalam 3+ Tahun",
    current: "Saat ini",
    items: [
      {
        start: "Jul 2024",
        end: "Sekarang",
        role: "Programmer",
        company: "PT Sigma Cipta Caraka (Telkomsigma)",
        current: true,
        description:
          "Mengembangkan backend services dan enterprise-grade API menggunakan Django REST Framework, Golang, Java Spring Boot, FastAPI, Flask, dan NestJS. Menerapkan fitur AI berbasis LLM termasuk chatbot cerdas, perbandingan dokumen, dan versioning dokumen otomatis.",
        points: [
          "Migrasi dan upgrade komponen sistem KPEI e-CLEARS menggunakan Java Spring Boot untuk mendukung arsitektur microservices modern dan Java 17+.",
          "Berkolaborasi dengan tim lintas fungsi untuk membangun dan meningkatkan aplikasi internal maupun client-facing.",
          "Melakukan migrasi data untuk memastikan integrasi berjalan lancar selama upgrade sistem dan deployment baru.",
          "Menyelesaikan issue production dan mengimplementasikan fitur baru untuk meningkatkan performa serta stabilitas sistem.",
          "Membangun aplikasi bisnis internal menggunakan Microsoft PowerApps untuk menyederhanakan workflow internal.",
          "Menerapkan teknologi LLM untuk mengembangkan fitur AI seperti chatbot cerdas, perbandingan dokumen, dan versioning dokumen otomatis.",
        ],
      },
      {
        start: "Jan 2023",
        end: "Agu 2024",
        role: "Full-Stack Developer",
        company: "Freelance",
        description:
          "Mengembangkan aplikasi web custom untuk klien dari berbagai industri, dengan fokus pada keandalan, performa, dan pengalaman pengguna yang baik.",
        points: [
          "Menyelesaikan Sistem Antrian Barbershop, Sistem Pakar Perawatan Kulit, Platform E-Learning Sekolah, dan Website Pemesanan Wisata.",
          "Menerapkan teknologi web modern untuk membangun aplikasi yang andal, mudah digunakan, serta sesuai kebutuhan dan timeline klien.",
        ],
      },
      {
        start: "Feb 2023",
        end: "Jul 2023",
        role: "Software Engineer Intern",
        company: "Solo Technopark",
        description:
          "Berkontribusi dalam pengembangan sistem digital dan inisiatif modernisasi website.",
        points: [
          "Membangun sistem informasi untuk Soto Panaz yang mencakup desain arsitektur dan manajemen database.",
          "Migrasi website WordPress ke stack modern menggunakan Next.js, Express.js, dan Tailwind CSS.",
          "Melakukan pengujian fungsional, integrasi, dan performa.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Pendidikan & Sertifikasi",
    headingLead: "Pendidikan &",
    headingAccent: "Sertifikasi",
    viewAll: "Lihat Semua",
    items: [
      {
        degree: "Sarjana Teknik Informatika",
        institution: "Universitas Telkom - Beasiswa Akademik Penuh",
        gpaLabel: "IPK 3.94",
        gpa: "3.94",
        degreeShort: "S1",
        period: "2020 - 2024",
      },
    ],
    certifications: [
      {
        title: "Google AI",
        issuer: "Google",
        year: "2026",
      },
      {
        title: "Microsoft Azure AI Fundamentals",
        issuer: "Microsoft",
        year: "2025",
      },
      {
        title: "Junior Web Developer",
        issuer: "BNSP Indonesia",
        year: "2024",
      },
      {
        title: "Became Front-end and Back-end Developer",
        issuer: "DIcoding",
        year: "2022",
      },
      {
        title: "Prompt Engineering untuk Developer",
        issuer: "Sertifikasi",
        year: "2025",
      },
      {
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
        href: "https://www.izaditya.my.id/blog/prompt-engineering-for-coding-agents",
      },
      {
        title: "Di Balik Layar: Arsitektur Portofolio Saya",
        category: "Full-Stack Engineering",
        readingTime: "8 menit baca",
        date: "27 April 2026",
        href: "https://www.izaditya.my.id/blog/behind-the-scenes-portfolio-architecture",
      },
      {
        title:
          "Backend Jalan Bukan Berarti Siap Ramai: Kesalahan yang Sering Terjadi di Awal Pengembangan",
        category: "Backend Engineering",
        readingTime: "10 menit baca",
        date: "28 April 2026",
        href: "https://www.izaditya.my.id/blog/backend-that-works-is-not-always-ready-for-traffic",
      },
      {
        title:
          "Bukan Sekadar Endpoint: Cara Backend Engineer Mendesain API yang Mudah Dipakai dan Dirawat",
        category: "Backend Engineering",
        readingTime: "12 menit baca",
        date: "28 April 2026",
        href: "https://www.izaditya.my.id/blog/not-just-an-endpoint-how-backend-engineers-design-maintainable-apis",
      },
    ],
  },
  tech: {
    eyebrow: "Kapabilitas",
    headingLead: "Tech",
    headingAccent: "& AI Stack.",
    description:
      "Teknologi, tools, dan sistem AI yang saya gunakan untuk membangun perangkat lunak modern.",
    viewOnGithub: "Lihat di GitHub",
    capabilities: [
      {
        title: "Sistem RAG",
        description:
          "Membangun pipeline Retrieval-Augmented Generation (RAG) dengan vector database untuk memberikan respons yang akurat dan berbasis konteks.",
        tags: ["LangChain", "Vector Database", "OpenAI", "Gemini"],
      },
      {
        title: "Integrasi LLM",
        description:
          "Mengintegrasikan OpenAI dan Gemini ke dalam aplikasi web untuk mengotomatisasi alur kerja, menghasilkan konten, dan menggerakkan fitur cerdas.",
        tags: ["OpenAI API", "Gemini API", "FastAPI", "NestJS"],
      },
      {
        title: "AI Chatbot & Otomasi",
        description:
          "Mengembangkan AI chatbot dengan pencarian kontekstual, percakapan multi-turn, dan integrasi sistem enterprise.",
        tags: ["RAG", "RabbitMQ", "Prompt Engineering", "REST API"],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimoni",
    headingLead: "Apa kata",
    headingAccent: "mereka.",
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
    badge: "AI Digital Twin",
    headingLead: "Punya pertanyaan?",
    headingAccent: "Tanya AI twin saya.",
    description:
      "Saya melatih AI ini berdasarkan pengalaman, proyek, dan cara kerja saya yang sebenarnya. Jawabannya nyata, bukan templated.",
    cta: "Mulai ngobrol sekarang",
    stats: [
      { value: "24/7", label: "Selalu online" },
      { value: "RAG", label: "Berbasis pengetahuan" },
      { value: "ID / EN", label: "Bilingual" },
    ],
    chatName: "AI Twin Aditya",
    online: "Online",
    greeting:
      "Hai! Saya AI Twin Aditya. Kamu bisa bertanya tentang pengalaman, tech stack, atau proyek yang pernah ia bangun.",
    suggestion: "💬 Coba: \"Apa tech stack-mu?\"",
    placeholder: "Tanyakan sesuatu...",
    disclaimer:
      "Respons AI mungkin tidak selalu akurat. Untuk informasi resmi, silakan hubungi langsung melalui email atau bagian kontak.",
  },
  contact: {
    marquee: "MEMBANGUN PRODUK DIGITAL",
    eyebrow: "Punya proyek?",
    headingLead: "Mari kita wujudkan",
    headingAccent: "ide-idemu.",
    cta: "Mari Terhubung",
    ctaHref: "https://wa.me/6281927070239",
    socials,
    status: "Terbuka untuk peluang",
    copyright: "© 2026 Aditya Imam Zuhdi",
  },
  chat: {
    trigger: "Tanya AI",
    title: "AI Twin Aditya",
    status: "Online",
    initialMessage:
      "Hai! Saya AI Twin Aditya. Kamu bisa bertanya tentang pengalaman, tech stack, atau proyek yang pernah ia bangun.",
    placeholder: "Tanyakan sesuatu tentang saya...",
    disclaimer:
      "Respons AI mungkin tidak selalu akurat. Untuk informasi resmi, silakan hubungi langsung melalui email atau bagian kontak.",
    closeLabel: "Tutup chat",
    sendLabel: "Kirim pesan",
    fallback:
      "Pertanyaan yang menarik. Untuk detail lebih lanjut, silakan hubungi langsung melalui adityaimam8@gmail.com atau cek bagian terkait di halaman ini.",
    suggestedQuestions: [
      "Siapa Aditya Imam Zuhdi?",
      "Apa tech stack yang digunakan?",
      "Proyek apa saja yang pernah dibangun?",
    ],
    responses: [
      {
        question: "Siapa Aditya Imam Zuhdi?",
        answer:
          "Saya Aditya Imam Zuhdi, seorang Full-Stack Software Engineer yang berbasis di Indonesia dan saat ini bekerja di Telkomsigma. Saya berfokus pada aplikasi web modern, backend yang scalable, dan integrasi AI.",
      },
      {
        question: "Apa tech stack yang digunakan?",
        answer:
          "Stack utama saya mencakup Go, Python, Java Spring Boot, Django REST, FastAPI, dan NestJS untuk backend, serta React, Next.js, dan TypeScript untuk frontend. Saya juga bekerja dengan LangChain, vector database, dan LLM API.",
      },
      {
        question: "Proyek apa saja yang pernah dibangun?",
        answer:
          "Beberapa proyek unggulan termasuk WhatsApp AI Chatbot dengan pipeline RAG, Celestial Scroll, E-Learning School Platform, dan sistem POS untuk usaha kecil.",
      },
      {
        question: "Apakah Aditya menerima freelance?",
        answer:
          "Saya saat ini terbuka untuk peluang freelance dan kolaborasi. Silakan hubungi melalui bagian Kontak atau email langsung ke adityaimam8@gmail.com.",
      },
      {
        question: "Bagaimana cara menghubungi Aditya?",
        answer:
          "Kamu bisa menghubungi saya di adityaimam8@gmail.com, atau terhubung melalui LinkedIn dan GitHub. Bagian kontak di halaman ini juga memiliki tautan langsung.",
      },
    ],
  },
};

const en: SiteContent = {
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Thoughts", href: "#thoughts" },
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
    headingLead: "Engineer",
    headingAccent: "behind the work.",
    roles: [
      "Full-Stack Engineer",
      "AI Systems Developer",
      "Backend Architecture Specialist",
    ],
    paragraphs: [
      "I'm Aditya Imam Zuhdi, a Full-Stack Software Engineer based in Indonesia, currently working at Telkomsigma. I build web applications and backend systems using technologies such as JavaScript, Python, Go, and Java, along with frameworks like Next.js, Laravel, Django, and FastAPI.",
      "I enjoy building applications that help solve real problems, from crafting comfortable UI/UX to developing backends and APIs. Lately I keep deepening modern backend architecture and applying AI to create digital products that are genuinely useful.",
    ],
    fileName: "aditya.jpg",
    name: "Aditya Imam Zuhdi",
    role: "Programmer - Telkomsigma",
    available: "Available",
    greeting: "Warm regards,",
  },
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Satisfied Clients" },
  ],
  projects: {
    eyebrow: "Selected Work",
    headingLead: "Featured",
    headingAccent: "projects",
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
        category: "Full-Stack - PWA",
        categoryShort: "Full-Stack / PWA",
        accent: "#4E85BF",
        href: "https://github.com/adityaimamz/CelestialScroll",
        tags: ["Full-Stack", "PWA", "React", "Supabase"],
      },
      {
        slug: "family-tree",
        title: "Family Tree Website Template",
        description:
          "A reusable full-stack website template for family archives and interactive genealogy, complete with public pages, member profiles, galleries, timelines, and a database-backed admin panel.",
        image: projectImages.familyTree,
        year: "2026",
        category: "Full-Stack",
        categoryShort: "Full-Stack",
        accent: "#8B6BAE",
        href: "https://github.com/adityaimamz/family-tree",
        tags: [
          "Full-Stack",
          "Family Tree",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Admin Panel",
          "Vercel",
        ],
      },
      {
        slug: "e-learning-platform",
        title: "E-Learning School Platform",
        description:
          "An online learning platform featuring course material management, assignment tracking, and communication tools for students and teachers.",
        image: projectImages.eLearning,
        year: "2023",
        category: "Full-Stack",
        categoryShort: "Full-Stack",
        accent: "#6B9E78",
        href: "https://github.com/adityaimamz/E-learning-Laravel",
        tags: ["Full-Stack", "Laravel", "Livewire", "MySQL"],
      },
      {
        slug: "beyond-studio",
        title: "Beyond Studio Landing Page",
        description:
          "A modern, responsive landing page for Beyond Studio, a custom website development service for businesses, students, freelancers, and professionals. Designed with a focus on clear service presentation, transparent pricing, portfolio showcase, and a WhatsApp consultation CTA to increase conversions. Built with smooth animations, a responsive layout, dark/light mode, and a modular component architecture for easy maintenance.",
        image: projectImages.beyondStudio,
        year: "2026",
        category: "Full-Stack",
        categoryShort: "Full-Stack",
        accent: "#8B7355",
        href: "https://beyond-studio-lac.vercel.app/",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Responsive Web Design",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "My Experience",
    headingLead: "Work",
    headingAccent: "history.",
    description: "Companies and roles that shaped my engineering journey.",
    meta: "3 Roles in 3+ Years",
    current: "Currently",
    items: [
      {
        start: "Jul 2024",
        end: "Now",
        role: "Programmer",
        company: "PT Sigma Cipta Caraka (Telkomsigma)",
        current: true,
        description:
          "Developing backend services and enterprise-grade APIs using Django REST Framework, Golang, Java Spring Boot, FastAPI, Flask, and NestJS. Implementing LLM-based AI features including intelligent chatbots, document comparison, and automated document versioning.",
        points: [
          "Migrating and upgrading KPEI e-CLEARS system components using Java Spring Boot to support a modern microservices architecture and Java 17+.",
          "Collaborating with cross-functional teams to build and improve internal and client-facing applications.",
          "Performing data migrations to ensure smooth integration during system upgrades and new deployments.",
          "Resolving production issues and implementing new features to improve system performance and stability.",
          "Building internal business applications using Microsoft PowerApps to streamline internal workflows.",
          "Applying LLM technology to develop AI features such as intelligent chatbots, document comparison, and automatic document versioning.",
        ],
      },
      {
        start: "Jan 2023",
        end: "Aug 2024",
        role: "Full-Stack Developer",
        company: "Freelance",
        description:
          "Developed custom web applications for clients across various industries, focusing on reliability, performance, and a great user experience.",
        points: [
          "Delivered a Barbershop Queue System, a Skincare Expert System, a School E-Learning Platform, and a Travel Booking Website.",
          "Applied modern web technologies to build reliable, easy-to-use applications that fit client needs and timelines.",
        ],
      },
      {
        start: "Feb 2023",
        end: "Jul 2023",
        role: "Software Engineer Intern",
        company: "Solo Technopark",
        description:
          "Contributed to digital system development and website modernization initiatives.",
        points: [
          "Built an information system for Soto Panaz covering architecture design and database management.",
          "Migrated a WordPress website to a modern stack using Next.js, Express.js, and Tailwind CSS.",
          "Conducted functional, integration, and performance testing.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education & Certifications",
    headingLead: "Education &",
    headingAccent: "Certifications",
    viewAll: "View All",
    items: [
      {
        degree: "Bachelor of Informatics Engineering",
        institution: "Telkom University - Full Academic Scholarship",
        gpaLabel: "GPA 3.94",
        gpa: "3.94",
        degreeShort: "S1",
        period: "2020 - 2024",
      },
    ],
    certifications: [
      {
        title: "Google AI",
        issuer: "Google",
        year: "2026",
      },
      {
        title: "Microsoft Azure AI Fundamentals",
        issuer: "Microsoft",
        year: "2025",
      },
      {
        title: "Junior Web Developer",
        issuer: "BNSP Indonesia",
        year: "2024",
      },
      {
        title: "Became Front-end and Back-end Developer",
        issuer: "DIcoding",
        year: "2022",
      },
      {
        title: "Prompt Engineering for Developers",
        issuer: "Certification",
        year: "2025",
      },
      {
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
        href: "https://www.izaditya.my.id/blog/prompt-engineering-for-coding-agents",
      },
      {
        title: "Behind the Scenes: My Portfolio Architecture Explained",
        category: "Full-Stack Engineering",
        readingTime: "8 min read",
        date: "27 April 2026",
        href: "https://www.izaditya.my.id/blog/behind-the-scenes-portfolio-architecture",
      },
      {
        title:
          "Backend That Works Is Not Always Ready for Traffic: Common Mistakes Developers Make Early in Development",
        category: "Backend Engineering",
        readingTime: "10 min read",
        date: "28 April 2026",
        href: "https://www.izaditya.my.id/blog/backend-that-works-is-not-always-ready-for-traffic",
      },
      {
        title:
          "Not Just an Endpoint: How Backend Engineers Design APIs That Are Easy to Use and Maintain",
        category: "Backend Engineering",
        readingTime: "12 min read",
        date: "28 April 2026",
        href: "https://www.izaditya.my.id/blog/not-just-an-endpoint-how-backend-engineers-design-maintainable-apis",
      },
    ],
  },
  tech: {
    eyebrow: "Capabilities",
    headingLead: "Tech",
    headingAccent: "& AI Stack.",
    description:
      "Technologies, tools, and AI systems I use to build modern software.",
    viewOnGithub: "View on GitHub",
    capabilities: [
      {
        title: "RAG Systems",
        description:
          "Building Retrieval-Augmented Generation (RAG) pipelines with vector databases to deliver accurate, context-grounded responses.",
        tags: ["LangChain", "Vector Database", "OpenAI", "Gemini"],
      },
      {
        title: "LLM Integration",
        description:
          "Integrating OpenAI and Gemini into web applications to automate workflows, generate content, and power intelligent features.",
        tags: ["OpenAI API", "Gemini API", "FastAPI", "NestJS"],
      },
      {
        title: "AI Chatbot & Automation",
        description:
          "Developing AI chatbots with contextual search, multi-turn conversations, and enterprise system integration.",
        tags: ["RAG", "RabbitMQ", "Prompt Engineering", "REST API"],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    headingLead: "What people",
    headingAccent: "say.",
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
    badge: "AI Digital Twin",
    headingLead: "Have a question?",
    headingAccent: "Ask my AI twin.",
    description:
      "I trained this AI on my real experience, projects, and how I actually work. The answers are real, not templated.",
    cta: "Start chatting now",
    stats: [
      { value: "24/7", label: "Always online" },
      { value: "RAG", label: "Knowledge-based" },
      { value: "ID / EN", label: "Bilingual" },
    ],
    chatName: "Aditya's AI Twin",
    online: "Online",
    greeting:
      "Hi! I'm Aditya's AI Twin. You can ask about my experience, tech stack, or the projects I've built.",
    suggestion: "💬 Try: \"What's your tech stack?\"",
    placeholder: "Ask me something...",
    disclaimer:
      "AI responses may not always be accurate. For official information, please reach out directly via email or the contact section.",
  },
  contact: {
    marquee: "BUILDING DIGITAL PRODUCTS",
    eyebrow: "Got a project?",
    headingLead: "Let's bring to life",
    headingAccent: "your ideas.",
    cta: "Let's Connect",
    ctaHref: "https://wa.me/6281927070239",
    socials,
    status: "Open to opportunities",
    copyright: "© 2026 Aditya Imam Zuhdi",
  },
  chat: {
    trigger: "Ask AI",
    title: "Aditya's AI Twin",
    status: "Online",
    initialMessage:
      "Hi! I'm Aditya's AI Twin. You can ask me anything about my experience, tech stack, or projects.",
    placeholder: "Ask something about me...",
    disclaimer:
      "AI responses may not always be accurate. For official information, please reach out directly via email or the contact section.",
    closeLabel: "Close chat",
    sendLabel: "Send message",
    fallback:
      "That's a great question. For more details, feel free to reach out directly at adityaimam8@gmail.com or check the relevant section on this page.",
    suggestedQuestions: [
      "Who is Aditya Imam Zuhdi?",
      "What is his tech stack?",
      "What projects has he built?",
    ],
    responses: [
      {
        question: "Who is Aditya Imam Zuhdi?",
        answer:
          "I'm Aditya Imam Zuhdi, a Full-Stack Software Engineer based in Indonesia, currently working at Telkomsigma. I specialize in modern web applications, scalable backends, and AI integrations.",
      },
      {
        question: "What is his tech stack?",
        answer:
          "My core stack includes Go, Python, Java Spring Boot, Django REST, FastAPI, and NestJS on the backend, plus React, Next.js, and TypeScript on the frontend. I also work with LangChain, vector databases, and LLM APIs.",
      },
      {
        question: "What projects has he built?",
        answer:
          "Notable projects include a WhatsApp AI Chatbot with RAG pipeline, Celestial Scroll, an E-Learning School Platform, and a POS System for a small business.",
      },
      {
        question: "Does Aditya take freelance work?",
        answer:
          "I'm currently open to freelance and collaborative opportunities. Feel free to reach out via the Contact section or email me directly at adityaimam8@gmail.com.",
      },
      {
        question: "How can I contact Aditya?",
        answer:
          "You can reach me at adityaimam8@gmail.com, or connect via LinkedIn and GitHub. The contact section of this page also has a direct link.",
      },
    ],
  },
};

export const content: Record<Locale, SiteContent> = { id, en };

export const defaultContent: SiteContent = id;
