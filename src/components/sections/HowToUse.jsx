import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function HowToUse({ items = [] }) {
  const { t, field } = useLang();
  if (!items.length) return null;

  return (
    <section id="how-to-use" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-14">
          {t('how_to_use_title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div key={item.id} className="text-center">
              <div className="relative mx-auto mb-6 w-full max-w-[260px]">
                {item.image && (
                  <img
                    src={assetUrl(item.image)}
                    alt={field('title', item)}
                    className="w-full rounded-3xl shadow-lg border-8 border-white"
                  />
                )}
                <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg">
                  {idx + 1}
                </span>
              </div>
              <h3 className="font-bold text-lg text-dark">{field('title', item)}</h3>
              {field('description', item) && (
                <p className="text-gray-500 text-sm mt-2">{field('description', item)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
