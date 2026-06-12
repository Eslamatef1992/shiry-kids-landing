import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

export default function Header({ sections = {} }) {
  const { t, lang, toggle, field } = useLang();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  const downloadLink = sections.hero?.cta_primary_link
    || sections.download_app?.app_store_link
    || sections.download_app?.google_play_link
    || '#download';

  const navLinks = [
    { href: '#how-to-use', label: t('nav_how_to_use') },
    { href: '#about', label: t('nav_about') },
    { href: '#partners', label: t('nav_partners') },
    { href: '#why-us', label: t('nav_why') },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Shiry Kids" className="w-10 h-10 object-contain rounded-lg bg-white/90 p-1" />
          <span className="text-white font-extrabold text-lg tracking-wide hidden sm:block">SHIRY KIDS FUN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            onHome ? (
              <a key={l.href} href={l.href} className="text-white/90 hover:text-white font-medium text-sm transition">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={`/${l.href}`} className="text-white/90 hover:text-white font-medium text-sm transition">
                {l.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-white border border-white/40 rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-white/10 transition"
          >
            {lang === 'en' ? 'العربية' : 'ENGLISH'}
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <a
            href={downloadLink}
            className="hidden sm:inline-block bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent transition shadow-lg shadow-primary/30"
          >
            {t('download_app')}
          </a>
          <button className="lg:hidden text-white text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-dark/95 backdrop-blur px-5 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white font-medium text-sm">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
