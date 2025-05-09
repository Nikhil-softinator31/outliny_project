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
            <h3 className="text-white text-2xl sm:text-3xl font-semibold">Your Smart Start Zone</h3>

            <p className="text-[#878685] text-sm sm:text-base leading-relaxed max-w-xl">
              Drag-and-drop builders are great—but real power comes from understanding what’s under
              the hood. At Outliny, we go beyond the visual editor. Our learning content helps
              developers and teams master templating with Jinja, understand MJML, and automate PDF
              generation with confidence.
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
              Outliny Basics
            </h2>
            <p className="mt-5 text-[#878685] text-sm sm:text-base text-left">
              Get started quickly with the foundational tools of Outliny. From drag-and-drop
              template editors to simple API calls using Jinja variables, everything is designed to
              minimize setup and maximize productivity.
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
        <h3 className="custom-text text-xl sm:text-2xl md:text-3xl text-left">
          Instant PDF Generation via API – Just Plug & Play!
        </h3>
        <p className="mt-2 text-[#878685] text-sm sm:text-base  text-left">
          No need for complex setups or third-party tools simply copy the generated URL from our app
          and paste it into Postman. Instantly, your custom PDF is generated and ready to use!
        </p>
      </div>
      <div className="m-4 flex justify-center items-center w-full">
        <Image
          src="/ss.png"
          className="rounded-xl w-full h-auto object-cover"
          alt="Code Snippet Preview"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}

export default BottomCard
