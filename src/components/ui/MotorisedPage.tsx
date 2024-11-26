"use client"
import React from 'react';
import TopHero from 'components/ui/top-hero';
import MotorisedInfo from 'components/motorised-blinds/motorised-info';
import Measure from 'components/motorised-blinds/measure';
import ChooseUs from 'components/motorised-blinds/choose-us';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Container from 'components/Res-usable/Container/Container';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { usePathname } from 'next/navigation';
import { MotorisedPageProps } from 'types/types';

const MotorisedPage: React.FC<MotorisedPageProps> = ({
  title,
  heroImage,
  infoTitle,
  infoSubtitle,
  infoDescription,
  infoImage,
  measureTitle,
  measureTitle1,
  measureDescription,
  measureDescription1,
  chooseUsItems,
  motorization,
  additionalDescription,
  additionalDescription2,
  additionalDescription3,
  additionalImage,
  chooseustitle,
  chooseustitle1,
}) => {
  const pathName = usePathname();
  const { data: products, error } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then((res) => res.json()),
  });

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <TopHero title={title} image={heroImage} pagename={pathName} />
      <MotorisedInfo
        title={infoTitle}
        subtitle={infoSubtitle}
        description={infoDescription}
        image={infoImage}
      />
      <div className="bg-light text-center py-10 mt-20 mb-20">
        <Measure title={measureTitle} description={measureDescription} />
      </div>
      <ChooseUs
        title={chooseustitle}
        gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4"
        boxClass="bg-white"
        items={chooseUsItems}
      />
      <Measure className="mt-20" title={measureTitle1} description={measureDescription1} />
      <div className="bg-white text-center py-10 mt-20">
        <ChooseUs
          title={chooseustitle1}
          gridClass="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4"
          boxClass="bg-secondary flex justify-center items-center"
          items={motorization}
        />
      </div>
      {additionalDescription && additionalImage && (
        <MotorisedInfo
          className="flex-row-reverse"
          decClass="text-18 md:text-30 font-semibold text-start"
          description={additionalDescription}
          image={additionalImage}
          description2={additionalDescription2}
          description3={additionalDescription3}
        />
      )}
      <BookNowBanner  />
      <Container className="mt-20">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
    </>
  );
};

export default MotorisedPage;