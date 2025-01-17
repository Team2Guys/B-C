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
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

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
    (testimonial: any) => testimonial.rating >= 4
  );

  return (
    <Container className="lg:mt-16 mt-5 py-8 mx-auto">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8">
        Our Happy Customers
      </h2>
      {filteredTestimonials.length > 0 && (
        <>

          <div className="">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}

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
                650: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1000: {
                  slidesPerView: 2.7,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {filteredTestimonials.map((testimonial: any, index: number) => (
                <SwiperSlide className="" key={index}>
                  <div className="bg-white shadow-lg p-4 2xl:p-6 flex flex-col justify-between">
                    <div className="flex items-start gap-4 justify-between">
                      <Image
                        src={testimonial?.profile_photo_url}
                        alt="testimonial-image"
                        width={64}
                        height={64}
                        className="w-16 h-16 2xl:w-20 2xl:h-20 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex gap-4 justify-between">
                          <div>
                            <h3 className="text-14 lg:text-14 2xl:text-lg font-semibold">
                              {testimonial.author_name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <div>
                                <FcGoogle className="lg:text-2xl 2xl:text-4xl text-16" />

                              </div>
                              <div className="flex flex-col">
                                <div className="flex gap-1.5 text-12 mt-1 text-[#FCD503]">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                  ))}

                                </div>
                                <p className="text-center text-10 pt-1 text-[#868686]">Google reviews</p>
                              </div>


                            </div>

                          </div>

                          <span className="text-xs text-gray-800 mt-2">
                            {testimonial.relative_time_description}
                          </span>
                        </div>

                        <div className="mt-4 text-12 sm:text-sm text-[#6F747F] italic font-gotham leading-relaxed xs:tracking-widest font-extralight ">
                          <p className="space-x-2">{getExcerpt(testimonial.text, 50)}</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="flex gap-1 justify-center mt-10 font-gotham">
              <div>
                <FcGoogle className="lg:text-6xl text-14" />
              </div>
              <div className="text-center  flex flex-col gap-0">
                <p className="text-[#6A6A6A] font-[900] text-28 font-gotham">
                  4.8
                </p>
                <p className="text-[#6A6A6A] font-bold text-16 ">Google Rating</p>
                <Link href="https://g.page/r/Cb5WvqhjNT4iEAE/" className="text-[#008CFF] text-10 pt-1 " target='_blank'>
                  See all our reviews</Link>
              </div>
            </div>
          </div>

        </>
      )}
    </Container>
  );
}

export default Testimonial;
