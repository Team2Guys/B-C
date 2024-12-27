import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Motorised Blinds | Automated Blinds in Dubai',
  description: 'Automatic blinds are trending in Dubai, we offer a wide range of electric blinds. Get more information on automatic blinds for windows, give us a call today.',
  openGraph: {
    title: 'Premium Motorised Blinds | Automated Blinds in Dubai',
    description: 'Automatic blinds are trending in Dubai, we offer a wide range of electric blinds. Get more information on automatic blinds for windows, give us a call today.',
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