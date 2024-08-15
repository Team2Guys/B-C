// src/components/ImageTextCard.tsx
import CustomButton from 'components/Res-usable/Button/Button';
import Image from 'next/image';
import { FC } from 'react';
import { BlindsAndCurtainsTypes } from 'types/interface';

interface BlindsAndCurtainsTypesProps {
  data: BlindsAndCurtainsTypes;
}

const BlindsAndCurtains: FC<BlindsAndCurtainsTypesProps> = ({ data }) => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden ">
        <Image
          className="w-full md:w-1/2 h-[600px]"
          width={100}
          height={100}
          src={data.image}
          alt={data.heading}
        />
        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{data.heading}</h2>
          <p className="text-gray-700 mb-4">{data.paragraph}</p>
          <div className="bg-primary w-fit text-white px-3 py-2 text-lg hover:text-black hover:bg-white transition-all">
            <CustomButton>{data.buttonText}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsAndCurtains;