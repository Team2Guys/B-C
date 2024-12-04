import React from 'react';
import Image from 'next/image';
import { IProduct } from 'types/types';
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls';
import Link from 'next/link';

interface BathroomCategoryProps {
  filteredProducts: IProduct[];
  isLoading: boolean;
  categoryTitle: string;
}

const BathroomCategory = ({
  filteredProducts,
  isLoading,
  categoryTitle,
}: BathroomCategoryProps) => {

  const getPath = (arr: IProduct) => {
    const slug = ChangedProductUrl_handler(arr.title);
    const basePath =
      arr.href && typeof categoryTitle.toLowerCase() === 'string'
        ? `${window.origin}/${arr.href}`
        : `/${slug}`;
    const path =
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${
            categoryTitle === 'Shutters'
              ? `${categoryTitle.toLowerCase()}-range`
              : categoryTitle.toLowerCase()
          }${
            ['dimout-roller-blinds', 'sunscreen-roller-blinds'].includes(slug)
              ? '/roller-blinds'
              : ''
          }/${slug}`);
    return path;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 2xl:gap-16 my-10 px-2">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between sm:items-start space-y-2 w-full animate-pulse"
            >
              <div className="w-full h-[374px] bg-gray-300 rounded-md"></div>
              <div className="h-6 w-1/2 bg-gray-300 rounded-md mt-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md mt-1"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
              <div className="h-10 w-1/2 bg-gray-300 rounded-md mt-2"></div>
            </div>
          ))
        : filteredProducts &&
          filteredProducts.map((arr: IProduct, index: number) => (
            <div
              className="flex flex-col md:items-center sm:items-start space-y-2 text-center sm:text-start w-full "
              key={index}
            >
              <div className="space-y-2 w-full">
                <Image
                  className="w-full h-full md:h-[374px] rounded-md object-cover"
                  src={arr.posterImage.imageUrl}
                  height={800}
                  width={800}
                  alt={arr.title}
                />
                <h2 className="font-bold text-base sm:text-xl md:text-2xl text-center">
                  {arr.title}
                </h2>
              </div>
              <p className="leading-7 sm:leading-9 text-xs sm:text-base text-[#797D85] font-normal" dangerouslySetInnerHTML={{ __html: arr.short_description ? arr.short_description :arr.description}}>
              </p>
              <Link
                href={getPath(arr)} 
                className="font-bold text-xs sm:text-base bg-white hover:bg-[#BDC9BD] hover:text-white px-4 py-2 rounded-md flex items-center text-center"
              >
                View Our {arr.title}
              </Link>
            </div>
          ))}
    </div>
  );
};

export default BathroomCategory;
