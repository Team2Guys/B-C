import Container from 'components/Res-usable/Container/Container';
import { heroSlider } from 'data/data';
import HeroSlide from './HeroSlide';
import dynamic from 'next/dynamic'
const CustomSlider = dynamic(() => import('components/slider/Slider'), {
  loading: () => <div>loading...</div>,
})


function Hero() {
  return (
    <Container>
      <h1 className="hidden">Blinds & Curtains Dubai</h1>

      <div  className="min-h-[60svh] flex justify-center items-center">

        <CustomSlider className="Hero-slider z-40 pb-3 xl:pt-0 2xl:pt-10 content-center min-h-[60svh] xs:h-full md:h-[55vh] lg:h-[65vh] xl:h-[80vh] 2xl:h-[84vh]">
          {heroSlider.map((item: any, index: number) => (
            <HeroSlide item={item} key={index} />
          ))}

        </CustomSlider>

      </div>
    </Container>
  );
}

export default Hero;
