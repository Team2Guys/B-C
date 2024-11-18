'use client'
import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/endering.png';
import TopHero from 'components/ui/top-hero';
import BookAppointment from 'components/Book-appointment/BookAppointment';
import Container from 'components/Res-usable/Container/Container';
import { usePathname } from 'next/navigation';

const AppointmentPage = () => {
  const pathName = usePathname();
  return (
    <div>
      <TopHero title="appointment" image={bgBreadcrum} pagename={pathName} />
      <Container className="lg:pt-16 pt-5 lg:pb-10 pb-5">
        <h3 className="font-bold lg:text-33 text-center lg:p-2 p-3 text-16 text-white tracking-[5px] bg-primary w-fit px-2 mx-auto rounded-md">
          BOOK YOUR FREE APPOINTMENT
        </h3>
        <BookAppointment singlePage={true} />
      </Container>
    </div>
  );
};

export default AppointmentPage;
