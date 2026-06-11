import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function About({ section = {} }) {
  const { field } = useLang();
  const title = field('title', section) || 'Shiry Kids Fun';
  const text = field('text', section)
    || 'Shiry Kids Fun brings families closer together with exclusive digital coupons, fun activities and special offers from our trusted partners — all accessible from a single, easy-to-use mobile app.';
  const image = section.image ? assetUrl(section.image) : null;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className={image ? '' : 'order-2 md:order-1'}>
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-5">{title}</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">{text}</p>
        </div>
        {image && (
          <div className="order-1 md:order-2">
            <img src={image} alt={title} className="w-full rounded-3xl object-cover shadow-xl" />
          </div>
        )}
      </div>
    </section>
  );
}
