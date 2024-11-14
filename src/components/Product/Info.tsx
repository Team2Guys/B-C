import Container from 'components/Res-usable/Container/Container';
import React from 'react';
import productimf from '../../../public/assets/images/product/product1.png';
import Image from 'next/image';
import { Button } from 'components/ui/button';
import { useRouter } from 'next/navigation';
const Info = () => {
  const route = useRouter();
  return (
    <Container className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4 md:w-[80%] text-start mx-0 flex flex-col justify-between px-4 md:px-0">
          <h1 className="text-18 leading-8 tracking-[3px]  md:tracking-[10px]  md:text-26 font-semibold">
            Custom Window Blinds |{' '}
            <span className="font-normal"> 35 Styles + 2000 Different Materials</span>
          </h1>

          <p className="text-12 md:text-16 lg:text-18  md:leading-[33px] text-[#797D85]">
            Blinds and Curtains Dubai offers more options in style, design, patterns, and colours than ready-made blinds. From large floor-to-ceiling windows to small bedroom windows, and from office spaces to holiday homes with bay windows, we have solutions for every space. Regardless of the size and scale, we measure, make and install outstanding blinds for every single project.
          </p>
          <p className="text-12 md:text-16 lg:text-18 md:leading-[33px] text-[#797D85]">
            As our staff are not paid sales commissions, they will give you honest, impartial advice to ensure the best for your home and pocket. A window treatment is an investment that improves your quality of life. Our sunscreen blinds let in soft, natural light while our blackout blinds block light and cut down on noise.
          </p>
          <p className="text-12 md:text-16 lg:text-18 md:leading-[33px] text-[#797D85]">
            Call the team now and book a free appointment today. No pressure!
          </p>
          <div className=" pt-5 text-center md:text-start">
            <button onClick={() => { route.push("/request-appointment") }} className="px-4 py-3 rounded-md bg-secondary text-white font-medium">
              Book An Appointment
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-5 md:mt-0">
          <Image
            className="w-auto h-auto"
            width={602}
            height={400}
            src={productimf}
            alt="product"
          />
        </div>
      </div>
    </Container>
  );
};

export default Info;
