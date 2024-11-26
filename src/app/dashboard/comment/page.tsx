'use client';
import React, { useState, useEffect } from 'react';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import CommentsData from 'components/Dashboard/Blogs/comment-data/comment-data';

const Comment = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName={"Blogs Comment"} />
      <CommentsData/>
    </DefaultLayout>
  );
};

export default Comment;
