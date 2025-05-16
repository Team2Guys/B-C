import Container from 'components/Res-usable/Container/Container'
import { WhatsAppInfo } from 'data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NeedHelp = () => {
   return (
      <Container className='my-16'>
         <div className='bg-primary-foreground grid grid-cols-1 md:grid-cols-2'>
            <div className='px-3 py-6 sm:p-6 lg:p-10 text-primary flex flex-col gap-4 lg:gap-6 items-center sm:items-start'>
               <h3 className='text-2xl xs:text-3xl lg:text-4xl font-robotoSerif font-extrabold'>Need Help ?</h3>
               <p className='text-base xs:text-lg lg:text-xl font-medium font-roboto text-center sm:text-start'>Our team is always a message away.</p>
               <p className='text-base xs:text-lg lg:text-xl font-medium font-roboto text-center sm:text-start'>We&apos;re available on WhatsApp for quick and easy support! Feel free to reach out anytime, and we&apos;ll be happy to assist you.</p>
               <Link href={`https://wa.me/${WhatsAppInfo.number.replaceAll(' ', '')}`} target='_blank' aria-label="Chat on WhatsApp" className='text-18 xs:text-22 font-medium font-roboto bg-secondary w-48 xs:w-56 h-14 rounded-md flex gap-2 justify-center items-center' ><Image width={100} height={100} className='size-6 xs:size-7' src='/assets/images/whatsapp.png' alt='whatsapp'/> WhatsApp Us</Link>
            </div>
            <div>
              <Image src='/assets/images/callus/needhelp.png' fill className='!relative' alt='need help image' />
            </div>
         </div>
      </Container>
   )
}

export default NeedHelp