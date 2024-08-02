import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={` max-w-[90%] mx-auto px-2 ${className}`}>{children}</div>
  );
};

export default Container;
