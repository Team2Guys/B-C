import React from 'react';
import CardDataStats from './CardDataStats';
import Cookies from 'js-cookie';
import { useAppSelector } from 'components/Others/HelperRedux';
import { IoMdEye } from 'react-icons/io';
import { IoBagOutline } from 'react-icons/io5';
import { Skeleton } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { adminRecords } from 'config/fetch';
import { IRECORDS } from 'types/types';
import { TbCalendarCheck, TbCategory } from 'react-icons/tb';
import { FaBloggerB } from "react-icons/fa6";


const ECommerce: React.FC = () => {
  const token = Cookies.get('2guysAdminToken');
  const superAdmintoken = Cookies.get('superAdminToken');
  let Finaltoken = superAdmintoken ? superAdmintoken : token;

  const {
    data: records,
    error,
    isLoading,
  } = useQuery<IRECORDS>(
    {
      queryKey: ['records', Finaltoken],
      queryFn: () => adminRecords(Finaltoken),
      enabled: !!Finaltoken,
    }
  );

  const { loggedInUser } = useAppSelector((state) => state.usersSlice);

  if (isLoading)
    return (
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <>
            <Skeleton avatar active />
            <Skeleton avatar active />
            <Skeleton avatar active />
            <Skeleton avatar active />
            <Skeleton avatar active />
            <Skeleton avatar active />
            <Skeleton avatar active />
          </>
        </div>
      </div>
    );
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const canVeiwAdmins =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canVeiwAdmins : true);
  const canCheckProfit =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canCheckProfit : true);
  const CanCheckRevnue =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.CanCheckRevnue : true);
  const canVeiwTotalproducts =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canVeiwTotalproducts : true);
  const canVeiwTotalCategories =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canVeiwTotalCategories : true);
    const canVeiwTotalBlogs =
    loggedInUser &&
    (loggedInUser.role == 'Admin' ? loggedInUser.canVeiwTotalBlogs : true);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:gap-7">
        {!canVeiwAdmins ? null : (
          <CardDataStats
            title="Admins"
            total={records?.total_admins ? records?.total_admins : ''}
          >
            <IoMdEye size={25} className="text-white dark:text-black" />
          </CardDataStats>
        )}

        {!canCheckProfit ? null : (
          <CardDataStats
            title="Total Appointments"
            total={records?.total_appointments ? records?.total_appointments : ''}
          >
            <TbCalendarCheck
              size={25}
              className="text-white dark:text-black"
            />
          </CardDataStats>
        )}

        {!canVeiwTotalCategories ? null : (
          <CardDataStats
            title="Total Categories"
            total={records?.total_categories ? records?.total_categories : ''}
          >
            <TbCategory
              size={25}
              className="text-white dark:text-black"
            />
          </CardDataStats>
        )}

        {!CanCheckRevnue ? null : (
          <CardDataStats
            title="Total Sub-Cetagories"
            total={records?.total_subCategories ? records?.total_subCategories : ''}
          >
            <TbCategory
              size={25}
              className="text-white dark:text-black"
            />
          </CardDataStats>
        )}

        {!canVeiwTotalproducts ? null : (
          <CardDataStats
            title="Total Product"
            total={records?.total_products ? records?.total_products : ''}
          >
            <IoBagOutline
              size={25}
              className="text-white dark:text-black"
            />
          </CardDataStats>
        )}
        
        {!canVeiwTotalBlogs ? null : (
          <CardDataStats
            title="Total Blogs"
            total={records?.total_Blogs? records?.total_Blogs : ''}
          >
            <FaBloggerB 
              size={25}
              className="text-white dark:text-black"
            />
          </CardDataStats>
        )}

        {/* {!canViewSales ? null : (
              <CardDataStats
                title="Total Sales"
                total={records?.totalSales ? records?.totalSales : ''}
              >
                <PiUsersThreeFill
                  size={25}
                  className="text-white dark:text-black"
                />
              </CardDataStats>
            )} */}

        {/* {!canViewUsers ? null : (
              <CardDataStats
                title="Total Users"
                total={records?.totalUsers ? records?.totalUsers : ''}
              >
                <PiUsersThreeFill
                  size={25}
                  className="text-white dark:text-black"
                />
              </CardDataStats>
            )} */}
      </div>

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div> */}
    </>
  );
};

export default ECommerce;
