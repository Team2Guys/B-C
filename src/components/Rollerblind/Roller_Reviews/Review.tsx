'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from 'data/data';
// import { fetchReviewsHandler } from 'config/fetch';
import Container from 'components/Res-usable/Container/Container';


interface RollerReviewsProps {
  imageSrc?: string;
}

const RollerReviews: React.FC<RollerReviewsProps> = ({ imageSrc = '/assets/images/Rollerblind/Rectangle898.png' }) => {

  // const [testimonial, setTestimonials] = useState<any[]>([]);
  // useEffect(() => {
  //   fetchReviewsHandler(setTestimonials);
  // }, []);

  // const filteredTestimonials = testimonials.filter(
  //   (testimonial: any) => testimonial.rating >= 4
  // );
  
  return (
    <div className='bg-[#F5EDE5]'>
    <Container>
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-[#F5EDE5] py-10 lg:py-0'>
      <div className='flex flex-col items-start px-6 lg:px-12'>
        <h2 className="text-2xl md:text-4xl font-black font-serif mb-6 text-gray-900">
          Customer Feedback <br /> You Can Trust
        </h2>
        <div className='max-w-[90%] space-y-8'>
          <Link href='https://maps.app.goo.gl/9rgRcp86AAP9K8Hw8' target='blank'>
            <div className='bg-white w-fit h-fit rounded-full shadow-lg py-3 px-4 flex justify-center items-center gap-3'>
              <FcGoogle className='h-[27.22px] w-[28.57px]' />
              <p className='text-16 font-bold'>4.9 | <span className='font-normal'>See all reviews</span></p>
            </div>
          </Link>   
          <div className='w-full max-w-md mx-auto'>
            <div className='flex justify-between px-4'>
              <div className='testimonial-prev cursor-pointer h-7 w-7 bg-white rounded-full shadow-md flex items-center justify-center z-40'>
                <FaArrowLeftLong />
              </div>
              <div className='testimonial-next cursor-pointer h-7 w-7 bg-white rounded-full shadow-md flex items-center justify-center z-40'>
                <FaArrowRightLong />
              </div>
            </div>
            
            <Swiper
              loop={true}
              slidesPerView={1}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              modules={[Navigation]}
              className="mySwiper mt-4"
            >
              {testimonials.map((testimonial: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className='bg-white px-4 py-5 max-w-96 mx-auto rounded-lg shadow-lg'>
                    <div className='flex justify-between items-center'>
                      <h3 className='text-17 md:text-lg font-medium'>{testimonial.author_name}</h3>
                    </div>
                    <p className='flex gap-1 text-yellow-500 mb-3 text-sm'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </p>
                    <p className='font-light italic text-gray-600 leading-5 max-h-20  overflow-x-auto slider-text'>{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>  
          </div>
        </div>
      </div>  
      <div className='flex w-full justify-center items-center rounded-lg mt-7 lg:mt-0'>
        <Image 
          className='h-auto md:h-[350px] lg:h-[520px] w-full max-w-[650px]  shadow-md' 
          src={imageSrc} 
          alt="Customer Review Image" 
          height={550} 
          width={703} 
        />
    </div>
    </div>
    </Container>
    </div>
  );
};

export default RollerReviews;
