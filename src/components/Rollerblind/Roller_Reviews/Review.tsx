'use client'
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import Testimonial from 'components/ProductDetailPage/testimonial';



interface RollerReviewsProps {
  imageSrc?: string;
}

const RollerReviews: React.FC<RollerReviewsProps> = () => {
  

  return (
    <div className='bg-secondary-foreground'>
      <Testimonial/>
    </div>
  );
};

export default RollerReviews;
