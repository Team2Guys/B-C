import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';
import {fetchProducts } from 'config/fetch';
import { MoterisedContent } from 'data/data';
import NotFound from 'app/not-found';

export const metadata: Metadata = {
  title: 'Premium Automated Blinds in Dubai | Blinds & Curtains Dubai',
  description: 'Automated blinds are trending in Dubai. Explore our wide range of smart blinds for windows. Contact us today for more information!',
  openGraph: {
    title: 'Premium Automated Blinds in Dubai | Blinds & Curtains Dubai',
    description: 'Automated blinds are trending in Dubai. Explore our wide range of smart blinds for windows. Contact us today for more information!',
    url: 'https://blindsandcurtains.ae/automated-blinds/',
    images: [
      {
        url: 'https://blindsandcurtains.ae/blindsandcurtains.jpg',
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/automated-blinds/',
  },
};

const MotorisedBlinds = async () => {
  const [products] = await Promise.all([fetchProducts()]);
  const content = MoterisedContent.find(
      (item) => item.maintitle === '/automated-blinds/'
    );
  if(!content){
    return <NotFound />
  }
  const { Data } = content;
  const pageData = Data[0];
  return (
    <MotorisedPage products={products} pageData={pageData} />
  );
};
export default MotorisedBlinds;