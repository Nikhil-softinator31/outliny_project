'use client'

import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  const logos = [
    '/card-img1.svg',
    '/card-img2.svg',
    '/card-img1.svg',
    '/card-img2.svg',
    '/card-img1.svg',
    '/card-img2.svg',
    '/card-img1.svg',
    '/card-img2.svg',
    
  ]

  return (
    <section className=" py-8">
      <div className="relative mx-auto h-[80px] max-w-[1200px] overflow-hidden">
        {/* Carousel Track */}
        <div className="flex min-w-max animate-infiniteLoop gap-6">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative flex h-[80px] w-[180px] items-center justify-center overflow-hidden sm:h-[100px] sm:w-[200px]"
            >
              <Image
                src={logo}
                alt="brand logo"
                fill
                sizes="(max-width: 768px) 100px, 200px"
                className="object-contain"
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
