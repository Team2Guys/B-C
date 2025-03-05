import BookAppointment from 'components/Book-appointment/BookAppointment'
import React from 'react'

const Bookingform = () => {
  return (
    <>
    <div className="relative flex items-center justify-center bg-[url('/assets/images/ppc-blinds/bgform.png')] bg-cover bg-center mt-5 sm:mt-12 lg:h-[615px]">
    <BookAppointment singlePage={false} className='m-5 lg:m-0' />
    </div>
    </>
  )
}

export default Bookingform