import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';
import { fetchCategories, fetchProducts } from 'config/fetch';
import { MoterisedContent } from 'data/data';
import NotFound from 'app/not-found';

export const metadata: Metadata = {
  title: 'Premium Automated Blinds in Dubai | Blinds & Curtains Dubai',
  description: 'Automated blinds are trending in Dubai. Explore our wide range of smart blinds for windows. Contact us today for more information!',
  openGraph: {
    title: 'Premium Automated Blinds in Dubai | Blinds & Curtains Dubai',
    description: 'Automated blinds are trending in Dubai. Explore our wide range of smart blinds for windows. Contact us today for more information!',
    url: 'https://b-c-eight.vercel.app/automated-blinds',
    images: [
      {
        url: 'https://b-c-eight.vercel.app/blindsandcurtains.jpg',
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://b-c-eight.vercel.app/automated-blinds',
  },
};

const MotorisedBlinds = async () => {
  const [products, categories ] = await Promise.all([
      fetchProducts(),
      fetchCategories(),
    ]);
  const content = MoterisedContent.find(
      (item) => item.maintitle === '/automated-blinds/'
    );
  if(!content){
    return <NotFound />
  }
  const { Data } = content;
  const pageData = Data[0];
  return (
    <MotorisedPage products={products} categories={categories || []} pageData={pageData} />
  );
};
export default MotorisedBlinds;