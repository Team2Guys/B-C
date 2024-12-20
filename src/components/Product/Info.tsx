import Container from 'components/Res-usable/Container/Container';
import React from 'react';
import productimf from '../../../public/assets/images/product/product1.png';
import Image from 'next/image';
import { IInfo } from 'types/types';
import PageSkelton from 'components/Skeleton/PageSkelton';
import Link from 'next/link';

const Info = (selectedPage: IInfo) => {
  // const route = useRouter();
  if (!selectedPage.selectedPage) {
    return <PageSkelton header={true} />;
  }
  console.log(selectedPage.selectedPage, 'selectedPage');
  return (
    <Container className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4 md:w-[80%] text-start mx-0 flex flex-col px-2 md:px-0">
          <h1 className="text-18 leading-8 tracking-[3px]  md:tracking-[10px]  md:text-26 font-semibold  text-center md:text-start">
            {selectedPage.selectedPage.subheading1} |{' '}
            <span className="font-normal">
              {' '}
              {selectedPage.selectedPage.subheading2}
            </span>
          </h1>
          {selectedPage.selectedPage.subheadingContent &&
            selectedPage.selectedPage.subheadingContent.map((item, index) => (
              <p
                key={index}
                className="text-14 md:text-16 lg:text-18 md:leading-[33px] text-[#797D85] text-center md:text-start"
                dangerouslySetInnerHTML={{ __html: item.content as string }}
              ></p>
            ))}
          <div className=" pt-5 text-center md:text-start">
            <Link  href={"/request-appointment"}
              target='_blank'
              className="px-4 py-4 rounded-md bg-secondary text-white font-medium"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-5 md:mt-0">
          <Image
            className="w-auto h-auto rounded-xl"
            width={602}
            height={400}
            src={
              selectedPage.selectedPage.posterImage
                ? selectedPage.selectedPage.posterImage
                : productimf
            }
            alt="product"
          />
        </div>
      </div>
    </Container>
  );
};

export default Info;
