'use client';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import React, { useEffect, useState } from 'react';
import { appointmentColumns } from 'data/table';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { fetchAppointments } from 'config/fetch';
import { IAppointments } from 'types/types';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { Table } from 'antd';


const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredAppointments, setFilteredAppointments] = useState<IAppointments[]>([]);

  const admin = Cookies.get('2guysAdminToken') || '';
  const super_admin = Cookies.get('superAdminToken') || '';
  const token = admin || super_admin;

  const {
    data: appointments,
  } = useQuery<IAppointments[]>({
    queryKey: ['appointments', token],
    queryFn: () => fetchAppointments(),
    enabled: !!token,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,  
    });
  
    return `${formattedDate} / ${formattedTime}`;
  }
  
  

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    if (appointments) {
     
      const filtered = appointments
        .map((appointment: IAppointments) => ({
          ...appointment,
          prefered_Date: formatDate(appointment.prefered_Date), 
        }))
        .filter((appointment: IAppointments) =>
          appointment.name.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.area.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.email.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.phone_number.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.whatsapp_number.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.windows?.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.how_user_find_us?.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.user_query?.toLowerCase().includes(lowercasedSearchTerm) ||
          appointment.prefered_Date.toLowerCase().includes(lowercasedSearchTerm) 
        );

      const sortedFilteredAppointments = filtered.sort(
        (a, b) => new Date(b.prefered_Date).getTime() - new Date(a.prefered_Date).getTime()
      );

      setFilteredAppointments(sortedFilteredAppointments);
    }
  }, [searchTerm, appointments]);
  


  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName={'View Appointments'} />
        <div className="flex justify-between mb-4 items-center flex-wrap text-black dark:text-white pt-4">
          <input
            className="peer lg:p-3 p-2 block outline-none border rounded-md border-gray-200 dark:bg-white dark:bg-transparent dark:border-white text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none dark:text-black"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {
          appointments && (
            <Table
              scroll={{ y: 110 * 5 }}
              dataSource={filteredAppointments}  
              columns={appointmentColumns}
              pagination={false}
            />
          )
        }
      </DefaultLayout>
    </>
  );
};

export default ProtectedRoute(Appointments);