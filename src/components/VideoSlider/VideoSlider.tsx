"use client"

import React, { useState, useRef, useEffect } from "react"
import { reelsData } from "data/SellerSlider"
import Container from "components/Res-usable/Container/Container"

export default function VideoReelsSlider() {
  const [activeIndex, setActiveIndex] = useState(2)
  const totalVideos = reelsData.length

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex])
  const goToPrevious = () =>
    setActiveIndex((prev) => (prev === 0 ? totalVideos - 1 : prev - 1))

  const goToNext = () =>
    setActiveIndex((prev) => (prev === totalVideos - 1 ? 0 : prev + 1))

  const goToSlide = (index: number) => setActiveIndex(index)

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX

    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current
      if (distance > minSwipeDistance) {
        goToNext()
      } else if (distance < -minSwipeDistance) {
        goToPrevious()
      }
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  const getPositionClass = (index: number) => {
    const left2 = (activeIndex - 2 + totalVideos) % totalVideos
    const left1 = (activeIndex - 1 + totalVideos) % totalVideos
    const right1 = (activeIndex + 1) % totalVideos
    const right2 = (activeIndex + 2) % totalVideos

    if (index === activeIndex) {
      return "z-30 scale-100 opacity-100"
    } else if (index === left1) {
      return "z-20 scale-[0.85] opacity-1 -translate-x-[60%]"
    } else if (index === left2) {
      return "z-10 scale-[0.75] opacity-1 -translate-x-[110%]"
    } else if (index === right1) {
      return "z-20 scale-[0.85] opacity-1 translate-x-[60%]"
    } else if (index === right2) {
      return "z-10 scale-[0.75] opacity-1 translate-x-[110%]"
    } else {
      return "hidden"
    }
  }

  return (
    <div className="relative mt-4">
      <div className="bg-[#F1B42F42] sm:py-6 py-4 text-center font-bold">
        <p className="font-robotoSerif sm:text-4xl text-lg text-primary" >Press Play on Style Quick Reels.</p>
      </div>
      <Container>
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative flex items-center justify-center sm:h-[570px] h-[300px] overflow-hidden"
        >

          {reelsData.map((item, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${getPositionClass(
                index
              )}`}
            >
              <div className="relative sm:w-[500px] sm:h-[500px] w-[150px] h-[280px] rounded-2xl overflow-hidden shadow-lg"
              >
                <video
                  key={item.videoUrl}
                  src={item.videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          ))}
        </div>



        {/* Pagination dots */}
        <div className="justify-center gap-2 mt-8 select-none hidden">
          {reelsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to video ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-white w-6" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
