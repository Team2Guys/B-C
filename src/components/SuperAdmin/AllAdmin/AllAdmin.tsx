"use client"

import React, { useState } from 'react';
import { Table } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loader from 'components/Loader/Loader';
import { FaEdit } from 'react-icons/fa';
import { admin_del_handler} from 'config/fetch';
import { ADMINS_PROPS } from 'types/interfaces';
import revalidateTag from 'components/ServerActons/ServerAction';

function Admins({ setselecteMenu, setedit_admins, adminsData }: ADMINS_PROPS) {
  const [delLoading, setDelLoading] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      setDelLoading(id);
      console.log(id, "id")
      await admin_del_handler(id)
      revalidateTag('admins')
    } catch (error) {
      console.error('Error deleting admin:', error);
    } finally {
      setDelLoading(null);
    }
  };


  console.log(adminsData, "adminsData")

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      render: (text: any, record: any) => `${record.fullname}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 260,
    },
    {
      title: 'Add Product',
      dataIndex: 'canAddProduct',
      key: 'canAddProduct',
      width: 130,
      render: (text: any, record: any) => (
        <span>{record.canAddProduct ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Edit Product',
      dataIndex: 'canEditProduct',
      key: 'canEditProduct',
      width: 130,
      render: (text: any, record: any) => (
        <span>{record.canEditProduct ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Del Product',
      dataIndex: 'canDeleteProduct',
      key: 'canDeleteProduct',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canDeleteProduct ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Add Category',
      dataIndex: 'canAddCategory',
      key: 'canAddCategory',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canAddCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Del Category',
      dataIndex: 'canDeleteCategory',
      key: 'canDeleteCategory',
      width: 130,
      render: (text: any, record: any) => (
        <span>{record.canDeleteCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Edit Category',
      dataIndex: 'canEditCategory',
      key: 'canEditCategory',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canEditCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Add Sub Category',
      dataIndex: 'canAddSubCategory',
      key: 'canAddSubCategory',
      width: 150,

      render: (text: any, record: any) => (
        <span>{record.canAddSubCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Del Sub Category',
      dataIndex: 'canDeleteSubCategory',
      key: 'canDeleteSubCategory',
      width: 150,

      render: (text: any, record: any) => (
        <span>{record.canDeleteSubCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Edit Sub Category',
      dataIndex: 'canEditSubCategory',
      key: 'canEditSubCategory',
      width: 150,

      render: (text: any, record: any) => (
        <span>{record.canEditSubCategory ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'View Appointments',
      dataIndex: 'canViewAppointments',
      key: 'canViewAppointments',
      width: 160,

      render: (text: any, record: any) => (
        <span>{record.canViewAppointments ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'View Amins',
      dataIndex: 'canVeiwAdmins',
      key: 'canVeiwAdmins',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canVeiwAdmins ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Total products',
      dataIndex: 'canVeiwTotalproducts',
      key: 'canVeiwTotalproducts',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canVeiwTotalproducts ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Total Category',
      dataIndex: 'canVeiwTotalCategorie',
      key: 'canVeiwTotalCategorie',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canVeiwTotalCategorie ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Total Sub Category',
      dataIndex: 'canVeiwTotalSubCategories',
      key: 'canVeiwTotalSubCategories',
      width: 180,

      render: (text: any, record: any) => (
        <span>{record.canVeiwTotalSubCategories ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Add Blog',
      dataIndex: 'canAddBlog',
      key: 'canAddBlog',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canAddBlog ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Del Blog',
      dataIndex: 'canDeleteBlog',
      key: 'canDeleteBlog',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canDeleteBlog ? 'Yes' : 'No'}</span>
      ),
    },
    {
      title: 'Edit Blog',
      dataIndex: 'canEditBlog',
      key: 'canEditBlog',
      width: 130,

      render: (text: any, record: any) => (
        <span>{record.canEditBlog ? 'Yes' : 'No'}</span>
      ),
    },

    {
      title: 'Actions',
      key: 'actions',
      width: 130,

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
                console.log(password, "password")
                console.log(password, "password")
              }}
            />

            {
              delLoading === record._id ? <div><Loader color="#fff" /></div> : (
                <RiDeleteBin6Line
                  className="cursor-pointer text-red-500"
                  size={20}
                  onClick={() => handleDelete(record.id)}
                />
              )
          
            }

          </div>
        </>


      )

    },
  ];



  return (
    <div>

      {

        (
          <>
            <div className="flex justify-between mb-4 items-center text-black dark:text-white ">
              <p></p>
              <div>
                <button
                  onClick={() => setselecteMenu('Add Admin')}
                  className=" bg-secondary text-white rounded-md   lg:p-2 md:p-2"
                >
                  Add new Admin
                </button>
              </div>
            </div>
    
              <Table
                className="dark:border-strokedark dark:bg-dashboardDark"
                scroll={{ y: 110 * 5 }}
                dataSource={adminsData}
                columns={columns}
                pagination={false}
                rowKey="id"
              />
          
          </>
        )}

    </div>
  );
}

export default Admins;
