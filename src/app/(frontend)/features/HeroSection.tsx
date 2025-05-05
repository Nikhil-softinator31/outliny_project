import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="w-full px-4 flex flex-col items-center text-center">
      <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] bg-[#08090a] py-10 sm:py-14 md:py-16 lg:py-20 rounded-lg overflow-hidden">
        <h1 className=" font-aldrich opacity-20 bg-custom-gradient13 bg-clip-text text-transparent text-[50px] sm:text-[90px] md:text-[120px] lg:text-[200px] font-normal leading-tight">
          Outliny
        </h1>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/logo7.png"
            alt="Logo"
            width={450}
            height={450}
            className="opacity-80"
            priority
          />
        </div>
      </div>

      <h2 className=" text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] leading-tight font-extrabold font-poppins px-4 mt-8 gradient-text">
        Outliny Features
      </h2>
      <p className="text-white text-[14px] sm:text-[20px] md:text-[20px] mx-auto mt-4 md:mt-10 px-4  lg:max-w-[40em] font-poppins leading-9" >
        Everything you need to effortlessly maintain brand consistency across all your digital
        communications.
      </p>
    </div>
  )
}

export default HeroSection
