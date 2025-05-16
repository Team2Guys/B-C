"use client"
import { OurClientImage } from 'data/data';
import Container from "components/Res-usable/Container/Container";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ClientLogoGridSlider from './OurClientSlider';

const OurClient = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // sm: 640px
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <Container className='mb-16'>
      <div className=" pb-5 pt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-center font-bold text-2xl xs:text-xl sm:text-2xl lg:text-4xl xl:text-[44px] text-primary capitalize font-robotoSerif">
          Trusted By Many International Brands
        </h2>
        <p className="text-center text-15 lg:text-lg xl:text-2xl mx-auto px-2 xs:px-10 pt-3 font-roboto ">
          Premium, made-to-measure soft furnishings with the finest materials and expert craftsmanship.
        </p>
      </div>

      {isMobile ?
        <div className="mt-4">
          <ClientLogoGridSlider OurClientImage={OurClientImage} />
        </div>
        : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 xs:gap-5">
            {OurClientImage.map((image: any, index: any) => (
              <div className="bg-primary h-24 p-5 flex justify-center items-center" key={index}>
                <Image
                  className="object-contain !relative"
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading='lazy'
                />

              </div>
            ))}
          </div>
        )
      }
    </Container>
  );
};

export default OurClient;
