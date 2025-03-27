'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const buttonOptions = [
  { id: 'generate', label: 'Generate Document', image: '/js.png' },
  { id: 'edit', label: 'Edit Template', image: '/mask1.png' },
  { id: 'templates', label: 'Get Templates', image: '/mask1.png' },
  { id: 'workspaces', label: 'Get Workspaces', image: '/js.png' },
]

const Main = () => {
  const [activeButton, setActiveButton] = useState('generate')
  const containerRef = useRef(null)//lef 
  const rightSectionRef = useRef(null)

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

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
  }, [])

  const handleButtonClick = (key: string) => {
    if (key !== activeButton) {
      gsap.to('.image-transition', {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          setActiveButton(key)
          gsap.fromTo(
            '.image-transition',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
          )
        },
      })
    }
  }

  return (
    <div className="font-poppins bg-gradient-custom min-h-[600px] flex items-center justify-center px-4 mt-20">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1200px] gap-10">
        {/* Left Section */}
        <div ref={containerRef} className="flex flex-col gap-3 text-center lg:text-left max-w-lg">
          <p className="text-[#8861B8] text-sm md:text-base animate-text">
            Advanced API documentation.
          </p>
          <h1 className="text-2xl md:text-3xl font-light text-white leading-[40px] animate-text">
            Manage Your PDF <br />
            <span>Documents with ease.</span>
          </h1>
          <p className="text-white mt-4 text-sm md:text-base leading-7 font-extralight animate-text">
            Whether you need to create invoice PDFs, packing slips, contract documents, or labels,
            PDF Generator API helps you easily create document templates and generate PDFs with your
            data.
          </p>
        </div>

        {/* Right Section */}
        <div ref={rightSectionRef} className="flex flex-col gap-4">
          {/* Buttons */}
          <div className="bg-custom-gradient p-3 rounded-lg flex flex-wrap justify-center lg:justify-start gap-2">
            {buttonOptions.map(({ id, label }) => (
              <button
                key={id}
                className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-300 font-light ${
                  activeButton === id ? 'bg-[#2c2d2e] text-white' : 'text-[#FFFFFF99]'
                }`}
                onClick={() => handleButtonClick(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Image Display */}
          <div className="flex justify-center items-center bg-custom-gradient h-[250px] sm:h-[279px] w-full sm:w-[500px] md:w-[600px] lg:w-[700px] rounded-lg mt-2">
            <Image
              className="image-transition rounded-lg"
              src={buttonOptions.find(({ id }) => id === activeButton)?.image || 'null'}
              alt="PDF Illustration"
              width={500}
              height={200}
            />
          </div>

          <h1 className="text-[#8861B8] flex gap-2">
            Explore documentation
            <span>
              <img src="arrow-right.svg" alt="" />
            </span>
          </h1>
          <p className="text-white">
            We've built a complete document generation stack. Browse the API reference.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
