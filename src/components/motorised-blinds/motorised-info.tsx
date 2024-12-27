import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import React from 'react';

interface MotorisedInfoProps {
  title?: string;
  subtitle?: string;
  description: string;
  image: any;
  className?: string;
  imageClass?: string;
  description2?: string;
  description3?: string;
  decClass?:string
}

const MotorisedInfo: React.FC<MotorisedInfoProps> = ({
  title,
  subtitle,
  description,
  description2,
  description3,
  image,
  className,
  imageClass,
  decClass,
}) => {
  return (
    <Container className="mt-5 md:mt-20">
      <div className={`flex flex-wrap lg:flex-nowrap lg:gap-4 ${className}`}>
        <div className="w-full lg:w-8/12">
          <div className="space-y-4">
            <h1 className="text-32 md:text-[41px] font-medium text-center sm:text-start">{title || ""}</h1>
            <p className="underline underline-offset-8 text-[#6F747F] text-center sm:text-start">
              {subtitle || ""}
            </p>
            <p className={`text-12 md:text-16 md:leading-8  ${decClass}`} dangerouslySetInnerHTML={{ __html: description || "" }}></p>
            <div className="space-y-3">
              <p className="text-12 md:text-16 md:leading-8 px-1 md:px-0" dangerouslySetInnerHTML={{ __html: description2 || "" }}></p>
              <p className="text-12 md:text-16 md:leading-8 px-1 md:px-0">{description3}</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 my-10 lg:mt-0">
          <div className={`text-end  ${imageClass}`}>
            <Image
              width={455}
              height={420}
              src={image}
              alt="Motorised Blind Image"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MotorisedInfo;
