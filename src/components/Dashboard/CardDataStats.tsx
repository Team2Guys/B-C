'use client';

import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate?: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm  bg-white px-7 py-6  dark:bg-lightdark">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-white">
        {children}
      </div>

      <div className="mt-4 px-2 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium text-black dark:text-white">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
