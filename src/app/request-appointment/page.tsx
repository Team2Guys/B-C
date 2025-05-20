import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/endering.png';
import BookAppointment from 'components/Book-appointment/BookAppointment';
import Container from 'components/Res-usable/Container/Container';
import { Metadata } from 'next';
import Breadcrumb from 'components/Res-usable/breadcrumb';
import Testimonial from 'components/ProductDetailPage/testimonial';
export const metadata: Metadata = {
  title: 'Blind And Curtains Dubai | Book Appointment',
  description: 'Spruce up your space with stylish blinds and curtains in Dubai. Book an appointment today for expert advice, custom designs, and perfect fits.',
  openGraph: {
    title: 'Blind And Curtains Dubai | Book Appointment',
    description: 'Spruce up your space with stylish blinds and curtains in Dubai. Book an appointment today for expert advice, custom designs, and perfect fits.',
    url: 'https://blindsandcurtains.ae/request-appointment/',
    images: [
      {
        url: `${bgBreadcrum.src}`,
        alt: 'Blind And Curtains Dubai | Book Appointment',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/request-appointment/',
  },
}

const AppointmentPage = () => {
  return (
    <>
      <Breadcrumb title='Book A Free Visit' />
      <Container className="lg:pt-16 pt-5 pb-0">
        <h1 className="font-bold text-center lg:p-2 sm:p-3 p-0 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-robotoSerif">
          Book  A Free Visit
        </h1>
        <BookAppointment singlePage={true} />
      </Container>
      <Testimonial />
      <Container className='mt-10'>
        <div className="w-full h-52 sm:h-80 overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5315287151398!2d55.2356858!3d25.117714799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f698d0b075de1%3A0x223e3563a8be56be!2sBlinds%20And%20Curtains%20Dubai!5e0!3m2!1sen!2s!4v1747742085493!5m2!1sen!2s" width="100%" height="100%" loading="lazy" className="border-0 w-full h-full"></iframe>
        </div>
      </Container>
    </>
  );
};

export default AppointmentPage;
