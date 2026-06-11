import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function WhyChoose({ items = [] }) {
  const { t, field } = useLang();
  if (!items.length) return null;

  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-14">
          {t('why_title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center border border-gray-100">
              {item.image && (
                <img src={assetUrl(item.image)} alt="" className="w-14 h-14 object-contain mx-auto mb-5" />
              )}
              <h3 className="font-bold text-lg text-dark mb-2">{field('title', item)}</h3>
              {field('description', item) && (
                <p className="text-gray-500 text-sm leading-relaxed">{field('description', item)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
