import React from 'react'
import Image from 'next/image';
import { Button } from 'components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

const CustomPage = () => {
  return (
    <div className='w-full h-auto mx-auto'>
  <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
    {/*Left side*/}
<div className='flex flex-col w-full sm:w-1/2 justify-center h-72 lg:h-96 xl:h-72 space-y-3 bg-white lg:p-6  my-2 p-5 py-4'>
    <div className='mx-8 '>
    <h2 className="text-black text-1xl sm:text-2xl  lg:text-4xl font-normal font-serif text-nowrap">Custom Made<br />
    <span className="text-black text-1xl sm:text-2xl lg:text-4xl font-serif font-extrabold">Motorized Blinds</span></h2>
      <div className='space-y-3 mt-4'>
      <p className='font-normal text-sm lg:text-lg'>Every blind is made to measure, ensuring a perfect fit for your windows.</p>
      <p className='font-normal text-sm lg:text-lg'>From initial consultation to final installation, our end-to-end service handles everything.</p>
      <div className='flex gap-2 uppercase lg:pt-4'>
      <Button variant={"black"}>Book An Appointment</Button>
    <Button variant={"Gray"}>Call Now</Button>
    <Button className='flex items-center justify-center' variant={"Green"}><FaWhatsapp size={25} /><p>Watsapp</p> </Button>
    </div>
       </div>
    </div>
    {/*Left side*/}
</div>
    <div className="sm:w-1/2 flex items-center">
    <Image
            src="/assets/images/Landing/Rectangle.png"
            alt="Motorized Blinds"
            width={800}
            height={500}
            className="sm:w-[315px] md:w-[373px] sm:h-[323px] lg:w-[500px] xl:w-full object-cover lg:h-[420px] xl:max-h-96"
          />
      <div className='bg-white h-72 lg:h-96 xl:h-72 w-3'></div>
    </div>
  </div>
</div>
  );
};

export default CustomPage;