import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FeatureProductData } from 'types/interface';

interface FeatureCardProps {
  products: FeatureProductData[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:px-20">
      {products.map((product) => (
        <div key={product.id} className="relative group w-full">
          <div className="absolute w-full bottom-0">
            <div className="bg-white flex justify-between items-center w-full p-2 px-4 opacity-0 group-hover:opacity-100">
              <p className="text-12 lg:text-16">{product.title}</p>
              <Link
                href={product.link}
                className="border border-primary rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-white text-12 lg:text-14"
              >
                View More
              </Link>
            </div>
          </div>
          <Image
            width={600}
            height={600}
            className="md:object-contain w-full h-full"
            src={product.image}
            alt={product.title}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
