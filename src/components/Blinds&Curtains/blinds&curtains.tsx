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
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
        <Image
          className="w-full md:w-2/5 lg:h-[627px]"
          width={400}
          height={500}
          src={data.image}
          alt={data.heading}
        />
        <div className="lg:px-14 md:w-3/5 lg:mt-0 mt-4 ">
          <h2 className="lg:text-[40px] md:text-3xl text-2xl font-bold mb-4 tracking-wide ">
            {data.heading}
          </h2>
          <div className=" leading-[30px]">
            {data.paragraph.map((para, index) => (
              <p
                key={index}
                className={`text-gray-700 lg:text-lg text-base text-justify ${index < data.paragraph.length - 1 ? 'mb-10' : ''}`}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 2xl:mt-20">
            <Link
              href={'/appointment'}
              className="bg-primary  text-white px-4 py-4 hover:text-black hover:bg-white transition-all  hover:text-dark  "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsAndCurtains;
