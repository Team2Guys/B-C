import React from 'react'
import Image from 'next/image';

const Reviews = () => {
  return (
    <div className='bg-light flex justify-center items-center'>
    <div className='bg-light flex'>
      <div className='bg-white w-[199.41px] h-[37px] rounded-3xl border py-2 flex justify-center items-center gap-2'>
        <Image className='h-[27.22px] w-[28.57px]' src="/assets/images/Rollerblind/Google.png" alt="img" height={800} width={800}/>
        <p className='text-16 font-bold'>4.8 |<span className='font-normal'> see all reviews</span></p>
      </div>
      <div><Image src='/assets/images/Rollerblind/Rectangle898.png' alt="img" height={550} width={703}></Image></div>
    </div>
    </div>
  );
};

export default Reviews;