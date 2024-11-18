'use client'
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import React from 'react';
import { usePathname } from 'next/navigation';

const ChooseUs = () => {
  const pathName = usePathname();
  return (
    <>
      <TopHero title="Why Choose Us" image={second} pagename={pathName} />
      <div>Why Choose Us</div>
    </>
  );
};

export default ChooseUs;
