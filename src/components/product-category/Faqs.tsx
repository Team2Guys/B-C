import Container from 'components/Res-usable/Container/Container'
import Accordion from 'components/ui/Accordion'
import { faqData } from 'data/new-data'
import React from 'react'

const Faqs = () => {
  return (
    <div className='bg-primary-foreground mt-10 py-10'>
        <Container className='space-y-5 '>
            <h2 className=' text-2xl md:text-5xl font-robotoSerif font-bold text-primary text-center'>Frequently Asked Questions</h2>
            <p className=' text-sm md:text-xl font-roboto font-medium text-center'>See answers to our most frequently asked questions on pencil pleat curtains below.</p>
            <Accordion items={faqData} />
        </Container>
    </div>
  )
}

export default Faqs