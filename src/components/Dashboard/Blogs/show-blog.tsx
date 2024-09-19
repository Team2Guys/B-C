"use client"
import React, { SetStateAction } from 'react';
import FilterTable from '../Tables/FilterTable';
import { columns, dataSource } from 'data/table';

interface BlogProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
}

const ShowBlog: React.FC<BlogProps> = ({ setMenuType }) => {
  return (
    <div className='mt-10'>
    <div className='text-end'>
     <button onClick={() => {
          setMenuType('Add Blog');
        }} className='border rounded-md bg-primary px-4 py-2 font-semibold text-white dark:bg-lightdark'>Add Blog</button>

    </div>
      <FilterTable data={dataSource} columns={columns} />
    </div>
  );
};

export default ShowBlog;
