'use client';
import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/choose-us/choose.jpg';
import React from 'react';
import { usePathname } from 'next/navigation';
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import { contentArray, links, locations } from 'data/data';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ChooseUs = () => {
  const pathName = usePathname();
  return (
    <>
      <TopHero title="Why Choose Us" image={second.src} pagename={pathName} className='max-xs:bg-current' />
      <Container className='mt-10 mb-10 md:mb-20'>
        <h1 className='text-[28px] md:text-[36px] font-black'>Why Choose Blinds & Curtains</h1>
        <h2 className='text-[18px] md:text-[24px] font-bold'>What Makes Blinds & Curtains Different?</h2>

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
        <h4 className='text-18 lg:whitespace-nowrap font-semibold'>With over 750 glowing reviews, we&apos;ve built a reputation for quality</h4>
        <hr className=' border border-primary w-full max-md:hidden' />
        </div>
        <p>We&apos;ve got a huge selection of colours, designs, and materials, including high-quality, fire retardant, dim-out, blackout, and printed options. Our products are tested to the highest standards. <Link className='underline' href={"/"}>Blindsandcurtains.ae</Link> has been a trusted name in Dubai for over 10 years. Our dedication to customer satisfaction and delivering custom, quality products shines through in our five-star reviews on Google.</p>
      </div>

      <div className="mt-10 md:mt-20 space-y-5">
      <div className='flex gap-2 items-center'>
        <h4 className='text-18 lg:whitespace-nowrap font-semibold'>At Blinds & Curtains, it’s all about you</h4>
        <hr className=' border border-primary w-full max-md:hidden' />
        </div>
        <div>
        <p>With a full range of custom window coverings and a team of experts, we work with you to find what works for your home and budget. Our experience makes the process simple and stress-free.</p>
        <p>Don’t miss out – Request an appointment with Blinds & Curtains, and we will visit you at a convenient time!</p>
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
