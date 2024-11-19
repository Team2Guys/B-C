"use client"
import React from 'react';
import MotorisedCurtains from 'components/moterized-curtains';
import MotorisedBlind from 'components/moterized-blinds';
import { useParams } from 'next/navigation';
const MainContentPage = () => {
  const params = useParams();
  const  type  = params.content; 
  console.log("params",type);

  let content;
  if (type === 'motorised-blinds') {
    content = <MotorisedBlind />;
  }
  else {
    content = <MotorisedCurtains />
  }
  return(
    <div>
      {content}
    </div>
  );
};

export default MainContentPage;
  
