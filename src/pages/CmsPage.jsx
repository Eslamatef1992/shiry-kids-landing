import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../api/axios';
import useLanding from '../hooks/useLanding';
import { useLang } from '../contexts/LangContext';
import privacyIllustration from '../assets/figma/privacy-illustration.svg';

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

  const titleBlock = (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-1.5 h-7 bg-primary/15 rounded shrink-0" />
      <h1 className="text-2xl md:text-3xl font-extrabold text-accent">
        {page ? field('title', page) : '—'}
      </h1>
    </div>
  );

  const content = (
    <>
      {loading && <p className="text-center text-gray-400">Loading…</p>}
      {!loading && error && <p className="text-center text-gray-400">Content not available yet.</p>}
      {!loading && page && (
        <div
          className="prose max-w-none prose-headings:font-extrabold prose-headings:text-dark prose-p:text-gray-500"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          dangerouslySetInnerHTML={{ __html: field('content', page) }}
        />
      )}
    </>
  );

  return (
    <div>
      <Header sections={sections} />
      <div className="bg-[#000508] h-20" />
      <div className="max-w-6xl mx-auto px-5 pt-10 pb-14 min-h-[40vh] grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 order-2 md:order-1">
          {titleBlock}
          {content}
        </div>
        <div className="md:col-span-1 order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={privacyIllustration}
            alt=""
            className="w-full max-w-xs md:sticky md:top-28"
          />
        </div>
      </div>
      <Footer sections={sections} />
    </div>
  );
}
