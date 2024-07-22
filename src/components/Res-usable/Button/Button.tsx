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
      className="font-light px-2 rounded"
    >
      {children}
    </button>
  );
};

export default CustomButton;
