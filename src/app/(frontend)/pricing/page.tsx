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
    <div className="mt-16 sm:mt-20 px-4 sm:px-8">
      <div className="relative text-center p-5">
        {/* Background Outliny Text */}
        <h1 className="font-aldrich absolute -z-10 top-10 left-1/2 transform -translate-x-1/2 opacity-10 bg-custom-gradient bg-clip-text text-transparent text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[300px] font-normal leading-tight">
          Outliny
        </h1>

        {/* Content Centered Horizontally */}
        <div className="relative z-10 mt-6 sm:mt-10 max-w-4xl mx-auto">
       

          <h1
            ref={fadeUpRef}
            className="text-white text-[13px] sm:text-[28px] md:text-[35px] lg:text-[45px]  font-extrabold gradient-text leading-tight mt-20"
          >
            Choose The Perfect Plan For You
          </h1>
          <p  className="text-white text-[16px] sm:text-[18px] md:text-[22px] max-w-[90%]   lg:max-w-[80%] mx-auto mt-8 text-pretty leading-[25px] md:leading-8  font-poppins">
            Outliny is built to give developers full control without locking you into expensive
            contracts or unpredictable bills.
          </p>

          <div className="mt-10">
            <div className="bg-custom-gradient16 p-2 sm:p-3 rounded-lg flex justify-around w-full max-w-[415px] mx-auto border border-[#aaa6a6e7]">
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
            <p className="text-white font-normal text-[14px] sm:text-[16px] md:text-[18px] max-w-[500px] mx-auto mt-4 sm:mt-6 md:mt-8 text-center">
              {billingOption === 'monthly'
                ? 'Upgrade to annual pricing to save up to 17%.'
                : "You're saving up to 17% with annual billing!"}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing, FAQ and Testimonials sections */}
      <div className="mt-12 space-y-12">
        <Pricing />
        <FAQ />
        <Testimonials />
      </div>
    </div>
  ) 
}

export default Page
