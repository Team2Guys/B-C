import { SocialData } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialLink: React.FC = () => {
  return (
    <div className="flex gap-3 items-center">
      {SocialData.map((social, index) => (
        <Link target="_blank" href={social.href} key={index}>
          <Image className='h-5 w-5 sm:w-[28px] sm:h-[28px]' width={900} height={900} src={social.src} alt={social.alt} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
