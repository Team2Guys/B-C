"use client"

import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface LoaderProps {
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ color }) => (
  
  <div>
  <Spin
    indicator={
      <LoadingOutlined
        style={{ fontSize: 24, color: color ? color : '#000' }}
        spin
      />
    }
  />
  </div>

);

export default Loader;
