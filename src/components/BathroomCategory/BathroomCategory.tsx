import React from 'react';
import { BathroomBlindsData } from 'data/data';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';

const BathroomCategory = () => {
  const {
    data: products,
    error: productError,
    isLoading: productLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  console.log(products,"productsproductsproducts")
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 2xl:gap-16 my-10 mx-auto px-2">
      {BathroomBlindsData.map((arr, index) => (
        <div
          className="flex flex-col items-center sm:items-start space-y-4 text-center sm:text-start mx-auto"
          key={index}
        >
          <Image
            className="w-full h-auto lg:max-w-[590px] 2xl:max-w-[710px] object-cover rounded-md"
            src={arr.imgsrc}
            height={800}
            width={800}
            alt="Bathroom blind"
          />
          <h2 className="font-bold text-base sm:text-xl md:text-2xl">{arr.title}</h2>
          <p className="leading-7 sm:leading-9 text-xs sm:text-base text-[#797D85] font-normal">
            {arr.description.length > 250
              ? `${arr.description.slice(0, 250)}...`
              : arr.description}
          </p>
          <button className="font-bold text-xs sm:text-base bg-white hover:bg-[#BDC9BD] hover:text-white px-4 py-2 rounded-md flex items-center">
            {arr.buttontext}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BathroomCategory;
