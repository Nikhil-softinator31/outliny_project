'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import BottomCorner from './BottomCorner'
import FirstTop from './FirstTop'
import BottomCorner from './BottomCorner'

// import FirstTop from './FirstTop'

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
    <div id="Maindiv" className="flex flex-col gap-8 bg-black w-full text-white">
      <div className="h-1/2 flex flex-col md:flex-row gap-8 w-full">
        <div className="">
          <FirstTop />
        </div>

        <div className="bg-[#0E0E0E] rounded-2xl border border-[#202020] text-left w-full  lg:w-[49vw]  max-h-[600px] overflow-hidden">
          <div className="p-5 flex flex-col h-full">
            <h3 className="custom-text mt-2 text-2xl sm:text-3xl md:text-4xl">
              Educational Content
            </h3>
            <p className="mt-4 text-[#878685] text-sm sm:text-base line-clamp-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores neque
              nostrum deserunt animi exercitationem libero fugit laudantium vitae facilis aliquam
              incidunt provident fugiat autem doloremque assumenda, voluptatibus, odit maxime.
            </p>
            <div className="mt-4 w-full min-h-0">
              <div className="relative h-full">
                <video
                  className="rounded-xl w-full h-full object-cover  inset-0"
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
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full ml-5">
        <div className="w-full md:w-1/4 bg-[#0E0E0E] rounded-2xl border border-[#202020] p-4">
          <div className="h-auto">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl w-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-5">
            <h2 className="custom-text text-4xl md:text-4xl text-left">Osmo Basics</h2>
            <p className="mt-5 text-[#878685] break-words text-left text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur recusandae,
              cumque at debitis.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[45%] bg-[#0E0E0E] rounded-2xl border border-[#202020]">
          <CenterDiv />
        </div>

        <div className="w-full md:w-1/4 bg-[#0E0E0E] rounded-2xl border border-[#202020] text-wrap mr-16">
          <BottomCorner />
        </div>
      </div>
    </div>
  )
}

const CenterDiv: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-6 w-full px-4 md:px-2 lg:px-6 xl:px-8 overflow-hidden">
      <div className="mt-8 w-full max-w-4xl">
        <h3 className="custom-text text-2xl sm:text-3xl md:text-4xl text-left">Code Snippets</h3>
        <p className="mt-2 text-[#878685] break-words text-left text-sm sm:text-base md:text-lg">
          Not sure about you, but we find ourselves going back to old projects all the time to
          quickly copy that snippet we used before. So we decided to keep track of them from now on.
        </p>
      </div>
      <div className="m-4 sm:m-6 md:m-10 flex justify-center items-center w-full">
        <img
          src="/ss.png"
          className="rounded-xl w-full max-w-4xl h-auto object-cover"
          alt="Code Snippet Preview"
        />
      </div>
    </div>
  )
}

export default BottomCard
