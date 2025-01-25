import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import phone from "../../../../public/assets/images/phone.jpg"

const Callbutton = () => {
  return (
    <Link
      href="tel:+971544945339"
      target="_blank"
      rel="noopener noreferrer"
       aria-label="Call Phone Number"
      className="fixed bottom-12 left-6 z-50 w-12 h-12 rounded-full"
    >
      <Image width={100} height={100} className='w-12 h-12 rounded-full' src={phone} alt='phone'/>
    </Link>
  )
}

export default Callbutton