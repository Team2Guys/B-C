import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import CardSlider from 'components/slider/Slider';
import { blindsSliderItems, curtainsSliderItems } from 'data/data'; // Adjust import based on your actual file structure
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface MegaMenuProps {
  label: string;
  sliderData: { key: number; src: any; alt: string; title: string }[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ label, sliderData }) => {
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
    <div className="">
      <button
        ref={buttonRef}
        className="font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {label}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="mt-7 rounded-xl absolute bg-white w-full left-1/2 max-w-screen-2xl -translate-x-1/2 p-2 py-8 space-y-4 transition-transform transform"
        >
          <div className="flex justify-between px-8">
            <p className="text-primary text-24 font-medium">{label}</p>
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
