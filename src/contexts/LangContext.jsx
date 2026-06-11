import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('shiry_lang') || 'en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('shiry_lang', lang);
  }, [lang]);

  const toggle = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;
  const isRtl = lang === 'ar';

  // pick the right field for bilingual content objects, e.g. field('title', section)
  const field = (base, obj) => {
    if (!obj) return '';
    if (lang === 'ar') return obj[`${base}_ar`] || obj[base] || '';
    return obj[base] || '';
  };

  return (
    <LangContext.Provider value={{ lang, toggle, t, isRtl, field }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
