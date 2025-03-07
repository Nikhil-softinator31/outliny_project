'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: '-50%', // Moves left continuously
        duration: 15, // Adjust speed
        ease: 'linear',
        repeat: -1, // Infinite loop
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
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden bg-[#08090a]">
      {/* Gradient fade effect on both sides */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#08090a] to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#08090a] to-transparent z-10" />

      {/* Carousel Track */}
      <div className="flex items-center gap-x-8" ref={carouselRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center min-w-[100px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[150px]  h-[80px] sm:h-[100px]"
          >
            <img src={logo} alt="brand logo" className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
