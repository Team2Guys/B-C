import { Button } from 'antd';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import { BlackoutRollerData } from 'data/data';
import Image from 'next/image';
import { CiCirclePlus } from 'react-icons/ci';
import Tabs from 'components/ui/Tabs';
import TabData from './tabdata/tabdata';

const BlackoutRoller = () => {
  return (
    <>
      <div className="bg-white py-4">
        <Tabs
          className="justify-center items-center"
          tabs={[
            { label: 'All', content: <TabData/> },
            {
              label: 'BLACKOUT ROLLER BLINDS',
              content: 'This is the content for Roller Blinds.',
            },
            {
              label: 'SUNSCREEN ROLLER BLINDS',
              content: 'This is the content for Sunscreen Blinds.',
            },
          ]}
        />
      </div>
    </>
  );
};

export default BlackoutRoller;

// BlackoutRollerData
