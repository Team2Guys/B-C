import Image from 'next/image';
import React from 'react';

interface MenuCardProps {
  src: any;
  alt: string;
  title: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ src, alt, title }) => {
  return (
    <div className="space-y-2 ">
      <Image width={600} height={600} src={src} alt={alt} />
      <div>
        <p className="text-15 font-normal text-center">{title}</p>
      </div>
    </div>
  );
};

export default MenuCard;
