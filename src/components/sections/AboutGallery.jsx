import { useLang } from '../../contexts/LangContext';
import { assetUrl } from '../../api/axios';
import SectionHeading from '../SectionHeading';
import galleryPark from '../../assets/figma/gallery-park.jpg';
import galleryBlocks from '../../assets/figma/gallery-blocks.jpg';
import galleryPokemon from '../../assets/figma/gallery-pokemon.jpg';

const DEFAULT_IMAGES = [
  { id: 'd1', image: galleryBlocks },
  { id: 'd2', image: galleryPark },
  { id: 'd3', image: galleryPokemon },
];

export default function AboutGallery({ section = {}, items = [] }) {
  const { field } = useLang();
  const title = field('title', section) || 'About Shiry Kids Fun';
  const text = field('text', section)
    || 'Our mission is to make family fun more accessible and affordable. Browse a growing collection of partner venues and activities, redeem coupons instantly, and create memories that last.';

  const images = items.length
    ? items.slice(0, 3).map((item, idx) => ({ id: item.id, image: assetUrl(item.image) }))
    : DEFAULT_IMAGES;

  const [imgTop, imgRight, imgOverlap] = images;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title={title} className="!mb-6" />
          <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">{text}</p>
        </div>
        <div className="relative pb-16 md:pb-20">
          <div className="grid grid-cols-2 gap-4">
            {imgTop && (
              <img
                src={imgTop.image}
                alt=""
                className="w-full h-48 md:h-60 object-cover rounded-2xl shadow-lg"
              />
            )}
            {imgRight && (
              <img
                src={imgRight.image}
                alt=""
                className="w-full h-48 md:h-60 object-cover rounded-2xl shadow-lg"
              />
            )}
          </div>
          {imgOverlap && (
            <img
              src={imgOverlap.image}
              alt=""
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 md:w-3/5 object-cover rounded-2xl border-[6px] border-white shadow-2xl"
            />
          )}
        </div>
      </div>
    </section>
  );
}
