# 🧑‍💻 Aka's Portfolio Website

# tolong fork dan star plis 🥹

Halo! Ini adalah repo dari website portofolio gw, dibuat pakai **React + TypeScript + Tailwind CSS** dan di-setup pakai **Vite**.  

Tujuan project ini simpel: bikin personal site yg clean, dark mode, dan cepet — yg bisa nunjukin siapa gw, apa yg gw bikin, dan gimana orang bisa kontak gw.

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
├── dist/                    # Folder hasil build
├── drizzle.config.ts        # Buat ORM/database
├── tailwind.config.ts       # Konfigurasi Tailwind
├── vite.config.ts           # Vite config
├── vercel.json              # Buat deploy ke Vercel
├── package.json             # NPM scripts & dependencies
├── .replit                  # Konfigurasi Replit
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

- **Replit** — auto jalan dari `.replit` config
- **Vercel** — tinggal connect ke GitHub, deploy

Kalau pake environment variable, pastiin udah diatur dulu (bisa tambahin di dashboard Vercel atau .env di Replit).

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
- WhatsApp: [wa.me/6281266950382](https://wa.me/6281266950382)
- Telegram: [@aka](https://t.me/aka)
- YouTube: [Always Aka](https://www.youtube.com/@always-aka)

---

> Dibikin dengan rasa penasaran dan semangat belajar oleh **Aka**  
> _"gw hanya pemula, hehehe 🗿"_
