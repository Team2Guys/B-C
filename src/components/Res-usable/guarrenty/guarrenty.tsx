import { Button } from 'components/ui/button';
import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const Guarrenty = () => {
  return (
    <div className="bg-light mt-10 justify-items-center">
      <Container className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto">
        <div className="py-4 pe-4 lg:py-12 lg:pe-12 2xl:py-24 2xl:pe-24 lg:px-0 px-4 space-y-4">
          <h2 className="text-20 2xl:text-[43px] font-bold">
            OUR LIFETIME GUARANTEE
          </h2>
          <p className=" text-14 xl:text-16 text-justify">
            All our made-to-measure blinds, curtains and shutters come fully
            guaranteed, so you can rest assured you’re investing in quality
            products that are made to the highest specifications.
          </p>
          <Link href={'./product-guarantees'} className="mt-4 block">
            <Button className="shadow-slate-400 shadow-md w-32" variant={'white'}>
              VIew More
            </Button>
          </Link>
        </div>
        <div className="lg:bg-men bg-contain bg-no-repeat bg-right"></div>
      </Container>
    </div>
  );
};

export default Guarrenty;
