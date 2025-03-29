import React from 'react';
import { Image as ImageAntd } from 'antd';
import { IoSearch } from 'react-icons/io5';

interface ColorData {
  imageUrl?: string;
  altText?: string;
}

interface GalleryProps {
  card: {
    imageUrls?: ColorData[] | undefined;
  };
}

const ThumbImage: React.FC<GalleryProps> = ({ card }) => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 2xl:grid-cols-4 xs:mt-14 mt-5 md:px-4 gap-4 w-full">
      <ImageAntd.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        {card?.imageUrls &&
          card.imageUrls.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg transition-shadow duration-300 group mt-2 w-full"
            >
              <ImageAntd
                src={item.imageUrl || '/default-image.jpg'}
                alt={item.altText || 'Image'}
                className="rounded-xl h-[240px] sm:h-[264px] md:h-[280px] lg:h-[364px] w-full"
                width={500}
                height={500}
                loading='lazy'
                preview={{
                  mask: (
                    <div>
                      <IoSearch
                        style={{ color: 'white', fontSize: '30px' }}
                      />
                    </div>
                  ),
                }}
              />
            </div>
          ))}
      </ImageAntd.PreviewGroup>
    </div>
  );
};

export default ThumbImage;
