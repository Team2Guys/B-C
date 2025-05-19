"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IProduct } from "types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "components/Res-usable/Container/Container";
import Link from "next/link";
import { getPath } from "utils/helperFunctions";

const SellerSlider = ({products}: {products: IProduct[]}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.1,
          arrows: false
        },
      },
    ],
  };

  return (
    <div className="bg-[#F5F5F5] py-10">
    <Container className="overflow-hidden best_seller_slider bg-[#F5F5F5]">
      <div className="flex justify-between items-center">
      <div className="text-start sm:pb-5 lg:pt-8">
        <h3 className="sm:text-[40px] text-2xl font-robotoSerif font-bold text-primary">See Our Bestseller</h3>
       <p className="font-roboto font-normal lg:font-semibold text-16 md:text-20 text-[#3E3F42] my-3 lg:mb-7">Top Picks for Your Home</p>
      </div>
      <div className="justify-items-end hidden md:block">
      <Link
          href="/book-free-visit" 
          className="border border-secondary font-roboto text-16 text-primary font-semibold py-3 px-6 rounded-lg block w-fit mx-auto"
        >
          Book a Free Visit
        </Link></div>
        </div>
      <Slider {...settings}>
        {products.map((item: IProduct, index) => (

          <div key={index} className="px-2">
            <Link href={getPath(item)}>
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative w-full h-[280px] md:h-[365px]">
                  <Image
                    src={item.posterImage.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 text-center bg-[#FFFFF0]">
                  <h3 className="text-lg font-semibold mb-1 text-primary">{item.title}</h3>
                  <p className="text-secondary font-bold text-md">
                    <span className="text-primary">Starting from</span> {item.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>

        ))}
      </Slider>
      <Link
          href="/book-free-visit" 
          className="border border-secondary font-roboto text-16 text-primary font-semibold py-3 px-20 rounded-lg block w-fit  mt-5 text-center mx-auto md:hidden"
        >
          Book a Free Visit
        </Link>
    </Container>
    </div>
  );
};

export default SellerSlider;
