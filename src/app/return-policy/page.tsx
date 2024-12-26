'use client';
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import React from 'react';
import { usePathname } from 'next/navigation';

const ReturnPolicy = () => {
  const pathName = usePathname();
  return (
    <>
      <TopHero title="Return Policy" image={second.src} pagename={pathName} />
      <div>Return Policy</div>
    </>
  );
};

export default ReturnPolicy;
