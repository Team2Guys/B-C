"use client"
import { featureIcons, featuresinfo } from 'data/Homedata/tabdata'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IProduct } from 'types/types'
import { getFirstNWords } from 'utils/helperFunctions'



const Detail = ({data}:{data:IProduct | any}) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded(prev => !prev)
    const shouldTruncate = data.description.replace(/<[^>]+>/g, '').split(/\s+/).length > 100
    const shortDescription = getFirstNWords(data.description, 50)

  return (
    <div className=' space-y-2 sm:space-y-4 max-w-[650px]'>
      <h1 className='font-robotoSerif font-bold text-2xl xl:text-5xl text-primary px-2'>{data.title}</h1>

      <div className='flex flex-wrap items-center gap-2 lg:gap-4 px-2'>
        {featureIcons.map((feature, index) => (
          <div key={index} className='rounded-full py-2 px-4 flex items-center gap-1 bg-[#F2F2F2]'>
            <Image src={feature.icon} height={20} width={20} alt='feature' />
            <p className='font-roboto text-sm'>{feature.label}</p>
          </div>
        ))}
      </div>
      <div className='py-2 bg-[#F2F2F2] px-2 block md:hidden '>
        <Link href="/" className='bg-secondary text-primary py-3 px-6 font-semibold block rounded-md w-full md:w-fit font-roboto text-center'>Book A Free Visit</Link>
      </div>
      <p className='px-2'>
      <span className='font-roboto'
        dangerouslySetInnerHTML={{
          __html: expanded || !shouldTruncate ? data.description : shortDescription
        }}
      />
      {shouldTruncate && (
        <button
          className='text-secondary font-medium outline-none'
          onClick={toggleExpanded}
        >
          {expanded ? 'Read less' : 'Read more...'}
        </button>
      )}
      </p>
      <p className='font-roboto px-2'>Most Demanded Color</p>
      <div className=' flex items-center gap-2 md:pb-10 px-2'>
        <div className='flex items-center gap-2'>
          {data.colors && data.colors.map((item:{detail:string} , index:number)=>(
            <div key={index} className={`h-9 md:w-12 w-9 md:h-12 rounded-sm bg-[${item?.detail}] cursor-pointer shadow`} />
          ))}
        </div>
        <p className='border rounded-lg font-roboto h-12 flex items-center px-2 text-xs md:text-base max-sm:max-w-32'>We still 3000 plus color availble </p>
      </div>
        <Link href="/" className='bg-secondary text-primary py-3 px-6 font-semibold hidden md:block rounded-md w-full sm:w-fit font-roboto text-center '>Book A Free Visit</Link>

      <div className='flex max-sm:flex-col sm:items-stretch sm:gap-2 sm:pt-5 px-2'>
      {featuresinfo.map((feature, index) => (
        <div key={index} className='sm:border sm:rounded-sm flex sm:flex-col gap-1 justify-center items-center space-y-2 py-2 sm:px-4 sm:min-h-[140px] w-fit'>
          <Image src={feature.icon} height={200} width={200} className=' h-8 sm:h-12 w-8 sm:w-12' alt='feature' />
          <p className='font-roboto sm:max-w-32 sm:text-center text-xs sm:text-sm'>{feature.text}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Detail
