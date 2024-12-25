
import { Image } from 'antd';
import React from 'react'
import { IoSearch } from 'react-icons/io5'
interface GalleryProps {
    card: any;
  }
  
const ThumbImage:React.FC<GalleryProps>= ({card}) => {
  
  return (
    <>
      <Image.PreviewGroup preview={{onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),}}>
    {
       card?.imageUrls && card?.imageUrls.map((array:any,index:number)=>(
            <div className="!rounded-lg  transition-shadow duration-300 group" key={index}>

            <Image
              src={array.imageUrl}
              alt={array.altText || "Image"}
              className=" rounded-xl h-56 sm:h-auto"
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
      </Image.PreviewGroup>
   
  </>
  )
}

export default ThumbImage