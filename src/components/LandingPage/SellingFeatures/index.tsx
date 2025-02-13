import React from 'react';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';

interface FeatureItem {
  icon: string;
  title: string;
  list: { heading: string; para: string }[];
}

interface FeaturesSectionProps {
  data: FeatureItem[];
}

const SellingFeatures: React.FC<FeaturesSectionProps> = ({ data }) => {
  return (
    <div className='w-full bg-white text-black py-4 sm:py-8 '>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`space-y-4  pt-4 ${index === 0 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''}`}
          >
            <Image src={item.icon} alt="icon" width={50} height={50} className='h-[40.7px] w-[31.89px]' />
            <h2 className='font-serif font-extrabold text-xl md:text-2xl lg:text-3xl'>{item.title}</h2>
            <ul className="list-disc pl-5">
              {item.list.map((feature, i) => (
                <li key={i} className='text-sm md:text-base lg:text-lg mb-2'>
                  <strong>{feature.heading}</strong> <span>{feature.para}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
};
export default SellingFeatures;
