'use client';
import React, { useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import { IProduct } from 'types/types';

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
  // const [visibleProducts, setVisibleProducts] = useState(6); // State to control the number of visible products

  // const handleShowMore = () => {
  //   setVisibleProducts((prev) => prev + 6); // Show 6 more products on each click
  // };
  console.log(products, 'productsproducts');
  return (
    <Container className="mt-10">
      <div className="text-center max-w-screen-md mx-auto space-y-3">
        <p className="text-[#231F20] text-32 md:text-[36px]">{title}</p>
        <p className="text-15">{description} </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 lg:mt-10 mt-4 lg:mb-10">
        <GalleryCard card={products} />
      </div>
      {/* .slice(0, visibleProducts) */}
      {/* {visibleProducts < (products?.length || 0) && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-4 py-4 bg-secondary text-white rounded-lg"
          >
            View More
          </button>
        </div>
      )} */}
    </Container>
  );
};

export default DetailProduct;
