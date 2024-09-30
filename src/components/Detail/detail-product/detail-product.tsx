'use client';
import React, { useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import { IProduct } from 'types/types';
import ThumbImage from '../ThumbImage/ThumbImage';

interface detailprops {
  title: string;
  description: string;
  products: any;
}

const DetailProduct: React.FC<detailprops> = ({
  products,
  title,
  description,
}) => {
  console.log(products, 'productsproducts');
  return (
    <Container className="mt-10">
      <div className="text-center max-w-screen-md mx-auto space-y-3">
        <p className="text-[#231F20] text-32 md:text-[36px]">{title}</p>
        <p className="text-15 text-justify ">{description} </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 lg:mt-10 mt-4 lg:mb-10">
        <ThumbImage card={products} />
      </div>
    </Container>
  );
};

export default DetailProduct;
