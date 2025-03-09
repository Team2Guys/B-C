import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import React from 'react';
import { VideoSectionProps } from 'types/types';

const Videoblind: React.FC<VideoSectionProps> = ({ videos, heading }) => {
  return (
    <div className="mt-3 sm:mt-10 xl:mt-14 bg-white py-5 sm:py-10">
      <Container>
        {heading && (
          <h2 className="font-black text-2xl lg:text-[36px] font-serif text-center px-2">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 sm:mb-8 lg:my-8">
          {videos.map((video, index) => (
            <div key={index} className="w-full">
              <video
                src={video.src}
                className="w-full h-auto rounded-md shadow-lg"
                controls
                autoPlay
                muted
                loop
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center gap-2 sm:gap-3'>
        <Link href="/request-appointment/" className='px-4 py-2 text-center font-proxima font-semibold lg:text-17 text-white bg-secondary hover:bg-primary rounded-sm'>BOOK A FREE CONSULTATION</Link>
        <Link href="/estimator/" className='px-4 py-2 font-proxima text-center font-semibold lg:text-17 rounded-sm border border-gray-300 hover:bg-primary '>GET ESTIMATE</Link>
        </div>
      </Container>
    </div>
  );
};

export default Videoblind;
