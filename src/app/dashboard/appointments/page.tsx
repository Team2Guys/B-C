import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import AppointmentsClient from 'components/Appointmentclient';

const Appointments =() => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName={'View Appointments'} />
        <AppointmentsClient />
      </DefaultLayout>
    </>
  );
};
export default Appointments;

