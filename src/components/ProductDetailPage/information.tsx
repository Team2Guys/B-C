'use client'
import React, { useState, useMemo } from 'react'
import Container from 'components/Res-usable/Container/Container'
import Image from 'next/image'

interface PrivacyImage {
  imageUrl: string
}

interface InformationProps {
  privarcyImage: PrivacyImage
  privacySectoin: Array<{
    specsHeading: string
    specsDetails: string
  }>
}

const Information = ({ privarcyImage, privacySectoin }: InformationProps) => {
  const [visibleCount, setVisibleCount] = useState(1)

  const handleReadMore = () => setVisibleCount(prev => prev + 2)
  const handleReadLess = () => setVisibleCount(1)

  const { visibleSections, hasMore } = useMemo(() => {
    const extraSections = privacySectoin.slice(1)
    const visible = extraSections.slice(0, visibleCount)
    const more = visibleCount < extraSections.length
    return { visibleSections: visible, hasMore: more }
  }, [privacySectoin, visibleCount])

  return (
    <>
      {privacySectoin && privacySectoin.length > 0 && (
        <div className="bg-secondary-foreground py-10 mt-10">
          <Container className="grid grid-cols-12 gap-6">
            {/* Text Section */}
            <div className="col-span-12 md:col-span-6 space-y-2 order-2 md:order-1">
              {/* First section (always visible) */}
              <div>
                <p className="font-robotoSerif font-bold text-2xl md:text-[30px] xl:text-[40px] leading-[120%]">
                  {privacySectoin[0].specsHeading}
                </p>
                <p>{privacySectoin[0].specsDetails}</p>
              </div>

              {/* Dynamically shown extra sections */}
              {visibleSections.map((item, index) => (
                <div key={index}>
                  <p className="font-robotoSerif font-medium md:font-bold text-xl md:text-2xl leading-[120%]">
                    {item.specsHeading}
                  </p>
                  <p>{item.specsDetails}</p>
                </div>
              ))}

              {/* Controls */}
              <div className="pt-5 md:pt-10 space-x-4">
                {hasMore && (
                  <button
                    onClick={handleReadMore}
                    className="p-2 text-sm md:text-[22px] font-medium text-secondary border rounded-md border-primary"
                  >
                    Read More
                  </button>
                )}
                {visibleCount > 1 && (
                  <button
                    onClick={handleReadLess}
                    className="p-2 text-sm md:text-[22px] font-medium text-secondary border rounded-md border-primary"
                  >
                    Read Less
                  </button>
                )}
              </div>
            </div>

            {/* Image Section */}
            {
              privarcyImage?.imageUrl &&
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <Image
                className="h-56 sm:h-96 md:h-[600px] w-full object-cover"
                src={privarcyImage.imageUrl}
                width={600}
                height={600}
                alt="information"
              />
            </div>
            }
          </Container>
        </div>
      )}
    </>
  )
}

export default Information
