import Container from 'components/Res-usable/Container/Container';
import { testimonials } from 'data/data';
import Image from 'next/image';
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
          slidesToShow: testimonials.length < 2.5 ? testimonials.length : 2.5,
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
    <Container className="mt-16 py-4">
      <h1 className="text-center text-30 font-medium">Our Happy Customers</h1>

      <div className="slider-container mt-14">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 max-w-80  sm:max-w-44 md:max-w-48 lg:max-w-72 2xl:max-w-md mx-4 my-2"
            >
              <div className="flex flex-wrap justify-between items-start">
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt="testiamge"
                    width={100}
                    height={100}
                    className="lg:w-16 w-12 h-12 lg:h-16 rounded-full mr-4"
                  />
                  <div className="space-y-1">
                    <h3 className="text-12 md:text-14 font-semibold">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-yellow-400 mb-4 text-12 md:text-14">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 text-sm mt-4">
                  {testimonial.date}
                </span>
              </div>

              <p className="text-gray-700 text-12 leading-relaxed pt-3">
                {getExcerpt(testimonial.text, 50)}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default Testimonial;
