import Container from 'components/Res-usable/Container/Container'
import Circletick from 'components/svg/circle-tick'
import Image from 'next/image'
import React from 'react'
import { ISelectedPage } from 'types/types';
interface BannerProps {
  title: string;
  selectedPage?: ISelectedPage | null;
}
const CategoryHero = ({title,selectedPage}:BannerProps) => {
 
 if (!selectedPage) {
    return null;
  }
  return (
    <div className='bg-primary-foreground pt-5 md:pt-0'>
        <Container className='grid grid-cols-12 gap-4 items-center' >
           <div className=' col-span-12 md:col-span-8 space-y-4'>
            <h1 className='font-robotoSerif font-bold text-4xl md:text-5xl'>{title}</h1>
            <p className='font-medium font-roboto text-base md:text-xl max-w-xl'>{selectedPage?.paragraph}</p>
            <div className='grid grid-cols-2 gap-4'>
               {selectedPage.features && selectedPage.features.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center text-sm md:text-xl font-roboto font-medium">
                    <Circletick />
                    <p className='w-[90%]'>{item.text}</p>
                    </div>
                ))}
            </div>
           </div>
           <div className='col-span-12 md:col-span-4'>
            <Image src={"/assets/category/hero.png"} className='w-full h-[320px] rounded-xl' width={600} height={600} alt={"Hero"}/>
           </div>
        </Container>
    </div>
  )
}

export default CategoryHero