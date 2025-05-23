import Container from 'components/Res-usable/Container/Container'
import Circletick from 'components/svg/circle-tick'
import Image from 'next/image'
import React from 'react'
import { CategoryProps } from 'types/product';

const CategoryHero = ({ Data }: CategoryProps) => {
 if (!Data) {
    return null;
  }
  return (
    <div className='bg-primary-foreground py-4 md:py-0'>
        <Container className='grid grid-cols-12 md:gap-4 items-center' >
           <div className=' col-span-12 md:col-span-8 space-y-3 order-2 md:order-1'>
            <h1 className='font-robotoSerif font-bold text-5xl hidden md:block'>{Data.title}</h1>
            <p className='font-normal md:font-medium font-roboto text-lg md:text-xl max-w-xl'>{Data?.description}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
               {Data.headingchecks && Data.headingchecks.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center text-lg md:text-xl font-roboto font-normal md:font-medium">
                    <Circletick />
                    <p className='w-[90%]'>{item.specsDetails}</p>
                    </div>
                ))}
            </div>
           </div>
           <div className='col-span-12 md:col-span-4 order-1 md:order-2'>
            <h1 className='font-robotoSerif font-bold text-2xl text-center md:hidden block'>{Data.title}</h1>
            <Image src={Data.bannerImage?.imageUrl || ""} className='w-full h-[230px] md:h-[320px] rounded-xl' width={600} height={600} alt={"Hero"}/>
           </div>
        </Container>
    </div>
  )
}

export default CategoryHero