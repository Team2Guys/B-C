'use client';

import React, { useState } from 'react';
import { Table, notification } from 'antd';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { LiaEdit } from 'react-icons/lia';
import { useAppSelector } from 'components/Others/HelperRedux';
import useColorMode from 'hooks/useColorMode';
import Cookies from 'js-cookie';
import { CategoryProps, ICategory } from 'types/types';
import Swal from 'sweetalert2';

const TableTwo = ({
  setMenuType,
  seteditCategory,
  categories,
}: CategoryProps) => {
  const admin_token = Cookies.get('2guysAdminToken');
  const super_admin_token = Cookies.get('superAdminToken');

  const token = admin_token ? admin_token : super_admin_token;

  const [category, setCategory] = useState<ICategory[] | undefined>(categories);
  const [colorMode, toggleColorMode] = useColorMode();

  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  console.log(toggleColorMode, 'toggleColorMode');
  const canAddCategory =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canAddCategory : true);
  const canDeleteCategory =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canDeleteCategory : true);
  const canEditCategory =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canEditCategory : true);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts: ICategory[] =
    category?.filter((product: any) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  const confirmDelete = (key: any) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, the blog cannot be recovered.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(key);
      }
    });
  };

  const handleDelete = async (key: any) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/deleteCategory/${key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setCategory((prev: any) => prev.filter((item: any) => item.id != key));
      notification.success({
        message: 'Category Deleted',
        description: 'The category has been successfully deleted.',
        placement: 'topRight',
      });
    } catch (err) {
      notification.error({
        message: 'Deletion Failed',
        description: 'There was an error deleting the category.',
        placement: 'topRight',
      });
    }
  };

  const handleEdit = (record: any) => {
    if (seteditCategory) {
      seteditCategory(record);
      setMenuType('CategoryForm');
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'posterImageUrl',
      key: 'posterImageUrl',
      render: (text: any, record: ICategory) => (
        <Image
          src={record.posterImage?.imageUrl || ''}
          alt={`Image of ${record.title}`}
          width={50}
          height={50}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'date',
      render: (text: any, record: ICategory) => {
        const createdAt = new Date(record.createdAt);
        return <span>{createdAt.toLocaleDateString()}</span>;
      },
    },
    {
      title: 'Time',
      dataIndex: 'createdAt',
      key: 'time',
      render: (text: string, record: ICategory) => {
        const createdAt = new Date(record.createdAt);
        return <span>{createdAt.toLocaleTimeString()}</span>;
      },
    },
    {
      title: 'Last Edited By',
      dataIndex: 'last_editedBy',
      key: 'time',
      render: (text: string, record: ICategory) => {
        return <span>{record.last_editedBy}</span>;
      },
    },
    {
      title: 'Edit',
      key: 'Edit',
      render: (text: any, record: ICategory) => (
        <LiaEdit
          className={`cursor-pointer ${canEditCategory && 'text-black dark:text-white'} ${!canEditCategory && 'cursor-not-allowed text-slate-300'}`}
          size={20}
          onClick={() => handleEdit(record)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: ICategory) => (
        <RiDeleteBin6Line
          className={`cursor-pointer ${canDeleteCategory && 'text-red'} ${!canDeleteCategory && 'cursor-not-allowed text-slate-300'
            }`}
          size={20}
          onClick={() => {
            if (canDeleteCategory) {
              confirmDelete(record.id);
            }
          }}
        />
      ),
    },
  ];

  return (
    <div className={colorMode === 'dark' ? 'dark' : ''}>
      <>
        <div className="flex justify-between mb-4 items-center text-dark dark:text-white">
          <input
            className="peer lg:p-3 p-2 block outline-none border dark:text-black rounded-md border-gray-200 dark:bg-boxdark dark:drop-shadow-none text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none"
            type="search"
            placeholder="Search Category"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div>
            <p
              className={`${canAddCategory && 'cursor-pointer'} lg:p-2 md:p-2 ${canAddCategory &&
                ' bg-secondary text-white rounded-md hover:text-white '
                } flex justify-center ${!canAddCategory && 'cursor-not-allowed '
                }`}
              onClick={() => {
                seteditCategory && seteditCategory(null);
                if (canAddCategory) {
                  setMenuType('Add Category');
                }
              }}
            >
              Add Category
            </p>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <Table
            className="overflow-x-scroll lg:overflow-auto w-full"
            dataSource={filteredProducts}
            columns={columns}
            pagination={false}
            rowKey="_id"
          />
        ) : (
          <p className="text-xl text-black dark:text-white">
            No Categories found
          </p>
        )}
      </>
    </div>
  );
};

export default TableTwo;
