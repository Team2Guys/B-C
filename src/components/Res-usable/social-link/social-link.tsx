import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import Image from 'next/image';
import { WhatsAppInfo } from 'data/data';

interface SocialDataType {
  href: string;
  icon: ReactNode; 
  alt: string;
}

export const SocialData: SocialDataType[] = [
  {
    href: 'https://www.facebook.com/blindsandcurtainsdubai',
    icon: <FaFacebook size={28} />,
    alt: 'Facebook',
    
  },
  {
    href: 'https://www.pinterest.com/blindsandcurtainsdubai/',
    icon: <FaPinterest size={20} />,
    alt: 'Pinterest',
  },
  {
    href: 'https://www.instagram.com/blindsandcurtainsdubai/',
    icon: <FaInstagram size={20} />,
    alt: 'Instagram',
  },
  {
    href: `https://wa.me/${WhatsAppInfo.number.replaceAll(' ','')}`,
    icon: <Image className='h-7 w-7' src="/assets/images/icon/whats.png" alt="Whatsapp" width={800} height={800} />,
    alt: 'Whatsapp',
  },
];

const SocialLink: React.FC = () => {
  return (
    <div className="flex gap-3 items-center">
      {SocialData.map((social, index) => (
        <Link key={index} href={social.href} target="_blank">
          <div className=" text-white bg-secondary" >
            <div  className={`flex justify-center items-center rounded-full h-7 w-7 ${social.href.includes("pinterest.com") || social.href.includes("instagram.com") ? 'border border-white' : ''}`}>{social.icon}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;