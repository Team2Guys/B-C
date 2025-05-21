import React from 'react';
import Image from 'next/image';

interface SectionHeaderProps {
  title: string;
  backgroundImage: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative w-full h-32 md:h-56 lg:h-72 flex items-center justify-center text-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-50"
        priority
      />

      <h2 className="relative z-10 text-white text-23 md:text-4xl font-robotoSerif xl:text-[72px] font-semibold md:font-extrabold">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
