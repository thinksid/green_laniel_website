// Shared navigation configuration
// Single source of truth for navigation links across the application

export interface NavLink {
  href: string;
  labelKey: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/vita-1', labelKey: 'vita1' },
  { href: '/about', labelKey: 'about' },
  { href: '/contact', labelKey: 'contact' },
] as const;
