import React from 'react'
import { Title } from 'types/types';

  const Blindtype: React.FC<Title> = ({ heading,className,id }) => {
    return   <div id={id} className={`px-2 text-2xl lg:text-36 text-center font-serif font-black bg-secondary py-5 lg:py-12 ${className}`}>
    {heading}
  </div>
  };
  
  export default Blindtype;
  