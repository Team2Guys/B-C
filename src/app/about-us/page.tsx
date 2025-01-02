'use client';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/about.jpg';
import Container from 'components/Res-usable/Container/Container';
import aboutUsImg from '../../../public/assets/images/about.png';
import {
  AboutUsPara,
  OurHistoryData,
  UsHistoryPara,
} from 'data/data';
import { usePathname } from 'next/navigation';

const AboutUsPage = () => {
  const pathName = usePathname();
  return (
    <div>
      <TopHero title="About Us" image={bgBreadcrum.src} pagename={pathName} />
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 xs:p-2 px-6 2xl:gap-20 xs:py-20 md:px-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${aboutUsImg.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            borderRadius: '10px',
          }}
        ></div>
        <div>
          <h4 className="font-semibold mb-6 text-paralight text-center sm:text-start">
            {AboutUsPara.subheading}
          </h4>
          {AboutUsPara.heading.map((item, index) => (
            <h2
              className={`text-28 xs:text-36 lg:text-5xl leading-snug lg:leading-snug text-center sm:text-start ${item == 'WELCOME TO' ? 'font-normal' : 'font-bold text-wrap'}`}
              key={index}
            >
              {item}
            </h2>
          ))}
          {AboutUsPara.paragraph.map((item, index) => (
            <p key={index} className="mt-5 leading-6 text-paralight">
              {item}
            </p>
          ))}
          {/* <div className="flex justify-between gap-5 mt-6">
            {aboutUsReviewData.map((item) => (
              <div key={item.id}>
                <span className="font-bold text-3xl xs:text-4xl sm:text-5xl text-primary">
                  <CountUp
                    end={item.keys}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                </span>
                <p className="font-medium mt-2 text-12 xs:text-14 sm:text-base text-paralight">
                  {item.title}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </Container>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 xs:px-2 px-6 py-10 md:px-10">
        <div>
          {/* <h4 className="font-semibold xs:mb-6 text-paralight xs:text-base text-12 text-center sm:text-start">
            {UsHistoryPara.subheading}
          </h4>
          {UsHistoryPara.heading.map((item, index) => (
            <h2
              className={`text-22 xs:text-36 lg:text-5xl leading-snug lg:leading-snug font-bold text-wrap text-center sm:text-start`}
              key={index}
            >
              {item}
            </h2>
          ))} */}
          <div className="mt-5 pe-4 flex flex-col gap-4">
            {UsHistoryPara.paragraph.map((item, index) => (
              <p key={index} className="leading-6 text-paralight mb-4 text-16" dangerouslySetInnerHTML={{ __html : item}}></p>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-0 relative items-center sm::w-[85%] mx-auto w-full">
          <div className="me-4 sm:me-14 h-5/6 border-dashed border border-btnclr hidden sm:block"></div>
          <div className="flex flex-col">
            {OurHistoryData.map((item) => (
              <>
                <div className="flex sm:hidden justify-center items-center w-16 xs:w-20 h-16 xs:h-20 rounded-full bg-btnclr text-white font-semibold">
                  {item.year}
                </div>
                <div className="relative" key={item.id}>
                  <div className="absolute top-1/2 -left-14 -translate-y-1/2 sm:flex items-center hidden">
                    <div className="border-dashed border border-btnclr w-4"></div>
                    <div className="flex justify-center items-center w-16 xs:w-20 h-16 xs:h-20 rounded-full bg-btnclr text-white font-semibold">
                      {item.year}
                    </div>
                  </div>
                  <div className="bg-transparent hover:bg-white p-3 sm:p-6 xs:pt-10 pb-8 ps-2 sm:ps-16 pe-6 xs:pe-10 rounded-bl-[30px] rounded-tr-[30px]">
                    <h3 className="text-18 xs:text-20 sm:text-24 leading-8 font-bold" dangerouslySetInnerHTML={{ __html : item.heading}}></h3>
                    <p className="text-paralight font-normal leading-6 mt-2 text-12 xs:text-14 sm:text-normal">
                      {item.discription}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;
