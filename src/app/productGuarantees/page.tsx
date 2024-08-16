// src/pages/productGuarantees.tsx
'use client';
import TopHero from 'components/ui/top-hero';
import { productData, relativeProducts } from 'data/data';
import second from '../../../public//assets/images/product-guarantees/large.png';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import OurClient from 'components/Our-Client/OurClient';

const productGuarantees = () => {
  return (
    <>
      <TopHero title="PRODUCT GUARANTEES" image={second} />

      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
      <Guarrenty />
      <OurClient />
    </>
  );
};

export default productGuarantees;
