import React from 'react'
import { Title } from 'types/types';

  const Blindtype: React.FC<Title> = ({ heading }) => {
    return <div className='px-2 text-2xl lg:text-36 text-center font-juana font-black bg-secondary py-7 lg:py-14'>{heading}</div>;
  };
  
  export default Blindtype;
  