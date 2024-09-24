'use client';
import React, { SetStateAction } from 'react';
import FilterTable from '../Tables/FilterTable';
import { columns, dataSource } from 'data/table';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from 'config/fetch';
import TableSkeleton from '../Tables/TableSkelton';
import { BlogInfo } from 'types/interfaces';
interface BlogProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
}

const ShowBlog: React.FC<BlogProps> = ({ setMenuType }) => {
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
  return (
    <div className="mt-10">
      <div className="text-end">
        <button
          onClick={() => {
            setMenuType('Add Blog');
          }}
          className="border rounded-md bg-primary px-4 py-2 font-semibold text-white"
        >
          Add Blog
        </button>
      </div>
      <FilterTable data={blogs} columns={columns} />
    </div>
  );
};

export default ShowBlog;
