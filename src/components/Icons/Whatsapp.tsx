import { WhatsAppInfo } from 'data/data';
import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsIcon = () => {
  return (
    <Link
      href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-12 right-6 z-50 flex items-center justify-center w-12 h-12 bg-secondary text-white rounded-full shadow-lg hover:bg-secondary-foreground transition-colors">
      <BsWhatsapp size={24} />
    </Link>
  );
};

export default WhatsIcon;
