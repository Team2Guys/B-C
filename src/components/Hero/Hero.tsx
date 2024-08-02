import Container from "components/Res-usable/Container/Container";
import CustomSlider from "components/slider/Slider";
import { heroSlider } from "data/data";
import Image from "next/image";

function Hero() {
  return (
    <Container>

      <section className="border w-full flex">

        <div className="left-side w-1/2 flex flex-col justify-center gap-3">

          <div className="w-full flex items-center gap-2">
            <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="34" y2="1" stroke="black" stroke-width="2" />
            </svg>

            <h5 className="text-black font-gotham text-[25x] font-extralight">    Latest Designs</h5>
          </div>
          <h1 className="text-black font-extrabold text-[53px]">Custom Window <br />
            Blinds & Curtains
          </h1>
          <p className="font-normal text-14">Lorem Ipsum is simply dummy text of the <br /> and typesetting industry.</p>
          <button className="Upper w-fit bg-white text-14 font-semibold text-black rounded-full px-6  py-1 ">SEE ALL</button>

        </div>
        <div className="rigt-side w-1/2 relative">
<div className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1 top-[77px] text-10 text-center"><span>why us?</span></div>
          <CustomSlider>
            {heroSlider.map((item: any) => {
              return (
                <Image className='w-full h-full object-cover' width={500} height={500} alt={item.name} src={item.imageUrl} />
              )
            })}

          </CustomSlider>


        </div>

      </section>

    </Container>
  );
}

export default Hero;
