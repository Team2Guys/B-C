import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GalleryItems } from 'types/interface';

interface relativeProps {
  products: GalleryItems[];
}

const RelatedProducts: React.FC<relativeProps> = ({ products }) => {
  return (
    <Container className="max-w-screen-2xl">
      <div className="flex items-center gap-1">
        <h3 className="text-4xl text-nowrap">Related Products</h3>
        <div className="w-full border-t-[1px] border-[#BDC9BD] mt-2"></div>
      </div>
      <p className="font-thin text-18 mt-2">
        Lectus pulvinar tincidunt accumsan ullamcorper dolor acsed facilisis
        molestie aliquam.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 lg:mt-20 mt-4 lg:mb-10">
        {products.map((item) => (
          <GalleryCard card={item} key={item.id} relativeProducts={true} />
        ))}
      </div>
    </Container>
  );
};

export default RelatedProducts;
