import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';

export default function DownloadCta({ section = {} }) {
  const { t, field } = useLang();
  const title = field('title', section) || t('download_cta_title');
  const subtitle = field('subtitle', section)
    || 'Available now on the App Store and Google Play. Download Shiry Kids Fun and start enjoying exclusive deals today.';

  return (
    <section id="download" className="py-20 md:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">{title}</h2>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">{subtitle}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {section.app_store_link && (
              <a href={section.app_store_link} target="_blank" rel="noreferrer">
                {section.app_store_image ? (
                  <img src={assetUrl(section.app_store_image)} alt="Download on the App Store" className="h-14" />
                ) : (
                  <span className="bg-white text-dark font-semibold px-6 py-3 rounded-xl block">App Store</span>
                )}
              </a>
            )}
            {section.google_play_link && (
              <a href={section.google_play_link} target="_blank" rel="noreferrer">
                {section.google_play_image ? (
                  <img src={assetUrl(section.google_play_image)} alt="Get it on Google Play" className="h-14" />
                ) : (
                  <span className="bg-white text-dark font-semibold px-6 py-3 rounded-xl block">Google Play</span>
                )}
              </a>
            )}
          </div>
        </div>
        {section.mockup_image && (
          <div className="flex justify-center">
            <img src={assetUrl(section.mockup_image)} alt="App preview" className="max-h-[420px] object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
