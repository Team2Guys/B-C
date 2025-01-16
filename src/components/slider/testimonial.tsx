"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { fetchReviewsHandler } from "config/fetch";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

function Testimonial() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  const getExcerpt = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " ..."
      : text;
  };

  useEffect(() => {
    fetchReviewsHandler(setTestimonials);
  }, []);

  const filteredTestimonials = testimonials.filter(
    (testimonial: any) => testimonial.rating >= 1
  );

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Container className="lg:mt-16 mt-5 py-8 mx-auto happy_customer max-w-screen-2xl">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8">
        Our Happy Customers
      </h2>
      {filteredTestimonials.length > 0 && (
        <>
       
        <div className="">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            grid={{
              rows: 2,
              fill: "row",
            }}
            pagination={{
              clickable: true,
            }}
            className=" mySwiper testimonial_slider"
            modules={[Grid, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {filteredTestimonials.map((testimonial: any, index: number) => (
              <SwiperSlide className="" key={index}>
                <div className="bg-white shadow-lg p-6 min-h-[250px] flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial?.profile_photo_url}
                      alt="testimonial-image"
                      width={64}
                      height={64}
                      className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {testimonial.author_name}
                      </h3>
                      <div className="flex items-center text-yellow-500 text-sm mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 italic">
                    <p>{getExcerpt(testimonial.text, 50)}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">
                    {testimonial.relative_time_description}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
        </div>
        <div className="z-10 space-x-2 w-fit -mt-8 flex flex-wrap sm:flex-nowrap md:space-x-2 lg:space-x-6 xl:space-x-2">
        <button
            className="z-50"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <TfiArrowCircleLeft size={30} />

          </button>
          <button
            className="z-10"
            onClick={handleNext}
            aria-label="Next"
          >
            <TfiArrowCircleRight size={30}  />

          </button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Testimonial;
