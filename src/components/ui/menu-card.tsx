import Image from 'next/image';
import React from 'react';

interface MenuCardProps {
  src: any;
  alt: string;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const UpdateShutterTitle = (title: string): string => {
  let updatedTitle = title
    .replace(/Wooden Shutters/i, '')
    .replace(/plantation shutters/i, '')
    .trim();
  return updatedTitle;
};

const MenuCard: React.FC<MenuCardProps> = ({
  src,
  alt,
  title,
  onClick,
  isActive,
}) => {
  function updateProductTitle(title: string): string {
    let updatedTitle = title
      .replace(/dubai/i, '')
      .replace(/made to measure/i, '')
      .trim();
    if (/motorised blinds/i.test(updatedTitle)) {
      updatedTitle = updatedTitle.replace(
        /motorised blinds/i,
        'Automated Blinds',
      );
    }
    return UpdateShutterTitle(updatedTitle);
  }
  return (
    <div
      onClick={onClick}
      className={`space-y-2 hover:text-black cursor-pointer w-full flex flex-col justify-center  whitespace-pre-wrap `}
    >
      <Image
        className={`w-[full] h-[120px] rounded-lg ${
          isActive ? 'border-4 border-primary' : ''
        }`}
        width={600}
        height={600}
        src={src}
        alt={alt}
      />
      <div>
        <p
          className={`text-15 text-center capitalize ${isActive ? 'font-bold' : ''}`}
        >
          {updateProductTitle(title)}
        </p>
      </div>
      <hr
        className={`${isActive ? 'border-b-2 border-primary w-16 mx-auto' : 'border-0'}`}
      />
    </div>
  );
};

export default MenuCard;
