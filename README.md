# Agricultural Harvest Production Data Documentation System

A web application for documenting and reporting agricultural harvest production data for village farmer groups (GAPOKTAN). Farmers record each harvest per garden and per crop type, and the data is automatically aggregated into charts and exportable reports.

🌐 **Live:** [gapoktansukorejo.com](https://gapoktansukorejo.com)

📍 Built for **GAPOKTAN Desa Sukorejo, Bungah District, Gresik Regency, Indonesia**, a KKN (community service) program of UNTAG Surabaya.

> This project was originally a hydroponic pH/TDS monitoring tool, then fully pivoted into a harvest documentation system. All pH/TDS monitoring features have been removed.

---

## Features

- **Dashboard**: production summary (total harvests, gardens, crop types), trend charts, and recent activity.
- **Harvest Documentation**: record harvests (date, garden, crop type, quantity in kg, notes). Village and farmer are auto-filled from the selected garden.
- **Garden & Land Management**: manage gardens (farms) and land plots per member.
- **Member Management**: manage GAPOKTAN farmer members.
- **Crop Types**: master data for commodities.
- **Analytics**: production charts per garden, per crop type, and per period (Recharts).
- **Reports**: export harvest summaries to **PDF** and **Excel**.
- **Announcements & Event Calendar**: group information and agenda.
- **Activity Log**: audit trail of every data change.
- **Notifications**: reminders for planting stages and upcoming harvests.
- **Landing Page CMS**: admins can edit landing-page text, images, and gallery without touching code.
- **User Profiles**: role-aware profile pages.
- **Production-ready SEO**: metadata, `robots.txt`, `sitemap.xml`, Open Graph image, and schema.org structured data.

## User Roles

| Role | Access |
|------|--------|
| **Admin** | Full access: manage users, gardens, land plots, crop types, announcements, calendar, CMS, and reports. |
| **Farmer** | Create and view their own harvest and garden data. |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router) + **React 19** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 4** + Radix UI |
| Database | **PostgreSQL** (Neon serverless) |
| ORM | **Prisma 7.8** with `@prisma/adapter-neon` |
| Authentication | **JWT** + **bcryptjs** (RBAC) |
| Charts | **Recharts** |
| Export | **jsPDF** + **xlsx** |
| Media | **Cloudinary** |
| Hosting | **Vercel** (region `sin1`, Singapore) |

## Installation & Running

### Requirements
- Node.js >= 20.9
- A PostgreSQL database (e.g. [Neon](https://neon.tech))
- npm >= 9

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/MohammedAlShujaa/Farmmers-Information-System.git
cd Farmmers-Information-System

# 2. Install dependencies
npm install

# 3. Set up your environment (see below)
#    create a .env file

# 4. Push the schema & seed initial data
npm run db:push
npm run db:seed

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables (`.env`)

```env
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"
JWT_SECRET="replace-with-a-long-random-secure-string"
NEXT_PUBLIC_SITE_URL="https://gapoktansukorejo.com"

# Optional
GOOGLE_SITE_VERIFICATION="code-from-google-search-console"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
CREDITS_PASSWORD="password-for-the-credits-panel"
```

> **Important:** `JWT_SECRET` must be set to a secure value in production. Do not rely on any default.

## NPM Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Development server |
| `npm run build` | `prisma generate` + production build |
| `npm run start` | Run the production build |
| `npm run db:push` | Sync the Prisma schema to the database |
| `npm run db:seed` | Seed sample data |
| `npm run db:studio` | Open Prisma Studio |

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login & registration
│   ├── (dashboard)/     # dashboard, panen (harvest), farms, lahan (land),
│   │                    #   analytics, reports, tanaman (crops), pengumuman
│   │                    #   (announcements), kalender (calendar), aktivitas
│   │                    #   (activity), notifications, profile
│   ├── (admin)/admin/   # users, villages, cms, settings
│   ├── api/             # Route handlers (see table below)
│   ├── page.tsx         # Landing page (CMS-driven)
│   ├── layout.tsx       # Metadata & SEO
│   ├── robots.ts        # robots.txt
│   ├── sitemap.ts       # sitemap.xml
│   └── opengraph-image.tsx
├── components/          # UI & layout (sidebar, etc.)
└── lib/                 # auth, prisma, site, developer, utils
prisma/
├── schema.prisma        # Models: User, Village, PlantType, Farm, Lahan,
│                        #   Panen, Announcement, CalendarEvent,
│                        #   Notification, ActivityLog, SystemSetting
└── seed.ts
```

> Note: some routes and models use Indonesian names (`panen` = harvest, `lahan` = land plot, `tanaman` = crop, `pengumuman` = announcement, `kalender` = calendar, `anggota` = member) because the UI is in Indonesian.

## 🔌 API Endpoints (overview)

| Endpoint | Description |
|----------|-------------|
| `/api/auth/*` | login, logout, me, register |
| `/api/panen`, `/api/panen/[id]` | Harvest documentation |
| `/api/farms`, `/api/lahan` | Gardens & land plots |
| `/api/anggota`, `/api/users` | Members & users |
| `/api/plant-types` | Crop types |
| `/api/pengumuman`, `/api/kalender` | Announcements & calendar |
| `/api/dashboard`, `/api/analytics` | Summary & analytics |
| `/api/activity`, `/api/notifications` | Activity log & notifications |
| `/api/cms`, `/api/settings` | Landing-page content & settings |
| `/api/upload` | Media upload (Cloudinary) |

## Security

- Passwords hashed with **bcryptjs** (12 rounds).
- **JWT** authentication via HTTP-only cookies.
- **Role-Based Access Control** on every endpoint.
- Input validation and SQL-injection protection through the **Prisma ORM**.

## Deployment

Connected to **Vercel** with automatic deploys on every push to the `main` branch. Add all environment variables in the Vercel dashboard, then deploy.

---

## Developer

Developed by **Mohammed AL-Shujaa**, Web Developer.

-  LinkedIn: [linkedin.com/in/shujaa-shu-jaa-071042258](https://www.linkedin.com/in/shujaa-shu-jaa-071042258/)
-  GitHub: [github.com/MohammedAlShujaa](https://github.com/MohammedAlShujaa)
-  Email: mg.shujaa@gmail.com

Built as part of the **KKN UNTAG Surabaya** program to support the digitalization of agricultural harvest documentation for rural Indonesia.
