import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import SectionHeading from '../SectionHeading';
import galleryPark from '../../assets/figma/gallery-park.jpg';
import galleryBlocks from '../../assets/figma/gallery-blocks.jpg';
import galleryPokemon from '../../assets/figma/gallery-pokemon.jpg';

const DEFAULT_IMAGES = [
  { id: 'd1', image: galleryPark, wide: true },
  { id: 'd2', image: galleryBlocks, wide: false },
  { id: 'd3', image: galleryPokemon, wide: false },
];

export default function AboutGallery({ section = {}, items = [] }) {
  const { field } = useLang();
  const title = field('title', section) || 'About Shiry Kids Fun';
  const text = field('text', section)
    || 'Our mission is to make family fun more accessible and affordable. Browse a growing collection of partner venues and activities, redeem coupons instantly, and create memories that last.';

  const images = items.length
    ? items.slice(0, 3).map((item, idx) => ({ id: item.id, image: assetUrl(item.image), wide: idx === 0 }))
    : DEFAULT_IMAGES;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title={title} className="!mb-6" />
          <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">{text}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map(img => (
            <img
              key={img.id}
              src={img.image}
              alt=""
              className={`w-full h-44 object-cover rounded-2xl shadow-lg ${img.wide ? 'col-span-2 h-56' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
