
import React from 'react';

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto pt-5 sm:pt-10 bg-white w-full'>
        {data.map((item, index) => (
          <div key={index} className=' w-full max-h-[616.68px] 2xl:h-[750px] 2xl:max-h-[750px]  h-[616.68px]' >
            <video
              src={item.video}
              muted
              autoPlay
              controls
              preload='none'
              className='w-full aspect-video max-h-[616.68px] h-[616.68px] 2xl:h-[750px] 2xl:max-h-[750px] object-fill'
            ></video>
          </div>
        ))}
      </div>
    </>
  );
};
export default InstaVideoSection;
