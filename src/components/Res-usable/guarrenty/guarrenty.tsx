import { Button } from 'components/ui/button';
import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const Guarrenty = () => {
  return (
    <div className="bg-light mt-10 justify-items-center">
      <Container className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto text-center sm:text-start">
        <div className="py-4 pe-4 lg:py-12 lg:pe-12 2xl:py-24 2xl:pe-24 lg:px-0 px-4 space-y-4">
          <h2 className="text-20 2xl:text-[43px] font-bold">
            Fully Guaranteed For Your Peace Of Mind
          </h2>
          <p className="text-14 xl:text-16 leading-4">
          All our made-to-measure shutters, blinds and curtains come with a 10-year warranty on all hardware and a 3-year warranty on all fabrics. You can rest assured you’re investing in quality products.
          </p>
          <Link href='/product-guarantees/' className="mt-4 block w-fit mx-auto sm:m-0">
            <Button className="shadow-slate-400 shadow-md w-32 bg-secondary hover:bg-primary text-white" variant={'white'}>
              Read More
            </Button>
          </Link>
        </div>
        <div className="lg:bg-men bg-contain bg-no-repeat bg-right"></div>
      </Container>
    </div>
  );
};

export default Guarrenty;
