'use client';
import React, { SetStateAction } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBlogs } from 'config/fetch';
import TableSkeleton from '../Tables/TableSkelton';
import { BlogInfo, UpdateBlog } from 'types/interfaces';
import { formatDateMonth, formatDateTime } from 'config';
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

interface BlogProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
  setEditBlog: React.Dispatch<SetStateAction<UpdateBlog | null>>;
}

const ShowBlog: React.FC<BlogProps> = ({ setMenuType, setEditBlog }) => {
  const queryClient = useQueryClient();

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery<BlogInfo[]>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return <TableSkeleton rows={8} columns={5} />;
  }

  const confirmDelete = (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this blog?',
      content: 'Once deleted, the blog cannot be recovered.',
      onOk: () => handleDelete(id),
      okText: 'Yes',
      cancelText: 'No',
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/delete/${id}`,
      );
      showToast('success', 'The blog has been successfully deleted👍');
      //@ts-expect-error
      queryClient.invalidateQueries(['blogs']);
    } catch (error) {
      showToast('warn', 'There was an error deleting the blog😢');
      console.error('Error while deleting blog:', error);
    }
  };
  const sortedBlogs = blogs?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const columns: ColumnsType<BlogInfo> = [
    {
      title: 'Image',
      dataIndex: 'posterImageUrl',
      key: 'posterImageUrl',
      render: (text: any, record: BlogInfo) => (
        <Image
          //@ts-expect-error
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
      title: 'Edit',
      key: 'edit',
      //@ts-expect-error
      render: (_, record: UpdateBlog) => (
        <LiaEdit
          className="cursor-pointer"
          size={20}
          onClick={() => {
            setEditBlog(record);
            setMenuType('Add Blog');
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
          className="text-red cursor-pointer"
          size={20}
          onClick={() => confirmDelete(record.id)}
        />
      ),
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-end mb-4">
        <button
          onClick={() => setMenuType('Add Blog')}
          className="border rounded-md bg-primary px-4 py-2 font-semibold text-white"
        >
          Add Blog
        </button>
      </div>
      {error ? (
        <p>Error fetching blogs😢</p>
      ) : sortedBlogs && sortedBlogs.length > 0 ? (
        <Table
          dataSource={sortedBlogs}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      ) : (
        <p>No Blogs found😢</p>
      )}
    </div>
  );
};

export default ShowBlog;
