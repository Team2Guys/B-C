import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { AccordionProps } from 'types/product';

const Accordion = ({ items }:AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className=" p-4 space-y-2">
      {items && items.map((item, index) => (
        <div key={index} className="border border-primary rounded-md bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between text-left p-2 md:p-4 font-semibold font-robotoSerif text-lg md:text-xl text-primary"
          >
            {item.specsHeading}
            <span className="text-xl">{openIndex === index ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> }</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-primary font-medium text-base">{item.specsDetails}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
