import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import logo from '../../../../public/assets/images/logomain.png';
import MegaMenu from './MegaMenu';
import { menuItems, MobilemenuItems } from 'data/data';
import Sheet from 'components/ui/Drawer';
import { RiMenuFoldLine } from 'react-icons/ri';
import MenuCard from 'components/ui/menu-card';
import SocialLink from '../social-link/social-link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const isActiveLink = (path: string) => pathname === path;

  return (
    <>
      <div className="w-full bg-secondary">
        <Container className="flex flex-wrap gap-4 justify-center md:justify-between items-center py-2 max-w-screen-2xl max-auto ">
          <p className="text-white py-2 text-12 2xl:text-12 font-medium lg:tracking-[0.4px] xl:tracking-[3.4px] leading-relaxed  2xl:leading-loose">
            We can visit you, take measurements, help select fabrics & install
            in 1-2 days. Call Dubai
            <Link className="underline font-medium" href={'tel:04 252 2025'}>
              04 252 2025
            </Link>
            now or email us on
            <Link
              className="underline font-medium"
              href={'mailto:connect@twoguys.ae'}
            >
              connect@twoguys.ae
            </Link>
          </p>
          <SocialLink />
        </Container>
      </div>
      <nav className="bg-lightgrey shadow-lg">
        <Container className="flex w-full items-center justify-between max-w-screen-2xl mx-auto !px-0">
          <Link href={'/'} className="w-3/12 lg:w-1/12">
            <Image width={150} height={150} src={logo} alt="Logo" />
          </Link>
          <div className="w-3/12 lg:w-8/12 ">
            <div className="hidden lg:flex justify-evenly items-center text-12 xl:text-16  whitespace-nowrap lg:-space-x-8 xl:-space-x-3 ">
              {menuItems.map((item, index) => {
                const isActive = isActiveLink(item.path);
                if (item.sliderData) {
                  return (
                    <MegaMenu
                      key={index}
                      label={item.label}
                      sliderData={item.sliderData}
                      className={isActive ? 'font-bold' : ''}
                    />
                  );
                }
                return (
                  <Link
                    key={index}
                    className={`px-3 py-2 rounded-md text-12 xl:text-15 ${isActive ? 'font-bold' : ''}`}
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <Link
            className="py-2 px-2 xl:px-5 rounded-md text-14 xl:text-16 whitespace-nowrap  bg-primary text-black"
            href="/free-consultation"
          >
            Free Consultation
          </Link>
          <div className="flex lg:hidden">
            <Sheet drawerName={<RiMenuFoldLine size={25} />}>
              {MobilemenuItems.map((item, index) => (
                <Sheet
                  key={index}
                  drawerName={
                    <div className="px-3 py-2 rounded-md text-14 font-medium hover:text-black">
                      {item.label}
                    </div>
                  }
                >
                  {item.subItems ? (
                    <div className="grid grid-cols-2 gap-4">
                      {item.subItems.map((subItem) => (
                        <MenuCard
                          key={subItem.key}
                          src={subItem.src}
                          alt={subItem.alt}
                          title={subItem.title}
                        />
                      ))}
                    </div>
                  ) : (
                    <Link
                      className="px-3 py-2 rounded-md text-14 font-medium hover:text-black"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  )}
                </Sheet>
              ))}
            </Sheet>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
