'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const Herosection = () => {
  const OutlinyFeatures = [
    'Ease of use with intuitive drag-and-drop editors.',
    'Enterprise-grade security and compliance.',
    'Developer-friendly APIs for seamless integrations.',
    'Open-source transparency for complete flexibility.',
    'Scalability and reliability for businesses of all sizes.',
  ]

  const textref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      textref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
    )
  }, [])

  return (
    <div className="py-10 ">
      <div className="flex flex-col items-center  gap-5">
        <p
          ref={textref}
          className="font-poppins md:text-[17px]  max-w-6xl mx-auto text-white text-center p-4 md:mt-10 font-normal text-[16px] leading-[30px]  tracking-normal "
        >
          At Outliny, we believe that brand consistency shouldn&apos;t be complicated. We&apos;re
          dedicated to helping enterprises seamlessly manage their branding across digital documents
          and communications, empowering them to deliver cohesive and professional experiences every
          time.
        </p>

        {/* Hero Section Banner */}
        <div className="relative     ">
          <h1
            className={` opacity-[0.9] bg-custom-gradient bg-clip-text text-transparent font-aldrich text-[100px] sm:text-[160px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-normal leading-tight text-center overflow-hidden`}
          >
            Outliny
          </h1>
          <div className="absolute inset-0 flex justify-center items-center top-20 sm:top-24 md:top-28 lg:top-32 xl:top-36">
            <Image
              src="/logo7.png"
              alt="Outliny Logo"
              width={500}
              height={500}
              className="w-[210px] sm:w-[300px] md:w-[400px] lg:w-[500px] opacity-80"
              priority
            />
          </div>
        </div>
      </div>
      {/* Mission Section */}
      <div className="w-full bg-custom-gradient19 sm:py-20 px-4 sm:px-6 lg:px-12  mt-[8rem] sm:mt-[10rem] ">
        <div className="flex flex-col lg:flex-row justify-between max-w-[1200px] mx-auto items-center gap-14 md:mt-10">
          <div className="w-full lg:w-1/2">
            <video className="w-full aspect-video rounded-xl " controls preload="metadata">
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-white text-[28px] sm:text-[32px] md:text-[36px]  font-bold mb-8 text-left font-poppins  text-4xl leading-none tracking-normal ">
              Our Mission
            </h1>

            <ul className="text-white text-left space-y-5 sm:space-y-6 md:space-y-8 py-4 ">
              {OutlinyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-6 font-poppins text-[16px] leading-snug"
                >
                  <span className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] bg-custom-gradient20 text-white text-center flex items-center justify-center rounded-[10px]  text-lg sm:text-xl p-5">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-poppins font-normal text-base leading-6 md:leading-none tracking-wider capitalize sm:mt-3  ">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
