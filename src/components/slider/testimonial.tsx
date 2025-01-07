"use client"
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination,Autoplay  } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { fetchReviewsHandler } from 'config/fetch';

function Testimonial() {
const [testimonials, settestimonials] = useState([])

  const getExcerpt = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + ' ...';
    }
    return text;
  };


  
    useEffect(() => {
       fetchReviewsHandler(settestimonials)
   
    }, [])
  
  return (
    <Container className="lg:mt-16 mt-5 py-4 mx-auto happy_customer max-w-screen-2xl">
      <h2 className="text-center lg:text-30 text-25 font-medium">
        Our Happy Customers
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
          pauseOnMouseEnter:true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          1140: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial:any, index:number) => {
          console.log(testimonial, "testimonial")
          return(
            <SwiperSlide className='lg:mt-14 mb-14 mt-4' key={index}>
            <div
                  
                  className="bg-white flex shadow-md rounded-sm p-7  my-2 min-h-[312px]"
                >
                  <div className="xs:flex ">
                    <Image
                      src={testimonial?.profile_photo_url}
                      alt="testiamge"
                      width={200}
                      height={200}
                      className="lg:w-20 w-12 h-12 lg:h-20 rounded-full mr-4"
                    />
                    <div className="flex flex-wrap justify-between items-start">
                      <div className="flex items-center">
                        <div className="space-y-1">
                          <h3 className="text-12 md:text-14 font-semibold">
                            {testimonial.author_name
                            }
                          </h3>
                          <div className="flex text-yellow-500 mb-4 text-10 md:text-10 gap-1">
                            {[...Array(testimonial.rating)].map((_, index) => (
                              <FaStar key={index} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm mt-4">
                        {testimonial.relative_time_description                    }
                      </span>
                      <p className="text-gray-700 text-14 leading-relaxed pt-3 italic">
                        {getExcerpt(testimonial.text, 50)}
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          )
      
       
})}
      </Swiper>

    </Container>
  );
}

export default Testimonial;
