import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';

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
    url: 'https://b-c-eight.vercel.app/automated-curtains',
    images: [
      {
        url: 'https://b-c-eight.vercel.app/blindsandcurtains.jpg',
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://b-c-eight.vercel.app/automated-curtains',
  },
};

const MotorisedCurtains = () => {
  return <MotorisedPage />;
};

export default MotorisedCurtains;
