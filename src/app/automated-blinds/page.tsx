import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';

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

const MotorisedBlinds = () => {
  return (
    <MotorisedPage/>
  );
};
export default MotorisedBlinds;