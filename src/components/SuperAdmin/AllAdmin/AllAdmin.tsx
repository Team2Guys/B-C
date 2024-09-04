"use client"

import React, { SetStateAction, useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import Cookies from 'js-cookie';
import { FaEdit } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getAllAdmins } from 'config/fetch';
import { ADMINS_PROPS } from 'types/interfaces';





function Admins({ setselecteMenu, setedit_admins }: ADMINS_PROPS) {
  const [admins, setAdmins] = useState([]);
  const [delLoading, setDelLoading] = useState<string | null>(null);
  const superAdmintoken = Cookies.get('superAdminToken');
  const token = Cookies.get('2guysAdminToken');
  let Finaltoken = superAdmintoken ? superAdmintoken : token;
  const [isClient, setIsClient] = useState(false);


  const { data, isLoading, error } = useQuery<any[]>({
    queryKey: ['admins'],
    queryFn: getAllAdmins,
    enabled: !!Finaltoken,
  });


  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem('superAdminToken');
      if (!token) {

        return;
      }
      setDelLoading(id);
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/deletAdmin/${id}`,
        {
          headers: {
            token: token,
          },
        },
      );
      setAdmins((prevAdmins) =>
        prevAdmins.filter((admin: any) => admin._id !== id),
      );
    } catch (error) {
      console.error('Error deleting admin:', error);
    } finally {
      setDelLoading(null); // Reset loading state after delete operation completes
    }
  };


  useEffect(() => {
    setIsClient(true);
  }, []);



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record: any) => `${record.fullname}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Can Add Product',
      dataIndex: 'canAddProduct',
      key: 'canAddProduct',
      render: (text: any, record: any) => (
        <span>{record.canAddProduct ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Can Delete Product',
      dataIndex: 'canDeleteProduct',
      key: 'canDeleteProduct',
      render: (text: any, record: any) => (
        <span>{record.canDeleteProduct ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Can Add Category',
      dataIndex: 'canAddCategory',
      key: 'canAddCategory',
      render: (text: any, record: any) => (
        <span>{record.canAddCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Can View Product',
      dataIndex: 'canDeleteCategory',
      key: 'canDeleteCategory',
      render: (text: any, record: any) => (
        <span>{record.canDeleteCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Can view Profit',
      dataIndex: 'canCheckProfit',
      key: 'canCheckProfit',
      render: (text: any, record: any) => (
        <span>{record.canCheckProfit ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Can View Total user',
      dataIndex: 'canViewUsers',
      key: 'canViewUsers',
      render: (text: any, record: any) => (
        <span>{record.canViewUsers ? 'Yes' : 'No'}</span>
      ),
    },

    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) =>
      (


        <>

          <div className='flex gap-3'>
            <FaEdit
              className="cursor-pointer text-red-500"
              size={20}
              onClick={(e) => {
                e.stopPropagation();
                const { password, ...withoutPassowrd } = record
                setedit_admins(withoutPassowrd); setselecteMenu(" ")
              }}
            />

{isClient ? (
          delLoading === record._id ? <div><Loader /></div> : (
            <RiDeleteBin6Line
              className="cursor-pointer text-red-500"
              size={20}
              onClick={() => handleDelete(record._id)}
            />
          )
        ) : (
          <div style={{ width: 20, height: 20 }} />
        )}

          </div>
        </>


      )

    },
  ];



  return (
    <div>

      {isLoading ? (
        <div className="flex justify-center mt-10">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-4 items-center text-black dark:text-white ">
            <p>Admins</p>
            <div>
              <Button
                type="primary"
                onClick={() => setselecteMenu('Add Admin')}
                className="cursor-pointer p-2 text-black dark:text-white bg-inherit hover:bg-slate-300 dark:border-strokedark dark:bg-boxdark flex justify-center"
              >
                Add new Admin
              </Button>
            </div>
          </div>
          {(
            <Table
              className="overflow-auto dark:border-strokedark dark:bg-boxdark"
              dataSource={data}
              columns={columns}
              pagination={false}
              rowKey="_id"
            />
          )

          }
        </>
      )}
    </div>
  );
}

export default Admins;
