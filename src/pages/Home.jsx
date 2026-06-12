import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import HowToUse from '../components/sections/HowToUse';
import AboutGallery from '../components/sections/AboutGallery';
import Partners from '../components/sections/Partners';
import WhyChoose from '../components/sections/WhyChoose';
import DownloadCta from '../components/sections/DownloadCta';
import useLanding from '../hooks/useLanding';

export default function Home() {
  const { sections, items, loading } = useLanding();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <span className="text-white/50 text-sm">Loading…</span>
      </div>
    );
  }

  return (
    <div>
      <Header sections={sections} />
      <Hero section={sections.hero} />
      <Reveal>
        <About section={sections.about} />
      </Reveal>
      <Reveal>
        <HowToUse items={items.how_to_use || []} />
      </Reveal>
      <Reveal>
        <AboutGallery section={sections.about2} items={items.about_gallery || []} />
      </Reveal>
      <Reveal>
        <Partners items={items.partners || []} />
      </Reveal>
      <Reveal>
        <WhyChoose items={items.why_choose || []} />
      </Reveal>
      <Reveal>
        <DownloadCta section={sections.download_app} />
      </Reveal>
      <Footer sections={sections} />
    </div>
  );
}
