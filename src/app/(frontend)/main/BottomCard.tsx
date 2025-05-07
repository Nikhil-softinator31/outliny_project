'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FirstTop from './FirstTop'
import BottomCorner from './BottomCorner'

const BottomCard: React.FC = () => {
  const images = ['/car12.jpg', '/car12.jpg', '/car12.jpg', '/car12.jpg']

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div
      id="Maindiv"
      className="flex flex-col gap-4  w-full text-white px-4 md:px-4 md:mb-10 lg:mb-20 mt-10 md:mt-20  flex-wrap  "
    >
      {/* First Section */}
      <div className="h-auto flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/2">
          <FirstTop />
        </div>

        <div className="bg-[#0E0E0E] rounded-2xl border border-[#202020] text-left w-full md:w-1/2 lg:w-[48%]  lg:mr-10 max-h-[600px] overflow-hidden relative">
          <div className="p-6 flex flex-col h-full gap-4">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold">Educational Content</h3>

            <p className="text-[#878685] text-sm sm:text-base leading-relaxed max-w-xl">
              Drag-and-drop tools might get you a quick animation, but if we’re realistic—that won’t
              win awards. We want you to actually <em>understand</em> what you’re doing, how it
              works, and how to nail it yourself next time. Learn the principles, build the skills,
              and take control of your projects.
            </p>

            {/* Mock browser frame */}
            <div className="relative bg-[#1A1A1A] rounded-xl border border-[#2c2c2c] overflow-hidden pt-6 px-4 pb-4">
              {/* Fake browser bar */}
              <div className="absolute top-2 left-4 flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              {/* Your video */}
              <video
                className="rounded-md w-full mt-6 border border-[#2c2c2c]"
                controls
                preload="metadata"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full  flex-wrap">
        {/* Slider */}
        <div className="w-full md:w-1/2 lg:w-1/4 bg-[#0E0E0E] rounded-2xl border border-[#202020] p-4">
          <div className="h-auto overflow-hidden">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={src}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-xl w-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-5">
            <h2 className="custom-text text-2xl sm:text-3xl  lg:text-[1.75em] font-normal text-left ">
              Osmo Basics
            </h2>
            <p className="mt-5 text-[#878685] text-sm sm:text-base text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur recusandae,
              cumque at debitis.
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="w-full md:w-[47%] lg:w-[44%]  bg-[#0E0E0E] rounded-2xl border border-[#202020] ">
          <CenterDiv />
        </div>

        {/* BottomCorner */}
        <div className="w-full  overflow-hidden lg:w-[27%] bg-[#0E0E0E] rounded-2xl border border-[#202020]">
          <BottomCorner />
        </div>
      </div>
    </div>
  )
}

const CenterDiv: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-6 w-full px-4">
      <div className="mt-8 w-full">
        <h3 className="custom-text text-xl sm:text-2xl md:text-3xl text-left">Code Snippets</h3>
        <p className="mt-2 text-[#878685] text-sm sm:text-base  text-left">
          Not sure about you, but we find ourselves going back to old projects all the time to
          quickly copy that snippet we used before. So we decided to keep track of them from now on.
        </p>
      </div>
      <div className="m-4 flex justify-center items-center w-full">
        <img
          src="/ss.png"
          className="rounded-xl w-full h-auto object-cover"
          alt="Code Snippet Preview"
        />
      </div>
    </div>
  )
}

export default BottomCard
