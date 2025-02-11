import React from 'react'
import { Button } from 'components/ui/button'
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const CButton = () => {
  return (
    <>
    <Button className='w-full' variant={"black"}>
    <Link className='w-full text-xs' href="/request-appointment/">BOOK AN APPOINTMENT</Link>
    </Button>
    <Link className='w-full' href="tel:+971544945339" target='blank'>
    <Button className='w-full text-xs' variant={"Gray"}>CALL NOW</Button>
    </Link>
    <Link className='w-full' href="https://wa.me/+971544945339" target='blank'>
    <Button className='flex items-center justify-center w-full text-xs' variant={"Green"}>
      <FaWhatsapp size={25} />
      <p>WHATSAPP</p>
    </Button></Link>
    </>
  )
}

export default CButton