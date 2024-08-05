import Image from 'next/image';
import React, { SetStateAction } from 'react';
import { Rate } from 'antd';

interface SliderModal {
  setshowModel: React.Dispatch<SetStateAction<string>>;
  className?: string;
}

function SliderModal({ setshowModel, className }: SliderModal) {
  return (
    <div
      id="modalHandler"
      className={`w-full h-fit absolute bg-white border rounded-[112.5px] max-w-md flex flex-col p-5 z-10 ${className}`}
    >
      <div
        id="modalHandler"
        className="header-intro flex justify-center gap-5 mb- items-center"
      >
        <Image
          id="modalHandler"
          src="/assets/images/logomain.png"
          alt="logo"
          width={100}
          height={71}
        />
        <Image
          id="modalHandler"
          onClick={() => setshowModel('')}
          src={
            className
              ? '/assets/images/hero/back2.jpeg'
              : '/assets/images/hero/BACK.jpeg'
          }
          className="w-8 h-8 cursor-pointer"
          alt="logo"
          width={26}
          height={26}
          objectFit="cover"
        />
      </div>

      <div
        id="modalHandler"
        className="w-full h-full mb-4 text-center text-14 leading-9	 "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>

      <div id="modalHandler" className="header-review text-center">
        <Rate id="modalHandler" disabled defaultValue={5} />
      </div>
    </div>
  );
}

export default SliderModal;
