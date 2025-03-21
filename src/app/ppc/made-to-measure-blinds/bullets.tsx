import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

interface BulletsProps {
  features: string[];
}

const Bullets: React.FC<BulletsProps> = ({ features }) => {
  return (
    <div className="p-6 pl-0 rounded-xl">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center font-semibold text-white text-16 sm:text-20">
            <span className="mr-2">
              <FaRegCheckCircle size={20} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bullets;
