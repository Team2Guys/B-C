import { generateSlug } from 'data/data';
import Image from 'next/image';
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
      className="space-y-2 hover:text-black cursor-pointer flex flex-col items-center"
    >
      <Image className='w-[120px] h-[120px] rounded-lg' width={600} height={600} src={src} alt={alt} />
      <div>
        <p className="text-15 font-normal ">{title}</p>
      </div>
    </div>
  );
};

export default MenuCard;
