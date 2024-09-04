'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Modal } from 'antd';
import { GalleryItems } from 'types/interface';
import { generateSlug } from 'data/data';
import { IProduct } from 'types/types';

interface GalleryProps {
  card: IProduct;
  relativeProducts?: boolean;
}

const GalleryCard: React.FC<GalleryProps> = ({ card, relativeProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="gallery-item relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <Image
          src={card?.posterImage?.imageUrl}
          alt={card.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          onClick={showModal}
          className={`absolute bottom-0 w-full h-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${relativeProducts ? 'hidden' : 'flex'}`}
        >
          <IoSearch size={35} className="text-white cursor-pointer" />
        </div>

        <div
          className={`absolute bottom-0 px-2 w-full h-12 flex items-center ${relativeProducts ? 'justify-between' : 'justify-center'} justify-center rounded-se-sm bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <span
            className={`text-black ${relativeProducts ? 'text-16 font-light' : 'text-sm font-medium'}`}
          >
            {card.title}
          </span>
          <Link
            href={`/products/${generateSlug(card.title)}`}
            className={`border-[1px] border-primary px-2 py-1 rounded-sm text-14 font-light ${relativeProducts ? 'block' : 'hidden'}`}
          >
            View More
          </Link>
        </div>
      </div>

      <Modal
        title={card.title}
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered={true}
        width={600}
      >
        <Image
          src={card?.posterImage?.imageUrl}
          alt={card.title}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </Modal>
    </>
  );
};

export default GalleryCard;
