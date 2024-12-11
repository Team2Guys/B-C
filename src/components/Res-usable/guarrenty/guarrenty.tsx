import { Button } from 'components/ui/button';
import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const Guarrenty = () => {
  return (
    <div className="bg-light mt-10 justify-items-center">
      <Container className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto">
        <div className="py-4 pe-4 lg:py-12 lg:pe-12 2xl:py-24 2xl:pe-24 lg:px-0 px-4 space-y-4 lg:text-start md:text-start sm:text-start md: xsm:text-center">
          <h2 className="text-20 2xl:text-[43px] font-bold ">
          Fully Guaranteed For Your Peace Of Mind
          </h2>
          <p className=" text-14 xl:text-16 leading-4 lg:text-start md:text-start sm:text-start md: xsm:text-center">
          All our made-to-measure shutters, blinds and curtains come with a 10-year warranty on all hardware and 5-year warranty on all fabrics. You can rest assured you’re investing in quality products.
          </p>
          <Link href={'/product-guarantees'} className="mt-4 block">
            <Button className="shadow-slate-400 shadow-md w-32" variant={'white'}>
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
