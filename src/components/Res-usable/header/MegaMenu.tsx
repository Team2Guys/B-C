import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardSlider from 'components/slider/CardSlider';
import { cn } from 'lib/utils';
import { useRouter } from 'next/navigation';

interface MegaMenuProps {
  label: string;
  className?: string;
  sliderData: { key: number; src: any; alt: string; title: string }[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  label,
  sliderData,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // Track the timeout ID
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const route = useRouter();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the timeout when the user re-enters
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const mouseEvent = event as MouseEvent;

    if (
      menuRef.current &&
      !menuRef.current.contains(mouseEvent.relatedTarget as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(mouseEvent.relatedTarget as Node)
    ) {
      // Delay the closing of the menu
      const newTimeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 300); // 100ms delay to allow smoother transition between button and menu

      setTimeoutId(newTimeoutId); // Save the timeout ID
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      const mouseEvent = event as any;
      if (
        menuRef.current &&
        !menuRef.current.contains(mouseEvent.target as any) &&
        buttonRef.current &&
        !buttonRef.current.contains(mouseEvent.target as any)
      ) {
        setIsOpen(false);
      }
    });

    return () => {
      document.removeEventListener('mousedown', (event) => {
        const mouseEvent = event as any;
        if (
          menuRef.current &&
          !menuRef.current.contains(mouseEvent.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(mouseEvent.target as Node)
        ) {
          setIsOpen(false);
        }
      });
    };
  }, []);

  const handleClick = () => {
    route.push(`/products/${label}`);
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
        {label}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="mt-7 rounded-xl absolute bg-white w-full left-1/2 max-w-[90%] -translate-x-1/2 p-2 py-8 space-y-4 transition-transform transform z-50"
        >
          <div className="flex justify-between px-8">
            <p className="text-primary text-16 font-medium">{label}</p>
            <Link onClick={() => setIsOpen(false)} href={'/product'}>
              View All
            </Link>
          </div>
          <CardSlider
            onClick={() => setIsOpen(false)}
            sliderItems={sliderData}
            previousLabel={<IoIosArrowBack />}
            nextLabel={<IoIosArrowForward />}
            buttonClass="rounded-full h-6 w-6 ml-2 bg-primary text-center shadow bg-white hover:bg-primary hover:text-white"
          />
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
