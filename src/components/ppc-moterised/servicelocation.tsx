'use client';
import React from 'react';
import { MapPin } from 'lucide-react';
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import { ServiceLocationsProps } from 'types/types';

const ServiceLocations: React.FC<ServiceLocationsProps> = ({ title, description, locations, mapLink }) => {
  return (
    <section className="bg-white">
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between pt-6 py-14 gap-7 px-2'>
          <div className="md:w-[40%] lg:w-1/2 space-y-4 sm:space-y-7">
            <h2 className="text-2xl md:text-4xl font-black font-juana sm:leading-10">{title}</h2>
            <p className="font-normal md:text-base lg:text-20">{description}</p>
            <div className='text-center md:text-left'>
              <Link href={mapLink} className="px-6 py-3 bg-black hover:bg-primary text-white rounded-md">
                GET DIRECTION
              </Link>
            </div>
          </div>
          <div className="md:w-[60%] lg:w-1/2 bg-[#EBEBEB] p-6 rounded-3xl shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center bg-white border-2 border-primary rounded-full shadow-sm">
                  <div className='p-2 xl:p-4 bg-primary rounded-full'>
                    <MapPin className="text-white" size={18} />
                  </div>
                  <span className="text-xs xl:text-20 font-bold py-1 px-2 xl:px-4 xl:leading-6">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceLocations;
