import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

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
    <div className="   py-10">
      <div className="flex flex-col items-center">
        <p
          ref={textref}
          className="font-poppins text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] max-w-7xl mx-auto font-normal leading-relaxed text-white text-center p-4 text-pretty md:mt-10"
        >
          At Outliny, we believe that brand consistency shouldn’t be complicated. We’re dedicated to
          helping enterprises seamlessly manage their branding across digital documents and
          communications, empowering them to deliver cohesive and professional experiences every
          time.
        </p>

        <div className="flex justify-center items-center mt-10 ">
          <Image
            src="/mobile.svg"
            alt="logo"
            width={600}
            height={600}
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
          />
        </div>

        {/* mission section */}
        <div className="w-full bg-custom-gradient19 py-20">
          <div className="flex flex-col lg:flex-row justify-evenly max-w-[1200px] mx-auto items-center gap-10 h-[500px]">
            <div>
              <video className="w-full lg:w-[90%] h-full p-2 md:mt-20 rounded-xl" controls preload="metadata">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full">
              <h1 className="text-white text-left text-[40px]  font-bold mb-10">
                Our Misson
              </h1>

              <ul className="text-white text-left mt-6  space-y-3 md:space-y-8 px-4 sm:px-0">
                {OutlinyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className=" font-normal flex items-start gap-3 font-poppins text-[16px] leading-[100%] "
                  >
                    <span className="font-extrabold text-xl leading-[1.5] mr-3">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
