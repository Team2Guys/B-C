"use client";
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
    <div className="border rounded-lg mb-4">
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
      {isOpen && <div className="py-3 bg-white mt-2">{children}</div>}
    </div>
  );
};

export default Accordion;
