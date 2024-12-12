import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BlindsAndCurtainsTypes } from 'types/interfaces';

interface BlindsAndCurtainsTypesProps {
  data: BlindsAndCurtainsTypes;
}

const BlindsAndCurtains: FC<BlindsAndCurtainsTypesProps> = ({ data }) => {
  return (
    <div className=" lg:max-w-[1032.86px] 2xl:max-w-screen-xl mx-auto">
      <div className="grid grid-cols-12 gap-6 2xl:gap-10 ">
        <div className='col-span-12 md:col-span-7 lg:col-span-5 2xl:col-span-6 block xs:hidden md:block'>
        <Image
          className="h-[400px] md:h-auto lg:h-[600px] w-full"
          width={800}
          height={800}
          src={data.image}
          alt={data.heading}
        />
        </div>
        <div className='col-span-12 md:col-span-5 lg:col-span-7 2xl:col-span-6 flex flex-col justify-between px-4 md:px-0'>
        <h2 className="lg:text-[39px] md:text-3xl text-2xl font-bold max-sm:!leading-8 !leading-[50px] text-center sm:text-start ">
            {data.heading}
          </h2>
          <div>
            {data.paragraph.map((para, index) => (
              <p
                key={index}
                className={`text-black text-13 sm:text-14 lg:text-16 font-normal  md:text-justify md:leading-9 md:tracking-wide `} dangerouslySetInnerHTML={ {__html : para}}
              ></p>
            ))}
          </div>

            <Link
              href={'/request-appointment'}
              className="bg-primary text-white px-4 py-4 mt-3 mx-auto md:ms-auto hover:text-black hover:bg-white transition-all rounded-md hover:text-dark  w-fit "
            >
              Book A Free Home Visit
            </Link>
        </div>
  
      </div>
    </div>
  );
};

export default BlindsAndCurtains;
