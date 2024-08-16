'use client';
import TopHero from 'components/ui/top-hero';
import { productData, relativeProducts } from 'data/data';
import second from '../../../public//assets/images/product-guarantees/large.png';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import OurClient from 'components/Our-Client/OurClient';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Image from 'next/image';

const productGuarantees = () => {
  return (
    <>
      <TopHero title="PRODUCT GUARANTEES" image={second} />
      <Container className=" max-w-screen-2xl mx-auto">
        <div className="lg:py-6 p-3 lg:mt-4 mx-auto">
          <h1 className="lg:text-3xl text-2xl pb-2 font-bold text-center mb-4 w-fit mx-auto border-b-[1px] border-[#BDC9BD]">
            {productData.heading}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center ">
            {productData.content}
          </p>
        </div>
      </Container>
      <Container className="pt-10 max-w-screen-2xl lg:pb-14 flex justify-between lg:gap-10 items-start flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:pr-32 px-5">
          <h3 className="font-bold text-xl xs:text-2xl tracking-wider">
            OUR 3-YEAR GUARANTEE
          </h3>
          <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark">
            When choosing blindsandcurtains.ae for your window dressings, you
            can relax in the knowledge that you’re not only buying a beautiful
            product, but you’re also buying into a customer service ethos that
            will be like no other experience in Dubai. From our after-sales care
            package to our 1 working day guaranteed response, you can rest
            assured that you’ll be in good hands for the lifetime of your
            blinds, curtains or shutters. Great care and pride is attached into
            everything we do. From the blinds we supply and our beautiful
            handmade curtains, to the shutters that we import. You’ll have our
            support from the day they are installed. This is the promise we make
            to you.
          </p>
          <div className="h-fit mt-8"></div>
        </div>
        <div className="w-full md:w-1/2 ">
          <Image
            src={productData.sideImage1}
            width={1000}
            height={300}
            alt="why-us img"
            className="mx-auto md:me-0 ms-auto w-full"
          />
        </div>
      </Container>
      <Container className="lg:pt-5 pt-8 max-w-screen-2xl lg:pb-14 flex justify-between lg:gap-10 items-start flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:order-1 order-2">
          <Image
            src={productData.sideImage}
            width={1000}
            height={300}
            alt="why-us img"
            className="mx-auto md:me-0 ms-auto w-full"
          />
        </div>
        <div className="w-full md:w-1/2 lg:pl-20 px-5">
          <h3 className="font-bold text-xl xs:text-2xl tracking-wider">
            OUR LIFETIME WARRANTY
          </h3>
          <p className="text-16 xs:text-18 leading-8 mt-4 text-lightdark ">
            From the day your order is fitted, you will have a fully
            comprehensive 3-year Guarantee against manufacturing defects. This
            encompasses all parts, components, and materials used. Once the 3
            years have passed, you can relax in the knowledge that we will be
            there to support you throughout the lifetime of your blinds,
            curtains or shutters. Where repairs are required, we will provide
            this service for you at a nominal fee and cost of goods only. Where
            goods are no longer available, we will offer you the most
            cost-effective method of resolving any issues.
          </p>
          <div className="h-fit mt-8"></div>
        </div>
      </Container>
      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
      <BookNowBanner />
      <OurClient />
    </>
  );
};

export default productGuarantees;
