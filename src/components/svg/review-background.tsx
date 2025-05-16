import React from 'react'

export const ReviewBackground = ({className}: {className?:string}) => {
  return (
    <svg
      viewBox="0 0 1440 160"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M0 0H1440L1376.5 80L1440 160H0L56 80L0 0Z"
        fill="#3E3F42"
      />
    </svg>
  );
};

export const ReviewBackgrounddashktop = ({className}: {className?:string}) => {
  return (
    <svg
      viewBox="0 0 1440 60"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      
    >
      <path
        d="M0 0H1440L1376.5 30L1440 60H0L56 30L0 0Z"
        fill="#3E3F42"
      />
    </svg>
  );
};