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
      className="fixed bottom-[340px] md:bottom-48 right-1 z-50">
      <Image width={100} height={100} className='md:w-14 w-9 h-9 md:h-14' src={whatsapp} alt='whatsapp'/>
    </Link>
  );
};

export default WhatsIcon;
