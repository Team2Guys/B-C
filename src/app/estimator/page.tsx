'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TopHero from 'components/ui/top-hero';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Support from 'components/Res-usable/support/support';
import VideoAutomation from 'components/video-Automation/video-Automation';
import { Button } from 'components/ui/button';

import {
  optionDetail,
  
} from 'data/data';
import cardImg from '../../../public/assets/images/product/blinds.jpg';
import { Select } from 'antd';
import Accordion from 'components/Res-usable/Accordion/Accordion';
import CardSlider from 'components/slider/CardSlider';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import {
  fetchCategories,
  fetchProducts,
} from 'config/fetch';
import RelatedProducts from 'components/Related-products/RelatedProducts';


const Estimator: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const {
    data: products,
    error: productsError,
    isLoading: isLoadingProducts,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (categoriesError instanceof Error)
    return <div>Error: {categoriesError.message}</div>;
  if (productsError instanceof Error)
    return <div>Error: {productsError.message}</div>;

  const categoryIds = new Set<number>([
    ...(categories?.map((category) => category.id) || []),
    ...(products?.map((product) => product.CategoryId) || []),
  ]);

  const productsByCategory = Array.from(categoryIds).reduce(
    (acc, categoryId) => {
      acc[categoryId] =
        products?.filter((product) => product.CategoryId === categoryId) || [];
      return acc;
    },
    {} as Record<number, IProduct[]>,
  );

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className=" mt-10 lg:max-w-[95%] 2xl:max-w-[90%]">
        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className=" w-full md:w-7/12">
            <Image
              src={cardImg}
              width={1000}
              height={1000}
              alt="Blinds"
              className="object-cover lg:w-full w-full h-full md:h-[762px] rounded-r-3xl"
            />
          </div>

          <div className="flex flex-col space-y-5 w-full md:w-5/12 px-2 md:px-0 ">
            <h2 className="lg:text-[39px] lg:font-black text-2xl font-bold capitalize">
              Get Estimate
            </h2>

            <div>
              <Select
                defaultValue="Select Sizes"
                onChange={handleChange}
                className="w-[256px] h-[52px] detail-otion font-bold"
                options={optionDetail}
              />
            </div>
            <div className="">
              {categories && (
                <div>
                  {categories.map((category, index) => (
                    <Accordion
                      key={index}
                      title={category.title}
                      isOpen={openIndex === index}
                      onClick={() => handleAccordionClick(index)}
                    >
                      <CardSlider
                        sliderItems={productsByCategory[category.id] || []}
                        buttonClass="rounded-full h-6 w-6 ml-2 bg-primary text-center shadow bg-white hover:bg-primary hover:text-white"
                        breakpoints={{
                          320: {
                            slidesPerView: 1.4,
                            spaceBetween: 10,
                          },
                          420: {
                            slidesPerView: 2.3,
                            spaceBetween: 10,
                          },
                          640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                          },
                          890: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                          1330: {
                            slidesPerView: 3.5,
                            spaceBetween: 15,
                          },
                          1440: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                          },
                        }}
                      />
                    </Accordion>
                  ))}
                </div>
              )}
            </div>
            <p className="lg:text-[35px] text-2xl font-bold">AED 171/month</p>
            <p className="lg:text-[15px] text-md  ">
              *The displayed price is for the base offer; for upgraded options
              prices may vary (e.g., premium sheer, wavy curtains, automation).
              Book a visit to have your custom quotation!
            </p>

            <Button className="bg-secondary  text-white text-2xl font-bold py-7 px-4 rounded-lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <Container className="py-10">
        <RelatedProducts products={products || []} />
      </Container>
      <BookNowBanner />
      <VideoAutomation />
      <Support />
    </>
  );
};

export default Estimator;
