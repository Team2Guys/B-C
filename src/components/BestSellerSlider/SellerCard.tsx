"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SliderSliderItem } from "types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "components/Res-usable/Container/Container";
import Link from "next/link";
import { sliderData } from "data/SellerSlider";
import FreeVisit from "components/BookAFreeVisitButton/FreeVisit";

const SellerSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // default arrows enabled here
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="py-8 overflow-hidden best_seller_slider">
      <div className="text-center mb-4">
        <h3 className="sm:text-4xl font-roboto font-bold">See Our Bestseller</h3>
        <p className="text-lg mt-2 font-bold">Top Picks for Your Home</p>
      </div>
      <Slider {...settings}>
        {sliderData.map((item: SliderSliderItem, index) => (

          <div key={index} className="px-2">
            <Link href="/">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative w-full h-[365px]">
                  <Image
                    src={item.image}
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
<FreeVisit/>
    </Container>
  );
};

export default SellerSlider;
