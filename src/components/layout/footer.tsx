import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const contact = useTranslations('contact.info');

  const navLinks = [
    { href: '/vita-1', label: nav('vita1') },
    { href: '/about', label: nav('about') },
    { href: '/contact', label: nav('contact') },
  ];

  return (
    <footer className="bg-brunswick-900 text-white">
      <div className="container-content px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logos/logo-white.png"
                alt="Green Laniel"
                width={160}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 text-brunswick-300">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brunswick-400 mb-4">
              {t('navigation')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brunswick-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brunswick-400 mb-4">
              {t('contactUs')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-brunswick-200">
                <Mail className="w-4 h-4 text-brunswick-400" />
                <a
                  href="mailto:info@greenlaniel.com"
                  className="hover:text-white transition-colors"
                >
                  {contact('email')}
                </a>
              </li>
              <li className="flex items-center gap-2 text-brunswick-200">
                <MapPin className="w-4 h-4 text-brunswick-400" />
                <span>{contact('serving')}</span>
              </li>
              <li className="flex items-center gap-2 text-brunswick-200">
                <Globe className="w-4 h-4 text-brunswick-400" />
                <span>{contact('languages')}</span>
              </li>
            </ul>
          </div>

          {/* Social / Follow */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brunswick-400 mb-4">
              {t('followUs')}
            </h3>
            <a
              href="https://www.linkedin.com/company/green-laniel-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brunswick-200 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brunswick-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brunswick-400">
            <p>{t('copyright')}</p>
            <p>{t('viventNote')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
