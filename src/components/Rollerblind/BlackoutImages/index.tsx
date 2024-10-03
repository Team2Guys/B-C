import { Button } from 'antd';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import { BlackoutRollerData, ListData } from 'data/data';
import Image from 'next/image';
import { CiCirclePlus } from 'react-icons/ci';
import Tabs from 'components/ui/Tabs';
import TabData from './tabdata/tabdata';

const BlackoutRollerGallary = () => {
  return (
    <>
      <div className="bg-white py-4 2xl:max-w-screen-2xl mx-auto ">
      <Tabs
  className="flex  justify-start md:justify-center items-center text-12 sm:text-15 md:text-18  whitespace-nowrap overflow-scroll"
  tabs={[
    { label: 'All', content: <TabData ListData={ListData} label="All" Text='1See our comprehensive Blinds range Find the perfect made-to-measure  ds within our exclusive range. There are many shades and stunning patterns to select from' />
   },
    { 
      label: 'BLACKOUT ROLLER BLINDS', 
      content: <TabData ListData={ListData} label="BLACKOUT ROLLER BLINDS" Text='2See our comprehensive Blinds range Find the perfect made-to-measure  ds within our exclusive range. There are many shades and stunning patterns to select from' /> 
    },
    { 
      label: 'SUNSCREEN ROLLER BLINDS', 
      content: <TabData ListData={ListData} label="SUNSCREEN ROLLER BLINDS" Text='3See our comprehensive Blinds range Find the perfect made-to-measure  ds within our exclusive range. There are many shades and stunning patterns to select from' />
    },
  ]}
/>
   <div className='flex justify-center items-center mt-5'>
  <Button className='h-[55px] w-[163px] text-white bg-secondary hover:!text-black hover:!border-black'>View More</Button>
     </div>
</div>
    </>
  );
};

export default BlackoutRollerGallary;

