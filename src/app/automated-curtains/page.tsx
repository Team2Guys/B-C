import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { Metadata } from 'next';
import { fetchCategories, fetchProducts } from 'config/fetch';
import { MoterisedContent } from 'data/data';
import NotFound from 'app/not-found';

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

const MotorisedCurtains = async () => {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);
  const content = MoterisedContent.find(
    (item) => item.maintitle === '/automated-curtains/'
  );
  if (!content) {
    return <NotFound />
  }
  const { Data } = content;
  const pageData = Data[0];
  return (
    <MotorisedPage products={products} categories={categories} pageData={pageData} />
  );
};

export default MotorisedCurtains;
