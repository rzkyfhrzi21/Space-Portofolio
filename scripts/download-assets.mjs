import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = process.cwd();
const PUB = join(ROOT, "public");

const MUX_ID = "IrZ146m800ITSRBnrRgEwwg4R02AhJIO6A3AC6o95e4zA";

const targets = [
  // Space animation (Mux) — try static renditions in order
  {
    out: "videos/space.mp4",
    urls: [
      `https://stream.mux.com/${MUX_ID}/medium.mp4`,
      `https://stream.mux.com/${MUX_ID}/low.mp4`,
      `https://stream.mux.com/${MUX_ID}/high.mp4`,
      `https://stream.mux.com/${MUX_ID}/capped-1080p.mp4`,
    ],
  },
  {
    out: "images/hero-poster.jpg",
    urls: [`https://image.mux.com/${MUX_ID}/thumbnail.jpg?time=0&width=1920`],
  },
  // About
  { out: "images/about/profile.webp", urls: ["https://www.izaditya.my.id/assets/about/profile.webp"] },
  { out: "images/about/signature.webp", urls: ["https://www.izaditya.my.id/assets/about/signature.webp"] },
  // Projects
  { out: "images/projects/celestial-scroll.webp", urls: ["https://www.izaditya.my.id/assets/projects/celestial-scroll.webp"] },
  { out: "images/projects/pos-cemanting-art.webp", urls: ["https://www.izaditya.my.id/assets/projects/pos-cemanting-art.webp"] },
  { out: "images/projects/e-learning-platform.webp", urls: ["https://www.izaditya.my.id/assets/projects/e-learning-platform.webp"] },
  { out: "images/projects/whatsapp-ai-chatbot-rag.webp", urls: ["https://www.izaditya.my.id/assets/projects/whatsapp-ai-chatbot-rag.webp"] },
  // Local tech svgs
  { out: "images/tech/power-apps.svg", urls: ["https://www.izaditya.my.id/assets/tech/power-apps.svg"] },
  { out: "images/tech/gemini.svg", urls: ["https://www.izaditya.my.id/assets/tech/gemini.svg"] },
];

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
const cdnIcons = {
  "djangorest": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
  "go": devicon("go/go-original.svg"),
  "spring": devicon("spring/spring-original.svg"),
  "fastapi": devicon("fastapi/fastapi-original.svg"),
  "nestjs": devicon("nestjs/nestjs-original.svg"),
  "flask": devicon("flask/flask-original.svg"),
  "rabbitmq": devicon("rabbitmq/rabbitmq-original.svg"),
  "react": devicon("react/react-original.svg"),
  "nextjs": devicon("nextjs/nextjs-original.svg"),
  "nodejs": devicon("nodejs/nodejs-original.svg"),
  "laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "php": devicon("php/php-original.svg"),
  "tailwindcss": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "express": devicon("express/express-original.svg"),
  "bootstrap": devicon("bootstrap/bootstrap-original.svg"),
  "html5": devicon("html5/html5-original.svg"),
  "css3": devicon("css3/css3-original.svg"),
  "javascript": devicon("javascript/javascript-original.svg"),
  "livewire": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original.svg",
  "python": devicon("python/python-original.svg"),
  "java": devicon("java/java-original.svg"),
  "mysql": devicon("mysql/mysql-original.svg"),
  "postgresql": devicon("postgresql/postgresql-original.svg"),
  "mongodb": devicon("mongodb/mongodb-original.svg"),
  "supabase": devicon("supabase/supabase-original.svg"),
  "docker": devicon("docker/docker-original.svg"),
  "openai": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
};

for (const [name, url] of Object.entries(cdnIcons)) {
  targets.push({ out: `images/tech/${name}.svg`, urls: [url] });
}

async function fetchOne(t) {
  for (const url of t.urls) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) {
        console.log(`  [${res.status}] ${url}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const dest = join(PUB, t.out);
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      console.log(`  OK  ${t.out}  (${(buf.length / 1024).toFixed(1)} KB)  <- ${url}`);
      return true;
    } catch (e) {
      console.log(`  ERR ${url}: ${e.message}`);
    }
  }
  console.log(`  FAIL ${t.out}`);
  return false;
}

let ok = 0;
for (const t of targets) {
  if (await fetchOne(t)) ok++;
}
console.log(`\nDone: ${ok}/${targets.length} assets downloaded.`);
