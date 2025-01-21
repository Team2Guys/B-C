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
    <div className="flex flex-wrap max-sm:flex-nowrap xs:mt-14 mt-5 md:px-4 max-sm:overflow-x-auto w-full justify-between">
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
              className="max-sm:flex-shrink-0 relative rounded-lg transition-shadow duration-300 group max-sm:gap-4 w-8/12 xs:w-5/12 sm:w-3/12 mt-2"
            >
              <ImageAntd
                src={item.imageUrl || '/default-image.jpg'}
                alt={item.altText || 'Image'}
                className="rounded-xl h-[240px] sm:h-[264px] md:h-[280px] lg:h-[364px] w-full"
                width={500}
                height={500}
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
