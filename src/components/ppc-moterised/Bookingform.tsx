
import BookAppointment from 'components/Book-appointment/BookAppointment'
import Container from 'components/Res-usable/Container/Container'
import React from 'react'

const Bookingform = () => {
  return (
    <>
    <div className="relative bg-[url('/assets/images/ppc-blinds/bgform.png')] bg-cover mt-5 sm:mt-12" >
       <Container className="lg:pt-10 pt-5 lg:pb-10 pb-5" >
       <h3 className="font-black font-serif bg-white text-black lg:text-33 text-center mb-5 md:mb-8 lg:p-2 p-3 text-16 tracking-[5px] w-fit px-2 mx-auto rounded-md uppercase">
        BOOK YOUR FREE CONSULTAION
        </h3>
        <BookAppointment singlePage={true} />
      </Container>
      </div>
    </>
  )
}

export default Bookingform