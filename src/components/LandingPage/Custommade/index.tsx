import React from 'react';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import CustomButton from './button';

interface CustomSectionProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string[];
  imageSrc: string;
  imageAlt: string;
}

const CustomSection: React.FC<CustomSectionProps> = ({
  title,
  subtitle,
  description1,
  description2,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-center max-w-screen-2xl 2xl:max-screen-full mx-auto'>
    <Container className='flex flex-col w-full sm:w-1/2 justify-center h-auto sm:h-96 md:h-[440px] lg:h-[420px] space-y-3 bg-white lg:p-6 my-2 md:mt-3 p-5 py-4 border'>
    <div className='mx-8 xl:pl-12 2xl:pl-28'>
    <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-light font-serif text-nowrap">{title}<br />
    <span className="text-black text-1xl sm:text-3xl lg:text-4xl font-serif font-extrabold">{subtitle}</span></h2>
    <div className='md:mt-4'>
      <p className='font-light text-sm md:text-base lg:text-lg'>{description1}</p><br />
      <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg">
      {description2.map((point:any, index:any) => (
        <li key={index} className="font-light">{point}</li>
        ))}
        </ul><br />
        <CustomButton />
          </div>
        </div>
      </Container>
      <div className="w-full sm:w-1/2 flex items-center">
        <div className='w-full md:w-12/12'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={500}
            className="h-full w-full sm:h-[470px] object-cover lg:h-[450px] xl:max-h-full"
          />
        </div>
        <div className='bg-white h-auto sm:h-[440px] lg:h-[420px]  sm:w-3'></div>
      </div>
    </div>
  );
};

export default CustomSection;
