import React from 'react';
import Gallery from './Gallery';
import { fetchCategories, fetchProducts } from 'config/fetch';
import { Metadata } from 'next';
import og from "../../../public/assets/images/logomain.webp"
export const metadata: Metadata = {
  title: 'Blinds And Curtains Dubai | Gallery Section',
  description:
    'Explore our gallery section, which includes all the products and different designs for you to select easily. Available in a variety of designs to suit your space.',
  openGraph: {
    title: 'Blinds And Curtains Dubai | Gallery Section',
    description:
      'Explore our gallery section, which includes all the products and different designs for you to select easily. Available in a variety of designs to suit your space.',

    url: 'https://blindsandcurtains.ae/gallery/',
         type:"website",
    images: [
      {
        url: og.src,
        alt: 'altText',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/gallery/',
  },
};
const GalleryPage = async () => {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  return (
    <Gallery products={products} categories={categories} />
  );
};

export default GalleryPage;
