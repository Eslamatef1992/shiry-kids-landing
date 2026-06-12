import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import SectionHeading from '../SectionHeading';
import howto1 from '../../assets/figma/howto-1.png';
import howto2 from '../../assets/figma/howto-2.png';
import howto3 from '../../assets/figma/howto-3.png';

const DEFAULT_IMAGES = [howto1, howto2, howto3];

export default function HowToUse({ items = [] }) {
  const { t, field } = useLang();

  const list = items.length
    ? items
    : [
        { id: 'd1', title: 'Download App & Sign In', description: 'Create your free account in seconds.' },
        { id: 'd2', title: 'Find All Product & Coupons You Need', description: 'Browse exclusive deals from our partners.' },
        { id: 'd3', title: 'Enjoy With Shiry Kids Fun', description: 'Redeem your coupon and enjoy the experience.' },
      ];

  return (
    <section id="how-to-use" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading title={t('how_to_use_title')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {list.map((item, idx) => (
            <div key={item.id} className="text-center">
              <div className="bg-cream rounded-3xl p-8 mb-6 flex items-center justify-center">
                <img
                  src={item.image ? assetUrl(item.image) : DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length]}
                  alt={field('title', item)}
                  className="w-full max-w-[260px] rounded-2xl shadow-lg"
                />
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
