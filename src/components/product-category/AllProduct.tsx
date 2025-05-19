import Container from 'components/Res-usable/Container/Container'
import Card from 'components/ui/newCard'
import React from 'react'
import { CategoryProps } from 'types/product'
import { IProduct } from 'types/types'

const AllProduct = ({ Products, title }: CategoryProps) => {
  return (
    <Container className='mt-10 space-y-5 md:space-y-10'>
      <h2 className=' text-2xl sm:text-3xl md:text-5xl font-semibold sm:font-black font-robotoSerif text-primary capitalize text-center sm:text-start'>{title}</h2>
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 sm:px-4 md:px-0'>
        {Products?.map((product: IProduct, index: number) => (
          <Card card={product} key={index} />
        ))}
        </div>
    </Container>
  )
}

export default AllProduct