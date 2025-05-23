'use client';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import Sheet from 'components/ui/Drawer';
import SocialLink from '../social-link/social-link';


import { usePathname } from 'next/navigation';
import { links } from 'data/header_links';
import { TfiEmail } from 'react-icons/tfi';
import { LiaPhoneSolid } from 'react-icons/lia';
import { CgMenuRight } from 'react-icons/cg';
import { Select } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined,
  );
  const [language, setLanguage] = useState('en');
  const [translatorReady, setTranslatorReady] = useState(false);
  const lastLangRef = useRef<string>('en');
  const skipNextUpdateRef = useRef<boolean>(false);

  useEffect(() => {
    // Wait for Google Translate widget to be available
    const interval = setInterval(() => {
      const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectEl && selectEl.options.length > 1) {
        setTranslatorReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleLanguageSwitch = (lang: string) => {
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (!combo) return;

    if (lang === 'en') {
      combo.value = 'en';
      combo.dispatchEvent(new Event('change'));

      // Auto-select Arabic (simulate selection)
      combo.value = 'ar';
      combo.dispatchEvent(new Event('change'));

      skipNextUpdateRef.current = true; // Skip next Arabic update
      lastLangRef.current = 'en';
      setLanguage('en')
      return; // Do not update state
    }


    // Normal flow
    if (combo.value !== lang || lastLangRef.current !== lang) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
      lastLangRef.current = lang;
      setLanguage(lang); // ✅ Only update state now
    }
  }




  const path = usePathname();
  const handleLinkClick = () => {
    setDrawerOpen(false);
    setSelectedLabel(undefined);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {
        path === '/ppc/motorised-blinds/' || path === '/ppc/motorised-curtains/' || path === '/ppc/roller-blinds/' || path === '/ppc/made-to-measure-blinds/' || path === '/ppc/made-to-measure-curtains/' ? "" :

          <div className="w-full bg-primary">
            <Container className="flex flex-wrap md:flex-nowrap justify-between items-center min-h-12">

              <div className="text-white py-2 text-14 sm:text-12 2xl:text-15 font-medium font-roboto  leading-relaxed 2xl:leading-loose max-sm:font-semibold flex  gap-6">
                <Link href="tel:04 252 2025" target='_black' rel='no-referrer' className='flex  gap-1 items-center'>
                  <TfiEmail className='text-secondary text-18' />
                  04 252 2025
                </Link>
                <Link href="mailto:sales@blindsandcurtains.ae" target='_black' rel='no-referrer' className='  gap-1 items-center hidden md:flex'>
                  <LiaPhoneSolid className='text-secondary text-18' />
                  sales@blindsandcurtains.ae
                </Link>

              </div>
              <div>
                <SocialLink />
              </div>
            </Container>
          </div>
      }

      <nav className="sticky -top-1 z-50 py-2 sm:py-0 bg-white">

        {/* mobile container */}

        <Container className="flex w-full justify-between h-12 sm:h-24 max-lg:px-2 items-center gap-1 md:gap-3 lg:gap-0 overflow-hidden ">
          <div className='flex gap-4 items-center'>
            <Link href={'/'} className="w-[130px] h-[90px] relative md:w-[169px] md:h-[115px]">
              <Image
                fill
                loading='lazy'
                src='/assets/images/logomain.webp'
                alt="Logo"
              />
            </Link>
            <div className='!w-[100px] overflow-hidden'>
              {!translatorReady ? 
              <div
                className={`bg-gray-300 h-8 w-full rounded-lg`} />
             : <Select
                value={language}
                onChange={handleLanguageSwitch}
                disabled={!translatorReady}
                className="custom-lang-select !outline-none flex"
                dropdownClassName="custom-lang-dropdown"
                suffixIcon={<IoIosArrowDown className="text-black" />}
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'ar', label: 'Arabic' },
                ]}
              />}
              
            </div>
          </div>

          <div className=" hidden lg:flex gap-[48px] ">
            <div className="hidden lg:flex justify-evenly items-start lg:text-10 font-roboto font-medium  gap-[24px] text-primary text-18 ">
              {links.map((link, index) => {

                return (
                  <Link
                    key={index}
                    href={link.href || ''}
                    className="px-1 lg:text-10 text-12 xl:text-15 h-full flex items-center justify-center transition-all duration-200"

                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div>
              <Link
                className="py-2 px-2 xl:px-5 font-roboto font-bold hidden sm:block rounded-md text-[22px] whitespace-nowrap border border-secondary text-secondary hover:bg-secondary hover:text-primary"
                href="/request-appointment/"
                onClick={handleLinkClick}
              >
                Book  A Free Visit
              </Link>
            </div>

          </div>


          <div className="flex  lg:hidden max-lg:mr-2">
            <Sheet
              drawerName={<CgMenuRight width={20} height={20} className='min-w-6 w-6  h-6' />}
              open={drawerOpen}
              setOpen={setDrawerOpen}
              selectedLabel={selectedLabel}
              mobileBgColor="#E6E4E5"
              className="custom-moblie-sheet mb-10"


            >

              <div className='flex justify-between items-center mt-4 mb-5'>
                <Link href={'/'} className="w-[120px] h-[80px]  relative bg-transparent">
                  <Image
                    fill
                    loading='lazy'
                    src='/assets/images/logomain1.png'
                    alt="Logo"
                  />
                </Link>
                <CgMenuRight className='min-w-6 w-6 h-6 bg-[#F1B42F66]' onClick={() => setDrawerOpen(false)} />

              </div>

              <div className="flex flex-col gap-2">
                {links.map((link, index) => {


                  return (
                    <Link
                      key={index}
                      className={`text-16 border-b text-primary font-robotoSerif font-medium border-[#0000002a] pb-[6px] hover:text-black `}
                      onClick={handleCloseDrawer}
                      href={`${link.href}/`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

              </div>

              <Link
                className="px-3 py-1  mt-5 text-center max-w-[80%] mx-auto block  font-roboto font-semibold text-20 rounded-md whitespace-nowrap border border-secondary text-secondary hover:bg-secondary"
                href="/request-appointment/"
                onClick={handleLinkClick}
              >
                Book A Free Visit
              </Link>
            </Sheet>
          </div>



        </Container>
      </nav>
    </>
  );
};

export default Navbar;