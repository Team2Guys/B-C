"use client"
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import React from 'react';
import FilterTable from 'components/Dashboard/Tables/FilterTable';
import { ordercolumns } from 'data/table';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { fetchAppointments } from 'config/fetch';
import { IAppointments } from 'types/types';
import { Skeleton } from 'components/ui/skeleton';

const Appointments = () => {
  const token = Cookies.get('2guysAdminToken') || '';
  const {
    data: appointments,
    error:appointmentsError,
    isLoading,
  } = useQuery<IAppointments>({
    queryKey: ['appointments', token],
    queryFn: () => fetchAppointments(token),
    enabled: !!token,
  });
  // if (isLoading) return (
  //   <DefaultLayout>
       
  //         <div className="grid grid-cols-6 gap-4 mb-2">
  //           <Skeleton className="h-12" />
  //           <Skeleton className="h-12" />
  //           <Skeleton className="h-12" />
  //           <Skeleton className="h-12" />
  //           <Skeleton className="h-12" />
  //           <Skeleton className="h-12" />
  //         </div>
          
  //         {Array.from({ length: 5 }).map((_, index) => (
  //           <div key={index} className="grid grid-cols-6 gap-4 mb-2">
  //             <Skeleton className="h-12" />
  //             <Skeleton className="h-12" />
  //             <Skeleton className="h-12" />
  //             <Skeleton className="h-12" />
  //             <Skeleton className="h-12" />
  //             <Skeleton className="h-12" />
  //           </div>
  //         ))}
  //   </DefaultLayout>

  // );

  if (appointmentsError instanceof Error) return <div>Error: {appointmentsError.message}</div>;

  return (
    <>
    <DefaultLayout>
            <Breadcrumb pageName={'View Appointments'} />
          {
            appointments && (
                <FilterTable  data={appointments} columns={ordercolumns} />
            )
          }  
    </DefaultLayout>
    </>

  );
};

export default Appointments;
