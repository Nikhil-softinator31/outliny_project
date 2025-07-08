'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Main: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('generate')
  const textContainerRef = useRef<HTMLDivElement | null>(null)
  const rightSectionRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  // Button options and their images
  const buttonOptions = [
    { id: 'generate', label: 'Generate Document', image: '/js.png' },
    { id: 'edit', label: 'Edit Template', image: '/mask1.png' },
    { id: 'templates', label: 'Get Templates', image: '/mask1.png' },
    { id: 'workspaces', label: 'Get Workspaces', image: '/js.png' },
  ]

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
          toggleActions: 'play none none none',
          once: true,
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
          toggleActions: 'play none none none',
          once: true,
        },
      })
    }
  }, [])

  // Handle Button Click Animation
  const handleButtonClick = (key: string) => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          setActiveButton(key)
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
          )
        },
      })
    }
  }

  return (
    <div className="font-poppins bg-gradient-custom min-h-[600px] md:min-h-[700px] lg:min-h-[650px] flex items-center justify-center px-4 mt-20 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-evenly items-center w-full max-w-[1400px] gap-6 md:gap-8 lg:gap-16 mt-10  px-2">
        {/* Left Section */}
        <div
          ref={textContainerRef}
          className="flex flex-col gap-3 text-center lg:text-left max-w-lg lg:max-w-md lg:pl-4 w-full lg:w-auto lg:flex-shrink-0 lg:self-center"
        >
          <p className="text-[#8861B8] text-sm font-poppins font-semibold">
            Advanced API documentation.
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white leading-[40px] md:leading-[45px] lg:leading-[50px] font-poppins font-semibold">
            Manage Your PDF <br />
            <span>Documents with ease.</span>
          </h1>
          <p className="text-white mt-4 text-sm md:text-base leading-7 lg:w-[434px] font-poppins font-normal">
            Whether you need to create invoice PDFs, packing slips, contract documents or labels,
            PDF Generator API helps you easily create the document templates and generate PDF
            documents with the data you already have available. You can even allow your users to
            modify their PDF templates without any development effort!
          </p>
        </div>

        {/* Right Section */}
        <div
          ref={rightSectionRef}
          className="flex flex-col gap-4 w-full lg:flex-1 lg:max-w-[800px] mt-6 lg:mt-10"
        >
          {/* Buttons */}
          <div className="bg-[#171819] p-3 flex flex-wrap justify-center gap-2 w-full rounded-2xl">
            {buttonOptions.map((button) => (
              <button
                key={button.id}
                className={`px-3 py-2 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 cursor-pointer font-poppins font-normal ${
                  activeButton === button.id ? 'bg-[#212223] text-white' : 'text-[#FFFFFF99]'
                }`}
                onClick={() => handleButtonClick(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Image Display */}
          <div className="flex justify-center items-center bg-custom-gradient h-[200px] sm:h-[250px] md:h-[300px] lg:h-[279px]  w-full rounded-lg mt-2">
            <Image
              ref={imageRef}
              src={
                buttonOptions.find((button) => button.id === activeButton)?.image ?? '/default.png'
              }
              alt="PDF Illustration"
              width={600}
              height={350}
              className="rounded-lg max-w-full max-h-full w-auto h-auto object-contain md:w-[500px] lg:w-[400px] xl:w-[500px]"
            />
          </div>

          <h1 className="text-[#8861B8] flex gap-2 mt-2  ">
            Explore documentation
            <span>
              {/* <img src="arrow-right.svg" alt="" />  */}
              <Image src="arrow-right.svg" alt="brand logo" width={23} height={30} className="" />
            </span>
          </h1>
          <p className="text-white ">
            We have built a complete document generation stack. Browse the API reference.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
