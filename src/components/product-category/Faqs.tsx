import Container from 'components/Res-usable/Container/Container'
import Accordion from 'components/ui/Accordion'
import React from 'react'
import { CategoryProps } from 'types/product'

const Faqs = ({ Data }: CategoryProps) => {
  return (
    <>
    {Data?.faqs && Data.faqs.length > 0 &&
        <Container className='space-y-2 md:space-y-5  mt-10 py-5 md:py-10 '>
          <div className='max-w-[780px] mx-auto'>
            <h2 className=' text-2xl md:text-5xl font-robotoSerif font-bold text-primary text-center'>{Data?.faqHeading}</h2>
            <Accordion items={Data?.faqs} />
          </div>
        </Container>
    }
    </>
  )
}

export default Faqs