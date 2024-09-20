import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from 'components/ui/button'; // Assuming this is your custom button component

// Define the props for the Contant component
interface ContantProps {
  TabData: {
    title: string;
    video: string;
    description: string;
  };
}

const Contant: React.FC<ContantProps> = ({ TabData }) => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center items-center mx-auto lg:max-w-screen-lg px-4'>
        {/* First Flex Item - Video */}
        <div className='w-full lg:w-1/2 h-full'>
          <video
            src={TabData.video} // Use dynamic video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Second Flex Item - Content */}
        <div className='flex flex-col justify-normal space-y-4 py-6 w-full lg:w-1/2'>
          <h2 className='font-serif font-extrabold text-lg sm:text-2xl lg:text-3xl'>
            {TabData.title} {/* Dynamic Title */}
          </h2>
          <p className='font-light text-sm sm:text-base lg:text-lg'>
            {TabData.description} {/* Dynamic description */}
          </p>

          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 uppercase'>
            <Button variant={"black"}>Book An Appointment</Button>
            <Button variant={"Gray"}>Call Now</Button>
            <Button className='flex items-center justify-center' variant={"Green"}>
              <FaWhatsapp size={25} />
              <p>Whatsapp</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contant;