# 🧑‍💻 Aka's Portfolio Website

# tolong fork dan star plis 🥹

<h2 align="center">🎖️ Badge</h2>
<p align="center">
  <a href="LICENSE">
    <img alt="MIT License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://reactjs.org/">
    <img alt="React" src="https://img.shields.io/badge/React-18-blue.svg?logo=react&logoColor=white" />
  </a>
  <a href="https://vitejs.dev/">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-NextGen-blueviolet.svg?logo=vite&logoColor=white" />
  </a>
  <a href="https://tailwindcss.com/">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8.svg?logo=tailwindcss&logoColor=white" />
  </a>
</p>

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict-blue.svg?logo=typescript&logoColor=white" />
  </a>
  <a href="https://vercel.com">
    <img alt="Hosted on Vercel" src="https://img.shields.io/badge/Hosted-Vercel-black?logo=vercel&logoColor=white" />
  </a>
  <a href="https://github.com/akaanakbaik">
    <img alt="Made in Indonesia" src="https://img.shields.io/badge/Made%20with%20❤️-Indonesia-red.svg?logo=opensourceinitiative" />
  </a>
  <a href="https://github.com/akaanakbaik/pro/commits/main">
    <img alt="Actively Maintained" src="https://img.shields.io/badge/Status-Actively%20Maintained-brightgreen.svg?logo=github" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/akaanakbaik/pro">
    <img alt="Mobile First" src="https://img.shields.io/badge/Design-Mobile%20First-important?logo=css3&logoColor=white" />
  </a>
  <a href="CONTRIBUTING.md">
    <img alt="Contributions Welcome" src="https://img.shields.io/badge/Contributions-Welcome-blueviolet?logo=git&logoColor=white" />
  </a>
  <a href="https://t.me/aka">
    <img alt="Join Telegram" src="https://img.shields.io/badge/Telegram-Join-blue.svg?logo=telegram" />
  </a>
  <a href="https://github.com/akaanakbaik/pro/stargazers">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/akaanakbaik/pro?style=social" />
  </a>
</p>

Halo! Ini adalah repo dari website portofolio gw, dibuat pakai **React + TypeScript + Tailwind CSS** dan di-setup pakai **Vite**.  

Tujuan project ini simpel: bikin personal site yg clean, dan cepet — yg bisa nunjukin siapa gw, apa yg gw bikin, dan gimana orang bisa kontak g

---

## 🗂 Struktur Folder (Biar Gak Bingung)

```bash
.
├── client/
│   ├── public/              # File statis (favicon, robots.txt, sitemap)
│   └── src/
│       ├── components/ui/   # Komponen UI kayak About, Hero, Navbar, dsb
│       ├── hooks/           # Custom hooks (use-theme, use-toast, dll)
│       ├── lib/             # Helper kayak queryClient & utils
│       ├── pages/           # Routing halaman (opsional)
│       ├── App.tsx          # Komponen utama React
│       ├── main.tsx         # Entry point project
│       ├── index.css        # Styling global
│       └── index.html       # HTML template
├── server/                  # Backend sederhana (optional)
│   ├── index.ts             # Entry server
│   ├── routes.ts            # API routes
│   └── storage.ts           # Penyimpanan data
├── shared/                  # Schema atau tipe data global
│   └── schema.ts
├── drizzle.config.ts        # Buat ORM/database
├── tailwind.config.ts       # Konfigurasi Tailwind
├── vite.config.ts           # Vite config
├── vercel.json              # Buat deploy ke Vercel
├── package.json             # NPM scripts & dependencies
├── tsconfig.json            # Konfigurasi TypeScript
└── README.md                # You're here.
```

---

## ✏️ Cara Edit Website-nya

Kalo kmu mau ubah isi web-nya, langsung aja buka file di `client/src/components/ui/`.

- **Hero.tsx**  
  Ubah nama, kalimat utama, dan kata-kata sambutan.

- **About.tsx**  
  Ubah tentang diri mu.

- **Projects.tsx**  
  Tambah atau ubah list proyek yg mau ditampilin. Bisa pake link demo atau GitHub.

- **Skills.tsx**  
  Update skill yg kmu punya. Misalnya: React, Tailwind, TypeScript, dll.

- **Navbar.tsx** & **Footer.tsx**  
  Buat atur navigasi.

---

## 💻 Jalankan Secara Lokal

```bash
# Clone dulu project-nya
git clone https://github.com/akaanakbaik/pro

# Masuk ke direktori client
cd pro

# Install semua package
npm install

# Jalankan project
npm run dev
```

# 🚀 Deployment

Project ini udah disiapin buat dua tempat:

- **Vercel** — tinggal connect ke GitHub, deploy

Kalau pake environment variable, pastiin udah diatur dulu (bisa tambahin di dashboard Vercel. 

---

## 🧰 Teknologi yg Dipakai

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🌐 Replit (local testing)
- ☁️ Vercel (online deploy)

---

## 🤝 Kontribusi?

Yes, boleh banget. Kalo kmu punya ide, nemu bug, atau mau bantuin nambah fitur, hehehe 🗿:

```bash
# Bikin branch baru
git checkout -b fitur/eai

# Commit & push
git commit -m "feat: nambah fitur eai"
git push origin fitur/apa-aja
```

---

## 📬 Kontak

- GitHub: [@akaanakbaik](https://github.com/akaanakbaik)
- Telegram: [@aka](https://t.me/aka)
- YouTube: [Always Aka](https://www.youtube.com/@always-aka)

---

> Dibikin dengan rasa penasaran dan semangat belajar oleh **Aka**  
> _"gw hanya pemula, hehehe 🗿"_
