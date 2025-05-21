'use client';

import React, { useState } from 'react';
import { Table, notification } from 'antd';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { LiaEdit } from 'react-icons/lia';
import useColorMode from 'hooks/useColorMode';
import { ChangedProductUrl_handler } from 'data/urls';
import { useAppSelector } from 'components/Others/HelperRedux';
import Cookies from 'js-cookie';
import { FaRegEye } from 'react-icons/fa';
import { generateSlug } from 'data/data';
import { CategoryProps, ICategory } from 'types/types';
import Swal from 'sweetalert2';

const ViewSubcategries = ({
  setMenuType,
  seteditCategory,
  editCategory,
  subCategories,
  categories,
}: CategoryProps) => {
  const admin_token = Cookies.get('2guysAdminToken');
  const super_admin_token = Cookies.get('superAdminToken');

  const token = admin_token ? admin_token : super_admin_token;
  console.log(editCategory, 'editCategory');
  const [category, setCategory] = useState<ICategory[] | undefined>(
    subCategories,
  );
  const [colorMode, toggleColorMode] = useColorMode();
  console.log(toggleColorMode, 'toggleColorMode');

  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);

  const canDeleteCategory =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canDeleteSubCategory : true);
  const canAddCategory =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canAddSubCategory : true);
  const canEditCategory =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canEditSubCategory : true);

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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/deletesubCategory/${key}`,
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
      render: (text: any, record: any) =>
        record.posterImage.imageUrl ? (
          <Image
            src={record.posterImage.imageUrl || ''}
            alt={`Image of ${record.name}`}
            width={50}
            height={50}
          />
        ) : (
          <div>No Image Available</div>
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
      render: (text: string, record: any) => {
        return <span>{record.last_editedBy}</span>;
      },
    },
    {
      title: 'Preview',
      key: 'Preview',
      render: (text: string, record: ICategory) => {
        const category = categories?.find((i) => i.id === record.CategoryId);
        if (category === undefined) return null;
        const parent = generateSlug(category?.title);
        return (
          <FaRegEye
            className="cursor-pointer"
            onClick={() => {
              const url = `/${parent === 'shutters' ? `${parent}-range` : parent}/${ChangedProductUrl_handler(record.title)
                }
                  `;
              window.open(url, '_blank');
            }}
          />
        );
      },
    },
    {
      title: 'Edit',
      key: 'Edit',
      render: (text: any, record: any) => (
        <LiaEdit
          className={`cursor-pointer ${canEditCategory && 'text-black dark:text-white'} ${!canEditCategory && 'cursor-not-allowed text-black dark:text-slate-300'}`}
          size={20}
          onClick={() => handleEdit(record)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <RiDeleteBin6Line
          className={`cursor-pointer ${canDeleteCategory && 'text-red'} ${!canDeleteCategory &&
            'cursor-not-allowed text-black dark:text-slate-300'
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
            className="search_input"
            type="search"
            placeholder="Search Category"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div>
            <p
              className={`${canAddCategory &&
                'cursor-pointer w-full xsm:text-12 xsm:px-2 py-2 lg:text-16'
                } lg:p-2 md:p-2 ${canAddCategory && ' bg-secondary text-white rounded-md w-full '
                } flex justify-center ${!canAddCategory && 'cursor-not-allowed w-full'
                }`}
              onClick={() => {
                seteditCategory && seteditCategory(null);
                if (canAddCategory) {
                  setMenuType('Add Category');
                }
              }}
            >
              Add Sub Category
            </p>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <Table
            className="overflow-x-scroll lg:overflow-auto w-full"
            dataSource={filteredProducts}
            columns={columns}
            pagination={false}
            rowKey="id"
          />
        ) : (
          <p className="text-black dark:text-white">No Sub Categories found</p>
        )}
      </>
    </div>
  );
};

export default ViewSubcategries;
