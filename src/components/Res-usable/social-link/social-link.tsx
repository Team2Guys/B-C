import { SocialData } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialLink: React.FC = () => {
  return (
    <div className="flex gap-3 items-center">
      {SocialData.map((social, index) => (
        <Link target="_blank" href={social.href} key={index}>
          <Image className='w-[28px] h-[28px]' width={40} height={40} src={social.src} alt={social.alt} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
