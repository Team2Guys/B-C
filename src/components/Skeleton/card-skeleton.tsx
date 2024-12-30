import Container from 'components/Res-usable/Container/Container'
import React from 'react'
interface ProductCardDataProps {
  isSizeSmall?: boolean;
}
const CardSkeleton = ({isSizeSmall}:ProductCardDataProps) => {
  return (
    <Container className='mt-10'>

    <div className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ${isSizeSmall && 'xl:grid-cols-4'} gap-5 p-1 md:p-0 mt-5`}>

    {[...Array(8)].map((_, index) => (
        <div key={index} className="animate-pulse">
        <div className={`w-full  ${isSizeSmall ? 'h-[240px] lg:h-[364px] md:h-[280px] sm:h-[264px]' : 'lg:h-[364px] md:h-[280px] sm:h-[264px] h-[240px]'}  bg-gray-300 rounded-xl mb-2`}></div>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default CardSkeleton