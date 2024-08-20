'use client';
import TopHero from 'components/ui/top-hero';
import { relativeProducts } from 'data/data';
import second from '../../../public//assets/images/product-guarantees/large.png';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Image from 'next/image';

const ProductUs = () => {
  return (
    <>
      <TopHero title=" CONTACT US" image={second} />
      <Container>
        <h5 className="">CONTACT US</h5>
      </Container>
      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
    </>
  );
};

export default ProductUs;
