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
      className="font-light px-3 py-1 transition-all rounded hover:text-dark hover:bg-white "
    >
      {children}
    </button>
  );
};

export default CustomButton;
