// components/Accordion.tsx
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

type AccordionItem = {
  name: string;
  detail: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className=" p-4 space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-primary rounded-md bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left p-4 font-semibold font-robotoSerif text-base md:text-xl text-primary"
          >
            {item.name}
            <span className="text-xl">{openIndex === index ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> }</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-primary font-medium text-sm md:text-base">{item.detail}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
