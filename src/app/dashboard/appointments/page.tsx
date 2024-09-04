"use client"
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import React from 'react';
import FilterTable from 'components/Dashboard/Tables/FilterTable';
import { appointmentColumns } from 'data/table';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { fetchAppointments } from 'config/fetch';
import { IAppointments } from 'types/types';

const Appointments = () => {
  const token = Cookies.get('2guysAdminToken') || '';
  const {
    data: appointments,
    error:appointmentsError,
    isLoading,
  } = useQuery<IAppointments[]>({
    queryKey: ['appointments', token],
    queryFn: () => fetchAppointments(token),
    enabled: !!token,
  });

  if (appointmentsError instanceof Error) return <div>Error: {appointmentsError.message}</div>;

  return (
    <>
    <DefaultLayout>
            <Breadcrumb pageName={'View Appointments'} />
          {
            appointments && (
                <FilterTable   data={appointments} columns={appointmentColumns} />
            )
          }  
    </DefaultLayout>
    </>

  );
};

export default Appointments;
