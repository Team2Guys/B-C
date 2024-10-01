import { url } from 'inspector';
import React from 'react';

const TabData = () => {
  return (
    <div className="py-5 space-y-5">
      <div className="text-center">
        <p className="text-24 md:text-[36px]">
          <span className="text-24 md:text-[36px] font-black">BLACKOUT</span>{' '}
          ROLLER BLINDS
        </p>
        <div className="max-w-screen-md mx-auto">
          <p className="text-15">
            See our comprehensive Blinds range Find the perfect made-to-measure
            ds within our exclusive range. There are many shades and stunning
            patterns to select from
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div
          className="w-full h-[400px] bg-cover bg-no-repeat flex flex-col justify-between rounded-md "
          style={{
            backgroundImage:"url('/assets/images/Rollerblind/imgee.jpg')"}}>
            <div/>
            <div className='bg-white p-2 mx-4'>
            Blinds range Find the perfect made-to-measure
            ds within our exclusive 
            </div>
            <div className='text-end'>
                button
            </div>
            </div>
            <div
          className="w-full h-[200px] bg-cover bg-no-repeat flex flex-col justify-between rounded-md "
          style={{
            backgroundImage:"url('/assets/images/Rollerblind/imgee.jpg')"}}>
            <div/>
            <div className='bg-white p-2 mx-4'>
            Blinds range Find the perfect made-to-measure
            ds within our exclusive 
            </div>
            <div className='text-end'>
                button
            </div>
            </div>
      </div>
    </div>
  );
};

export default TabData;
