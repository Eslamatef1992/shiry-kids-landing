import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import aboutDefault from '../../assets/figma/about-toybox.jpg';

export default function About({ section = {} }) {
  const { field } = useLang();
  const title = field('title', section) || 'Shiry Kids Fun';
  const text = field('text', section)
    || 'Shiry Kids Fun brings families closer together with exclusive digital coupons, fun activities and special offers from our trusted partners — all accessible from a single, easy-to-use mobile app.';
  const image = section.image ? assetUrl(section.image) : aboutDefault;

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
        <div className="relative flex justify-center">
          <div className="absolute -right-10 -top-10 w-72 h-72 md:w-96 md:h-96 rounded-full border-[28px] border-primary/15 -z-10" />
          <img src={image} alt={title} className="w-full max-w-md rounded-3xl object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
}
