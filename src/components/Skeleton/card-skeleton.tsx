import Container from 'components/Res-usable/Container/Container'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Container className='mt-10'>
    <div className="text-center max-w-screen-md mx-auto space-y-3">
    <div  className="animate-pulse space-y-2">
        <div className="w-full h-[20px] bg-gray-300 rounded-xl mb-2"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded-xl mb-2"></div>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

    {[...Array(6)].map((_, index) => (
        <div key={index} className="animate-pulse">
        <div className="w-full h-[400px] bg-gray-300 rounded-xl mb-2"></div>
        </div>
    ))}
    </div>
    </Container>
  )
}

export default CardSkeleton