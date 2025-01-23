import Image from 'next/image';
import React from 'react';
import { projectMainFont } from 'typo/font';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className=" max-w-full sm:max-w-[45%] lg:max-w-[30%] rounded-xl bg-transparent overflow-hidden  transform  transition duration-300">
      <div className=" h-[296px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          height={500}
          width={500}
          loading='lazy'
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-2 text-center bg-white rounded-md -mt-4 relative z-10 ">
        <h3
          className={`text-sm md:text-[16px]  font-bold text-gray-800 ${projectMainFont.className}`}
        >
          {title}
        </h3>
      </div>
      <p className={`text-sm md:text-[16px] text-[#000000] mt-2 ${projectMainFont.className}`}
      dangerouslySetInnerHTML={{ __html: description }}/>
    </div>
  );
};

export default ProjectCard;
