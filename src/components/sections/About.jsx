import { useEffect, useRef, useState } from 'react';
import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import aboutDefault from '../../assets/figma/about-toybox.jpg';

export default function About({ section = {} }) {
  const { field } = useLang();
  const title = field('title', section) || 'Shiry Kids Fun';
  const text = field('text', section)
    || 'Shiry Kids Fun brings families closer together with exclusive digital coupons, fun activities and special offers from our trusted partners — all accessible from a single, easy-to-use mobile app.';
  const image = section.image ? assetUrl(section.image) : aboutDefault;

  const imgWrapRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-stretch gap-1.5 mb-3">
            <span className="w-1.5 h-7 rounded-full bg-primary/25" />
            <span className="w-1.5 h-7 rounded-full bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-5">{title}</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">{text}</p>
        </div>
        <div ref={imgWrapRef} className="relative flex justify-center">
          <div className={`circle-deco absolute -right-12 -top-16 w-72 h-72 md:w-96 md:h-96 rounded-full border-[24px] border-primary/10 -z-10 ${animate ? 'animate-circle-1' : ''}`} />
          <div className={`circle-deco absolute -left-10 -bottom-10 w-52 h-52 md:w-64 md:h-64 rounded-full border-[20px] border-primary/15 -z-10 ${animate ? 'animate-circle-2' : ''}`} />
          <img src={image} alt={title} className="w-full max-w-md rounded-3xl object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
}
