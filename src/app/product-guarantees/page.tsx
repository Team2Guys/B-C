'use client';
import TopHero from 'components/ui/top-hero';
import { productData, ProductGuarantees, relativeProducts } from 'data/data';
import second from '../../../public//assets/images/product-guarantees/large.png';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Image from "next/legacy/image";

const productGuarantees = () => {
  return (
    <>
      <TopHero title="PRODUCT GUARANTEES" image={second} />
      <Container className=" max-w-screen-2xl mx-auto">
        <div className="lg:py-6 p-3 lg:mt-10 mx-auto">
          <h1 className="lg:text-3xl text-2xl pb-2 font-bold text-center mb-4 w-fit mx-auto border-b-[1px] border-[#BDC9BD]">
            {productData.heading}
          </h1>
          <p className="text-lg text-black lg:mt-5 leading-relaxed text-center ">
            {productData.content}
          </p>
        </div>
      </Container>
      {ProductGuarantees.map((data: any, index: any) => (
        <Container
          key={index}
          className={`pt-10 max-w-screen-2xl lg:pb-14 flex justify-between lg:gap-10 items-start flex-col md:flex-row ${data.imageAlign === 'right' ? 'lg:flex-row-reverse' : ''}`}
        >
          <div
            className={`w-full md:w-1/2 ${data.imageAlign === 'right' ? 'lg:pl-20' : 'lg:pr-32'} px-5`}
          >
            <h3 className="font-bold text-xl xs:text-2xl tracking-wider">
              {data.heading}
            </h3>
            <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark">
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
        <RelatedProducts products={relativeProducts} />
      </Container>
    </>
  );
};

export default productGuarantees;
