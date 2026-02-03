// Environment variable configuration
// Single source of truth for all environment-dependent values

export const SCHEDULE_CALL_URL =
  process.env.NEXT_PUBLIC_SCHEDULE_CALL_URL || '/contact';

export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : null;

// Validation warnings for missing required environment variables
if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) {
  console.warn('⚠️  NEXT_PUBLIC_FORMSPREE_ID not set - contact form will not work');
}
