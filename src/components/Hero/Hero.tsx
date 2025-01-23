import Container from 'components/Res-usable/Container/Container';
import CustomSlider from 'components/slider/Slider';
import { heroSlider } from 'data/data';
import React, { Fragment, } from 'react';
import HeroSlide from './HeroSlide';
function Hero() {
  return (
    <Container>
      <h1 className="hidden">Blinds & Curtains Dubai</h1>
      <CustomSlider className="Hero-slider z-40 pb-3 xl:pt-0 2xl:pt-10 content-center min-h-[60svh]  xs:h-full md:h-[55vh] lg:h-[65vh] xl:h-[80vh] 2xl:h-[84vh]">
        {heroSlider.map((item: any) => {
          return (
            <Fragment key={item.id}>
              <HeroSlide item={item} />
            </Fragment>

          );
        })}
      </CustomSlider>
    </Container>
  );
}

export default Hero;
