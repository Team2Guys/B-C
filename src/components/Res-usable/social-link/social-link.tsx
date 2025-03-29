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
  plateform?: string;
}

export const SocialData: SocialDataType[] = [
  {
    href: 'https://www.facebook.com/blindsandcurtainsdubai',
    icon: <FaFacebook size={28} />,
    alt: 'Facebook',
    plateform: 'Facebook',

  },
  {
    href: 'https://www.pinterest.com/blindsandcurtainsdubai/',
    icon: <FaPinterest size={20} />,
    alt: 'Pinterest',
    plateform: 'Pinterest',
  },
  {
    href: 'https://www.instagram.com/blindsandcurtainsdubai/',
    icon: <FaInstagram size={20} />,
    alt: 'Instagram',
    plateform: 'Instagram',
  },
  {
    href: `https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`,
    icon: <Image className='h-7 w-7' src="/assets/images/icon/whats.png" alt="Whatsapp" width={50} height={50} />,
    alt: 'Whatsapp',
    plateform: 'Whatsapp',
  },
];

const SocialLink: React.FC = () => {
  return (
    <div className="flex gap-3 items-center text-white">
      {SocialData.map((social, index) => (
        <Link key={index} href={social.href} target="_blank" aria-label={`Visit our ${social.plateform} page`}>
          <div className="" >
            <div className={`flex justify-center items-center rounded-full h-7 w-7 ${social.href.includes("pinterest.com") || social.href.includes("instagram.com") ? 'border border-white' : ''}`}>{social.icon}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;