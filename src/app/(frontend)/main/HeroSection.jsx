'use client'

import React, { useRef, useEffect } from 'react'
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
      <div className="     ">
        <div className="borderr ">
          <div className=" ">
            <div className="flex  gap-0 md:gap-10  ">
              <img ref={imagesRef[0]} src="first.png" alt="Image 1" className="mt-0 m-1 object-fit    " />
              <img ref={imagesRef[1]} src="second2.png" alt="Image 2" className="mt-1    " />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
