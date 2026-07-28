// Developer / technical support contact. Shown so GAPOKTAN admins know who to
// reach for help or updates.
export const DEVELOPER = {
  name: 'Mohammed AL-Shujaa',
  role: 'Developer',
  title: 'Web Developer',
  phone: '082123141973',
  whatsapp: '6282123141973', // 08.. -> 628.. for wa.me links
  email: 'mg.shujaa@gmail.com',
  // Public profiles — power the footer credit + schema.org "sameAs", which is
  // what lets Google connect the name "Mohammed AL-Shujaa" to this project.
  // Fill in the URLs you have; empty ones are ignored.
  profiles: {
    website: '',  // e.g. https://your-portfolio.com
    linkedin: '', // e.g. https://www.linkedin.com/in/your-handle
    github: '',   // e.g. https://github.com/your-handle
  },
}

// Non-empty profile URLs, in priority order (for sameAs and the credit link).
export const DEVELOPER_LINKS: string[] = [
  DEVELOPER.profiles.website,
  DEVELOPER.profiles.linkedin,
  DEVELOPER.profiles.github,
].filter(Boolean)

// Best link to point the visible credit at (portfolio > linkedin > github > email).
export const DEVELOPER_PRIMARY_LINK = DEVELOPER_LINKS[0] || `mailto:${DEVELOPER.email}`

// A user counts as the developer if their email matches or their name contains "shujaa".
export function isDeveloper(u?: { email?: string | null; name?: string | null } | null): boolean {
  if (!u) return false
  const email = (u.email || '').toLowerCase()
  const name = (u.name || '').toLowerCase()
  return email === DEVELOPER.email.toLowerCase() || name.includes('shujaa')
}
