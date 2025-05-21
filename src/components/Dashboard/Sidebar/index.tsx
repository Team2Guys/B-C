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

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  let superAdmin = loggedInUser && loggedInUser.role !== 'Admin';

  const path  = usePathname().split("/").filter((boolean)=>boolean).join("/");
let pathname = "/"+path

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = 'true';

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );
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

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-primary  dark:bg-dashboardDark duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-2">
        <Link href="/">
          <Image
            width={140}
            height={140}
            src={'/assets/images/whitelogo.png'}
            className='w-auto h-auto'
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

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-2 px-4 py-4 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-white dark:text-white">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1">
              <SidebarLinkGroup activeCondition={pathname === '/dashboard'}>
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard"
                        className={`group dashboard_sidebar_links ${pathname === '/dashboard' &&
                          'dashboard_sidebar_Active_links'
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
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${open && 'rotate-180'
                            }`}
                        />
                      </Link>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard"
                              className={`group dashboard_sidebar_links   ${pathname === '/dashboard' && 'text-white '
                                }`}
                            >
                              eCommerce
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/category'}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="#"
                        className={`group dashboard_sidebar_links ${pathname === '/dashboard/category' &&
                          'dashboard_sidebar_Active_links'
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
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${open && 'rotate-180'
                            }`}
                        />
                      </Link>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/category"
                              className={`group dashboard_sidebar_links   mt-2 ${pathname === '/dashboard/category' &&
                                'text-white'
                                }`}
                            >
                              View Categories
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dashboard/subcategory"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in- text-white mt-2.5 hover:scale-105 ${pathname === '/dashboard/category' &&
                                'text-slate-200'
                                }`}
                            >
                              View Sub Categories
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/products'}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard/Products"
                        className={`group dashboard_sidebar_links  ${pathname === '/dashboard/products' &&
                          'dashboard_sidebar_Active_links'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <GrCodeSandbox size={20} className="text-white" />
                        Products
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${open && 'rotate-180'
                            }`}
                        />
                      </Link>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/products"
                              className={`group dashboard_sidebar_links   ${pathname === 'dashboard/products' &&
                                'dashboard_sidebar_Active_links'
                                } `}
                            >
                              View Products
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>



              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/blog'}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard/blog"
                        className={`group dashboard_sidebar_links  ${pathname === '/dashboard/blog' &&
                          'dashboard_sidebar_Active_links'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <GrCodeSandbox size={20} className="text-white" />
                        Blog
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${open && 'rotate-180'
                            }`}
                        />
                      </Link>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/blog"
                              className={`group dashboard_sidebar_links   ${pathname === 'dashboard/blog' &&
                                'dashboard_sidebar_Active_links'
                                } `}
                            >
                              View Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dashboard/comment"
                              className={`group dashboard_sidebar_links   ${pathname === 'dashboard/blog' &&
                                'dashboard_sidebar_Active_links'
                                } `}
                            >
                              View Comment
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>


              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/appointments'}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard/appointments"
                        className={`group dashboard_sidebar_links ${pathname === '/dashboard/appointments' &&
                          'dashboard_sidebar_Active_links'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <TfiShoppingCartFull size={20} className="text-white" />
                        Appointments
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${open && 'rotate-180'
                            }`}
                        />
                      </Link>
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2 pl-6">
                          <li>
                            <Link
                              href="/dashboard/appointments"
                              className={`group dashboard_sidebar_links   ${pathname === 'dashboard/appointments' &&
                                'text-white'
                                } `}
                            >
                              View Appointments
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>


              <SidebarLinkGroup
                activeCondition={pathname === '/dashboard/general'}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard"
                        className={` group dashboard_sidebar_links  ${pathname === '/dashboard/general' && 'dashboard_sidebar_Active_links'
                          }`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          if (sidebarExpanded) {
                            handleClick();
                          } else {
                            setSidebarExpanded(true);
                          }
                        }}
                      >
                        <TbGardenCartOff size={20} className="text-white" />
                        Generals
                        <MdOutlineKeyboardArrowDown
                          size={30}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-white ${open && 'rotate-180'
                            }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mb-3 mt-3 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/dashboard/reviews"
                              className={`dashboard_sidebar_links group ${pathname === '/dashboard/reviews' &&
                                'dashboard_sidebar_Active_links'
                                } `}
                            >
                              View Reviews
                            </Link>
                          </li>

          
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>



              {superAdmin ? (
                <li>
                  <Link
                    href="/dashboard/super-admin"
                    className={`group dashboard_sidebar_links ${pathname.includes('super-admin') &&
                      'dashboard_sidebar_Active_links'
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
                  className={`group dashboard_sidebar_links ${pathname.includes('settings') &&
                    'dashboard_sidebar_Active_links'
                    }`}
                >
                  <IoSettingsOutline size={20} />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
