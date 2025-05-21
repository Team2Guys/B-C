import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';
import { fetchProducts } from 'config/fetch';
import { MoterisedContent } from 'data/data';
import NotFound from 'app/not-found';
import Script from 'next/script';
import og from '../../../public/assets/images/MotorisedBlind/blind.png'
import { CurtainsSchemaMap } from 'data/curtains-schema';

export const metadata: Metadata = {
  title:
    'Premium Automated Curtains in Dubai | Blinds & Curtains Dubai',
  description:
    'Discover automated window curtains in Dubai that combine style, convenience, and light control. Enjoy privacy & sleek design with our modern automatic curtains.',
  openGraph: {
    title:
      'Premium Automated Curtains in Dubai | Blinds & Curtains Dubai',
    description:
      'Discover automated window curtains in Dubai that combine style, convenience, and light control. Enjoy privacy & sleek design with our modern automatic curtains.',
    url: 'https://blindsandcurtains.ae/automated-curtains/',
    images: [
      {
        url:og.src,
        alt: 'motorized Curtains',
      },
    ],
         type:"website"
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/automated-curtains/',
  },
};

const MotorisedCurtains = async () => {
  const [products] = await Promise.all([fetchProducts()]);
  const content = MoterisedContent.find(
    (item) => item.maintitle === '/automated-curtains/'
  );
  if (!content) {
    return <NotFound />
  }
  const { Data } = content;
  const pageData = Data[0];
  return (
    <>
    <Script type="application/ld+json" id="blinds-json-ld">
    {JSON.stringify(CurtainsSchemaMap["Automated Curtains"])}
  </Script>
    <MotorisedPage products={products} pageData={pageData} />
    </>
  );
};

export default MotorisedCurtains;
