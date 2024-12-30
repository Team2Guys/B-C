'use client';
import React from 'react';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import CommentsData from 'components/Dashboard/Blogs/comment-data/comment-data';
import { BlogInfo } from 'types/interfaces';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from 'config/fetch';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import HorizontalcardSkelton from 'components/Skeleton/HorizontalcardSkelton';

const Comment = () => {
  const {
    data: blogs,
    isLoading,
  } = useQuery<BlogInfo[]>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return (
      <DefaultLayout>
        <HorizontalcardSkelton rows={10} columns={1} />
      </DefaultLayout>
    );
  }
 
  if (!blogs) {
    return <p>Blog not found.</p>;
  }
  return (
    <DefaultLayout>
      <Breadcrumb pageName={"Blogs Comment"} />
      <CommentsData currentComments={blogs}/>
    </DefaultLayout>
  );
};

export default ProtectedRoute(Comment);
