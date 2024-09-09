import Image from 'next/image';
import React from 'react';
import { Allproduct } from 'types/interfaces';

import { useRouter } from 'next/navigation';

interface FeatureCardProps {
  products: Allproduct[];
  onProductClick?: (product: Allproduct) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  products,
  onProductClick,
}) => {
  const route = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-2xl mx-auto px-2">
      {products.map((product) => (
        <div key={product.id} className="relative group w-full">
          <div className="absolute w-full bottom-0">
            <div className="bg-white flex justify-between items-center w-full p-2 px-4 opacity-0 group-hover:opacity-100 duration-700">
              <p className="text-12 lg:text-16">{product.title}</p>
              <div
                // onClick={() => onProductClick(product)}
                className="border border-primary cursor-pointer rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-white text-12 lg:text-14"
              >
                View More
              </div>
            </div>
          </div>
          <Image
            width={450}
            height={450}
            className=" md:w-full h-[311px] 2xl:h-[411px] rounded-xl"
            src={product.posterImage.imageUrl}
            alt={product.title}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
