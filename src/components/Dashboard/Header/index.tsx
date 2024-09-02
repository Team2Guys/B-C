'use client';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownUser from './DropdownUser';
import Image from 'next/image';

import { useAppSelector } from 'components/Others/HelperRedux';
import { RiBarChartHorizontalLine } from 'react-icons/ri';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
console.log(loggedInUser, 
  "loggedInUser"
)
  return (
    <header className="sticky top-0 z-40 flex w-full bg-primary drop-shadow-1 dark:bg-dashboardDark   border-r-0 border-t-0 border-l-0">
      <div className="flex flex-grow items-center justify-between px-4 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden text-white dark:text-white">
          {/* <!-- Hamburger Toggle BTN --> */}
          <RiBarChartHorizontalLine
            className="text-white dark:text-white cursor-pointer"
            size={25}
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          />
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/dashboard">
            <Image
              width={100}
              height={100}
              src={'/assets/images/whitelogo.png'}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden sm:block"></div>

        <div className="flex items-center gap-3 2xsm:gap-7 ">
          <ul className="flex items-center gap-2 2xsm:gap-4 text-white dark:text-white">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
