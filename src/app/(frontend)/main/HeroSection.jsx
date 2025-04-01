'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const HeroSection = () => {
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const image1 = useRef(null)
  const image2 = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      [text1.current, text2.current, text3.current], // Array of refs
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3, // Stagger effect for text elements
      },
    )
  }, [])

  useGSAP(() => {
    gsap.fromTo(
      image1.current,
      { opacity: 0, x: 500, y: -200, filter: 'blur(15px)' },
      { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', duration: 2, delay: 1, ease: 'power2.out' },
    )
    gsap.fromTo(
      image2.current,
      { opacity: 0, x: 500, y: -200, filter: 'blur(15px)' },
      { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', duration: 2, ease: 'power2.out' },
      '-=1.5',
    )
  }, [])

  return (
    <div className="flex-auto overflow-hidden mt-5 sm:mt-20">
      <div className="text-white mt-20 flex justify-center items-center">
        <div className="max-w-[1000px]  lg:mr-72  ">
          <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start sm:pl-10  gap-2 md:gap-4'>
            <h1
              ref={text1}
              className=" text-left text-[50px] sm:text-5xl   font-semibold"
            >
              Outliny
            </h1>
            <p ref={text2} className="text-center sm:text-left sm:text-5xl flex-wrap text-3xl  font-semibold  ">
              Brand Consistency, Simplified.
            </p>
            <p
              ref={text3}
              className="text-center sm:text-left text-xl  sm:text-xl sm:w-screen text-[#b0b0b0] max-w-[615px] font-semibold  flex-wrap"
            >
              Centrally manage and automate your PDFs and email templates ensuring seamless brand
              consistency across every touchpoint.
            </p>
          </div>
        </div>
      </div>
      <div className="borderr">
        <div className="flex gap-0 md:gap-10 code">
          <img ref={image1} src="first.png" alt="Image 1" className="p-1" />
          <img ref={image2} src="second2.png" alt="Image 2" className="mt-1" />
        </div>
      </div>

      <div className="flex justify-center items-center h-[50vh]">
        <img src="second2.png" alt="Image 1" className="md:hidden mt-10" />
      </div>
    </div>
  )
}

export default HeroSection
