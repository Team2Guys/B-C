import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardSlider from 'components/slider/CardSlider';
import { cn } from 'lib/utils';
import { useRouter } from 'next/navigation';
import { ICategory, IProduct } from 'types/types';
import { generateSlug } from 'data/data';

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
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      menuRef.current && !menuRef.current.contains(mouseEvent.relatedTarget as Node) &&
      buttonRef.current &&
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
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    // const slug = generateSlug(title);
    const slug = href;
    route.push(`${process.env.NEXT_PUBLIC_APP_URL}/${slug}`);
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        ref={buttonRef}
        className={cn('py-2 px-4 rounded', className)}
      >
        {title}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="mt-7 rounded-xl absolute bg-white w-full left-1/2 max-w-[90%] -translate-x-1/2 p-2 py-8 space-y-4 transition-transform transform z-50"
        >
          <div className="flex justify-between px-8">
            <p className="text-primary text-16 font-medium">{title}</p>
            <Link onClick={() => setIsOpen(false)} href={`/products/${title}`}>
              View All
            </Link>
          </div>
          <CardSlider
            title={title}
            sliderItems={sliderData}
            buttonClass="rounded-full h-6 w-6 ml-2 bg-primary text-center shadow bg-white hover:bg-primary hover:text-white"

            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
