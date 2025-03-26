'use client'

import Image from 'next/image'
import { Aldrich } from 'next/font/google'
import Testimonials from '../main/Testimonial'
import Footer from '../main/Footer'


const aldrich = Aldrich({
  subsets: ['latin'],
  weight: ['400'], // Aldrich has only one weight
  variable: '--font-aldrich',
})

export default function About() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center m-6 lg:m-20 relative overflow-hidden ">
          <h1 className="font-poppins text-white font-extrabold  text-[24px] sm:text-[28px] md:text-[35px] lg:text-[45px] leading-[67.5px] text-center gradient-text mt-20 ">
            About Us
          </h1>
          <p className="font-poppins text-[16px]  sm:text-[18px]  md:text-[22px]  lg:text-[24px] font-normal leading-[52.85px] text-white max-w-[90%] lg:max-w-[850px] text-center mt-2 gradient-text">
            Create PDFs Or Images For Resumes, Portfolios, Invoices, Receipts, And More With Our
            API, SDKs, And Integrations.
          </p>
          {/* Outliny Text */}
          <h1
            className={`  ${aldrich.className} opacity-[0.05] bg-custom-gradient13 bg-clip-text text-transparent font-aldrich text-[60px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-normal leading-tight  `}
          >
            Outliny
          </h1>
          <div className="relative">
            <img src="images/code2.png" alt="" className="" />
            <div className="absolute inset-0  bg-gradient-to-b from-[#000a12] via-transparent to-[#000a12] opacity-85.5  rounded-lg"></div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  )
}
