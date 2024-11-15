import { WhatsAppInfo } from 'data/data';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsIcon = () => {

  return (
    <a
    href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ','')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-36 right-10 z-50 flex items-center justify-center w-12 h-12 bg-secondary text-white rounded-full shadow-lg hover:bg-secondary-foreground transition-colors"
    >
      <BsWhatsapp size={24} />
    </a>
  );
};

export default WhatsIcon;