'use client';

import whyUsImg from '../../../public/assets/images/whyus.png';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';
import { Image as ImageAntd } from 'antd';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import Link from 'next/link';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { ICategory, IProduct } from 'types/types';
import ProductCard from 'components/ui/Product-Card';
import {
  generateSlug,
  staticDescriptions,
} from 'data/data';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import { IoSearch } from 'react-icons/io5';
import TopHero from 'components/ui/top-hero';
import { usePathname } from 'next/navigation';

const Commercial = ({
  filteredProducts,
  filteredCatgory,
  mixProdCategeries
}: {
  filteredProducts: IProduct[];
  filteredCatgory: ICategory
  mixProdCategeries: any[]
}) => {
  const pathname = usePathname();

  const renderDescription = (title: string) => {
    const slug = generateSlug(title);
    return (
      staticDescriptions[slug] || `Dynamic description fetched for ${title}`
    );
  };

  return (
    <>
      <TopHero
        title={filteredCatgory?.title}
        pageTitle="Commercial Office Blinds"
        image={`${filteredCatgory?.bannerImage?.imageUrl || bgBreadcrum.src}`}
        pagename={pathname}
      />
      <Container className=" pt-10 md:pt-20 pb-14 flex justify-between gap-10 items-center flex-col md:flex-row px-4">
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-xl xs:text-2xl tracking-wider">
            Maximise Your Productivity With Commercial Office Blinds
          </h2>
          <p className="text-14 xs:text-18 md:leading-8 mt-4 text-lightdark">
            We offer custom-made options for commercial office blinds. These
            blinds can fit to windows of any size and shape, including large
            floor-to-ceiling glass panels that are commonly found in modern
            offices. Made-to-measure options of our office blinds offer low
            maintenance with durable and dust-resistant materials that can be
            easily cleaned with a quick wipe, making them practical for busy
            office environments. We provide modern{' '}
            <Link
              className="underline"
              target="_blank"
              href={'/blinds/duplex-blinds/'}
            >
              motorised duplex blinds
            </Link>{' '}
            for ease of use, allowing employees to adjust lighting with a remote
            or smart device. Our{' '}
            <Link
              className="underline"
              target="_blank"
              href={'/made-to-measure-blinds/'}
            >
              blinds
            </Link>{' '}
            with translucent or sheer options reduce glare during training
            sessions or projector-based activities.
            <br /> Our{' '}
            <Link
              className="underline"
              target="_blank"
              href={'/blinds/wooden-venetian/'}
            >
              Venetian blinds
            </Link>{' '}
            with horizontal slats are used for managerial or executive offices,
            boardrooms, IT and technical offices, training rooms, etc., making
            them suitable for various work environments. You can enjoy our free
            site visits and installation processes for{' '}
            <Link
              className="underline"
              target="_blank"
              href={'/curtains/office-window-curtains/'}
            >
              office curtains
            </Link>{' '}
            and blinds. We are also trusted by office owners with over 750+
            5-star reviews. Our professional team perfectly fit office{' '}
            <Link
              className="underline"
              target="_blank"
              href={'/blinds/roller-blinds/'}
            >
              roller blinds
            </Link>{' '}
            to your windows for optimal performance.
          </p>

          <div className="h-fit flex justify-center md:justify-start mt-4">
            <Link
              href="/request-appointment/"
              className="px-8 py-4 bg-secondary rounded-md text-white hover:bg-primary "
            >
              Book A Free Appointment
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={whyUsImg}
            alt="why-us img"
            className="me-auto md:me-0 ms-auto"
          />
        </div>

      </Container>

      <div className="w-full border-t-[1px] border-borderclr"></div>

      <Container className="text-center py-10">
        <h2 className="text-16 xs:text-3xl sm:text-4xl font-semibold md:font-normal">
          Thousands of Fabric and Colour Options
        </h2>
        <p className="mt-3 text-14 md:leading-7">
          Explore a variety of textures and patterns, perfect for any project or
          taste,
          <br />
          all at competitive prices.
        </p>

        <ProductCard
          products={mixProdCategeries || []}
          renderDescription={renderDescription}
        />
      </Container>
      <BookNowBanner />
      <Container>
        <h2 className="text-16 xs:text-3xl sm:text-4xl font-semibold md:font-normal uppercase text-center py-10">
          COMMERCIAL OFFICE BLINDS installations
        </h2>
        <div className='mb-10'>
        {
          <ImageAntd.PreviewGroup
            preview={{
              onChange: (current, prev) => {
                console.log(`current index: ${current}, prev index: ${prev}`);
              },
            }}
          >
            {
              (
                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 2xl:grid-cols-4 xs:mt-14 mt-5 md:px-4 gap-4 w-full">
                  {filteredProducts?.map((product) => {
                    if (!product.category) return null;
                    const { posterImage } = product;
                    const altText = posterImage?.altText || 'Image';

                    return (
                      <div
                        key={product.id}
                        className="max-sm:flex-shrink-0 relative rounded-lg transition-shadow duration-300 group  mt-2"
                      >
                        <ImageAntd
                          src={posterImage?.imageUrl || '/default-image.jpg'}
                          alt={altText}
                          className="rounded-xl h-[240px] sm:h-[264px] md:h-[280px] lg:h-[364px] w-full"
                          width={500}
                          height={500}
                          loading='lazy'
                          preview={{
                            mask: (
                              <div>
                                <IoSearch
                                  style={{ color: 'white', fontSize: '30px' }}
                                />
                              </div>
                            ),
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

              )}
          </ImageAntd.PreviewGroup>
        }
        </div>
        

        <RelatedProducts  products={filteredProducts || []} limit={4} />
      </Container>
    </>
  );
};

export default Commercial;
