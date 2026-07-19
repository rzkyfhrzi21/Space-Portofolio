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

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "#home" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Tulisan", href: "#thoughts" },
  { label: "Hubungi Saya", href: "#contact" },
];

export const resumeHref = "/assets/documents/aditya-imam-zuhdi-resume.pdf";

export const hero = {
  eyebrow: "IT ENTHUSIAST",
  name: "Aditya Imam Zuhdi",
  description:
    "Seorang Builder berbasis di Indonesia. Berpengalaman membangun aplikasi web modern, backend yang scalable, dan integrasi AI untuk produk digital.",
  primaryCta: { label: "LIHAT PROYEK", href: "#projects" },
  secondaryCta: { label: "HUBUNGI SAYA", href: "#contact" },
};

export const about = {
  eyebrow: "TENTANG SAYA",
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
};

export const stats: Stat[] = [
  { value: "3+", label: "TAHUN PENGALAMAN" },
  { value: "10+", label: "PROYEK SELESAI" },
  { value: "10+", label: "KLIEN YANG DILAYANI" },
];

export const projects: Project[] = [
  {
    slug: "celestial-scroll",
    title: "Celestial Scroll - Novel Reader",
    description:
      "Platform membaca berbasis web modern untuk pembaca light novel dengan pengalaman baca yang dapat dikustomisasi dan dukungan Progressive Web App.",
    image: "/images/projects/celestial-scroll.webp",
    year: "2026",
    category: "FULL-STACK · PWA",
    tags: ["Full-Stack", "PWA", "React", "Supabase"],
  },
  {
    slug: "e-learning-platform",
    title: "E-Learning School Platform",
    description:
      "Platform pembelajaran online dengan fitur manajemen materi kursus, pelacakan tugas, dan alat komunikasi untuk siswa serta guru.",
    image: "/images/projects/e-learning-platform.webp",
    year: "2023",
    category: "FULL-STACK",
    tags: ["Full-Stack", "Laravel", "Livewire", "MySQL"],
  },
  {
    slug: "pos-cemanting-art",
    title: "POS System - Cemanting Art",
    description:
      "Sistem POS full-stack yang dirancang untuk membantu usaha kecil mengelola transaksi, catatan keuangan, serta laporan laba rugi.",
    image: "/images/projects/pos-cemanting-art.webp",
    year: "2024",
    category: "FULL-STACK · REST API",
    tags: ["Full-Stack", "Backend", "Node.js", "MySQL"],
  },
  {
    slug: "modern-portfolio",
    title: "Modern Portfolio Website",
    description:
      "Website portofolio premium yang dibangun dengan Next.js, Framer Motion, dan Aceternity UI, dilengkapi dukungan multibahasa dan integrasi AI chat.",
    image: "/images/projects/whatsapp-ai-chatbot-rag.webp",
    year: "2026",
    category: "SISTEM AI / RAG",
    tags: ["Full-Stack", "Next.js", "AI / RAG", "i18n"],
  },
];

export const experiences: ExperienceItem[] = [
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
];

export const educations: EducationItem[] = [
  {
    degree: "Sarjana Teknik Informatika",
    institution: "Universitas Telkom",
    meta: "Beasiswa Akademik Penuh · IPK 3.94",
    period: "2020 - 2024",
    badge: "S1",
  },
];

export const certifications: Certification[] = [
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
];

export const articles: Article[] = [
  {
    title: "Prompt Engineering untuk Coding Agen",
    category: "Prompt Engineering",
    readingTime: "8 menit baca",
    date: "27 April 2026",
  },
  {
    title: "Di Balik Layar: Arsitektur Portofolio Saya",
    category: "Full-Stack Engineering",
    readingTime: "8 menit baca",
    date: "27 April 2026",
  },
  {
    title:
      "Backend Jalan Bukan Berarti Siap Ramai: Kesalahan yang Sering Terjadi di Awal Pengembangan",
    category: "Backend Engineering",
    readingTime: "10 menit baca",
    date: "28 April 2026",
  },
  {
    title:
      "Bukan Sekadar Endpoint: Cara Backend Engineer Mendesain API yang Mudah Dipakai dan Dirawat",
    category: "Backend Engineering",
    readingTime: "12 menit baca",
    date: "28 April 2026",
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "FRONTEND",
    count: "9 teknologi",
    items: [
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
  },
  {
    label: "BACKEND",
    count: "9 teknologi",
    items: [
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
  },
  {
    label: "TOOLS & AI",
    count: "13 teknologi",
    items: [
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
  },
];

export const aiCapabilities: AiCapability[] = [
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
];

export const testimonials: Testimonial[] = [
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
];

export const aiTwin = {
  eyebrow: "AI Digital Twin",
  heading: "Punya pertanyaan? Tanya AI twin saya.",
  description:
    "Saya melatih AI ini berdasarkan pengalaman, proyek, dan cara kerja saya yang sebenarnya. Jawabannya nyata, bukan templated.",
  cta: "Mulai ngobrol sekarang",
  badges: ["24/7 SELALU ONLINE", "RAG BERBASIS PENGETAHUAN", "ID / EN BILINGUAL"],
  disclaimer:
    "Respons AI mungkin tidak selalu akurat. Untuk informasi resmi, silakan hubungi langsung melalui email atau bagian kontak.",
};

export const contact = {
  marquee: "MEMBANGUN PRODUK DIGITAL",
  eyebrow: "PUNYA PROYEK?",
  heading: "Mari bangun sesuatu yang berdampak.",
  cta: "MARI TERHUBUNG",
  socials: [
    { label: "LINKEDIN", href: "https://www.linkedin.com/" },
    { label: "GITHUB", href: "https://github.com/" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/" },
  ],
  status: "TERBUKA UNTUK PELUANG",
  copyright: "© 2026 ADITYA IMAM ZUHDI",
};
