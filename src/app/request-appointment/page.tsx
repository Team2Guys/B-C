import React from 'react';
import dynamic from 'next/dynamic';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/endering.png';
import TopHero from 'components/ui/top-hero';
import Container from 'components/Res-usable/Container/Container';
import { Metadata } from 'next';
const BookAppointment = dynamic(() => import('components/Book-appointment/BookAppointment'), { ssr: false });


export const metadata: Metadata = {
  title: 'Blind And Curtains Dubai | Book Appointment',
  description: 'Spruce up your space with stylish blinds and curtains in Dubai. Book an appointment today for expert advice, custom designs, and perfect fits.',
  openGraph: {
    title: 'Blind And Curtains Dubai | Book Appointment',
    description: 'Spruce up your space with stylish blinds and curtains in Dubai. Book an appointment today for expert advice, custom designs, and perfect fits.',
    url: 'fullUrl',
    images: [
      {
        url: 'imageUrl',
        alt: 'Blind And Curtains Dubai | Book Appointment',
      },
    ],
  },
  alternates: {
    canonical: 'request-appointment',
  },
}

const AppointmentPage = () => {
  return (
    <div>
      <TopHero
        title="appointment"
        image={bgBreadcrum.src}
      />
      <Container className="lg:pt-16 pt-5 lg:pb-10 pb-5">
        <h3 className="font-bold lg:text-33 text-center lg:p-2 p-3 text-16 text-white tracking-[5px] bg-primary w-fit px-2 mx-auto rounded-md uppercase">
        Book a free appointment
        </h3>
        <BookAppointment singlePage={true} />
      </Container>
    </div>
  );
};

export default AppointmentPage;
