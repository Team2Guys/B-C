
import BookAppointment from 'components/Book-appointment/BookAppointment'
import Container from 'components/Res-usable/Container/Container'
import React from 'react'

const Bookingform = () => {
  return (
    <>
    <div className="relative bg-[url('/assets/images/ppc-blinds/bgform.png')] bg-cover mt-5 sm:mt-12">
       <Container className="lg:pt-10 pt-5 lg:pb-10 pb-5">
        <BookAppointment singlePage={true} />
      </Container></div>
    </>
  )
}

export default Bookingform