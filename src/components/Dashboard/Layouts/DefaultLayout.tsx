'use client';
import React, { useState } from 'react';
import Sidebar from 'components/Dashboard/Sidebar';
import Header from 'components/Dashboard/Header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden h-[100vh] dark:border-strokedark dark:bg-dashboardDark">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="dark:border-strokedark dark:bg-dashboardDark dark:h-screen mt-1 md:ml-1">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 dark:border-dashboardDark dark:bg-dashboardDark ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
