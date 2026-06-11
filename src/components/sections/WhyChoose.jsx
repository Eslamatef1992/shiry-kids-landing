import { Smartphone, Ticket, ShieldCheck, Zap, Handshake, Sparkles } from 'lucide-react';
import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import SectionHeading from '../SectionHeading';

const DEFAULT_ITEMS = [
  { id: 'd1', title: 'User-Friendly Mobile App', description: 'Enjoy a simple and intuitive app designed for a smooth experience.', icon: Smartphone },
  { id: 'd2', title: 'Instant Access To Digital Coupons', description: 'Get your digital coupons instantly and start playing right away.', icon: Ticket },
  { id: 'd3', title: 'Trusted Platform For Families', description: 'A safe and reliable platform built for kids and their families.', icon: ShieldCheck },
  { id: 'd4', title: 'Fast & Easy Ordering', description: 'Browse, order, and receive your products in just a few taps.', icon: Zap },
  { id: 'd5', title: 'Exclusive Offers & Deals', description: 'Discover special discounts and exciting deals available only on Shiry Kids Fun.', icon: Handshake },
];

export default function WhyChoose({ items = [] }) {
  const { t, field } = useLang();
  const list = items.length ? items : DEFAULT_ITEMS;

  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading title={t('why_title')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {list.map(item => {
            const Icon = item.icon || Sparkles;
            return (
              <div key={item.id} className="text-center">
                {item.image ? (
                  <img src={assetUrl(item.image)} alt="" className="w-12 h-12 object-contain mx-auto mb-5" />
                ) : (
                  <Icon className="w-12 h-12 text-accent mx-auto mb-5" strokeWidth={1.75} />
                )}
                <h3 className="font-bold text-lg text-dark mb-2">{field('title', item)}</h3>
                {field('description', item) && (
                  <p className="text-gray-500 text-sm leading-relaxed">{field('description', item)}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
