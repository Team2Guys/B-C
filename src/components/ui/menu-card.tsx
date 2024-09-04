import { generateSlug } from 'data/data';
import Image from "next/legacy/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface MenuCardProps {
  src: any;
  alt: string;
  title: string;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ src, alt, title, onClick }) => {


  return (
    <div
      onClick={onClick}
      className="space-y-2 hover:text-black cursor-pointer"
    >
      <Image width={600} height={600} src={src} alt={alt} />
      <div>
        <p className="text-15 font-normal text-center">{title}</p>
      </div>
    </div>
  );
};

export default MenuCard;
