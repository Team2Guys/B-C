import React from 'react';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
const SliderInfo = dynamic(() => import('./slider-info'), {
  loading: () => <div>loading...</div>,
});

const MainHero = () => {
  return (
    <>
      <h1 className="hidden">Blinds & Curtains Dubai</h1>
      <SliderInfo />
    </>
  );
};

export default MainHero;
