import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../contexts/LangContext';
import logoBadge from '../assets/figma/logo-badge.png';
import iconLinkedin from '../assets/figma/icon-linkedin.svg';
import iconInstagram from '../assets/figma/icon-instagram.svg';
import iconX from '../assets/figma/icon-x.svg';
import iconSnapchat from '../assets/figma/icon-snapchat.svg';
import iconWhatsapp from '../assets/figma/icon-whatsapp.svg';

const SOCIAL_ICONS = {
  facebook_link: { label: 'LinkedIn', icon: iconLinkedin },
  instagram_link: { label: 'Instagram', icon: iconInstagram },
  twitter_link: { label: 'X', icon: iconX },
  tiktok_link: { label: 'Snapchat', icon: iconSnapchat },
  youtube_link: { label: 'WhatsApp', icon: iconWhatsapp },
};

export default function Footer({ sections = {} }) {
  const { t, lang, toggle, field } = useLang();
  const footer = sections.footer || {};
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '/#how-to-use', label: t('nav_how_to_use') },
    { href: '/#partners', label: t('nav_partners') },
    { href: '/#about', label: t('nav_about') },
    { href: '/#why-us', label: t('nav_why') },
  ];

  const copyright = field('copyright', footer) || `© ${year} ${t('all_rights_reserved')}`;

  return (
    <footer className="bg-white text-dark pt-14 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoBadge} alt="Shiry Kids Fun" className="w-40 h-40 object-contain" />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map(l => (
              <Link key={l.href} to={l.href} className="text-dark/80 hover:text-accent text-sm font-semibold underline underline-offset-4 transition">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            {Object.entries(SOCIAL_ICONS).map(([key, { label, icon }]) => (
              <div key={key} className="flex items-center gap-3 md:gap-4">
                <a
                  href={footer[key] || '#'}
                  target={footer[key] ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition flex items-center justify-center shrink-0"
                >
                  <img src={icon} alt={label} className="w-10 h-10" />
                </a>
                <span className="h-6 w-px bg-gray-200" />
              </div>
            ))}
            <button
              onClick={toggle}
              className="flex items-center gap-1 text-dark/80 hover:text-accent text-sm font-semibold transition whitespace-nowrap"
            >
              {lang === 'en' ? 'ENGLISH' : 'العربية'}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>{copyright}</span>
          <div className="flex gap-6">
            <Link to="/terms-conditions" className="hover:text-accent transition">{t('terms_conditions')}</Link>
            <Link to="/privacy-policy" className="hover:text-accent transition">{t('privacy_policy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
