import CustomButton from 'components/Res-usable/Button/Button';
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
      <div className="grid grid-cols-12 gap-6 2xl:gap-10">
        <div className='col-span-12 md:col-span-7 lg:col-span-5 2xl:col-span-6'>
        <Image
          className="lg:h-[600px] w-full"
          width={800}
          height={800}
          src={data.image}
          alt={data.heading}
        />
        </div>
        <div className='col-span-12 md:col-span-5 lg:col-span-7 2xl:col-span-6 flex flex-col justify-between'>
        <h2 className="lg:text-[39px] md:text-3xl text-2xl font-bold ">
            {data.heading}
          </h2>
          <div>
            {data.paragraph.map((para, index) => (
              <p
                key={index}
                className={`text-black lg:text-16 font-normal text-base text-justify md:leading-9 md:tracking-wide `}
              >
                {para}
              </p>
            ))}
          </div>

            <Link
              href={'/request-appointment'}
              className="bg-primary  text-white px-4 py-4 hover:text-black hover:bg-white transition-all  hover:text-dark  w-fit "
            >
              Book A Free Home Visit
            </Link>
        </div>
  
      </div>
    </div>
  );
};

export default BlindsAndCurtains;
