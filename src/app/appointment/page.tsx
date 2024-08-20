import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/endering.png';
import TopHero from 'components/ui/top-hero';
import BookAppointment from 'components/Book-appointment/BookAppointment';
import Container from 'components/Res-usable/Container/Container';

const AppointmentPage = () => {
  return (
    <div>
      <TopHero title="appointment" image={bgBreadcrum} />
      <Container className="pt-16 pb-10">
        <h3 className="font-bold text-33 text-white tracking-[5px] bg-primary w-fit px-2 mx-auto rounded-md">
          BOOK YOUR FREE APPOINTMENT
        </h3>
        <BookAppointment singlePage={true} />
      </Container>
    </div>
  );
};

export default AppointmentPage;
