'use client';
import React from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import classNames from 'classnames';

interface StarRatingBarProps {
  rating: number; // 1 to 5
  percentage: number; // 0 to 100
}

const StarRatingBar: React.FC<StarRatingBarProps> = ({ rating, percentage }) => {
  return (
    <div className="flex items-center space-x-4 w-full">
      {/* Stars */}
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <MdOutlineStarPurple500
            key={i}
            className={classNames(
              'text-lg md:text-xl',
              i <= rating ? 'text-[#FFD800] ' : 'text-primary'
            )}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="flex-1 h-2 bg-primary rounded-full relative overflow-hidden">
        <div
          className="h-full bg-[#FFD800] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default StarRatingBar;
