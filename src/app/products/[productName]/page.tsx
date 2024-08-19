'use client';
import TopHero from 'components/ui/top-hero';
import React from 'react';
import bgBreadcrum from '../../../../public/assets/images/Breadcrum/modern.png';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { generateSlug, relativeProducts } from 'data/data';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import { useParams } from 'next/navigation';
import AllProducts from 'components/Product/All-Products/Products';

const Products = () => {
  const { productName } = useParams();
  const productNameString = Array.isArray(productName)
    ? productName[0]
    : productName;
  const displayProductName = productNameString || 'Default Product';
  const slugTitle = generateSlug(displayProductName);

  return (
    <>
      <TopHero title={slugTitle} image={bgBreadcrum} />
      <Info />
      <AllProducts />
      <Container className="mt-20 mb-20">
        <RelatedProducts products={relativeProducts} />
      </Container>
      <BookNowBanner className="mt-20" />
      <VideoAutomation className=" mt-20" />
      <Support />
    </>
  );
};

export default Products;
