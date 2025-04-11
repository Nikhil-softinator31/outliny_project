import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Product', href: '/product' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Templates', href: '/templates' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get started
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" 
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-2 px-3 text-gray-900 rounded-sm hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;













------
automate code 


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
  const containerRef = useRef(null)
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
        start: 'top 85%',
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

  const handleButtonClick = (key:any) => {
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
    <div className="font-poppins bg-gradient-custom min-h-screen flex items-center justify-center px-6 sm:px-10 py-16">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl gap-12">
        {/* Left Section */}
        <div ref={containerRef} className="text-center lg:text-left max-w-lg">
          <p className="text-[#8861B8] text-lg sm:text-xl">Instant PDF Generation via API</p>
          <h1 className="text-xl sm:text-2xl font-light text-white mt-2">
            No complex setups—just copy the URL from our app, paste it into Postman, and get your
            custom PDF instantly!
          </h1>
          <p className="text-white text-sm sm:text-base mt-4 leading-7 font-extralight">
            Automate document workflows easily. Generate invoices, resumes, reports, or forms with a
            single POST request.
          </p>
        </div>

        {/* Right Section */}
        <div ref={rightSectionRef} className="flex flex-col items-center gap-4 w-full max-w-lg">
          {/* Buttons */}
          <div className="bg-custom-gradient p-3 rounded-lg flex flex-wrap justify-center lg:justify-start gap-3 w-full">
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
          <div className="flex justify-center items-center bg-custom-gradient h-[220px] sm:h-[250px] md:h-[280px] w-full rounded-lg mt-2">
            <Image
              className="image-transition rounded-lg"
              src={buttonOptions.find(({ id }) => id === activeButton)?.image || 'null'}
              alt="PDF Illustration"
              width={500}
              height={200}
            />
          </div>

          {/* Documentation Link */}
          <div className="text-center lg:text-left mt-5">
            <h1 className="text-[#8861B8] flex items-center justify-center lg:justify-start gap-2">
              Explore documentation
              <span>
                <img src="arrow-right.svg" alt="arrow" className="w-4 h-4" />
              </span>
            </h1>
            <p className="text-white text-sm sm:text-base mt-2">
              We've built a complete document generation stack. Browse the API reference.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main




-----------------
automate old code 

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
  const containerRef = useRef(null) //lef
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
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly w-full max-w-[1200px] gap-10 mt-10 ">
        {/* Left Section */}
        <div
          ref={containerRef}
          className="flex flex-col gap-5 text-center lg:text-left max-w-lg mx-auto px-4"
        >
          <p className="text-[#8861B8] text-xl sm:text-2xl">Instant PDF Generation via API</p>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-light text-white w-full">
            No complex setups or tools—just copy the URL from our app, paste it into Postman, and
            get your custom PDF instantly!
          </h1>
          <p className="text-white text-sm sm:text-base leading-7 font-extralight">
            This seamless integration makes automating document workflows easier than ever. Whether
            you are working with invoices, resumes, reports, or dynamic forms, one simple POST
            request is all it takes.
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

          <div className='flex flex-col gap-2'>
            <h1 className="text-[#8861B8] flex gap-1 mt-5">
              Explore documentation
              <span>
                <img src="arrow-right.svg" alt="" />
              </span>
            </h1>
            <p className="text-white">
              We&apos;ve built a complete document generation stack. Browse the API reference.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

