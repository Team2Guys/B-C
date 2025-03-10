import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BlindsAndCurtainsTypes } from 'types/interfaces';

interface BlindsAndCurtainsTypesProps {
  data: BlindsAndCurtainsTypes;
}

const BlindsAndCurtains: FC<BlindsAndCurtainsTypesProps> = ({ data }) => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-6 2xl:gap-10 ">
        <div className='col-span-12 md:col-span-7 lg:col-span-5 2xl:col-span-6 block xs:hidden md:block'>
        <Image
          className="h-[300px] md:h-auto lg:h-[600px] w-full"
          width={800}
          height={800}
          src={data.image}
          alt={data.heading}
        />
        </div>
        <div className='col-span-12 md:col-span-5 lg:col-span-7 2xl:col-span-6 flex flex-col justify-between'>
        <h2 className="lg:text-[39px] md:text-3xl text-2xl font-bold max-sm:!leading-8 !leading-[50px] text-center sm:text-start ">
            {data.heading}
          </h2>
          <div>
            {data.paragraph.map((para, index) => (
              <p
                key={index}
                className={`text-black text-13 sm:text-14 lg:text-16 font-normal  md:text-justify leading-6 md:leading-9 md:tracking-wide `} dangerouslySetInnerHTML={ {__html : para}}
              ></p>
            ))}
          </div>
            <Link
              href={'/request-appointment'}
              className="bg-secondary max-xs:text-14 text-white px-4 py-4 mt-3 mx-auto md:ms-auto hover:text-white hover:bg-primary transition-all rounded-md hover:text-dark  w-fit  uppercase"
            >
              Book A Free Appointment
            </Link>
        </div>
      </div>
    </Container>
  );
};

export default BlindsAndCurtains;
