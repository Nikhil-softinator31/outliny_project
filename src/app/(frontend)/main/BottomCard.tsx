'use client'
import React from 'react'
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
    <div id="Maindiv" className="flex flex-col gap-8  w-full text-white px-4 md:px-8 md:mb-10 ">
      {/* First Section */}
      <div className="h-auto flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2">
          <FirstTop />
        </div>

        <div className="bg-[#0E0E0E] rounded-2xl border border-[#202020] text-left w-full md:w-1/2 max-h-[600px] overflow-hidden">
          <div className="p-5 flex flex-col h-full">
            <h3 className="custom-text mt-2 text-xl sm:text-2xl md:text-3xl">
              Educational Content
            </h3>
            <p className="mt-4 text-[#878685] text-sm sm:text-base line-clamp-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores neque
              nostrum deserunt animi exercitationem libero fugit laudantium vitae facilis aliquam
              incidunt provident fugiat autem doloremque assumenda, voluptatibus, odit maxime.
            </p>
            <div className="mt-4 w-full">
              <video className="rounded-xl w-full h-auto object-cover" controls preload="metadata">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>


            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full ">
        {/* Slider */}
        <div className="w-full md:w-1/4 bg-[#0E0E0E] rounded-2xl border border-[#202020] p-4">
          <div className="h-auto overflow-hidden">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img src={src} alt={''} className="rounded-xl w-full object-cover" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-5">
            <h2 className="custom-text text-2xl sm:text-3xl text-left">Osmo Basics</h2>
            <p className="mt-5 text-[#878685] text-sm sm:text-base text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur recusandae,
              cumque at debitis.
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="w-full md:w-[45%] bg-[#0E0E0E] rounded-2xl border border-[#202020] p-4">
          <CenterDiv />
        </div>

        {/* BottomCorner */}
        <div className="w-full md:w-1/4 bg-[#0E0E0E] rounded-2xl border border-[#202020] p-4">
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
        <p className="mt-2 text-[#878685] text-sm sm:text-base md:text-lg text-left">
          Not sure about you, but we find ourselves going back to old projects all the time to
          quickly copy that snippet we used before. So we decided to keep track of them from now on.
        </p>
      </div>
      <div className="m-4 flex justify-center items-center w-full">
        <img src="/ss.png" className="rounded-xl w-full h-auto object-cover" alt="Code Snippet Preview" />
      </div>
    </div>
  )
}

export default BottomCard