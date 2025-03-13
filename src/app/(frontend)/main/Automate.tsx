'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Import Poppins Font
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Main: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('generate')
  const textContainerRef = useRef<HTMLDivElement | null>(null)
  const rightSectionRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  // Button options and their images
  const buttonOptions: Record<string, { label: string; image: string }> = {
    generate: { label: 'Generate Document', image: '/js.png' },
    edit: { label: 'Edit Template', image: '/mask.png' },
    templates: { label: 'Get Templates', image: '/mask1.png' },
    workspaces: { label: 'Get Workspaces', image: '/js.png' },
  }

  // GSAP Animations
  useGSAP(() => {
    if (textContainerRef.current) {
      gsap.from(textContainerRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    if (rightSectionRef.current) {
      gsap.from(rightSectionRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightSectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  }, [])

  // Handle Button Click Animation
  const handleButtonClick = (key: string) => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => {
          setActiveButton(key)
          gsap.fromTo(imageRef.current, 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
          )
        },
      })
    }
  }

  return (
    <div className='font-poppins bg-gradient-custom min-h-screen flex items-center justify-center px-4 mt-20'>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1200px] gap-10 lg:gap-20 mt-10 lg:mt-0">
        {/* Left Section */}
        <div ref={textContainerRef} className="flex flex-col gap-3 text-center lg:text-left max-w-lg">
          <p className="text-[#8861B8] text-sm md:text-base">Advanced API documentation.</p>
          <h1 className="text-2xl md:text-3xl font-semibold font-poppins text-white leading-[50px]">
            Manage Your PDF <br />
            <span>Documents with ease.</span>
          </h1>
          <p className="text-white mt-4 text-sm md:text-base leading-7 font-extralight">
            Whether you need to create invoice PDFs, packing slips, contract documents, or labels,
            PDF Generator API helps you easily create document templates and generate PDF
            documents with the data you already have available.
          </p>
        </div>

        {/* Right Section */}
        <div ref={rightSectionRef} className="flex flex-col gap-4">
          {/* Buttons */}
          <div className="bg-custom-gradient p-3 rounded-lg flex flex-wrap justify-center lg:justify-start gap-2">
            {Object.entries(buttonOptions).map(([key, { label }]) => (
              <button
                key={key}
                className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-300 cursor-pointer font-poppins font-light ${
                  activeButton === key ? 'bg-[#202020] text-white' : 'text-[#FFFFFF99]'
                }`}
                onClick={() => handleButtonClick(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Image Display */}
          <div className="flex justify-center items-center bg-custom-gradient h-[250px] sm:h-[279px] w-full sm:w-[500px] md:w-[600px] lg:w-[700px] rounded-lg mt-2 mx-auto">
            <Image
              ref={imageRef}
              src={buttonOptions[activeButton]?.image ?? '/default.png'}
              alt="PDF Illustration"
              width={500}
              height={200}
              className="rounded-lg"
            />
          </div>

          <h1 className="text-[#8861B8] flex gap-2">
            Explore documentation
            <span>
              <img src="arrow-right.svg" alt="" />
            </span>
          </h1>
          <p className="text-white">We’ve built a complete document generation stack. Browse the API reference.</p>
        </div>
      </div>
    </div>
  )
}

export default Main