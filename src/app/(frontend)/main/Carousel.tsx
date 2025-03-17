'use client'

import React from 'react'

const Carousel = () => {
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
    <section className="bg-custom-gradient12 py-8">
      <div className="relative mx-auto h-[100px] max-w-[1200px] overflow-hidden">
        {/* Carousel Track */}
        <div className="flex w-[4000px] animate-infiniteLoop ">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex h-[80px] w-[180px] items-center justify-center overflow-hidden sm:h-[100px] sm:w-[200px] "
            >
              <img src={logo} alt="brand logo" className="max-h-[60%] max-w-[80%] sm:max-h-[70%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
