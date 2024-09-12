'use client';

import React, { SetStateAction, useLayoutEffect, useState } from 'react';
import { Table, notification, Modal } from 'antd';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { LiaEdit } from 'react-icons/lia';
import { CategoriesType } from 'types/interfaces';
import useColorMode from 'hooks/useColorMode';
import { useAppSelector } from 'components/Others/HelperRedux';
import { Skeleton } from 'components/ui/skeleton';
import TableSkeleton from './TableSkelton';
import Cookies from 'js-cookie';

interface Product {
  id: string;
  name: string;
  category: string;
  posterImageUrl: string;
  createdAt: string;
}

interface CategoryProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
  seteditCategory?: React.Dispatch<
    SetStateAction<CategoriesType | undefined | null>
  >;
  editCategory?: CategoriesType | undefined | null;
}

const ViewSubcategries = ({
  setMenuType,
  seteditCategory,
  editCategory,
}: CategoryProps) => {
  const admin_token = Cookies.get('2guysAdminToken');
  const super_admin_token = Cookies.get('superAdminToken')

  let token = admin_token ? admin_token: super_admin_token
  
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [colorMode, toggleColorMode] = useColorMode();

  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);

  const canDeleteCategory = true;
  // const canDeleteCategory =
  //   loggedInUser &&
  //   (loggedInUser.role == 'Admin' ? loggedInUser.canDeleteCategory : true);
  // const canAddCategory = loggedInUser && (loggedInUser.role == 'Admin' ? loggedInUser.canAddCategory : true)
  const canAddCategory = true;

  const canEditCategory = true;
  // const canEditCategory =
  //   loggedInUser &&
  //   (loggedInUser.role == 'Admin' ? loggedInUser.canEditCategory : true);

  useLayoutEffect(() => {
    const CategoryHandler = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/get-all-subCategories`,
        );
        const Categories = await response.json();
        setCategory(Categories);
        setLoading(false);
      } catch (err) {
        console.log('err', err);
        setLoading(false);
      }
    };

    CategoryHandler();
  }, []);

  const confirmDelete = (key: any) => {
    Modal.confirm({
      title: 'Are you sure?',
      content: 'Once deleted, the sub category cannot be recovered.',
      onOk: () => handleDelete(key),
      okText: 'Yes',
      cancelText: 'No',
    });
  };

  const handleDelete = async (key: any) => {
    try {
      const response = await axios.delete(
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
      render: (text: any, record: any) => {
        const createdAt = new Date(record.createdAt);
        const formattedDate = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}-${String(
          createdAt.getDate(),
        ).padStart(2, '0')}`;
        return <span>{formattedDate}</span>;
      },
    },
    {
      title: 'Time',
      dataIndex: 'createdAt',
      key: 'time',
      render: (text: any, record: any) => {
        const createdAt = new Date(record.createdAt);
        const formattedTime = `${String(createdAt.getHours()).padStart(2, '0')}:${String(
          createdAt.getMinutes(),
        ).padStart(2, '0')}`;
        return <span>{formattedTime}</span>;
      },
    },
    {
      title: 'Edit',
      key: 'Edit',
      render: (text: any, record: any) => (
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
      render: (text: any, record: any) => (
        <RiDeleteBin6Line
          className={`cursor-pointer ${canDeleteCategory && 'text-red'} ${
            !canDeleteCategory && 'cursor-not-allowed text-slate-300'
          }`}
          // className="cursor-pointer text-red-500"
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
      {loading ? (
        <TableSkeleton rows={5} columns={5} />
      ) : (
        <>
          <div className="flex justify-between mb-4 items-center text-dark dark:text-white">
            <p>Sub Categories</p>
            <div>
              <p
                className={`${
                  canAddCategory && 'cursor-pointer'
                } lg:p-2 md:p-2 ${
                  canAddCategory &&
                  'dark:border-strokedark dark:bg-slate-500 bg-[#cdb7aa] text-white rounded-md border hover:border-[#bda394] '
                } flex justify-center ${
                  !canAddCategory && 'cursor-not-allowed '
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

          {category.length > 0 ? (
            <Table
              className="overflow-x-scroll lg:overflow-auto"
              dataSource={category}
              columns={columns}
              pagination={false}
              rowKey="id"
            />
          ) : (
            'No Sub Categories found'
          )}
        </>
      )}
    </div>
  );
};

export default ViewSubcategries;