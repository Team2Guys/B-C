import CustomButton from 'components/Res-usable/Button/Button';
import Image from 'next/image';
import { FC } from 'react';
import { BlindsAndCurtainsTypes } from 'types/interfaces';

interface BlindsAndCurtainsTypesProps {
  data: BlindsAndCurtainsTypes;
}

const BlindsAndCurtains: FC<BlindsAndCurtainsTypesProps> = ({ data }) => {
  return (
    <div className="lg:container max-w-7xl lg:px-0 xs:px-12 px-5">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
        <Image
          className="w-full md:w-2/5 lg:h-[627px]"
          width={400}
          height={500}
          src={data.image}
          alt={data.heading}
        />
        <div className="lg:px-8 md:w-3/5 lg:mt-0 mt-4">
          <h2 className="lg:text-[40px] md:text-3xl text-2xl font-bold mb-4">
            {data.heading}
          </h2>
          {data.paragraph.map((para, index) => (
            <p
              key={index}
              className={`text-gray-700 lg:text-lg text-base text-justify ${index < data.paragraph.length - 1 ? 'mb-5' : ''}`}
            >
              {para}
            </p>
          ))}
          <div className="bg-primary w-fit text-white px-3 py-2 mt-8 text-lg hover:text-black hover:bg-white transition-all">
            <CustomButton>{data.buttonText}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsAndCurtains;
