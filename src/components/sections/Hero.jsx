import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import heroDefault from '../../assets/figma/hero.jpg';

export default function Hero({ section = {} }) {
  const { t, field } = useLang();

  const title = field('title', section) || 'SHIRY KIDS FUN';
  const subtitle = field('subtitle', section)
    || 'Discover exclusive coupons, fun activities and unforgettable family experiences — all in one app.';
  const bg = section.background_image ? assetUrl(section.background_image) : heroDefault;

  const primaryText = field('cta_primary_text', section) || t('download_app');
  const secondaryText = field('cta_secondary_text', section) || t('learn_more');
  const primaryLink = section.cta_primary_link || '#download';
  const secondaryLink = section.cta_secondary_link || '#about';

  return (
    <section
      className="relative min-h-[600px] md:min-h-[760px] flex items-center bg-dark bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(13,13,26,0.85) 0%, rgba(13,13,26,0.55) 45%, rgba(13,13,26,0.15) 100%), url(${bg})` }}
    >
      <div className="max-w-7xl w-full mx-auto px-5 md:px-10 pt-28 pb-16">
        <div className="max-w-xl">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-6">
            {title}
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-10">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={primaryLink}
              className="bg-primary hover:bg-accent transition text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/30"
            >
              {primaryText}
            </a>
            <a
              href={secondaryLink}
              className="border border-white/60 text-white hover:bg-white/10 transition font-semibold px-8 py-3.5 rounded-full"
            >
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
