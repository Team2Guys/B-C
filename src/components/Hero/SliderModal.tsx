import Image from 'next/image';
import React, { SetStateAction, useEffect } from 'react';
import { Rate } from 'antd';
import { HeroImages } from 'data/data';
interface SliderModalProps {
  setshowModel: React.Dispatch<SetStateAction<string>>;
  className?: string;
  modelType?: string;
}



function SliderModal({ setshowModel, className, modelType }: SliderModalProps) {

  useEffect(() => {
    const modelHanlder = (e: any) => {
      let doc_id = "modalHandler"
      let id = e.target.id;
      if (doc_id !== id) setshowModel('bnc')

    }

    document.addEventListener('click', modelHanlder)

    return () => {
      document.removeEventListener('click', modelHanlder)

    }

  }, [])

  return (
    <div
      id="modalHandler"
      className={`max-xs:w-72 absolute bg-white border rounded-[112.5px] max-w-96 flex flex-col p-5 z-10 ${className}`}
    >
      <div
        id="modalHandler"
        className="header-intro flex justify-center gap-5 mb- items-center"
      >
        <Image
          id="modalHandler"
          src={HeroImages.logo}
          loading='lazy'
          alt="logo"
          width={60}
          height={60}
        />
        <Image
          id="modalHandler"
          loading='lazy'
          onClick={() => setshowModel('')}
          src={
            modelType && modelType == '2_model'
              ? '/assets/images/Hero/back2.jpeg'
              : '/assets/images/Hero/BACK.jpeg'
          }
          className="w-8 h-8 cursor-pointer arrows"
          alt="back"
          width={24}
          height={24}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div
        id="modalHandler"
        className="w-full h-full mb-4 text-center text-12
         leading-5"
      >

        {modelType == "2_model" ? `A team of 50 staff to ensure perfection from start-to-finish
In house production - quality is our concern, not yours
Free uninstall/re-install within 2 years.` :

          `10 YEARS warranty on all mechanical parts and labour
We’re trusted, with over 750+ 5* reviews
Free home visits with free installation.`}
      </div>

      <div id="modalHandler" className="header-review text-center">
        <Rate id="modalHandler" disabled defaultValue={5} className="" />
      </div>
    </div>
  );
}

export default SliderModal;
