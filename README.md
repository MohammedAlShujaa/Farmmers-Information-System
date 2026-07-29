# Sistem Informasi Dokumentasi Data Produksi Hasil Panen Pertanian

Aplikasi web untuk **dokumentasi dan pelaporan data produksi hasil panen** kelompok tani (GAPOKTAN) tingkat desa. Petani mencatat setiap panen per kebun dan per jenis tanaman, lalu data direkap otomatis menjadi grafik dan laporan yang bisa diekspor.

🌐 **Live:** [gapoktansukorejo.com](https://gapoktansukorejo.com)
📍 Dibangun untuk **GAPOKTAN Desa Sukorejo, Kec. Bungah, Kab. Gresik** — program KKN UNTAG Surabaya.

> Sebelumnya proyek ini adalah alat pemantauan pH/TDS hidroponik, kemudian dialihkan sepenuhnya menjadi sistem dokumentasi hasil panen. Seluruh fitur monitoring pH/TDS sudah dihapus.

---

## ✨ Fitur Utama

- **Dashboard** — ringkasan produksi (total panen, kebun, jenis tanaman), grafik tren, dan aktivitas terbaru.
- **Dokumentasi Panen** — catat hasil panen (tanggal, kebun, jenis tanaman, jumlah kg, catatan). Desa & petani otomatis terisi dari kebun yang dipilih.
- **Manajemen Kebun & Lahan** — data kebun (farm) dan lahan (land plot) per anggota.
- **Manajemen Anggota** — data petani anggota GAPOKTAN.
- **Jenis Tanaman** — master data komoditas.
- **Analitik** — grafik produksi per kebun, per jenis tanaman, dan per periode (Recharts).
- **Laporan** — ekspor rekap panen ke **PDF** dan **Excel**.
- **Pengumuman & Kalender Kegiatan** — informasi dan agenda kelompok tani.
- **Aktivitas** — log audit setiap perubahan data.
- **Notifikasi** — pengingat tahap tanam & panen mendatang.
- **CMS Halaman Utama** — admin dapat mengubah teks, gambar, dan galeri landing page tanpa menyentuh kode.
- **Profil Pengguna** — halaman profil yang menyesuaikan peran.
- **SEO siap produksi** — metadata, `robots.txt`, `sitemap.xml`, Open Graph image, dan data terstruktur schema.org.

## 👥 Peran Pengguna

| Peran | Akses |
|-------|-------|
| **Admin** | Seluruh fitur: kelola pengguna, kebun, lahan, tanaman, pengumuman, kalender, CMS, dan laporan. |
| **Petani (Farmer)** | Input dan lihat data panen serta kebun miliknya sendiri. |

## 🛠️ Stack Teknologi

| Lapisan | Teknologi |
|--------|-----------|
| Framework | **Next.js 16** (App Router) + **React 19** |
| Bahasa | **TypeScript** |
| Styling | **Tailwind CSS 4** + Radix UI |
| Database | **PostgreSQL** (Neon serverless) |
| ORM | **Prisma 7.8** dengan `@prisma/adapter-neon` |
| Autentikasi | **JWT** + **bcryptjs** (RBAC) |
| Grafik | **Recharts** |
| Ekspor | **jsPDF** + **xlsx** |
| Media | **Cloudinary** |
| Hosting | **Vercel** (region `sin1` — Singapura) |

## 🚀 Instalasi & Menjalankan

### Persyaratan
- Node.js ≥ 20.9
- Database PostgreSQL (mis. [Neon](https://neon.tech))
- npm ≥ 9

### Langkah

```bash
# 1. Clone repository
git clone https://github.com/MohammedAlShujaa/Farmmers-Information-System.git
cd Farmmers-Information-System

# 2. Install dependencies
npm install

# 3. Siapkan environment (lihat bagian di bawah)
#    buat file .env

# 4. Push schema & isi data awal
npm run db:push
npm run db:seed

# 5. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Environment Variables (`.env`)

```env
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"
JWT_SECRET="ganti-dengan-string-acak-yang-panjang-dan-aman"
NEXT_PUBLIC_SITE_URL="https://gapoktansukorejo.com"

# Opsional
GOOGLE_SITE_VERIFICATION="kode-dari-google-search-console"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
CREDITS_PASSWORD="password-untuk-panel-kredit"
```

> **Penting:** `JWT_SECRET` wajib diisi dengan nilai yang aman di produksi — jangan gunakan nilai default.

## 📦 Skrip NPM

| Skrip | Fungsi |
|-------|--------|
| `npm run dev` | Development server |
| `npm run build` | `prisma generate` + build produksi |
| `npm run start` | Menjalankan build produksi |
| `npm run db:push` | Sinkronisasi schema Prisma ke database |
| `npm run db:seed` | Mengisi data contoh |
| `npm run db:studio` | Buka Prisma Studio |

## 🗂️ Struktur Proyek

```
src/
├── app/
│   ├── (auth)/          # Login & registrasi
│   ├── (dashboard)/     # Dashboard, panen, farms, lahan, analytics,
│   │                    #   reports, tanaman, pengumuman, kalender,
│   │                    #   aktivitas, notifications, profile
│   ├── (admin)/admin/   # users, villages, cms, settings
│   ├── api/             # Route handlers (lihat tabel di bawah)
│   ├── page.tsx         # Landing page (CMS-driven)
│   ├── layout.tsx       # Metadata & SEO
│   ├── robots.ts        # robots.txt
│   ├── sitemap.ts       # sitemap.xml
│   └── opengraph-image.tsx
├── components/          # UI & layout (sidebar, dsb.)
└── lib/                 # auth, prisma, site, developer, utils
prisma/
├── schema.prisma        # Model: User, Village, PlantType, Farm, Lahan,
│                        #   Panen, Announcement, CalendarEvent,
│                        #   Notification, ActivityLog, SystemSetting
└── seed.ts
```

## 🔌 API Endpoints (ringkas)

| Endpoint | Deskripsi |
|----------|-----------|
| `/api/auth/*` | login, logout, me, register |
| `/api/panen`, `/api/panen/[id]` | Dokumentasi hasil panen |
| `/api/farms`, `/api/lahan` | Kebun & lahan |
| `/api/anggota`, `/api/users` | Anggota & pengguna |
| `/api/plant-types` | Jenis tanaman |
| `/api/pengumuman`, `/api/kalender` | Pengumuman & kalender |
| `/api/dashboard`, `/api/analytics` | Ringkasan & analitik |
| `/api/activity`, `/api/notifications` | Log aktivitas & notifikasi |
| `/api/cms`, `/api/settings` | Konten landing page & pengaturan |
| `/api/upload` | Upload media (Cloudinary) |

## 🔒 Keamanan

- Password di-hash dengan **bcryptjs** (12 rounds).
- Autentikasi **JWT** via HTTP-only cookie.
- **Role-Based Access Control** di setiap endpoint.
- Validasi input dan proteksi SQL injection melalui **Prisma ORM**.

## ☁️ Deployment

Terhubung ke **Vercel** dengan deploy otomatis pada setiap push ke branch `main`. Tambahkan semua environment variables di dashboard Vercel, lalu deploy.

---

## 👨‍💻 Developer

Dikembangkan oleh **Mohammed AL-Shujaa** — Web Developer.

- 🔗 LinkedIn: [linkedin.com/in/shujaa-shu-jaa-071042258](https://www.linkedin.com/in/shujaa-shu-jaa-071042258/)
- 💻 GitHub: [github.com/MohammedAlShujaa](https://github.com/MohammedAlShujaa)
- 📧 Email: mg.shujaa@gmail.com

Dibuat sebagai bagian dari program **KKN UNTAG Surabaya** untuk mendukung digitalisasi dokumentasi hasil panen pertanian desa di Indonesia. 🌾
