'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ShowBlog from 'components/Dashboard/Blogs/show-blog';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';

const AddBlogs = dynamic(() => import('components/Dashboard/Blogs/add-blog'), {
  ssr: false,
});

const Blogging = () => {
  const [menuType, setMenuType] = useState('viewBlogs');

  return (
    <DefaultLayout>
      <Breadcrumb pageName={menuType} />
      {menuType === 'viewBlogs' ? (
        <ShowBlog setMenuType={setMenuType} />
      ) : (
        <AddBlogs setMenuType={setMenuType} />
      )}
    </DefaultLayout>
  );
};

export default Blogging;
