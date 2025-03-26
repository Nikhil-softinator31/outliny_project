'use client'
import React, { useState } from 'react'
import Register1 from './Register1'
import Testimonials from '../main/Testimonial'
import Pricing from '../main/Pricing'

const Page = () => {
  const [billingOption, setBillingOption] = useState('monthly')

const handleToggle = (option: 'monthly' | 'annually') => {
  setBillingOption(option)
}

  return (
    <div className="mt-20">
      <div>
        <div className="relative text-center p-5">
          {/* Background Outliny Text */}
          <h1 className="font-aldrich absolute -z-10 top-10 left-1/2 transform -translate-x-1/2 opacity-10 bg-custom-gradient bg-clip-text text-transparent text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px] font-normal leading-tight">
            Outliny
          </h1>

          {/* Content Centered Horizontally */}
          <div className="relative z-10 mt-10 ">
            <h1 className="text-white text-[24px] sm:text-[28px] md:text-[35px] lg:text-[45px] lg:leading-[67.5px] font-extrabold gradient-text">
              Choose The Perfect Plan For You
            </h1>
            <p className="text-white text-[18px] sm:w-[50vw] md:w-[40vw] lg:w-[33vw] lg:leading-[30px] mx-auto mt-2">
              A free plan has everything you need to generate PDF documents or images. No credit
              card is required!
            </p>

            <div className="mt-6">
              <div className="bg-custom-gradient16 p-4 px-5 rounded-lg flex justify-between w-full sm:w-[380px] md:w-[500px] lg:w-[530px] mx-auto border border-[#aaa6a6e7]">
                <button
                  className={`px-2 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-[15px] md:text-[20px] ${
                    billingOption === 'monthly'
                      ? 'bg-white text-[#000A12]'
                      : 'bg-transparent text-white'
                  }`}
                  onClick={() => handleToggle('monthly')}
                >
                  Billed Monthly
                </button>
                <button
                  className={`px-2 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-[15px] md:text-[20px] ${
                    billingOption === 'annually'
                      ? 'bg-white text-[#000A12]'
                      : 'bg-transparent text-white'
                  }`}
                  onClick={() => handleToggle('annually')}
                >
                  Billed Annually
                </button>
              </div>
              <p className="text-white font-normal  text-[20px] sm:w-[50vw] md:w-[40vw] lg:w-[33vw] lg:leading-[27.24px] mx-auto mt-10">
                Billed Monthly - Upgrade to annual pricing to save up to 17%.
              </p>
            </div>
          </div>

          <h1 className="text-white  text-[30px] font-bold mt-10 leading-[40.85px]">
            Plans for creators
          </h1>
        </div>
      </div>

      <Pricing />
      {/* <Register1/> */}
      <Testimonials />
    </div>
  )
}

export default Page
