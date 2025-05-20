import Container from 'components/Res-usable/Container/Container'
import { WhatsAppInfo } from 'data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NeedHelp = () => {
   return (
      <Container>
         <div className='bg-primary sm:mt-0 mt-4 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden'>
            <div className='px-3 py-6 sm:p-6 lg:p-10 text-white flex flex-col gap-4 lg:gap-6 sm:justify-center items-start'>
               <h3 className='text-2xl xs:text-3xl lg:text-4xl font-robotoSerif font-extrabold'>Need Help ?</h3>
               <p className='text-base xs:text-lg lg:text-xl font-normal font-roboto text-start sm:text-start'>Our team is always a message away.</p>
               <p className='text-sm xs:text-base lg:text-base font-roboto text-start text-white opacity-80'>We&apos;re available on WhatsApp for quick and easy support! Feel free to reach out anytime, and we&apos;ll be happy to assist you.</p>
               <Link href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`} target='_blank' aria-label="Chat on WhatsApp" className='text-18 xs:text-22 font-medium font-roboto bg-white w-48 xs:w-56 h-14 rounded-md flex gap-2 text-black justify-center items-center' ><Image width={100} height={100} className='size-6 xs:size-7' src='/assets/images/whatsapp.png' alt='whatsapp'/> WhatsApp Us</Link>
            </div>
            <div className='sm:pt-5'>
              <Image src='/assets/images/callus/needhelp.png' fill className='!relative' alt='need help image' />
            </div>
         </div>
      </Container>
   )
}

export default NeedHelp