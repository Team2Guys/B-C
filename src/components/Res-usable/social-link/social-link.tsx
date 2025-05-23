import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

interface SocialDataType {
  href: string;
  icon: ReactNode;
  alt: string;
  plateform?: string;
}

const SocialData: SocialDataType[] = [
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

];

const SocialLink: React.FC = () => {
  return (
    <div className="flex gap-3 items-center text-white">
      {SocialData.map((social, index) => (
        <Link key={index} href={social.href} target="_blank" aria-label={`Visit our ${social.plateform} page`}>

          <div className="flex justify-center items-center rounded-full h-[28px] w-[28px] text-secondary  border border-secondary">{social.icon}</div>

        </Link>
      ))}
    </div>
  );
};

export default SocialLink;