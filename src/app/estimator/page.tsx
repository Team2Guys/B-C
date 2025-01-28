import React from 'react';
import EstimatorPage from './Estimator';
import { Metadata } from 'next';
import { estimatorprod } from 'data/estimator';

export const metadata: Metadata = {
  title: 'Estimator | Price Calculator | Blinds And Curtains Dubai',
  description:
    'Find the perfect blinds & curtains for your home in Dubai with our easy price calculator. Get instant estimates & design your dream space effortlessly.',
  openGraph: {
    title: 'Estimator | Price Calculator | Blinds And Curtains Dubai',
    description:
      'Find the perfect blinds & curtains for your home in Dubai with our easy price calculator. Get instant estimates & design your dream space effortlessly.',
    url: 'fullUrl',
    images: [
      {
        url: 'imageUrl',
        alt: 'altText',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/estimator/',
  },
};

const Estimator: React.FC = async () => {

  return (
    <EstimatorPage sortedProducts={estimatorprod}  />
  );
};

export default Estimator;
