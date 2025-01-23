'use client';
import React, { useEffect, useState } from 'react';
import Slider, { SliderSettings } from 'react-slick';
import { FcGoogle } from 'react-icons/fc';
import { RatingSlider } from 'data/data';
import Image from 'next/image';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import { Client } from '@googlemaps/google-maps-services-js';
import { fetchReviewsHandler } from 'config/fetch';
import { FaStar } from 'react-icons/fa';

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={
        'block absolute -right-7 xs:-right-3 bottom-14  font-semibold text-white cursor-pointer'
      }
      onClick={onClick}
    >
      <GoArrowRight size={30} />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={
        'block absolute -left-7 xs:-left-3 bottom-14 font-semibold text-white z-10 cursor-pointer'
      }
      onClick={onClick}
    >
      <GoArrowLeft size={30} />
    </div>
  );
}

const client = new Client({});
console.log(client, 'client');
interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
  translated?: boolean;
}

export default function Review_banner() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    fetchReviewsHandler(setReviews);
  }, []);
  const filteredTestimonials = reviews.filter(
    (testimonial: any) => testimonial.rating >= 4,
  );

  return (
    <>
      <Container className=" px-2 lg:mt-10 mt-10 relative">
        <div className="bg-[#F6EFE9] px-2 py-12 md:p-10 rounded-xl shadow-md drop-shadow-md border border-white">
          <div className="lg:grid grid-cols-1 sm:grid-cols-3 gap-12 mb-3 items-center">
            <div className="lg:text-4xl text-2xl font-bold text-center">
              <h3>
                Trusted Partner
                <br /> in Every Detail
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 items-center lg:my-0 mt-10">
              <Link
                href="https://g.page/r/Cb5WvqhjNT4iEAE/"
                target="_blank"
                className="w-fit mx-auto"
              >
                <div className="flex items-center gap-3 bg-white h-fit px-3 py-3 rounded-full shadow-lg w-fit mb-9">
                  <span>
                    <FcGoogle className="lg:text-3xl text-14" />
                  </span>
                  <p className="lg:text-base text-12">
                    With Over 750 5-Star Reviews
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-primary lg:mt-0 mt-10">
              <div className="container h-auto w-full">
                <Image
                  className="absolute lg:-top-4 top-[36%] lg:bottom-60  lg:right-[13%] lg:translate-x-[15%] 2xl:right-[14%] right-[50%] translate-x-[50%] sm:right-[50%] sm:translate-x-[50%]  z-10 "
                  src={RatingSlider.imageUrl}
                  alt=""
                  width={140}
                  height={140}
                />
                {filteredTestimonials.length > 0 && (
                  <Slider {...settings}>
                    {filteredTestimonials?.map((slide, index: any) => {
                      console.log(slide, 'slide');
                      return (
                        <>
                          <div
                            key={index}
                            className="sm:px-4 pt-12 bg-primary text-center relative lg:px-5 "
                          >
                            <h3 className="text-xl font-semibold text-white">
                              {slide?.author_name}
                            </h3>
                            <p className="mt-2 text-white overflow-x-auto max-h-36 text-ellipsis slider-text">
                              {slide?.text}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </Slider>
                )}
                <div className="bg-white w-fit mx-auto px-6 py-2 mt-4 rounded-b-xl shadow-xl -mb-2 ">
                  <div className="flex items-center gap-1 xs:gap-2 text-[9px] xs:text-14 text-[#FCD503]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i}  />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
