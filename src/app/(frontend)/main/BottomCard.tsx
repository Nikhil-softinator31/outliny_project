'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FirstTop from './FirstTop'
import BottomCorner from './BottomCorner'
import { useRef, useState } from 'react'

import { CiPlay1 } from 'react-icons/ci'
import { CiPause1 } from 'react-icons/ci'

const BottomCard: React.FC = () => {
  const images = ['/one.png', '/two.png', '/three.png', '/four.png']

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPauseBtn, setShowPauseBtn] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="w-full px-4 md:px-8  text-white flex flex-col gap-6 mt-10 md:mt-20 mx-auto ">
      {/* First Section */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6 w-full">
        <div className="w-full md:w-1/2">
          <FirstTop />
        </div>

        {/* div starting */}

        <div className="bg-[#0E0E0E] rounded-2xl border border-[#202020] w-full md:w-1/2 lg:w-[48%] max-h-[600px]  overflow-hidden">
          <div className="p-6 flex flex-col gap-4 h-full">
            <h3 className="text-2xl sm:text-3xl font-semibold">Your Smart Start Zone</h3>
            <p className="text-[#878685] text-sm sm:text-base leading-relaxed">
              Drag-and-drop builders are great—but real power comes from understanding what’s under
              the hood. At Outliny, we go beyond the visual editor. Our learning content helps
              developers and teams master templating with Jinja, understand MJML, and automate PDF
              generation with confidence.
            </p>
            <div
              className="relative bg-[#1A1A1A] rounded-xl border w-full border-[#2c2c2c] overflow-hidden  pt-2 px-4 pb-4 sm:h-screen  group"
              onMouseEnter={() => setShowPauseBtn(true)}
              onMouseLeave={() => setShowPauseBtn(false)}
            >
              {/* Video */}
              <video
                ref={videoRef}
                className="rounded-md mt-1 object-fill   w-full sm:h-full   border border-[#2c2c2c]  "
                controls
                preload="metadata"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Centered Play Button */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <CiPlay1 className="text-black  text-5xl lg:text-6xl text-center bg-white bg-opacity-60 p-4 rounded-full hover:scale-110 transition duration-200" />
                </button>
              )}

              {/* Centered Pause Button on hover */}
              {isPlaying && showPauseBtn && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <CiPause1 className="text-black text-5xl lg:text-6xl bg-white bg-opacity-60 p-4 rounded-full hover:scale-110 transition duration-200" />
                </button>
              )}
            </div>
          </div>
        </div>
        {/* div ending  */}
      </div>

      {/* Second Section */}
      <div className="flex flex-wrap gap-4 w-full  ">
        {/* Slider Card */}
        <div className="w-full sm:w-[48%] lg:w-[24%] xl:w-[26%] bg-[#0E0E0E] rounded-2xl border border-[#202020]   ">
          <div className="overflow-hidden">
            {/* ✅ Responsive Height Wrapper for Slider */}
            <div className="w-full h-auto sm:h-[260px] md:h-[300px] lg:h-[240px] rounded-xl overflow-hidden rounded-t-2xl">
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div key={index} className="w-full">
                    <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[260px] xl:h-[300px] overflow-hidden rounded-xl">
                      <Image
                        src={src}
                        alt={`Slide ${index}`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="mt-5 p-2 ">
            <h2 className="text-2xl sm:text-3xl font-normal">Outliny Basics</h2>
            <p className="mt-3 text-[#878685] text-sm sm:text-base">
              Get started quickly with the foundational tools of Outliny. From drag-and-drop
              template editors to simple API calls using Jinja variables, everything is designed to
              minimize setup and maximize productivity.
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="w-full sm:w-[48%] lg:w-[48%] bg-[#0E0E0E] rounded-2xl border border-[#202020]">
          <CenterDiv />
        </div>

        {/* BottomCorner */}
        <div className="w-full lg:w-[24%] bg-[#0E0E0E] rounded-2xl border border-[#202020]">
          <BottomCorner />
        </div>
      </div>
    </div>
  )
}

const CenterDiv: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-6 px-4 py-8">
      <h3 className="text-xl sm:text-2xl md:text-3xl">
        Instant PDF Generation via API – Just Plug & Play!
      </h3>
      <p className="text-[#878685] text-sm sm:text-base">
        No need for complex setups or third-party tools. Simply copy the generated URL from our app
        and paste it into Postman. Instantly, your custom PDF is generated and ready to use!
      </p>
      <div className="w-full h-auto  flex justify-center overflow-y-hidden">
        <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-xl  shadow-md w-full max-w-5xl">
          <Image
            src="/centerdiv.png"
            alt="Code Snippet Preview"
            width={900}
            height={600}
            className="w-full  h-auto  lg:h-[300px] xl:h-[240px] rounded-lg object-fit"
          />
        </div>
      </div>
    </div>
  )
}

export default BottomCard
