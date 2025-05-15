import Container from 'components/Res-usable/Container/Container';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const MainHero = () => {
  return (
 <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/video/mainblinds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <Container className="relative z-20 h-full flex flex-col justify-between p-8 text-white">
        {/* Left Center Text */}
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 font-roboto-serif ">Blinds and Curtains</h1>
          <p className="text-2xl mb-6">Fully Guaranteed For Your Peace Of Mind</p>
          <button className="bg-secondary text-primary font-semibold py-3 px-6 rounded-md w-fit">
            Book A Free Visit
          </button>
        </div>

        {/* Bottom Right Rating */}
        <div className="self-end flex items-center bg-black bg-opacity-60 p-4 rounded-lg">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="text-yellow-400 text-xl" />
            ))}
          </div>
          <span className="text-lg font-semibold">5.0 (120 Reviews)</span>
        </div>
      </Container>
    </div>
  
  );
};

export default MainHero;
