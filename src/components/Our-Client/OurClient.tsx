"use client"
import { OurClientImage } from 'data/data';
import Container from "components/Res-usable/Container/Container";
import Image from 'next/image';

const OurClient = () => {
  return (
    <Container className='mb-16'>
      <div className=" pb-5 pt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-center font-bold text-[44px] text-primary capitalize font-robotoSerif">
          Trusted By Many International Brands
        </h2>
        <p className="text-center text-2xl mx-auto px-10 pt-3 font-roboto ">
          Premium, made-to-measure soft furnishings with the finest materials and expert craftsmanship.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {OurClientImage.map((image: any, index: any) => (
          <div className="bg-primary h-24 flex justify-center items-center" key={index}>
            <Image
              className="w-full px-5 h-10 object-contain"
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              loading='lazy'
            />

          </div>))}
      </div>
    </Container>
  );
};

export default OurClient;
