'use client';
import React from 'react';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import { Table, Button } from 'antd';

const Comment = () => {
  const blogComments = [
    {
      id: 1,
      blogName: "How to Learn React",
      comment: "This is a very insightful article. Thanks!",
    },
    {
      id: 2,
      blogName: "Understanding JavaScript Closures",
      comment: "Great explanation, it really helped me.",
    },
    {
      id: 3,
      blogName: "Tips for Remote Work Productivity",
      comment: "I disagree with point #3, but overall good read.",
    },
    {
      id: 4,
      blogName: "Building a Portfolio Website",
      comment: "Can you add more examples for beginners?",
    },
    {
      id: 5,
      blogName: "Top 10 Web Development Trends in 2024",
      comment: "Very informative, thank you!",
    },
  ];

  const columns = [
    {
      title: 'Blog Name',
      dataIndex: 'blogName',
      key: 'blogName',
      width: 250,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      width: 250,
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 250,
      render: (_:string, record:any) => (
        <div>
          <Button className='!bg-secondary text-white hover:!text-white hover:!border-white' style={{ marginRight: 8 }}>
            Approve
          </Button>
          <Button danger>
            Reject
          </Button>
        </div>
      ),
    },
  ];
  return (
    <DefaultLayout>
      <Breadcrumb pageName={"Blogs Comment"} />
      <div className="flex justify-between mb-4 items-center flex-wrap text-black dark:text-white">
          <input
            className="peer lg:p-3 p-2 block outline-none border dark:text-black rounded-md border-gray-200 dark:bg-boxdark dark:drop-shadow-none text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none"
            type="search"
            placeholder="Search Comments"
            // value={searchTerm}
            // onChange={handleSearchChange}
          />
          
        </div>
      <Table
        className='overflow-auto'
        dataSource={blogComments}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </DefaultLayout>
  );
};

export default Comment;
