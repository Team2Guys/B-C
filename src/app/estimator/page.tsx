import React from "react";
import { fetchProducts } from "config/fetch";
import EstimatorPage from "./Estimator";
import { allowedTitles, predefinedOrder } from "data/urls";
import { estimator_data } from "data/data";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Estimator Page',
  description: 'estimator description',
  openGraph: {
    title: 'estimator',
    description: 'estimator description',
    url: 'fullUrl',
    images: [
      {
        url: 'imageUrl',
        alt: 'altText',
      },
    ],
  },
  alternates: {
    canonical: 'estimator',
  },
}

const Estimator: React.FC = async () => {
  const products = await fetchProducts();

  const filteredFetchedProducts = products
    ? products.filter((product) => allowedTitles.includes(product.title))
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
    <>
      <EstimatorPage products={products} sortedProducts={sortedProducts} />
    </>
  );
};

export default Estimator;
