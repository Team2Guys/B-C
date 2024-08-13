import { OurClientImage } from 'data/data';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const OurClient = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py-8">
        <h2 className="text-center font-semibold text-xl uppercase tracking-widest">
          our clients
        </h2>
        <p className="text-center text-lg tracking-widest lg:w-2/5 mx-auto px-10 pt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </p>
      </div>
      <div className="bg-white">
        <div className="slider-container max-w-screen-2xl mx-auto">
          <Slider {...settings} className="space-x-4">
            {OurClientImage.map((image: any, index: any) => (
              <div className="py-7" key={index}>
                <Image
                  key={index}
                  className="w-full px-10 h-16 object-cover"
                  src={image.src}
                  alt={image.alt}
                  width={250}
                  height={400}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
