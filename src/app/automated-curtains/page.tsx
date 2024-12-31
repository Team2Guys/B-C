import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Automatic Window Curtains | Motorised Curtains | Smart Curtains Dubai',
  description:
    'We offer automatic window curtains in Dubai that combine style and convenience. Our motorised curtains offer light control, privacy, and a sleek design.',
  openGraph: {
    title:
      'Automatic Window Curtains | Motorised Curtains | Smart Curtains Dubai',
    description:
      'We offer automatic window curtains in Dubai that combine style and convenience. Our motorised curtains offer light control, privacy, and a sleek design.',
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
