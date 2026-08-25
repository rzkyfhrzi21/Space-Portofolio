# Space Portofolio

Portfolio pribadi hasil reverse-engineering dari [izaditya.my.id](https://www.izaditya.my.id) — dibangun ulang dengan Next.js, mendekati 1:1 dengan situs aslinya: mulai dari tipografi, warna, animasi scroll, hingga background video luar angkasa.

## Fitur

- **Loading screen** — kata *Build / Engineering / Create* berganti, counter 000–100, progress bar, dan tirai exit; progres menunggu video Mux siap sehingga background langsung bergerak begitu layar terbuka
- **Hero** — background video luar angkasa (Mux HLS via `hls.js`) dengan poster fallback + fade-in
- **Tentang Saya** — scroll word-reveal: teks menyala kata-per-kata mengikuti posisi gulir
- **Kapabilitas (Tech & AI Stack)** — header pill sticky, kartu tech miring, kartu kapabilitas AI, parallax dua kolom (GSAP ScrollTrigger)
- **Proyek** — list rows dengan hover glow & underline per-warna aksen, deskripsi expand saat hover, preview gambar yang mengikuti kursor
- **Pengalaman** — timeline dengan dot glow (emerald untuk posisi saat ini) + word-reveal pada deskripsi & poin
- **Pendidikan & Sertifikasi** — kartu IPK + grid sertifikasi
- **Jurnal & Testimoni** — marquee kartu bintang 5× dengan mask fade
- **AI Digital Twin** — mockup chat statis + widget **"Tanya AI"**: modal chat dengan pertanyaan saran, typing indicator, dan jawaban yang di-stream kata per kata
- **Punya proyek?** — marquee display italic + video latar angkasa (footage Mux asli, terbalik vertikal)
- **i18n ID/EN** via react-i18next
- Smooth scrolling (Lenis) + animasi framer-motion & GSAP

## Tech Stack

| Kategori     | Teknologi                                        |
| ------------ | ------------------------------------------------ |
| Framework    | Next.js 16 (App Router), React 19, TypeScript strict |
| Styling      | Tailwind CSS v4 (oklch tokens), shadcn/ui        |
| Animasi      | framer-motion, GSAP + ScrollTrigger, Lenis       |
| Video        | hls.js (stream Mux HLS)                          |
| i18n         | react-i18next                                    |

## Komponen & Library per Section

| Bagian | Komponen | Library / Teknik |
| --- | --- | --- |
| Loading screen | `LoadingScreen` | framer-motion (word cycler `AnimatePresence`, tirai exit), Redux Toolkit (progres menunggu `muxReady`) |
| Navbar | `Navbar` | Redux Toolkit (active section via IntersectionObserver, mobile menu, `chatOpen`), Tailwind |
| Hero — background | `SpaceBackground` → `MuxVideoBackground` | **hls.js** (stream Mux HLS `stream.mux.com`), poster `next/image`, fade-in saat event `playing` |
| Hero — konten | `HeroSection` | framer-motion (role cycler + blur-in), react-i18next |
| Tentang Saya | `ScrollRevealText` | framer-motion `useScroll` + `useTransform` (opacity kata-per-kata mengikuti scroll), `prefers-reduced-motion` aware |
| Stats | `StatsSection` | Tailwind divide + `font-display` italic |
| Proyek | `ProjectsSection` | framer-motion `useMotionValue`/`useSpring` (preview mengikuti kursor), `next/image`, hover expand CSS grid-rows |
| Pengalaman | `ExperienceSection` + `ScrollRevealText` | framer-motion (word reveal), IntersectionObserver-driven scroll |
| Pendidikan | `EducationSection` | Tailwind (grid, gradient card) |
| Kapabilitas | `TechStackSection` | **GSAP ScrollTrigger** (parallax dua kolom berlawanan arah), CSS `sticky` pin, `next/image` devicon |
| Testimoni | `TestimonialsSection` | CSS keyframes marquee + `mask-image` fade, lucide `Star` |
| AI Digital Twin | `AiTwinSection` | framer-motion (typing dots), lucide `Sparkles`/`MessageCircle` |
| Tanya AI (modal) | `TanyaAiButton` | framer-motion `AnimatePresence` (spring modal, streaming jawaban), Redux Toolkit (`chatOpen` — navbar ikut disembunyikan) |
| Kontak + Footer | `ContactSection` | `MuxVideoBackground` (hls.js, flip vertikal), CSS marquee `contact-marquee-track` |
| Global | — | **react-i18next** (ID/EN, konten terpusat di `lib/content.ts`), **Lenis** smooth scroll, **lucide-react** (ikon), **Redux Toolkit** (UI state), font **Geist** + **Outfit** self-hosted (paket `geist` + `next/font/local`, tanpa CDN) |

## Menjalankan Lokal

> Node.js 20+ direkomendasikan.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run lint       # ESLint check
npm run typecheck  # TypeScript check
npm run check      # lint + typecheck + build
```

## Deploy ke Vercel

### Cara 1 — Dashboard (disarankan)

1. Push repository ini ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new) → **Add New... → Project**.
3. **Import** repository `Space-Portofolio`.
4. Vercel otomatis mendeteksi **Next.js** — biarkan pengaturan default:
   - Framework Preset: `Next.js`
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
5. Tidak ada **Environment Variables** yang wajib diisi (video Mux di-stream langsung dari CDN Mux).
6. Klik **Deploy** — selesai. Setiap push ke `master` akan otomatis deploy ulang.

### Cara 2 — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Struktur Proyek

```
src/
  app/               # Route (layout, page, globals.css)
  components/        # Semua section + komponen pendukung
    MuxVideoBackground.tsx   # Pemutar HLS Mux (hero + contact)
    ScrollRevealText.tsx     # Word-reveal berbasis scroll
    TanyaAiButton.tsx        # Trigger + modal chat Tanya AI
    ...
  hooks/useContent.ts# Konten i18n (id/en)
  lib/content.ts     # Loader: membaca data/*.json menjadi SiteContent bertipe
  store/             # Redux (UI state)
  types/             # TypeScript interfaces
data/                # Single source of truth konten situs (per section, ID/EN)
  hero.json          # Nama, role, CTA hero
  projects.json      # Judul, deskripsi, link, gambar proyek
  experience.json    # Riwayat pekerjaan
  education.json     # Pendidikan & sertifikasi
  nav.json           # Link navbar + resume + GitHub
  tech-cards.json    # Daftar teknologi (Frontend/Backend/Tools & AI)
  ...                # about, stats, thoughts, tech, testimonials, ai-twin, chat, contact
public/images/       # Aset gambar (tech icons, projects, posters)
docs/                # Referensi situs asli (HTML + aset hasil inspeksi)
```

Konten situs (nama, link sosial, proyek, pengalaman, pendidikan, chat AI, dll.) terpisah per section di `data/*.json` dengan kunci locale `id`/`en` — **edit JSON saja, tanpa menyentuh kode Next.js**.

## Kredit

- **Desain & website asli**: [Aditya Imam Zuhdi — izaditya.my.id](https://www.izaditya.my.id) · GitHub [@adityaimamz](https://github.com/adityaimamz)
- Proyek ini dibuat untuk **tujuan pembelajaran** reverse-engineering frontend. Seluruh desain, konten, dan aset asli adalah milik Aditya Imam Zuhdi — gunakan dengan bijak dan beri kredit.
- Template dasar: [AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template)

## License

MIT
