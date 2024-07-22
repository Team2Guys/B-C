// src/components/CustomButton.tsx
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const CustomButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" text-black font-light text-sm px-2 rounded"
    >
      {children}
    </button>
  );
};

export default CustomButton;
