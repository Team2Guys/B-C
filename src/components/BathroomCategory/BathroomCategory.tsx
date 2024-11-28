import React from 'react';
import { generateSlug, specificTitles } from 'data/data';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from 'types/types';
import { fetchSubCategories } from 'config/fetch';
import Link from 'next/link';

const BathroomCategory = ({filteredProducts,isLoading,categoryTitle}:any) => {

console.log(filteredProducts,"filteredProductsfilteredProducts")
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
          filteredProducts.map((arr:any, index:number) => (
            <div
              className="flex flex-col items-center justify-between sm:items-start space-y-2 text-center sm:text-start w-full"
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
                <h2 className="font-bold text-base sm:text-xl md:text-2xl">{arr.title}</h2>
              </div>
              <p className="leading-7 sm:leading-9 text-xs sm:text-base text-[#797D85] font-normal">
                {arr.description && arr.description.length > 160
                  ? `${arr.description.slice(0, 160)}...`
                  : arr.description}
              </p>
              <Link
                href={`/${
                  categoryTitle === "Shutters" ? "shutters-range" : categoryTitle.toLowerCase()
                }/${generateSlug(arr.title).toLowerCase()}`}
                className="font-bold text-xs sm:text-base bg-white hover:bg-[#BDC9BD] hover:text-white px-4 py-2 rounded-md flex items-center"
              >
                View Our {arr.title}
              </Link>

            </div>
          ))}
    </div>
  );
};

export default BathroomCategory;