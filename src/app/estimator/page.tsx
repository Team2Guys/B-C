import React from 'react';
import { fetchProducts } from 'config/fetch';
import EstimatorPage from './Estimator';
import { allowedTitles, predefinedOrder } from 'data/urls';
import { estimator_data } from 'data/data';
import { Metadata } from 'next';

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
  const products = await fetchProducts();

  const filteredFetchedProducts = products
    ? products.filter((product: any) => allowedTitles.includes(product.title))
    : [];

  const allProducts = [...estimator_data, ...filteredFetchedProducts];
  const sortedProducts = allProducts.sort((a, b) => {
    const aIndex = predefinedOrder.indexOf(a.title);
    const bIndex = predefinedOrder.indexOf(b.title);
    if (aIndex === -1 || bIndex === -1) {
      return aIndex === -1 ? 1 : -1;
    }

    return aIndex - bIndex;
  });
  return (
    <EstimatorPage products={products} sortedProducts={sortedProducts} />
  );
};

export default Estimator;
