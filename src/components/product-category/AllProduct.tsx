import Container from 'components/Res-usable/Container/Container'
import Card from 'components/ui/newCard'
import React from 'react'

const AllProduct = ({Data}:{Data:any}) => {
  return (
    <Container className='mt-10 space-y-10'>
      <h2 className=' text-2xl sm:text-3xl md:text-5xl font-black font-robotoSerif text-primary capitalize'>Our {Data[0]?.category?.title} Products</h2>
      <Card Data={Data}/>
    </Container>
  )
}

export default AllProduct