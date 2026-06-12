import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import phoneMockup from '../../assets/figma/howto-2.png';
import googlePlayBadge from '../../assets/figma/badge-google-play.svg';
import appStoreBadge from '../../assets/figma/badge-app-store.svg';

export default function DownloadCta({ section = {} }) {
  const { t, field } = useLang();
  const title = field('title', section) || t('download_cta_title');
  const subtitle = field('subtitle', section)
    || 'Available now on the App Store and Google Play. Download Shiry Kids Fun and start enjoying exclusive deals today.';

  const appStoreLink = section.app_store_link || '#';
  const googlePlayLink = section.google_play_link || '#';
  const mockup = section.mockup_image ? assetUrl(section.mockup_image) : phoneMockup;

  return (
    <section id="download" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-5">{title}</h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">{subtitle}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href={googlePlayLink} target="_blank" rel="noreferrer">
              <img
                src={section.google_play_image ? assetUrl(section.google_play_image) : googlePlayBadge}
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>
            <a href={appStoreLink} target="_blank" rel="noreferrer">
              <img
                src={section.app_store_image ? assetUrl(section.app_store_image) : appStoreBadge}
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 -z-10" />
          <img src={mockup} alt="App preview" className="max-h-[420px] object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
