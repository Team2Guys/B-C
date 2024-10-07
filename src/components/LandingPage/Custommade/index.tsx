import React from 'react'
import Image from 'next/image';
import { Button } from 'components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import Container from 'components/Res-usable/Container/Container';

const CustomPage = () => {
  return (

  <div className='w-full flex flex-col sm:flex-row justify-center max-w-screen-2xl mx-auto'>

    {/*Left side*/}
<Container className='flex flex-col w-full sm:w-1/2 justify-center h-auto sm:h-96  lg:h-96 xl:h-96 space-y-3 bg-white lg:p-6  my-2 p-5 py-4'>
    <div className='mx-8 xl:pl-12 2xl:pl-28'>
    <h2 className="text-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light font-serif text-nowrap">Custom Made<br />
    <span className="text-black text-1xl sm:text-3xl lg:text-4xl font-serif font-extrabold">Motorized Blinds</span></h2><br/>
      <div className='mt-4'>
      <p className='font-light text-sm md:text-base lg:text-lg'>Every blind is made to measure, ensuring a perfect fit for your windows.</p><br/>
      <p className='font-light text-sm md:text-base lg:text-lg'>From initial consultation to final installation, our end-to-end service handles everything.</p><br/>
      <div className='flex flex-wrap md:flex-nowrap gap-2 uppercase lg:pt-4 '>
      <Button variant={"black"}>Book An Appointment</Button>
    <Button variant={"Gray"}>Call Now</Button>
    <Button className='flex items-center justify-center' variant={"Green"}><FaWhatsapp size={25} /><p>Watsapp</p> </Button>
    </div>
       </div>
    </div>
    {/*Right side*/}
    </Container>
    <div className="w-full sm:w-1/2 flex items-center">
    <div className='w-full md:w-12/12'>
    <Image
            src="/assets/images/Landing/Rectangle.png"
            alt="Motorized Blinds"
            width={800}
            height={500}
            className=" h-full w-full sm:h-[410px] object-cover lg:h-[420px] xl:max-h-full"
          />
        </div>
      <div className='bg-white h-auto sm:h-96 lg:h-96 xl:h-96 sm:w-3'></div>
    </div>
  </div>
  );
};

export default CustomPage;