import Container from 'components/Res-usable/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Information = ({privarcyImage,privacySectoin}:any) => {
  console.log(privacySectoin,"privacySectoin")
  return (
    <>
    {
      privacySectoin && 
      <div className="bg-[#F5F5F5] py-10 mt-10">
        <Container className='grid grid-cols-12 gap-6'>
        <div className=' col-span-12 md:col-span-6 space-y-2 order-2 md:order-1'>
        <p className='font-robotoSerif font-bold text-2xl md:text-[30px] xl:text-[40px] leading-[120%]'>{privacySectoin?.[0].specsHeading}</p>
        <p className=''>{privacySectoin?.[0].specsDetails}</p>
        <p className='font-robotoSerif font-medium md:font-bold text-xl md:text-2xl leading-[120%]'>{privacySectoin?.[1].specsHeading}</p>
        <p>{privacySectoin?.[1].specsDetails}</p>
        <div className='pt-5 md:pt-10'>
        <Link href="/" className='block w-fit p-2 text-sm md:text-[22px] font-medium text-secondary border rounded-md border-primary' >Read More</Link>
        </div>
        </div>
        <div className='col-span-12 md:col-span-6 order-1 md:order-2'>
        <Image className='h-56 sm:h-96 md:h-[600px] w-full' src={privarcyImage} width={600} height={600} alt='infomation'/>
        </div>
        </Container>
        </div>
    }
    </>
  )
}

export default Information