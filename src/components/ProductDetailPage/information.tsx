import Container from 'components/Res-usable/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Information = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 mt-10">
    <Container className='grid grid-cols-12 gap-6'>
    <div className=' col-span-12 md:col-span-6 space-y-2 order-2 md:order-1'>
    <p className='font-robotoSerif font-bold text-2xl md:text-[30px] xl:text-[40px] leading-[120%]'>Blackout Curtains for Peace, Privacy, and Dubai Sun Control</p>
    <p className=''>Blackout curtains aren’t a luxury in Dubai homes — they’re a quiet essential. They block out the sun, muffle outside noise, and help you keep your space cool and private. Whether you’re winding down early or sleeping through the morning light, blackout fabric helps create calm, comfortable interiors that actually feel like yours</p>
    <p className='font-robotoSerif font-medium md:font-bold text-xl md:text-2xl leading-[120%]'>Blackout Curtains for Peace, Privacy, and Dubai Sun Control</p>
    <p>The Dubai sun is no joke, especially in rooms with large windows. Blackout curtains provide powerful light blocking and help reduce indoor temperature. Some styles even work as discreet thermal curtains,</p>
    <div className='pt-5 md:pt-10'>
    <Link href="/" className='block w-fit p-2 text-sm md:text-[22px] font-medium text-secondary border rounded-md border-primary' >Read More</Link>
    </div>
    </div>

    <div className='col-span-12 md:col-span-6 order-1 md:order-2'>
    <Image className='h-56 sm:h-96 md:h-[600px] w-full' src="/assets/bin/Information.png" width={600} height={600} alt='infomation'/>
    </div>
    </Container>
     </div>
  )
}

export default Information