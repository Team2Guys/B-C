'use client'
import { useQuery } from '@tanstack/react-query';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import { fetchCategories } from 'config/fetch';
import { relativeProductsDescription } from 'data/data';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

interface relativeProps {
  products: IProduct[];
  limit?: number;
  className?: string;
}

const RelatedProducts: React.FC<relativeProps> = ({ products, limit }) => {
  const pathname = usePathname()
  const [description, setDescription] = useState<string | null>(null);

  const {
    data: categoriesList = [],
    error,
    isLoading,
  } = useQuery<ICategory[], Error>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });
  const displayedProducts = limit ? products.slice(0, limit) : products;
  useEffect(() => {
    if (pathname) {
      const relativeDescription = relativeProductsDescription.find((p) => p.url === pathname);
      if (relativeDescription) {
        setDescription(relativeDescription.description);
      } else {
        setDescription(null);
      }
    }
  }, [pathname])
  return (
    <div className='px-2 md:px-4'>
      <div className="flex items-center gap-1">
        <h3 className="lg:text-4xl text-2xl text-nowrap">Related Products</h3>
        <div className="w-full border-t-[1px] border-[#BDC9BD] mt-2"></div>
      </div>
      <p className="font-normal text-12 md:text-18 mt-2 lg:mt-4">
        {description ? description : 'Explore our collection, each piece a showcase of exceptional window blinds design.'}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:mt-20 mt-4 lg:mb-10">
        {displayedProducts.map((item) => {
          const filteredCategory = categoriesList.find(
            (cat) => cat.id === item?.CategoryId,
          );
          return (
            <GalleryCard
              card={item}
              key={item.id}
              relativeProducts={true}
              parent={filteredCategory?.title.toLowerCase()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
