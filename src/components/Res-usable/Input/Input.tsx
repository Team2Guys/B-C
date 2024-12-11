import React, { FC } from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  Icons?: any;
}

const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onChange}
      className="mt-4 p-3 border border-gray-300 rounded-md w-full bg-[#F7F6FE]"
    />
  );
};

export default Input;
