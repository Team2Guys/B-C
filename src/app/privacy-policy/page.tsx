'use client'
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import React from 'react';
import { usePathname } from 'next/navigation';

const PrivacyPolicy = () => {
  const pathName = usePathname();
  return (
    <>
      <TopHero title="Privacy Policy" image={second} pagename={pathName} />
      <div>Privacy Policy</div>
    </>
  );
};

export default PrivacyPolicy;
