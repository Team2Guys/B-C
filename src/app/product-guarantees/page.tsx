'use client';
import TopHero from 'components/ui/top-hero';
import { productData, PGuarantees } from 'data/data';
import second from '../../../public//assets/images/product-guarantees/large.png';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';

const ProductGuarantees = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <>
      <TopHero title="PRODUCT GUARANTEES" image={second} />
      <Container className="">
        <div className="lg:py-6 p-3 lg:mt-10 mx-auto">
          <h1 className="lg:text-3xl text-18 sm:text-2xl pb-2 font-bold text-center mb-4 w-fit mx-auto border-b-[1px] border-[#BDC9BD]">
            {productData.heading}
          </h1>
          <p className="text-14 sm:text-lg text-black lg:mt-5 leading-relaxed text-center ">
            {productData.content}
          </p>
        </div>
      </Container>
      {PGuarantees.map((data: any, index: any) => (
        <Container
          key={index}
          className={`pt-10  lg:pb-14 flex justify-between lg:gap-10 items-start flex-col md:flex-row ${data.imageAlign === 'right' ? 'lg:flex-row-reverse' : ''}`}
        >
          <div
            className={`w-full md:w-1/2 ${data.imageAlign === 'right' ? 'lg:pl-20' : 'lg:pr-32'} px-5`}
          >
            <h3 className="font-bold text-lg xs:text-2xl tracking-wider">
              {data.heading}
            </h3>
            <p className="text-12 sm:text-18 leading-5 sm:leading-8 mt-4 text-lightdark">
              {data.text}
            </p>
            <div className="h-fit mt-8"></div>
          </div>
          <div
            className={`w-full md:w-1/2 ${data.imageAlign === 'right' ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <Image
              src={data.image}
              width={1000}
              height={300}
              alt="why-us img"
              className="mx-auto md:me-0 ms-auto w-full"
            />
          </div>
        </Container>
      ))}
      <Container className="py-10">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
    </>
  );
};

export default ProductGuarantees;
