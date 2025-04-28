import React from 'react';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
const SliderInfo = dynamic(() => import('./slider-info'), {
  loading: () => <div>loading...</div>,
});

const MainHero = () => {
  return (
    <div  className="2xl:min-h-[60svh] flex justify-center items">
      <SliderInfo />
    </div>
  
  );
};

export default MainHero;
