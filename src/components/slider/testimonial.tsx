"use client";
import React, { useRef, useState } from "react";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { testimonials } from "data/data";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const getExcerpt = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

function Testimonial() {
  // const [testimonials, setTestimonials] = useState<any[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  // useEffect(() => {
  //   fetchReviewsHandler(setTestimonials);
  // }, []);

  // const filteredTestimonials = testimonials.filter(
  //   (testimonial: any) => testimonial.rating >= 4
  // );

  return (
    <Container className="lg:mt-16 mt-5 py-8 mx-auto">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8">
        Our Happy Customers
      </h2>
      {testimonials.length > 0 && (
        <>
          <div className="">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              pagination={{
                clickable: true,
              }}
              className="mySwiper testimonial_slider"
              modules={[Pagination, Autoplay]}
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
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonials.map((testimonial: any, index: number) => (
                <SwiperSlide className="" key={index}>
                  <div className="flex flex-col">
                    <ReadMoreCard testimonial={testimonial} wordLimit={34} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-1 justify-center mt-2 font-gotham mr-10 lg:mr-14">
              <div>
                <FcGoogle className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] xl:h-[50px] xl:w-[50px]" />
              </div>
              <div className="text-center flex flex-col gap-0">
                <p className="text-[#6A6A6A] font-extrabold text-14 sm:text-19 font-gotham">
                  4.9
                </p>
                <p className="text-[#6A6A6A] font-bold text-10 sm:text-12">
                  Google Rating
                </p>
                <Link
                  href="https://g.page/r/Cb5WvqhjNT4iEAE/"
                  className="text-[#008CFF] text-[7px] 2xl:text-[9px] pt-1"
                  target="_blank"
                >
                  See all our reviews
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

function ReadMoreCard({
  testimonial,
  wordLimit,
}: {
  testimonial: any;
  wordLimit: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex max-xs:flex-col  items-start xs:gap-4 justify-between bg-white p-4 2xl:p-6 ${
        isExpanded
          ? "h-auto max-h-max"
          : "md:h-[300px] lg:h-[370px] xl:h-[300px] md:max-h-[300px] lg:max-h-[370px] xl:max-h-80" }`}>
             <Image
        src={testimonial?.image}
        alt="testimonial-image"
        width={64}
        height={64}
        className="w-16 h-16 2xl:w-20 2xl:h-20 rounded-full object-cover hidden xs:block"
      />
      <div className="flex gap-2 xs:hidden justify-between w-full">
     <div className="w-9/12 flex gap-2">
     <Image
        src={testimonial?.profile_photo_url}
        alt="testimonial-image"
        width={64}
        height={64}
        className="w-12 h-12 xs:w-16 xs:h-16 2xl:w-20 2xl:h-20 rounded-full object-cover"
      />
          <div className="">
            <h3 className="text-12 xs:text-14 lg:text-14 2xl:text-lg font-semibold">
              {testimonial.name}
            </h3>
            <div className="flex gap-2">
                <FcGoogle className="text-2xl xs:text-4xl" />
  
              <div className="flex flex-col">
                <div className="flex gap-1 xs:gap-2 text-[9px] xs:text-10 mt-1 text-[#FCD503]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-center text-[7px] 2xl:10  text-[#868686]">
                  Google reviews
                </p>
              </div>
            </div>
          </div>
     </div>
        <div>
    
        </div>
      </div>
      <div>
        <div className="hidden xs:flex gap-4 justify-between ">
          <div>
            <h3 className="text-14 lg:text-14 2xl:text-lg font-semibold">
              {testimonial.name}
            </h3>
            <div className="flex gap-2">

                <FcGoogle className="text-4xl" />
            


              <div className="flex flex-col pt-1">
                <div className="flex gap-1.5 text-10 2xl:text-12 mt-1 text-[#FCD503]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-center text-[8px] 2xl:text-10 pt-1 text-[#868686]">
                  Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-12 sm:text-sm text-[#6F747F] italic font-gotham leading-relaxed xs:tracking-wider font-extralight hidden xs:block">
          <p className="space-x-2">
            {isExpanded ? testimonial.text : getExcerpt(testimonial.text, wordLimit)}
            <button
              className="underline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
        <div className="mt-4 text-12 sm:text-sm text-[#6F747F] italic font-gotham leading-relaxed xs:tracking-wider font-extralight block xs:hidden">
          <p className="space-x-2">
            {isExpanded ? testimonial.text : getExcerpt(testimonial.text, wordLimit)}
            <button
              className="underline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
    </div>
  );
}

export default Testimonial;
