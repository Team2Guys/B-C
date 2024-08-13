import { SocialData } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialLink: React.FC = () => {
  return (
    <div className="flex gap-3 items-center">
      {SocialData.map((social, index) => (
        <Link href={social.href} key={index}>
          <Image width={25} height={25} src={social.src} alt={social.alt} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
