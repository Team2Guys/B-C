import Container from 'components/Res-usable/Container/Container'
import React, { useRef, useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'

const videos = [
  {
    src: 'https://bncvidoes.s3.eu-north-1.amazonaws.com/mainblinds.mp4',
    title: 'How Does Our Process Work?',
  },
  {
    src: 'https://bncvidoes.s3.eu-north-1.amazonaws.com/mainblinds.mp4',
    title: 'Installation Explained in Simple Steps',
  },
  {
    src: 'https://bncvidoes.s3.eu-north-1.amazonaws.com/mainblinds.mp4',
    title: 'Things to Know Before You Book',
  },
]

const VideoGuide = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [startedIndexes, setStartedIndexes] = useState<number[]>([])

 const handlePlayPause = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      if (video.paused) {
        video.play()
        if (!startedIndexes.includes(index)) {
          setStartedIndexes((prev) => [...prev, index])
        }
      } else {
        video.pause()
      }
    }
  }

  return (
    <div className="sm:bg-[#F5F5F5] py-6 sm:py-12 sm:mt-10">
      <Container className="space-y-5 md:space-y-10">
        <p className="font-robotoSerif font-extrabold text-2xl lg:text-5xl text-center">
          A Complete Guide To
        </p>

        <div className="grid grid-cols-3 gap-2 md:gap-6 justify-items-center max-w-5xl mx-auto">
          {videos.map((video, idx) => (
            <div key={idx} className="flex flex-col space-y-2 relative w-full">
              <div className="p-1 sm:p-2 rounded-md border border-secondary relative">
                <video
                  ref={(el) => { videoRefs.current[idx] = el }}
                  className="w-full h-[120px] sm:h-[325px] object-cover rounded"
                  muted
                  playsInline
                  controls={false}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!startedIndexes.includes(idx) && (
                  <button
                    onClick={() => handlePlayPause(idx)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 backdrop-blur text-white p-3 rounded-full"
                  >
                    <BsPlayFill size={25} />
                  </button>
                )}
              </div>
              <p className=" text-xs sm:text-[22px] sm:font-semibold font-roboto px-2 sm:px-4 text-center sm:leading-6">{video.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default VideoGuide
