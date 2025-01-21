import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import React from 'react';
import AppointmentButton from 'components/Res-usable/bookappointmentbutton';

interface MotorisedInfoProps {
  title?: string;
  subtitle?: string;
  description: string;
  image: any;
  className?: string;
  imageClass?: string;
  description2?: string;
  description3?: string;
  decClass?: string
  showButton?: boolean;
}

const MotorisedInfo: React.FC<MotorisedInfoProps> = ({
  title,
  subtitle,
  description,
  description2,
  description3,
  image,
  className,
  decClass,
  showButton = true,
}) => {
  return (
    <Container className="mt-3 md:mt-5 lg:mt-14">
      <div className={`flex flex-wrap lg:flex-nowrap lg:gap-10 ${className}`}>
        <div className="w-full lg:w-/12 xl:w-6/12">
          <div className="space-y-4">
            <h2 className="text-32 md:text-[41px] font-medium text-center sm:text-start">{title || ""}</h2>
            <p className="underline underline-offset-8 text-[#6F747F] text-center sm:text-start">
              {subtitle || ""}
            </p>
            <p className={`text-12 md:text-16 leading-6 md:leading-8  ${decClass}`} dangerouslySetInnerHTML={{ __html: description || "" }}></p>
            <div className="space-y-3">
              <p className="text-12 md:text-16 leading-6 md:leading-8 " dangerouslySetInnerHTML={{ __html: description2 || "" }}></p>
              <p className="text-12 md:text-16 leading-6 md:leading-8 ">{description3}</p>
            </div>
            <span className="hidden md:block">

              {showButton && <AppointmentButton />}
            </span>
          </div>
        </div>
        <div className="w-full lg:6/12 xl:w-5/12 mb-10 mt-4 md:mt-5 lg:mt-0">
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <Image
              width={455}
              height={420}
              src={image}
              alt="Motorised Blind Image"
              className="w-full h-72 xs:h-[400px] lg:h-[600px] xl:h-[400px]" />
            <span className="block md:hidden">

              {showButton && <AppointmentButton />}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MotorisedInfo;
