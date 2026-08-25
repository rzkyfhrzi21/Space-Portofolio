# Space Portofolio

Portfolio pribadi hasil reverse-engineering dari [izaditya.my.id](https://www.izaditya.my.id) — dibangun ulang dengan Next.js, mendekati 1:1 dengan situs aslinya: mulai dari tipografi, warna, animasi scroll, hingga background video luar angkasa.

## Fitur

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
  lib/content.ts     # Single source of truth konten
  store/             # Redux (UI state)
  types/             # TypeScript interfaces
public/
  images/            # Aset gambar (tech icons, projects, posters)
  videos/            # Video lokal (fallback)
docs/                # Referensi situs asli (HTML + aset hasil inspeksi)
```

Konten situs (teks, data proyek, pengalaman, chat AI) terpusat di `src/lib/content.ts` — ubah di satu tempat untuk kedua bahasa.

## Kredit

- **Desain & website asli**: [Aditya Imam Zuhdi — izaditya.my.id](https://www.izaditya.my.id) · GitHub [@adityaimamz](https://github.com/adityaimamz)
- Proyek ini dibuat untuk **tujuan pembelajaran** reverse-engineering frontend. Seluruh desain, konten, dan aset asli adalah milik Aditya Imam Zuhdi — gunakan dengan bijak dan beri kredit.
- Template dasar: [AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template)

## License

MIT
