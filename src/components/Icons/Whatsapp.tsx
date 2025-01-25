import { WhatsAppInfo } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import whatsapp from "../../../public/assets/images/whatsapp.png"

const WhatsIcon = () => {
  return (
    <Link
      href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-12 right-6 z-50">
      <Image width={100} height={100} className='w-12 h-12' src={whatsapp} alt='whatsapp'/>
    </Link>
  );
};

export default WhatsIcon;
