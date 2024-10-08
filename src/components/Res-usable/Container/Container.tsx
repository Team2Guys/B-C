import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={` lg:max-w-[90%] 2xl:max-w-screen-2xl mx-auto px-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
