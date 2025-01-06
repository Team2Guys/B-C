'use client';
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/contact-us/contactUs.webp';
import React from 'react';
import { usePathname } from 'next/navigation';
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import { contentArray, links } from 'data/data';
import { FaMapMarkerAlt } from 'react-icons/fa';
const locations = [
  ["Sheikh Zayed Road", "Downtown Dubai", "JLT", "City Walk"],
  ["Oud Metha", "Dubai Marina", "Jadaff", "Blue Water Island"],
  ["Business Bay", "Nad Al Shiba", "Palm Jumeirah", "Dubai Hills"],
  ["Karama", "JBR", "Jumeirah", "50 More Areas"],
];
const ChooseUs = () => {
  const pathName = usePathname();
  return (
    <>
      <TopHero title="Why Choose Us" image={second.src} pagename={pathName} />
      <Container className='mt-10'>
        <h1 className='text-[28px] md:text-[36px] font-black'>Why Choose Blinds & Curtains</h1>
        <h3 className='text-[18px] md:text-[24px] font-bold'>Learn more about what makes the Blinds & Curtains different</h3>

        <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 px-4 text-16'>
        {contentArray.map((group, index) => (
          <ul key={index}>
            {group.map((item, subIndex) => (
              <li className='list-disc mt-2 md:mt-3' key={subIndex}>
                {item.includes("blinds") || item.includes("curtains") || item.includes("shutters") ? (
                  <>
                    Great selection of{' '}
                    <Link className='underline' href={links.blinds}>blinds</Link>, {' '}
                    <Link className='underline' href={links.curtains}>curtains</Link>,{' '}and{' '}
                    <Link className='underline' href={links.shutters}>shutters</Link>
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className='mt-10 md:mt-20 space-y-5'>
        <div className='flex gap-2 items-center'>
        <h4 className='text-18 lg:whitespace-nowrap font-semibold'>We have had orders from many businesses or organizations and manufactured and fitted blinds for:</h4>
        <hr className=' border border-primary w-full max-md:hidden' />
        </div>
        <p>We have a very large range of colours and designs to choose from including high performance: Fire retardant, Dim-out, Blackout, Heat reflective and solar screening. Our products are tested to the highest standards - we expose the materials to extremes of temperature and checked for resistance to fading.</p>
        <p>Don't miss out - Request an appointment with Blinds & Curtains and we will visit you at a time convenient to you!</p>
      </div>

      <div className="mt-10 md:mt-20 space-y-5">
      <div className='flex gap-2 items-center'>
        <h4 className='text-18 lg:whitespace-nowrap font-semibold'>Our Blinds & Curtains Expert Team is Ready To Serve You All Over Dubai</h4>
        <hr className=' border border-primary w-full max-md:hidden' />
        </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left ">
          <tbody>
            {Array.from({ length: locations[0].length }).map((_, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}>
            {locations.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-2 border border-gray-300 text-center">
                <div className={`flex items-center w-full  space-x-2 ${rowIndex % 2 === 0 ? "text-[#4A4955]" : "text-[#969696]"}`}>
                  <FaMapMarkerAlt  />
                  <span className='whitespace-nowrap'>{column[rowIndex]}</span>
                </div>
              </td>
            ))}
          </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </Container>
    </>
  );
};

export default ChooseUs;
