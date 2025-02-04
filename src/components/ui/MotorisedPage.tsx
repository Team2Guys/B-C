'use client';
import React from 'react';
import TopHero from 'components/ui/top-hero';
import MotorisedInfo from 'components/motorised-blinds/motorised-info';
import Measure from 'components/motorised-blinds/measure';
import ChooseUs from 'components/motorised-blinds/choose-us';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Container from 'components/Res-usable/Container/Container';
import { ICategory, IProduct } from 'types/types';
import { usePathname } from 'next/navigation';

const MotorisedPage = ({products, categories , pageData}:{products:IProduct[], categories:ICategory[] , pageData: any}) => {
  const pathName = usePathname();
  return (
    <>
      <TopHero
        title={pageData.title}
        Video={pageData.heroVideo}
        pagename={pathName}
      />
      <MotorisedInfo
        title={pageData.infoTitle}
        subtitle={pageData.infoSubtitle}
        description={pageData.infoDescription}
        image={pageData.infoImage}
        showButton={false}
      />
      <div className="bg-light text-center py-10 mb-5 md:mb-10 md:mt-5">
        <Measure
          title={pageData.measureTitle}
          description={pageData.measureDescription}
        />
      </div>
      <ChooseUs
        title={pageData.chooseustitle}
        gridClass="grid grid-cols-2 lg:grid-cols-4 gap-4"
        boxClass="bg-white"
        items={pageData.chooseUsItems}
      />
      <Measure
        className="mt-20"
        title={pageData.measureTitle1}
        description={pageData.measureDescription1}
      />
      <div className="bg-white text-center py-10 mt-6 md:mt-9 lg:mt-16">
        <ChooseUs
          title={pageData.chooseustitle1}
          gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4"
          boxClass="bg-secondary flex justify-center items-center"
          items={pageData.motorization}
        />
      </div>
      {pageData.additionalDescription && pageData.additionalImage && (
        <MotorisedInfo
          className="flex-row-reverse"
          decClass="text-18 md:text-30 font-semibold text-start"
          description={pageData.additionalDescription}
          image={pageData.additionalImage}
          description2={pageData.additionalDescription2}
          description3={pageData.additionalDescription3}
        />
      )}
      <BookNowBanner />
      <Container className="mt-10 md:mt-20">
        <RelatedProducts products={products || []} limit={4} categoriesList={categories} />
      </Container>
    </>
  );
};

export default MotorisedPage;
