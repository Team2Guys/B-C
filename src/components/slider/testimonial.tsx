import Container from 'components/Res-usable/Container/Container';
import { testimonials } from 'data/data';
import Image from "next/legacy/image";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: testimonials.length > 1,
    slidesToShow: testimonials.length < 3 ? testimonials.length : 3,
    slidesToScroll: 1,
    centerMode: false, // Optional
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: testimonials.length < 3 ? testimonials.length : 3,
          slidesToScroll: 1,
          infinite: testimonials.length > 1,
          dots: true,
          centerMode: false, // Optional
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: testimonials.length < 2 ? testimonials.length : 2,
          slidesToScroll: 1,
          infinite: testimonials.length > 1,
          dots: true,
          centerMode: false, // Optional
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: testimonials.length < 2 ? testimonials.length : 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false, // Optional
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Optional
        },
      },
    ],
  };

  const getExcerpt = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + ' ...';
    }
    return text;
  };

  return (
    <Container className="lg:mt-16 mt-5 py-4 mx-auto happy_customer max-w-screen-2xl">
      <h1 className="text-center lg:text-30 text-25 font-medium">
        Our Happy Customers
      </h1>

      <div className="slider-container lg:mt-14 mt-4 mt xl:px-0 lg:px-0 px-10">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white flex shadow-md rounded-sm p-7 max-w-80 sm:max-w-72 xs:max-w-96 md:max-w-64 lg:max-w-64 xl:max-w-96 2xl:max-w-md 4 my-2"
            >
              <div className="xs:flex items-center">
                <Image
                  src={testimonial.image}
                  alt="testiamge"
                  width={200}
                  height={200}
                  className="lg:w-20 w-12 h-12 lg:h-20 rounded-full mr-4"
                />
                <div className="flex flex-wrap justify-between items-start">
                  <div className="flex items-center">
                    <div className="space-y-1">
                      <h3 className="text-12 md:text-14 font-semibold">
                        {testimonial.name}
                      </h3>
                      <div className="flex text-yellow-500 mb-4 text-10 md:text-10 gap-1">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <FaStar key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm mt-4">
                    {testimonial.date}
                  </span>
                  <p className="text-gray-700 text-14 leading-relaxed pt-3 italic">
                    {getExcerpt(testimonial.text, 50)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default Testimonial;
