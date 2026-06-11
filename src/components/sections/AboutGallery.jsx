import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function AboutGallery({ section = {}, items = [] }) {
  const { field } = useLang();
  const title = field('title', section);
  const text = field('text', section);

  if (!title && !text && !items.length) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {title && <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-5">{title}</h2>}
          {text && <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">{text}</p>}
        </div>
        {items.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {items.slice(0, 4).map((item, idx) => (
              <img
                key={item.id}
                src={assetUrl(item.image)}
                alt=""
                className={`w-full h-44 object-cover rounded-2xl shadow-lg ${idx % 3 === 0 ? 'col-span-2 h-56' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
