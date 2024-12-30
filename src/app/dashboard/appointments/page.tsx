'use client';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { fetchAppointments } from 'config/fetch';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { Modal, Table } from 'antd';
import useColorMode from 'hooks/useColorMode';
import { TbScanEye } from 'react-icons/tb';
import { IAppointments } from 'types/types';
import TableSkeleton from 'components/Dashboard/Tables/TableSkelton';

const Appointments = () => {
   const appointmentColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'Area',
      dataIndex: 'area',
      width: 100,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
    },
    {
      title: 'Phone #',
      dataIndex: 'phone_number',
      width: 150,
    },
    {
      title: 'WhatsApp #',
      dataIndex: 'whatsapp_number',
      width: 120,
    },
    {
      title: 'More Details',
      width:100,
      render: (_:IAppointments, record:IAppointments) => (
        <TbScanEye
          onClick={() => handleShowDetails(record)}
          className="text-30  cursor-pointer "          
        />
      ),
    },
  ];
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredAppointments, setFilteredAppointments] = useState<IAppointments[]>([]);
  
  const [selectedAppointment, setSelectedAppointment] = useState<IAppointments | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
const [loading, setLoading] = useState<boolean>(false);
  const [colorMode, toggleColorMode] = useColorMode();
  console.log(toggleColorMode, 'toggleColorMode');

  const handleShowDetails = (record:IAppointments) => {
    setSelectedAppointment(record);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedAppointment(null);
  };

  const admin = Cookies.get('2guysAdminToken') || '';
  const super_admin = Cookies.get('superAdminToken') || '';
  const token = admin || super_admin;

  const {
    data: appointments,
    isLoading,
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
      <div className={colorMode === 'dark' ? 'dark' : ''}>
      {isLoading ? (
        <TableSkeleton rows={10} columns={1} />
      ) : (
     <>
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
              className='group'
            />
          )
        }
         {isModalVisible && selectedAppointment && (
        <Modal
        title={
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
              {selectedAppointment.name[0]}
            </div>
            <span className="text-lg font-bold">
             {selectedAppointment.name}
            </span>
          </div>
        }
          visible={isModalVisible}
          onCancel={handleCloseModal}
          onOk={handleCloseModal}
          footer={null}
        >
          <div className="space-y-4">
         <div className="flex items-start">
           <span className="w-1/3 font-semibold">Preferred Contact Method:</span>
           <span className="w-2/3">{selectedAppointment.prefered_contact_method}</span>
         </div>
         <div className="flex items-start">
           <span className="w-1/3 font-semibold">Windows:</span>
           <span className="w-2/3">{selectedAppointment.windows}</span>
         </div>
         <div className="flex items-start">
           <span className="w-1/3 font-semibold">Product Type:</span>
           <span className="w-2/3">{selectedAppointment.product_type}</span>
         </div>
         <div className="flex items-start">
           <span className="w-1/3 font-semibold">How User Found Us:</span>
           <span className="w-2/3">{selectedAppointment.how_user_find_us}</span>
         </div>
         <div className="flex items-start">
           <span className="w-1/3 font-semibold">User Query:</span>
           <span className="w-2/3">{selectedAppointment.user_query}</span>
         </div>
         <div className="flex items-start">
           <span className="w-1/3 font-semibold">Preferred Date:</span>
           <span className="w-2/3">{selectedAppointment.prefered_Date}</span>
         </div>
       </div>
        </Modal>
      )}
     </>
      )}
    </div>
      </DefaultLayout>
      
      
    </>
    
  );
};

export default ProtectedRoute(Appointments);