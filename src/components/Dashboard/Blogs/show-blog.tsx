'use client';
import React, { SetStateAction, useEffect, useState } from 'react';
import {  useQueryClient } from '@tanstack/react-query';
import { BlogInfo, UpdateBlog } from 'types/interfaces';
import { formatDateMonth } from 'config';
import { LiaEdit } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import axios from 'axios';
import showToast from 'components/Toaster/Toaster';
import Image from 'next/image';
import { FaRegEye } from 'react-icons/fa';
import { generateSlug } from 'data/data';
import { useAppSelector } from 'components/Others/HelperRedux';
import Cookies from 'js-cookie';

interface BlogProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
  setEditBlog: React.Dispatch<SetStateAction<UpdateBlog | null>>;
  blogs:any
}

const ShowBlog: React.FC<BlogProps> = ({ setMenuType, setEditBlog,blogs }) => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBlog, setfilteredBlog] = useState<BlogInfo[]>([]);

  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  const canAddBlog =loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canAddBlog : true);
  const canDeleteBlog =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canDeleteBlog : true);
  const canEditBlog =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canEditBlog : true);


      const admin_token = Cookies.get('2guysAdminToken');
      const super_admin_token = Cookies.get('superAdminToken');
    
      const token = admin_token ? admin_token : super_admin_token;
 


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let searchTerm = e.target.value
    const filteredBlog: BlogInfo[] =blogs.filter((blog: BlogInfo) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

    setfilteredBlog(filteredBlog)
    setSearchTerm(searchTerm)
  };



  const confirmDelete = (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this blog?',
      content: 'Once deleted, the blog cannot be recovered.',
      onOk: () => handleDelete(id),
      okText: 'Yes',
      cancelText: 'No',
    });
  };
  
useEffect(() => {
  setfilteredBlog(blogs)


}, [])



  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/delete/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      showToast('success', 'The blog has been successfully deleted👍');
      //@ts-expect-error
      queryClient.invalidateQueries(['blogs']);
    } catch (error) {
      showToast('warn', 'There was an error deleting the blog😢');
    }
  };

  const columns: ColumnsType<BlogInfo> = [
    {
      title: 'Image',
      dataIndex: 'posterImageUrl',
      key: 'posterImageUrl',
      render: (text: any, record: BlogInfo) => (
        <Image
          src={record.posterImage?.imageUrl}
          alt={`Image of ${record.title}`}
          className="rounded-md h-[50px]"
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
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text: string, record: BlogInfo) =>
        formatDateMonth(record.createdAt),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Preview',
      key: 'Preview',
      render: (text: any, record: BlogInfo) => (
        <FaRegEye
          className="cursor-pointer"
          onClick={() => {
            const url = `/blog/${generateSlug(record.title)}`;
            window.open(url, '_blank');
          }}
        />
      ),
    },
    {
      title: 'Last Edited By',
      dataIndex: 'last_editedBy',
      key: 'time',
      render: (text: string, record: BlogInfo) => {
        return <span>{record.last_editedBy}</span>;
      },
    },
    {
      title: 'Edit',
      key: 'edit',
      //@ts-expect-error
      render: (_, record: UpdateBlog) => (
        <LiaEdit
          className={`${canEditBlog ? 'cursor-pointer' : 'cursor-not-allowed text-slate-200'}`}
          size={20}
          onClick={() => {
            if (canEditBlog) {
              setEditBlog(record);
              setMenuType('Add Blog');
            }
          }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      //@ts-expect-error
      render: (_, record: UpdateBlog) => (
        <RiDeleteBin6Line
          className={`${canDeleteBlog ? 'text-red cursor-pointer' : 'cursor-not-allowed text-slate-200'}`}
          size={20}
          onClick={() => {
            if (canDeleteBlog) {
              confirmDelete(record.id);
            }
          }}
        />
      ),
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-between mb-4 items-center flex-wrap text-black dark:text-white">
        <input
          className="peer lg:p-3 p-2 block outline-none border dark:text-black rounded-md border-gray-200 dark:bg-boxdark dark:drop-shadow-none text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none"
          type="search"
          placeholder="Search Product"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className={`${canAddBlog ? 'cursor-pointer rounded-md' : 'cursor-not-allowed  text-primary rounded-md'} p-2 ${canAddBlog ? '  bg-secondary text-white rounded-md ' : ''}`}
          onClick={() => {
            if (canAddBlog) {
              setMenuType('Add Blog');
            }
          }}
        >
          Add Blog
        </button>
      </div>

      { filteredBlog && filteredBlog.length > 0 ? (
        <Table
          dataSource={filteredBlog}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      ) : (
        <p className="dark:text-white">No Blogs found</p>
      )}
    </div>
  );
};

export default ShowBlog;
