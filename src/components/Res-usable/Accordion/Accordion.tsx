"use client";
import React from 'react';
import { ReactNode } from "react";
import { FiArrowDownCircle } from "react-icons/fi";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg mb-3">
      <button
        className={`w-full text-left px-4 py-1 bg-light flex justify-between items-center focus:outline-none ${isOpen ? "shadow" : ""}`}
        onClick={onClick}
      >
        <span className="font-normal text-[23px]">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FiArrowDownCircle size={25} />
        </span>
      </button>
      <div className="">

      {isOpen && <div className="py-3  bg-white W mt-1">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
