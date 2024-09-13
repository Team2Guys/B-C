
import { Image } from 'antd';
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { IProduct } from 'types/types';
interface GalleryProps {
    card: IProduct;
  }
  
const ThumbImage:React.FC<GalleryProps>= ({card}) => {
    console.log(card , "cardcardcard")
  return (
    <>
    {
        card.imageUrls.map((array,index)=>(
            <div className="!rounded-lg  transition-shadow duration-300 group" key={index}>
            <Image
              src={array.imageUrl}
              alt={"image"}
              className=" rounded-xl"
              preview={{
                mask: (
                  <div>
                    <IoSearch style={{ color: 'white', fontSize: '30px' }} />
                  </div>
                )
              }}
            />
          </div>
        ))
    }
   
  </>
  )
}

export default ThumbImage