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
        <div className="space-y-4 md:w-[80%] text-start mx-0">
          <h1 className="text-18 leading-8 tracking-[3px]  md:tracking-[10px]  md:text-26 font-semibold">
            Choose the{' '}
            <span className="font-normal">perfect place for your needs!</span>
          </h1>

          <p className="text-12 md:text-16 lg:text-18  md:leading-[33px] text-[#797D85]">
            Dubai’s leading made-to-measure blinds company. Choose from over
            2000 different materials. Our core range covers all shades you could
            imagine. Grey blinds, white blinds, black blinds, red blinds. You
            name it, we have it.
          </p>
          <p className="text-12 md:text-16 lg:text-18 md:leading-[33px] text-[#797D85]">
            Also available are made-to-measure blinds from designers such as
            Orla Kiely, Miss Print as well as Ashley Wilde. UK-designed blinds,
            UK finishing. These are as good as they get. Also available are
            made-to-measure blinds from designers such as Orla Kiely, Miss Print
            as well as Ashley Wilde.
          </p>
          <div className=" pt-5">
            <button onClick={()=>{route.push("/appointment")}} className="px-4 py-3 rounded-md bg-secondary text-white font-medium">
              Book An Appointment
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-5 md:mt-0">
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
