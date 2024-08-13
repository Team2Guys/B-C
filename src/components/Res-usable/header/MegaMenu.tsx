import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { blindsSliderItems, curtainsSliderItems } from 'data/data'; // Adjust import based on your actual file structure
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardSlider from 'components/slider/CardSlider';
import { cn } from 'lib/utils';

interface MegaMenuProps {
  label: string;
  className?: string; // Add additional class name for styling if needed
  sliderData: { key: number; src: any; alt: string; title: string }[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  label,
  sliderData,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: Event) => {
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as EventListener,
      );
    };
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        className={cn('py-2 px-4 rounded', className)}
        onClick={handleClick}
      >
        {label}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="mt-7 rounded-xl absolute bg-white  w-full left-1/2 max-w-[90%]  -translate-x-1/2 p-2 py-8 space-y-4 transition-transform transform z-50"
        >
          <div className="flex justify-between px-8">
            <p className="text-primary text-16 font-medium">{label}</p>
            <Link href={'/'}>View All</Link>
          </div>
          <CardSlider
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
