'use client';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/large-ss.png';
import whyUsImg from '../../../public/assets/images/Rectangle811da.png';
import Container from 'components/Res-usable/Container/Container';
import Image from "next/legacy/image";
import ProductCard from 'components/Res-usable/Cards/ProductCard';
import { galleryItems, productItems, relativeProducts } from 'data/data';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Link from 'next/link';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import RelatedProducts from 'components/Related-products/RelatedProducts';

const CommercialPage = () => {
  return (
    <div>
      <TopHero title="commercial" image={bgBreadcrum} />
      <Container className="pt-20 pb-14 flex justify-between gap-10 items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h3 className="font-bold text-xl xs:text-2xl tracking-wider">
            Office Blinds & Curtains:
            <br />
            <span className="font-medium">Why Us in Dubai, UAE?</span>
          </h3>
          <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark">
            Without any doubt, Blinds & Curtains Dubai believe in delivering
            above your expectations. With clients stretching from royalty to
            some of the top schools and companies in Dubai, you can be
            confident.
          </p>
          <ul className="text-16 xs:text-18 leading-8 text-lightdark list-disc list-inside ps-2">
            <li>Office Blinds</li>
            <li>Office Curtains</li>
            <li>Office Roller Blinds</li>
            <li>Office Windows Curtains</li>
            <li>Office Windows Blinds</li>
            <li>Professional Blinds</li>
            <li>Custom Made-to-Measure Blinds</li>
            <li>Commercial Office Blinds</li>
          </ul>
          <div className="h-fit mt-8">
            <Link
              href="/appointment"
              className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={whyUsImg}
            alt="why-us img"
            className="me-auto md:me-0 ms-auto"
          />
        </div>
      </Container>
      <div className="w-full border-t-[1px] border-borderclr"></div>
      <Container className="text-center py-10">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl">
          OFFICE BLINDS & CURTAINS
        </h2>
        <p className="mt-3 text-15 leading-7">
          See our comprehensive Blinds range
          <br />
          Find the perfect made-to-measure blinds within our exclusive range.
          There are many shades and stunning patterns to select from
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {productItems.map((item) => (
            <ProductCard card={item} key={item.id} />
          ))}
        </div>
      </Container>
      <BookNowBanner />
      <Container className="text-center py-20">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl">
          COMMERCIAL OFFICE BLINDS STYLES
        </h2>
        <p className="mt-3 text-15 leading-7">
          See our comprehensive Blinds range
          <br />
          Find the perfect made-to-measure blinds within our exclusive range.
          There are many shades and stunning patterns to select from
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryCard card={item} key={item.id} relativeProducts={true} />
          ))}
        </div>
        <div className="h-fit mt-20 text-center">
          <Link
            href="/product"
            className="px-8 py-4 bg-borderclr rounded-md text-white hover:bg-hoverborderclr"
          >
            View More
          </Link>
        </div>
      </Container>
      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
    </div>
  );
};

export default CommercialPage;
