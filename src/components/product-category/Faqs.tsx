import Container from 'components/Res-usable/Container/Container'
import Accordion from 'components/ui/Accordion'
import React from 'react'
import { CategoryProps } from 'types/product'

const Faqs = ({ Data }: CategoryProps) => {
  return (
    <>
    {Data?.faqs && Data.faqs.length > 0 &&
    <div className='bg-primary-foreground mt-10 py-5 md:py-10'>
        <Container className='space-y-2 md:space-y-5 '>
            <h2 className=' text-2xl md:text-5xl font-robotoSerif font-bold text-primary text-center'>Frequently Asked Questions</h2>
            <p className=' text-lg md:text-xl font-roboto font-medium text-center'>{Data?.faqHeading}</p>
            <Accordion items={Data?.faqs} />
        </Container>
    </div>
    }
    </>
  )
}

export default Faqs