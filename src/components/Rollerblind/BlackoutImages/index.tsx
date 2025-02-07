import { Button } from 'antd';
import React from 'react';
import {GallaryData } from 'data/data';
import Tabs from 'components/ui/Tabs';
import TabData from './tabdata/tabdata';

const RollerGallary = () => {
  return (
    <>
      <div className="bg-white py-4 2xl:max-w-screen-2xl mx-auto ">
      <Tabs className="flex  justify-start md:justify-center items-center text-12 sm:text-15 md:text-18  whitespace-nowrap overflow-scroll sm:overflow-hidden" tabs={[{ label: 'All', content: <TabData GallaryData={GallaryData } label="All" Text='At Blinds and Curtains, we make them from a single piece of fabric that rolls up neatly when you pull the chain or press a button. This gives your window a clean and tidy look without the fabric hanging all over the place all over the place.'/>},
    { 
      label: 'BLACKOUT ROLLER BLINDS', 
      content: <TabData GallaryData={GallaryData } label={(<><strong>BLACKOUT</strong> ROLLER BLINDS</>)} 
      Text= "Blackout roller blinds keep your kids' room dark during long summer days, helping them sleep better during the day. Our quick and reliable installation service means you'll have your no-glare blinds set up in no time."/> 
    },
    { 
      label: 'SUNSCREEN ROLLER BLINDS', 
      content: <TabData GallaryData={GallaryData } label={(<><strong>SUNSCREEN</strong>ROLLER BLINDS</>)} Text= 'Not only do they preserve the beauty of your furnishings by blocking up to 98% of damaging rays, but they also regulate indoor temperatures, keeping the room cooler and more comfortable.' 
      />
    },
  ]}
/>
   {/* <div className='flex justify-center items-center mt-5'>
  <Button className='h-[55px] w-[163px] text-white bg-secondary hover:!text-black hover:!border-black'>View More</Button>
     </div> */}
</div>
    </>
  );
};

export default RollerGallary;

