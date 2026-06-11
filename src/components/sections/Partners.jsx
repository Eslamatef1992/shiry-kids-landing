import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function Partners({ items = [] }) {
  const { t } = useLang();
  if (!items.length) return null;

  return (
    <section id="partners" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-12">
          {t('partners_title')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {items.map(item => {
            const img = (
              <img
                key={item.id}
                src={assetUrl(item.image)}
                alt=""
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100"
              />
            );
            return item.link
              ? <a key={item.id} href={item.link} target="_blank" rel="noreferrer">{img}</a>
              : img;
          })}
        </div>
      </div>
    </section>
  );
}
