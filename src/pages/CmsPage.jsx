import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../api/axios';
import useLanding from '../hooks/useLanding';
import { useLang } from '../contexts/LangContext';

export default function CmsPage({ slug }) {
  const { sections } = useLanding();
  const { field, lang } = useLang();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api.get(`/cms/${slug}`)
      .then(r => setPage(r.data.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div>
      <Header sections={sections} />
      <div className="bg-dark pt-32 pb-12 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-extrabold">
          {page ? field('title', page) : '—'}
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-14 min-h-[40vh]">
        {loading && <p className="text-center text-gray-400">Loading…</p>}
        {!loading && error && <p className="text-center text-gray-400">Content not available yet.</p>}
        {!loading && page && (
          <div
            className="prose max-w-none"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            dangerouslySetInnerHTML={{ __html: field('content', page) }}
          />
        )}
      </div>
      <Footer sections={sections} />
    </div>
  );
}
