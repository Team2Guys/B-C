import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { GalleryItems } from 'types/interface';

interface gallerProps {
  card: GalleryItems;
  relativeProducts?: boolean;
}
const GalleryCard: React.FC<gallerProps> = ({ card, relativeProducts }) => {
  return (
    <div className="gallery-item relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <Image
        src={card.imageUrl}
        alt={card.title}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-lg"
      />
      <div
        className={`absolute bottom-0 w-full h-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${relativeProducts ? 'hidden' : 'flex'}`}
      >
        <IoSearch size={35} className="text-white" />
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
          href="/"
          className={`border-[1px] border-primary px-2 py-1 rounded-sm text-14 font-light ${relativeProducts ? 'block' : 'hidden'}`}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;
