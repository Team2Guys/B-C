import React, { useState, useEffect, useRef } from 'react';
import { cn } from 'lib/utils';
import { usePathname, useRouter } from 'next/navigation';
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

interface MegaMenuProps {
  title: string;
  sliderData: any[];
  className?: string;
  onClick?: (product: IProduct) => void;
  href?: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  title,
  sliderData,
  className,
  href,
  onClick,
}) => {
  const pathURL = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProduct, setactiveProduct] = useState<IProduct | undefined>();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const route = useRouter();

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
      !menuRef.current.contains(mouseEvent.relatedTarget as Node) &&
      !buttonRef.current.contains(mouseEvent.relatedTarget as Node)
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

  const handleClick = (event: React.MouseEvent) => {
    const slug = href;
    const path = `${window.origin}/${slug}`;

    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      route.push(path);
    }

    setIsOpen((prev) => !prev);
  };

  const handleNavigation = (event: any, path: string) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      route.push(path);
    }
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

  const distributeProducts = (arr: any[], columns: number) => {
    const styles = megaMenubyStyle.map((item) =>
      generateSlug(item.productName),
    );
    const dynamics = megaMenuDynamic.map((item) =>
      generateSlug(item.productName),
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

  const distributedProducts = distributeProducts(
    sliderData,
    MegaMenu_Headings.length,
  );
  let currentLocation = window.location;

  console.log(title, 'distributedProducts');
  console.log(title, 'itemName');

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={(event) => handleClick(event)}
        ref={buttonRef}
        className={cn(
          'px-1 lg:text-10 text-12 xl:text-15 h-full flex items-center justify-center transition-all duration-200',
          className,
        )}
      >
        {title}
      </button>

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
                console.log(itemName, "item.title")

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
                    {distributedProducts[index]?.map(
                      (item: any, index: number) => {
                        console.log(item.href, "item")
                        return (
                          <>
                            {' '}
                            <p
                              key={index}
                              onMouseEnter={() => setactiveProduct(item)}
                              onClick={(event) => {
                                const slug = ChangedProductUrl_handler(item.title);
                                const basePath = item.href ? `${window.origin}/${item.href}` : `/${slug}`;

                                const path =
                                  predefinedPaths[slug as keyof typeof predefinedPaths] ||
                                  (slug === 'hotels-restaurants-blinds-curtains'
                                    ? basePath
                                    : `/${parent === 'shutters' ? `${parent}-range` : parent}${['dimout-roller-blinds', 'sunscreen-roller-blinds'].includes(slug)
                                      ? '/roller-blinds'
                                      : ''
                                    }/${slug}`);

                                handleNavigation(event, path);
                                setIsOpen(false);
                              }}
                              className={` font-gotham text-15 cursor-pointer whitespace-break-spaces capitalize w-fit link-underline ${activeProduct?.title == item.title ? 'font-semibold drop-shadow-sm' : ' font-normal'}`}
                            >
                              {
                                ((title == 'Blinds' || title == 'Curtains' || title == 'Shutters') && itemName == 'By Room' || itemName == 'dynamic')
                                  ? item.title.replace(
                                    title == 'Blinds' ? 'Blinds' : title == 'Curtains' ? 'Curtains' : 'Shutters',
                                    ''
                                  )
                                  : item.title
                              }
                            </p>
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

          {/* <CardSlider
            title={title}
            sliderItems={sliderData}
            setIsOpen={setIsOpen}
            buttonClass="rounded-full h-6 w-6 ml-2 bg-primary text-center shadow bg-white hover:bg-primary hover:text-white"
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
          /> */}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
