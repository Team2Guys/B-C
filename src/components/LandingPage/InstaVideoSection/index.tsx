'use client'
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
interface VideoData {
  video: string;
}
interface InstaVideoSectionProps {
  data: VideoData[];
}

const InstaVideoSection: React.FC<InstaVideoSectionProps> = ({ data }) => {
 

  return (
    <>
      <div className='flex flex-col justify-center items-center mx-auto sm:space-y-3 lg:space-y-4 pt-6 bg-white'>
        <h2 className='text-black text-2xl sm:text-3xl lg:text-5xl font-normal font-serif text-nowrap'>Explore Our Gallery</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto pt-5 sm:pt-10 bg-white'>
        {data.map((item, index) => (
          <div key={index} className='relative w-full' style={{ paddingTop: '177.78%', position: 'relative' }}>
          <iframe
            loading='lazy'
            src={`${item.video}?background=1&muted=1&controls=1&title=0&byline=0&portrait=0&loop=1`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default InstaVideoSection;
