import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

const SOCIAL_ICONS = {
  facebook_link: { label: 'Facebook', icon: 'f' },
  instagram_link: { label: 'Instagram', icon: '◎' },
  twitter_link: { label: 'X', icon: '𝕏' },
  tiktok_link: { label: 'TikTok', icon: '♪' },
  youtube_link: { label: 'YouTube', icon: '▶' },
};

export default function Footer({ sections = {} }) {
  const { t, field } = useLang();
  const footer = sections.footer || {};
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '/#how-to-use', label: t('nav_how_to_use') },
    { href: '/#about', label: t('nav_about') },
    { href: '/#partners', label: t('nav_partners') },
    { href: '/#why-us', label: t('nav_why') },
  ];

  const copyright = field('copyright', footer) || `© ${year} SHIRY KIDS FUN. ${t('all_rights_reserved')}`;

  return (
    <footer className="bg-dark text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Shiry Kids" className="w-12 h-12 object-contain rounded-lg bg-white/90 p-1" />
            <span className="font-extrabold text-xl tracking-wide">SHIRY KIDS FUN</span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(l => (
              <Link key={l.href} to={l.href} className="text-white/70 hover:text-white text-sm font-medium transition">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {Object.entries(SOCIAL_ICONS).map(([key, { label, icon }]) => (
              footer[key] ? (
                <a
                  key={key}
                  href={footer[key]}
                  target="_blank" rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition"
                >
                  {icon}
                </a>
              ) : null
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <span>{copyright}</span>
          <div className="flex gap-6">
            <Link to="/terms-conditions" className="hover:text-white transition">{t('terms_conditions')}</Link>
            <Link to="/privacy-policy" className="hover:text-white transition">{t('privacy_policy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
