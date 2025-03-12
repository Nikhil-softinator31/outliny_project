'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: '-50%',
        duration: 15,
        ease: 'linear',
        repeat: -1,
      })
    }
  }, [])

  const logos = [
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/0-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/1-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/2-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/3-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/4-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/5-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/6-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/7-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/8-1.png',
    'https://www.cfabregas.eu/wp-content/uploads/2025/02/9-2.png',
  ]

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden bg-[#08090a] lg:mb-20">
      {/* Gradient fade effect on both sides */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#08090a] to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#08090a] to-transparent z-10" />

      {/* Carousel Track */}
      <div className="flex items-center gap-x-6 sm:gap-x-8 flex-nowrap" ref={carouselRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center min-w-[100px] sm:min-w-[150px] md:min-w-[150px] lg:min-w-[180px] h-[60px] sm:h-[80px] md:h-[100px]"
          >
            <img src={logo} alt="brand logo" className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
