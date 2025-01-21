import TopHero from 'components/ui/top-hero';
import second from '../../../public/assets/images/choose-us/choose.jpg';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import { contentArray, links, locations } from 'data/data';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us | Blinds and Curtains',
  description: 'We have a diverse range of blinds perfect for your homes and offices. Choose from various styles to create the perfect environment for your space.',
  openGraph: {
    title: 'Why Choose Us | Blinds and Curtains',
    description: 'We have a diverse range of blinds perfect for your homes and offices. Choose from various styles to create the perfect environment for your space.',
    url: 'https://b-c-eight.vercel.app/why-choose-blinds-curtains',
    images: [
      {
        url: 'https://b-c-eight.vercel.app/blindsandcurtains.jpg',
        alt: 'Why Choose Us | Blinds and Curtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://b-c-eight.vercel.app/why-choose-blinds-curtains',
  },
};

const ChooseUs = () => {
  return (
    <>
      <TopHero title="Why Choose Us" image={second.src} className='max-xs:bg-current' />
      <Container className='mt-10 mb-10 md:mb-20'>
        <h1 className='text-[28px] md:text-[36px] font-black'>Why Choose Blinds & Curtains</h1>
        <h2 className='text-[18px] md:text-[24px] font-bold mt-5 md:mt-10'>What Makes Blinds & Curtains Different?</h2>

        <div className=' grid grid-cols-1 md:grid-cols-2 px-4 max-sm:text-14 text-16'>
        {contentArray.map((group, index) => (
          <ul key={index}>
            {group.map((item, subIndex) => (
              <li className='list-disc mt-2 md:mt-3 max-sm:text-14' key={subIndex}>
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
      <div className='mt-10 space-y-5'>
        <h3 className='text-18  font-semibold'>With over 750 glowing reviews, we&apos;ve built a reputation for quality</h3>
      
        <p className='max-sm:text-14'>We&apos;ve got a huge selection of colours, designs, and materials, including high-quality, fire retardant, dim-out, blackout, and printed options. Our products are tested to the highest standards. <Link className='underline' href={"/"}>Blindsandcurtains.ae</Link> has been a trusted name in Dubai for over 10 years. Our dedication to customer satisfaction and delivering custom, quality products shines through in our five-star reviews on Google.</p>
      </div>

      <div className="mt-10 space-y-5">
        <h3 className='text-18  font-semibold'>At Blinds & Curtains, it’s all about you</h3>
        <div>
        <p className='max-sm:text-14'>With a full range of custom window coverings and a team of experts, we work with you to find what works for your home and budget. Our experience makes the process simple and stress-free.</p>
        <p className='max-sm:text-14'>Don’t miss out – Request an appointment with Blinds & Curtains, and we will visit you at a convenient time!</p>
        </div>
        </div>

            <div className="overflow-x-auto mt-10">
              <h3 className='text-18  font-semibold'>Our Blinds & Curtains Expert Team is Ready To Serve You All Over Dubai</h3>
              <table className="table-auto w-full text-left mt-10">
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
          </Container>

    </>
  );
};

export default ChooseUs;
