import Container from 'components/Res-usable/Container/Container'
import Card from 'components/ui/newCard'
import React from 'react'
import { CategoryProps } from 'types/product'

const AllProduct = ({Products,title}:CategoryProps) => {
  return (
    <Container className='mt-10 space-y-5 md:space-y-10'>
      <h2 className=' text-2xl sm:text-3xl md:text-5xl font-semibold sm:font-black font-robotoSerif text-primary capitalize text-center sm:text-start'>{title}</h2>
      <Card Data={Products || []}/>
    </Container>
  )
}

export default AllProduct