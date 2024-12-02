'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Image, Modal } from 'antd';
import { GalleryItems } from 'types/interfaces';
import { generateSlug } from 'data/data';
import { IProduct } from 'types/types';
import { useRouter } from 'next/navigation';

interface GalleryProps {
  card: IProduct;
  relativeProducts?: boolean;
  parent?: string;
}

const GalleryCard: React.FC<GalleryProps> = ({
  card,
  relativeProducts,
  parent,
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleNavigation = (event: any, path: string) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <div className=" relative rounded-lg  transition-shadow duration-300 group">
        <Image
          src={card?.posterImage?.imageUrl}
          alt={card.title}
          height={300}
          width={'100%'}
          className=" rounded-xl"
          preview={{
            mask: (
              <div>
                <IoSearch style={{ color: 'white', fontSize: '30px' }} />
              </div>
            ),
          }}
        />
        <div
         onClick={() => handleNavigation (event , `${window.origin}/${parent === 'shutters' ? `${parent}-range` : parent}/${generateSlug(card.title)}`) }
          className={`absolute bottom-0 rounded-b-xl px-2 w-full h-12 flex items-center ${relativeProducts ? 'justify-between' : 'justify-center'} justify-center rounded-se-sm bg-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <span
            className={`text-black text-start text-primary ${relativeProducts ? 'text-12 font-light' : 'text-sm font-medium'}`}
          >
            {card.title}
          </span>
          <div
            onClick={() => handleNavigation (event , `${window.origin}/${parent === 'shutters' ? `${parent}-range` : parent}/${generateSlug(card.title)}`) }
            className={`border border-primary text-primary cursor-pointer rounded-md px-1 lg:px-2 py-1 hover:bg-primary hover:text-white text-12 lg:text-14 text-nowrap ${relativeProducts ? 'block' : 'hidden'}`}
          >
            View More
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
