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
    <Container className="overflow-hidden best_seller_slider">
      <div className="text-center sm:pb-5 lg:pt-8">
        <h3 className="sm:text-5xl text-2xl font-robotoSerif font-bold text-primary">See Our Bestseller</h3>
       <p className="font-roboto lg:font-semibold text-18 font-bold lg:text-32 text-primary my-3 lg:mb-7">Top Picks for Your Home</p>
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
          className="bg-secondary text-white font-semibold py-3 px-6 rounded-lg block w-fit mx-auto mt-5"
        >
          Book a Free Visit
        </Link>
    </Container>
  );
};

export default SellerSlider;
