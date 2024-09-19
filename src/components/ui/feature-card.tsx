'use client';
import Image from 'next/image';
import React from 'react';
import { Allproduct } from 'types/interfaces';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { generateSlug } from 'data/data';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from 'types/types';
import { fetchSubCategories } from 'config/fetch';

interface FeatureCardProps {
  products: Allproduct[];
  onProductClick?: (product: Allproduct) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ products }) => {
  const {
    data: categories,
    error: categoryError,
    isLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchSubCategories,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-2xl mx-auto px-2">
      {products.map((product) => {
        const filtered = categories?.find((cat) => {
          return cat.id === product.CategoryId;
        });
        const parent = filtered?.title.toLowerCase();
        return (
          <Link
            href={`/${parent === 'shutter' ? `${parent}s-range` : parent}/${generateSlug(product.title)}`}
            key={product.id}
            className="relative group w-full"
          >
            <div className="absolute w-full bottom-0">
              <div className="bg-white flex justify-between items-center w-full p-2 px-4 opacity-0 group-hover:opacity-100 duration-700">
                <p className="text-12 lg:text-16">{product.title}</p>
                <div className="border border-primary cursor-pointer rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-white text-12 lg:text-14">
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
          </Link>
        );
      })}
    </div>
  );
};

export default FeatureCard;
