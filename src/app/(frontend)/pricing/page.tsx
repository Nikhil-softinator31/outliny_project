'use client'
import React, { useState } from 'react'
// import Register1 from './Register1'
import Testimonials from '../main/Testimonial'
import Pricing from '../main/Pricing'

const Page = () => {
  const [billingOption, setBillingOption] = useState('monthly')

  const handleToggle = (option: 'monthly' | 'annually') => {
    setBillingOption(option)
  }

  return (
    <div className="mt-16 sm:mt-20 px-4 sm:px-8">
      <div className="relative text-center p-5">
        {/* Background Outliny Text */}
        <h1 className="font-aldrich absolute -z-10 top-10 left-1/2 transform -translate-x-1/2 opacity-10 bg-custom-gradient bg-clip-text text-transparent text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[300px] font-normal leading-tight">
          Outliny
        </h1>

        {/* Content Centered Horizontally */}
        <div className="relative z-10 mt-6 sm:mt-10">
          <h1 className="text-white text-[22px] sm:text-[28px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-extrabold gradient-text leading-tight">
            Choose The Perfect Plan For You
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] mx-auto mt-2">
            A free plan has everything you need to generate PDF documents or images. No credit card
            required!
          </p>

          <div className="mt-6">
            <div className="bg-custom-gradient16 p-2 sm:p-3 rounded-lg flex justify-around w-full max-w-[415px] mx-auto border border-[#aaa6a6e7]">
              <button
                className={`px-3 py-2 sm:px-4 md:px-6  rounded-lg font-semibold text-sm sm:text-base md:text-lg  mx-0.5 transition-colors ${
                  billingOption === 'monthly'
                    ? 'bg-white text-[#000A12]'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
                onClick={() => handleToggle('monthly')}
              >
                Billed Monthly
              </button>
              <button
                className={`px-3 py-2 sm:px-4 md:px-6  rounded-lg font-semibold text-sm sm:text-base md:text-lg  mx-0.5 transition-colors ${
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

      <Pricing />
      <Testimonials />
    </div>
  )
}

export default Page
