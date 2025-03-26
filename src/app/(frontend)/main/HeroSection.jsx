'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const HeroSection = () => {
  const imagesRef = [useRef(null), useRef(null)]

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      imagesRef[0].current,
      { opacity: 0, x: 500, y: -200 },
      { opacity: 1, x: 0, y: 0, duration: 2, delay: 1, ease: 'power2.out' },
    ).fromTo(
      imagesRef[1].current,
      { opacity: 0, x: 500, y: -200 },
      { opacity: 1, x: 0, y: 0, duration: 2, ease: 'power2.out' },
      '-=1.5',
    )
  }, [])

  return (
    <>
      <div className="flex-auto overflow-hidden lg:mt-20">
        <div className="borderr">
          <div className="">
            <div className="flex gap-0 md:gap-10 code">
              <img ref={imagesRef[0]} src="first.png" alt="Image 1" className="p-1 " />
              <img ref={imagesRef[1]} src="second2.png" alt="Image 2" className="mt-1" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-[50vh]">
          <img src="second2.png " alt="Image 1" className="md:hidden mt-10" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
