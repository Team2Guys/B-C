import Container from 'components/Res-usable/Container/Container'
import { Button } from 'components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

interface detailprops {
    title?: string;
    subtitle?: string;
    description: string;
    image: any;
    className?: string;
    imageClass?: string;
    description2?: string;
    description3?: string;
  }

const DetailInfo: React.FC<detailprops> = ({
    title,
    subtitle,
    description,
    image,
    className,
    imageClass,
  }) => {

    const route = useRouter();
  return (
    <Container className="mt-20 border-b-2 pb-20 border-[#6F747F]">
    <div className={`flex flex-wrap lg:flex-nowrap lg:gap-20 ${className}`}>
      <div className="w-full xl:w-5/12">
        <div className="space-y-4">
          <h1 className="text-32 md:text-[41px] font-medium">What are {title}</h1>
          <p className="underline underline-offset-8 text-[#6F747F]">
            {subtitle}
          </p>
          <div className="space-y-3 md:space-y-10">
            <p className="text-12 md:text-16 leading-8">{description}</p>
          </div>
          <Button onClick={()=>{route.push("/appointment")}} className='py-6 px-10' variant={"secondary"}>
          Book An Appointment Now
          </Button>
        </div>
      </div>
      <div className='w-full lg:w-1/12 xl:w-0' />
      <div className="w-full xl:w-6/12 mt-4 lg:mt-0">
        <div className={`text-end  ${imageClass}`}>
          <Image
          className='md:h-[526.24px] w-full rounded-3xl object-cover'
            width={455}
            height={420}
            src={image}
            alt="Motorised Blind Image"
          />
        </div>
      </div>
    </div>
  </Container>
  )
}

export default DetailInfo