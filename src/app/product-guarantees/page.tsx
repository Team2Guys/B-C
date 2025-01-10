'use client';
import TopHero from 'components/ui/top-hero';
import { productData, PGuarantees } from 'data/data';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';
import { usePathname } from 'next/navigation';
import second from '../../../public//assets/images/product-guarantees/large.png';
import GuaranteeVisit from 'components/Gurranteevisit';
const ProductGuarantees = () => {
  const pathName = usePathname();
  const { data:error } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <>
      <TopHero
        title="PRODUCT GUARANTEES"
        image={second.src}
        pagename={pathName}
      />
      <Container className="">
        <div className="lg:py-6 p-3 lg:mt-10 mx-auto">
          <h1 className="lg:text-3xl text-18 sm:text-2xl pb-2 font-bold text-center mb-9 w-fit mx-auto border-b-[1px] border-[#BDC9BD]">
            {productData.heading}
          </h1>
          <p className="text-12 sm:text-16 2xl:text-18 leading-9 text-center mt-4 text-lightdark"dangerouslySetInnerHTML={{ __html: productData.content }}></p>
        </div>
      </Container>
      {PGuarantees.map((data: any, index: any) => (
        <Container
          key={index}
          className={`pt-10  lg:pb-14 flex justify-between lg:gap-10 items-start flex-col md:flex-row ${data.imageAlign === 'right' ? 'lg:flex-row-reverse' : ''}`}
        >
          <div
            className={`w-full md:w-1/2 ${data.imageAlign === 'right' ? 'lg:pl-2' : 'lg:pr-2'} px-5`}
          >
            <h3 className="font-bold text-lg xs:text-2xl tracking-wider">
              {data.heading}
            </h3>
            <p className="text-12 sm:text-16 2xl:text-18 leading-9 sm:leading-8 mt-4 text-lightdark" dangerouslySetInnerHTML={{ __html: data.text }}></p>

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
              className="mx-auto md:me-0 ms-auto w-full md:h-[650px] lg:h-[550px] xl:h-[450px]"
            />
          </div>
        </Container>
      ))}
      <Container className='py-10'>
       <GuaranteeVisit/>
      </Container>
    </>
  );
};

export default ProductGuarantees;
