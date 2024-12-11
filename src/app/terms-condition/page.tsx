'use client'
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import React from 'react';
import { usePathname } from 'next/navigation';

const TermsCondition = () => {
  const pathName = usePathname();
  return (
    <>
      <TopHero title="Terms & Condition" image={second} pagename={pathName} />
      <div>Terms & Condition</div>
    </>
  );
};

export default TermsCondition;
