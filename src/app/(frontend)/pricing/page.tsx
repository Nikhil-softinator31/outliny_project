'use client'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Testimonials from '../main/Testimonial'
import Pricing from '../main/Pricing'
import FAQ from './Faq'

const Page = () => {
  const [billingOption, setBillingOption] = useState<'monthly' | 'annually'>('monthly')
  const fadeUpRef = useRef<HTMLHeadingElement>(null)

  const handleToggle = (option: 'monthly' | 'annually') => {
    setBillingOption(option)
  }

  useGSAP(() => {
    gsap.fromTo(
      fadeUpRef.current,
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
    <div className=" sm:mt-20 ">
      <div className="relative text-center p-5">
        {/* Background Outliny Text */}
        <h1 className="font-aldrich   absolute  top-[30%] left-1/2 md:top-[23%] lg:top-[28%]  transform -translate-x-1/2 opacity-80 bg-custom-gradient12 bg-clip-text text-transparent text-[60px] sm:text-[100px] md:text-[200px] lg:text-[250px] xl:text-[280px] font-normal leading-tight">
          Outliny
        </h1>

        {/* Content Centered Horizontally */}
        <div className="relative mt-6 sm:mt-10 max-w-3xl mx-auto">
          <h1
            ref={fadeUpRef}
            className="text-white text-[20px] sm:text-[28px] md:text-[35px] lg:text-[45px] font-extrabold leading-[100%] tracking-normal mt-20 font-poppins "
          >
            Choose The Perfect Plan For You
          </h1>
          <p className="text-white text-[15px] md:text-xl   mt-6 leading-[25px] md:leading-10 font-poppins font-normal">
            Outliny is built to give developers full control without locking you into expensive
            contracts or unpredictable bills.
          </p>

          <div className="mt-10">
            <div className="bg-custom-gradient20 p-2 sm:p-3 rounded-lg flex justify-around w-full max-w-[415px] mx-auto border border-[#535a5f]">
              <button
                className={`px-3 py-2 sm:px-4 md:px-6 rounded-lg font-semibold text-sm sm:text-base md:text-lg mx-0.5 transition-colors ${
                  billingOption === 'monthly'
                    ? 'bg-white text-[#000A12]'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
                onClick={() => handleToggle('monthly')}
              >
                Billed Monthly
              </button>
              <button
                className={`px-3 py-2 sm:px-4 md:px-6 rounded-lg font-semibold text-sm sm:text-base md:text-lg mx-0.5 transition-colors ${
                  billingOption === 'annually'
                    ? 'bg-white text-[#000A12]'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
                onClick={() => handleToggle('annually')}
              >
                Billed Annually
              </button>
            </div>
            <p className="text-white font-normal text-[14px] sm:text-[16px] md:text-[18px] max-w-[500px] mx-auto mt-4 sm:mt-6 md:mt-8 text-center font-poppins">
              {billingOption === 'monthly'
                ? 'Upgrade to annual pricing to save up to 17%.'
                : "You're saving up to 17% with annual billing!"}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing, FAQ and Testimonials sections */}
      <div className="mt-12 ">
        <Pricing />
        <FAQ />
        <Testimonials />
      </div>
    </div>
  )
}

export default Page
