import React, { useState, useEffect, useRef } from 'react';
import { cn } from 'lib/utils';
import { IProduct } from 'types/types';
import Image from 'next/image';
import Container from '../Container/Container';
import {
  generateSlug,
  megaMenubyRoom,
  megaMenubyStyle,
  megaMenuDynamic,
} from 'data/data';
import { ChangedProductUrl_handler, predefinedPaths } from 'data/urls';
import Link from 'next/link';
import { Collapse } from 'antd';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

interface MegaMenuProps {
  title: string;
  sliderData: any[];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  href?: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  title,
  sliderData,
  className,
  onClick,
  href,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProduct, setactiveProduct] = useState<IProduct | undefined>();
  const [timeoutId, setTimeoutId] = useState<any | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement | any>(null);
  const { Panel } = Collapse;

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const mouseEvent = event as any;

    if (
      menuRef.current &&
      buttonRef.current &&
      mouseEvent.relatedTarget &&
      !menuRef.current?.contains(mouseEvent.relatedTarget as Node) &&
      !buttonRef.current?.contains(mouseEvent.relatedTarget as Node)
    ) {
      const newTimeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 300);

      setTimeoutId(newTimeoutId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mouseEvent = event as any;

      if (
        menuRef.current &&
        !menuRef.current.contains(mouseEvent.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(mouseEvent.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    setactiveProduct(sliderData[0]);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const generatePath = (item: any, parent: string) => {
    const slug = ChangedProductUrl_handler(item.title);
    const basePath = item.href ? `${window.origin}/${item.href}` : `/${slug}`;

    return (
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${parent === 'shutters' ? `${parent}-range` : parent}${['dimout-roller-blinds', 'sunscreen-roller-blinds', 'blackout-roller-blinds'].includes(slug)
          ? '/roller-blinds'
          : ''
        }/${slug}`)
    );
  };

  const MegaMenu_Headings = [
    {
      name: 'By Style',
    },
    {
      name: 'By Room',
    },
    {
      name: 'dynamic',
    },
  ];

  const Desk_topdistributeProducts = () => {
    const styles = megaMenubyStyle.map((item) =>generateSlug(item.productName),);
    const dynamics = megaMenuDynamic.map((item) =>generateSlug(item.productName),
    );
    const rooms = megaMenubyRoom.map((item) => generateSlug(item.productName));
    const result = [[], [], []];

    sliderData.forEach((product) => {
      const slug = generateSlug(product.title);
      if (styles.includes(slug)) {
        //@ts-expect-error
        result[0].push(product);
      } else if (rooms.includes(slug)) {
        //@ts-expect-error
        result[1].push(product);
      } else if (dynamics.includes(slug)) {
        //@ts-expect-error
        result[2].push(product);
      }
    });
    return result;
  };

  const distributeProducts = (columns: number) => {
    const styles = megaMenubyStyle.map((item) =>
      generateSlug(item.productName),
    );
    const dynamics = megaMenuDynamic.map((item) =>
      generateSlug(item.productName),
    );
    const rooms = megaMenubyRoom.map((item) => generateSlug(item.productName));
    const result: IProduct[][] = Array.from({ length: columns }, () => []);

    sliderData.forEach((product) => {
      const slug = generateSlug(product.title);
      if (styles.includes(slug)) {
        result[0].push(product);
      } else if (rooms.includes(slug)) {
        result[1].push(product);
      } else if (dynamics.includes(slug)) {
        result[2].push(product);
      }
    });
    return result;
  };

  const DeskdistributedProducts = Desk_topdistributeProducts();

  const distributedProducts = distributeProducts(3,
  );

  return (
    <>
    <div
      className="hidden lg:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href || ''}
          ref={buttonRef}
          onClick={() => setIsOpen(false)}
          className={cn(
            'px-1 lg:text-10 text-12 xl:text-15 h-full flex items-center justify-center transition-all duration-200',
            className,
          )}
        >
          {title}
        </Link>

      {isOpen && (
        <div
          ref={menuRef}
          className="border-t-8 border-secondary absolute bg-white w-full left-1/2 max-w-[98%] -translate-x-1/2  py-4 space-y-4 transition-transform transform z-50"
        >
          <Container>
            {/* <div className="flex justify-between px-8">
            <p className="text-primary text-16 font-medium">{title}</p>
            <Link onClick={() => setIsOpen(false)} href={`${href}`}>
              View All
            </Link>
          </div> */}

            <div className="grid grid-cols-4 h-full gap-5 w-full">
              {MegaMenu_Headings.map((item, index) => {
                const parent = generateSlug(title);
                const itemName = item.name;
                return (
                  <div key={index} className="flex flex-col gap-5 w-full">
                    <p className="font-bold text-lg  border-b-[3px] border-secondary w-fit">
                      {/* {title + ' ' + item.name} */}
                      <div />
                      {title}{' '}
                      {item.name === 'dynamic'
                        ? parent === 'blinds'
                          ? 'By Function'
                          : parent === 'curtains'
                            ? 'By Fabrics'
                            : parent === 'shutters'
                              ? 'By Colour'
                              : 'By Function'
                        : item.name}
                    </p>
                    {DeskdistributedProducts[index]?.map(
                      (item: any, index: number) => {
                        const path = generatePath(item, title.toLowerCase());
                        return (
                          <>
                            {' '}
                            <Link href={path}
                              key={index}
                              onClick={() => setIsOpen(false)}
                              onMouseEnter={() => setactiveProduct(item)}
                              className={` font-gotham text-15 cursor-pointer whitespace-break-spaces capitalize w-fit link-underline ${activeProduct?.title == item.title ? 'font-semibold drop-shadow-sm' : ' font-normal'}`}
                            >
                              {
                                (title == 'Blinds' && (itemName == 'By Room')) 
                                  ? item.title.replace('Blinds', '') 
                                  : (title == 'Curtains' && itemName == 'By Room') 
                                  ? item.title.replace('Curtains', '') 
                                  : (title == 'Shutters' && (itemName == 'By Room' || itemName == 'dynamic')) 
                                  ? item.title.replace('Shutters', '')
                                  : (title == 'Commercial' && (itemName == 'By Room' || itemName == 'dynamic')) 
                                  ? item.title.replace(/Blinds And Curtains|Curtains/g, '')
                                  : item.title
                              }
                            </Link>
                          </>
                        );
                      },
                    )}
                  </div>
                );
              })}

              <div className="relative h-fit">
                <Image
                  src={activeProduct?.posterImage.imageUrl}
                  alt={activeProduct?.title || 'posterImage'}
                  width={500}
                  height={500}
                  className="bg-contain h-[250px] lg:h-[300px]"
                />
                <p className="absolute bottom-0 z-999 w-full bg-white opacity-80 font-semibold lg:font-bold text-16 lg:text-xl whitespace-normal text-center py-3">
                  {activeProduct?.title}
                </p>
              </div>
            </div>
          </Container>

    
        </div>
      )}
    </div>


      {/* Mobile View */}
      <div className="lg:hidden">
        <Collapse bordered={false} expandIcon={({ isActive }) => isActive ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />} className='bg-transparent'>
          {distributedProducts.map((products, index) => {
              let header_type = ['By Style', 'By Room', 'Dynamic'][index]
           return (
            <Panel header={`${title} ${header_type}`}
            key={index}
            className='custom-panel py-2'
          >
            <ul className="space-y-2">
              {products.map((product: IProduct, idx) => (
                <li key={idx}>
                  <Link href={generatePath(product, title.toLowerCase())} className={`focus:text-black hover:text-black border-b-2 border-transparent hover:border-b-secondary`} onClick={onClick}> 
                  {
                    (title == 'Blinds' && (header_type == 'By Room')) 
                      ? product.title.replace('Blinds', '') 
                      : (title == 'Curtains' && header_type == 'By Room') 
                      ? product.title.replace('Curtains', '') 
                      : (title == 'Shutters' && (header_type == 'By Room' || header_type == 'dynamic')) 
                      ? product.title.replace('Shutters', '') 
                      : product.title
                   }
                  
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
           )})}
        </Collapse>
      </div>
    </>
  );
};

export default MegaMenu;
