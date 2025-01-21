import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/about.jpg';
import Container from 'components/Res-usable/Container/Container';
import aboutUsImg from '../../../public/assets/images/blind-curtains-dubai/blinds-curtains-dubai.png';
import { AboutUsPara, OurHistoryData, UsHistoryPara } from 'data/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blinds and Curtains Dubai | Made to Measure Blinds | About Us',
  description:
    'Learn all about Blinds and Curtains Dubai. We make custom blinds and curtains just for you. Stylish, high-quality, and perfect for your home or office.',
  openGraph: {
    title: 'Blinds and Curtains Dubai | Made to Measure Blinds | About Us',
    description:
      'Learn all about Blinds and Curtains Dubai. We make custom blinds and curtains just for you. Stylish, high-quality, and perfect for your home or office.',
    url: 'fullUrl',
    images: [
      {
        url: 'imageUrl',
        alt: 'Blinds and Curtains Dubai | Made to Measure Blinds | About Us',
      },
    ],
  },
  alternates: {
    canonical: 'about-us',
  },
};
const AboutUsPage = () => {
  return (
    <div>
      <TopHero title="About Us" image={bgBreadcrum.src} />
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
            <p key={index} className="mt-2 sm:mt-5 leading-6 text-paralight">
              {item}
            </p>
          ))}
        </div>
      </Container>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 xs:px-2 px-6 sm:py-10 md:px-10">
        <div>
          <div className="mt-5 pe-4 flex flex-col sm:gap-4">
            {UsHistoryPara.paragraph.map((item, index) => (
              <p
                key={index}
                className="leading-6 text-paralight mb-4 text-16"
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-0 relative items-center sm::w-[85%] mx-auto w-full">
          <div
            className="me-5 sm:me-14 h-[72%] 2xl:h-[71%] border border-dashed border-btnclr hidden sm:block  mt-7 xl:mt-5 2xl:mt-3"
            style={{
              borderImage:
                'repeating-linear-gradient(135deg, #a9b4a4, #a9b4a4 10px, transparent 10px, transparent 20px) 1',
            }}
          ></div>
          <div className="flex flex-col max-sm:space-y-5">
            {OurHistoryData.map((item) => (
              <>
                <div className="relative" key={item.id}>
                  <div className="absolute top-1/2 -left-14 -translate-y-1/2 sm:flex items-center hidden">
                    <div
                      className="border-dashed border border-btnclr w-6"
                      style={{
                        borderImage:
                          'repeating-linear-gradient(90deg, #a9b4a4, #a9b4a4 10px, transparent 10px, transparent 20px) 1',
                      }}
                    ></div>
                    <div className="flex justify-center items-center w-16 xs:w-20 h-16 xs:h-20 rounded-full bg-btnclr text-white font-semibold tracking-widest">
                      {item.year}
                    </div>
                  </div>
                  <div className="bg-white sm:bg-transparent hover:bg-white p-3 sm:p-6 xs:pt-10 pb-8 ps-2 sm:ps-16 pe-6 xs:pe-10 rounded-bl-[30px] rounded-tr-[30px]">
                    <h3
                      className="text-18 xs:text-20 sm:text-24 leading-8 font-bold"
                      dangerouslySetInnerHTML={{ __html: item.heading }}
                    ></h3>
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
