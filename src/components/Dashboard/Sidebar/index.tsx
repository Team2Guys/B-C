'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SidebarLinkGroup from './SidebarLinkGroup';
import {
  MdKeyboardArrowLeft,
  MdOutlineDashboard,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { GrCodeSandbox, GrUserAdmin } from 'react-icons/gr';
import { useAppSelector } from 'components/Others/HelperRedux';
import { IoSettingsOutline } from 'react-icons/io5';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { TbGardenCartOff } from 'react-icons/tb';
import { FaBarsStaggered } from 'react-icons/fa6';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  let superAdmin = loggedInUser && loggedInUser.role !== 'Admin';

  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = 'true';

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== 'Escape') return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  // console.log(loggedInUser, "loggedInUser");
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-primary  dark:bg-dashboardDark duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-2">
        <Link href="/dashboard">
          <Image
            width={140}
            height={140}
            src={'/assets/images/whitelogo.png'}
            alt="Logo"
            priority
          />
        </Link>
        <MdKeyboardArrowLeft
          className="block lg:hidden text-black bg-white rounded-md cursor-pointer"
          size={25}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2 px-4 py-4 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-white dark:text-white">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup activeCondition={pathname === '/dashboard'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard"
                        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out  dark:hover:bg-lightdark text-white dark:text-white ${
                          pathname === '/dashboard' &&
                          'bg-primary-foreground dark:bg-lightdark'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdOutlineDashboard size={20} className="text-white" />
                        Dashboard
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${
                            open && 'rotate-180'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium  duration-300 ease-in-out text-white dark:text-white ${
                                pathname === '/dashboard' && 'text-white '
                              }`}
                            >
                              eCommerce
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/category'}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-primary-foreground dark:hover:bg-lightdark text-white dark:text-white${
                          pathname === '/dashboard/category' &&
                          'bg-primary-foreground dark:bg-lightdark'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <BiCategoryAlt size={20} className="text-white" />
                        Category
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${
                            open && 'rotate-180'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/category"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium  duration-300 ease-in-out text-white dark:text-white mt-2 ${
                                pathname === '/dashboard/category' &&
                                'text-white'
                              }`}
                            >
                              View Categories
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/products'}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard"
                        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-primary-foreground dark:hover:bg-lightdark text-white dark:text-white ${
                          pathname === '/dashboard/products' &&
                          'bg-primary-foreground dark:bg-lightdark'
                        }`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <GrCodeSandbox size={20} className="text-white" />
                        Products
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${
                            open && 'rotate-180'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/products"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium  duration-300 ease-in-out text-white dark:text-white ${
                                pathname === 'dashboard/products' &&
                                'text-white bg-lightdark'
                              } `}
                            >
                              View Products
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/orders'}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard/orders"
                        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-primary-foreground dark:hover:bg-lightdark text-white dark:text-white${
                          pathname === '/dashboard/orders' &&
                          'bg-primary-foreground dark:bg-lightdark'
                        }`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <TfiShoppingCartFull size={20} className="text-white" />
                        Orders
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${
                            open && 'rotate-180'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/orders"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium  duration-300 ease-in-out text-white dark:text-white ${
                                pathname === 'dashboard/orders' && 'text-white'
                              } `}
                            >
                              View Orders
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/abundant'}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard/abundant"
                        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-primary-foreground dark:hover:bg-lightdark text-white dark:text-white${
                          pathname === '/dashboard/abundant' &&
                          'bg-primary-foreground dark:bg-lightdark'
                        }`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <TbGardenCartOff size={20} className="text-white" />
                        Abundant Order
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${
                            open && 'rotate-180'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/abundant"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium  duration-300 ease-in-out text-white dark:text-white ${
                                pathname === 'dashboard/abundant' &&
                                'text-white'
                              } `}
                            >
                              View Abundant Order
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {superAdmin ? (
                <li>
                  <Link
                    href="/dashboard/super-admin"
                    className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-primary-foreground dark:hover:bg-lightdark text-white dark:text-white${
                      pathname.includes('super-admin') &&
                      'bg-primary-foreground dark:bg-lightdark'
                    }`}
                  >
                    <GrUserAdmin size={20} />
                    Admin
                  </Link>
                </li>
              ) : null}

              <li>
                <Link
                  href="/dashboard/settings"
                  className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  duration-300 ease-in-out hover:bg-primary-foreground dark:hover:bg-lightdark text-white dark:text-white${
                    pathname.includes('settings') &&
                    'bg-primary-foreground dark:bg-lightdark'
                  }`}
                >
                  <IoSettingsOutline size={20} />
                  Settings
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
