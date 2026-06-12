import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import SectionHeading from '../SectionHeading';
import iconTouchScreen from '../../assets/figma/icon-touch-screen.svg';
import iconDiscountCoupon from '../../assets/figma/icon-discount-coupon.svg';
import iconInsurance from '../../assets/figma/icon-insurance.svg';
import iconLightning from '../../assets/figma/icon-lightning.svg';
import iconHandshake from '../../assets/figma/icon-handshake.svg';

const DEFAULT_ITEMS = [
  { id: 'd1', title: 'User-Friendly Mobile App', description: 'Enjoy a simple and intuitive app designed for a smooth experience.', iconSrc: iconTouchScreen },
  { id: 'd2', title: 'Instant Access To Digital Coupons', description: 'Get your digital coupons instantly and start playing right away.', iconSrc: iconDiscountCoupon },
  { id: 'd3', title: 'Trusted Platform For Families', description: 'A safe and reliable platform built for kids and their families.', iconSrc: iconInsurance },
  { id: 'd4', title: 'Fast & Easy Ordering', description: 'Browse, order, and receive your products in just a few taps.', iconSrc: iconLightning },
  { id: 'd5', title: 'Exclusive Offers & Deals', description: 'Discover special discounts and exciting deals available only on Shiry Kids Fun.', iconSrc: iconHandshake },
];

export default function WhyChoose({ items = [] }) {
  const { t, field } = useLang();
  const list = items.length ? items : DEFAULT_ITEMS;

  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading title={t('why_title')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {list.map(item => (
            <div key={item.id} className="text-center">
              <img
                src={item.image ? assetUrl(item.image) : item.iconSrc}
                alt=""
                className="w-12 h-12 object-contain mx-auto mb-5"
              />
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
