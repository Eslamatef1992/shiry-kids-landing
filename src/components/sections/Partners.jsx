import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import kidzania from '../../assets/figma/partner-kidzania.png';

const DEFAULT_PARTNERS = Array.from({ length: 5 }, (_, i) => ({ id: `d${i}`, image: kidzania, link: '' }));

export default function Partners({ items = [] }) {
  const { t } = useLang();
  const list = items.length ? items : DEFAULT_PARTNERS;

  return (
    <section id="partners" className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-accent text-center mb-12">
          {t('partners_title')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {list.map(item => {
            const img = (
              <img
                key={item.id}
                src={item.image && item.image !== kidzania ? assetUrl(item.image) : item.image}
                alt=""
                className="h-12 md:h-16 object-contain bg-white rounded-xl shadow-sm px-6 py-3"
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
