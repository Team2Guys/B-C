import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';
import { MoterisedContent } from 'data/data';
import NotFound from 'app/not-found';
import og from '../../../public/assets/images/MotorisedBlind/blind.png'
import Script from 'next/script';
import { BlindSchemaMap } from 'data/blinds-schema';

export const metadata: Metadata = {
  title: 'Premium Automated Blinds in Dubai | Blinds & Curtains Dubai',
  description: 'Automated blinds are trending in Dubai. Explore our wide range of smart blinds for windows. Contact us today for more information!',
  openGraph: {
    title: 'Premium Automated Blinds in Dubai | Blinds & Curtains Dubai',
    description: 'Automated blinds are trending in Dubai. Explore our wide range of smart blinds for windows. Contact us today for more information!',
    url: 'https://blindsandcurtains.ae/automated-blinds/',
    images: [
      {
        url:og.src,
        alt: 'blindsandcurtains',
      },
    ],
         type:"website"
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/automated-blinds/',
  },
};

const MotorisedBlinds = async () => {
  const content = MoterisedContent.find(
      (item) => item.maintitle === '/automated-blinds/'
    );
  if(!content){
    return <NotFound />
  }
  const { Data } = content;
  const pageData = Data[0];

  return (
    <>
    <Script type="application/ld+json" id="blinds-json-ld">
    {JSON.stringify(BlindSchemaMap["Automated Blinds"])}
  </Script>
    <MotorisedPage  pageData={pageData} />
    </>
  );
};
export default MotorisedBlinds;