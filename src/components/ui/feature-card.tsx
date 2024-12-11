'use client';
import Image from 'next/image';
import React from 'react';
import { Allproduct } from 'types/interfaces';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchSubCategories } from 'config/fetch';
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls';

interface FeatureCardProps {
  products: Allproduct[];
  onProductClick?: (product: Allproduct) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ products }) => {
  const {
    data: categories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchSubCategories,
  });
  
  const getPath = (arr: IProduct, parent: string) => {
    const slug = ChangedProductUrl_handler(arr.title);
    const basePath =
      arr.href && parent
        ? `${window.origin}/${arr.href}`
        : `/${slug}`;

    const path =
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${
            parent?.toLowerCase() === 'shutters'
              ? `${parent.toLowerCase()}-range`
              : parent?.toLowerCase()
          }${
            ['dimout-roller-blinds', 'sunscreen-roller-blinds','blackout-roller-blinds'].includes(slug)
              ? '/roller-blinds'
              : ''
          }/${slug}`);
    return path;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-screen-2xl mx-auto px-2">
      {products.map((product) => {
        const filtered = categories?.find((cat) => {
          return cat.id === product.CategoryId;
        });
        const parent = filtered?.title.toLowerCase();
        return (
          
          <div
            key={product.id}
            className="relative group w-full overflow-hidden"
          >
            <div className="absolute w-full bottom-0">
              <div className="bg-white flex gap-2 justify-between items-center w-full p-2 px-4 md:opacity-0 group-hover:opacity-100 duration-700 rounded-b-xl">
                <p className="text-12 lg:text-16 text-primary"><Link className ="w-full cursor-pointer" href={getPath(product, parent as string)}>{product.title}</Link> </p>
                <div className="border border-primary text-primary cursor-pointer rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-white text-12 lg:text-14 text-nowrap">
            
                  <Link className ="w-full cursor-pointer" href={getPath(product, parent as string)}>View More</Link>
                </div>
              </div>
            </div>
            <Image
              width={450}
              height={450}
              className=" md:w-full h-[300px] 2xl:h-[350px] rounded-xl"
              src={product.posterImage.imageUrl}
              alt={product.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
