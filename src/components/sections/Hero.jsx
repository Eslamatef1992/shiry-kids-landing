import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function Hero({ section = {} }) {
  const { t, field } = useLang();

  const title = field('title', section) || 'SHIRY KIDS FUN';
  const subtitle = field('subtitle', section)
    || 'Discover exclusive coupons, fun activities and unforgettable family experiences — all in one app.';
  const bg = section.background_image ? assetUrl(section.background_image) : null;

  const primaryText = field('cta_primary_text', section) || t('download_app');
  const secondaryText = field('cta_secondary_text', section) || t('learn_more');
  const primaryLink = section.cta_primary_link || '#download';
  const secondaryLink = section.cta_secondary_link || '#about';

  return (
    <section
      className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-center text-center bg-dark bg-cover bg-center"
      style={bg ? { backgroundImage: `linear-gradient(180deg, rgba(26,26,46,0.55) 0%, rgba(26,26,46,0.75) 100%), url(${bg})` } : undefined}
    >
      <div className="max-w-3xl mx-auto px-5 pt-28 pb-16">
        <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight mb-6">
          {title}
        </h1>
        <p className="text-white/85 text-base md:text-lg mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
