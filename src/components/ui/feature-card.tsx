import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { PRODUCTS_TYPES } from 'types/interface';

interface FeatureCardProps {
  products: PRODUCTS_TYPES[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-2xl mx-auto px-2">
      {products.map((product) => (
        <div key={product._id} className="relative group w-full">
          <div className="absolute w-full bottom-0">
            <div className="bg-white flex justify-between items-center w-full p-2 px-4 opacity-0 group-hover:opacity-100 duration-700">
              <p className="text-12 lg:text-16">{product.name}</p>
              <Link
                href="/"
                className="border border-primary rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-white text-12 lg:text-14"
              >
                View More
              </Link>
            </div>
          </div>
          <Image
            width={450}
            height={450}
            className="md:object-contain w-full h-full"
            src={product.posterImageUrl}
            alt={product.name}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
