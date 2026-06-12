import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

const STORAGE_KEY = 'shiry_cookie_consent';

export default function CookieConsent() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
      // allow mount before animating in
      const timer = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setShow(false);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  const text = t('privacy_promise_text');
  const [before, after] = text.split('{link}');

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 transition-transform duration-300 ease-out ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-extrabold text-dark mb-2">
          {t('privacy_promise_title')}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
          {before}
          <Link to="/privacy-policy" className="font-semibold text-dark underline underline-offset-2">
            {t('privacy_policy')}
          </Link>
          {after}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => close('rejected')}
            className="flex-1 border border-dark/20 text-dark font-semibold rounded-xl px-5 py-3 text-sm sm:text-base hover:bg-gray-50 transition"
          >
            {t('cookie_reject_all')}
          </button>
          <button
            onClick={() => close('accepted')}
            className="flex-1 bg-dark text-white font-semibold rounded-xl px-5 py-3 text-sm sm:text-base hover:bg-black transition"
          >
            {t('cookie_confirm')}
          </button>
        </div>
      </div>
    </div>
  );
}
