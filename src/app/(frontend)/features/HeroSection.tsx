import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="w-full px-4 flex flex-col items-center text-center">
      <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] bg-[#08090a] py-10 sm:py-14 md:py-16 lg:py-20 rounded-lg overflow-hidden">
        <h1 className="opacity-20 bg-custom-gradient13 bg-clip-text text-transparent text-[50px] sm:text-[90px] md:text-[120px] lg:text-[180px] font-normal leading-tight">
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

      <h2 className="text-white text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] leading-tight font-extrabold font-poppins px-4 mt-8 gradient-text">
        Amazing Features for Effortless Growth
      </h2>
      <p className="text-white text-[16px] sm:text-[20px] md:text-[24px] leading-relaxed mx-auto mt-4 px-4 gradient-text lg:max-w-[40em]">
        Explore a world of innovation with our features, meticulously crafted to elevate every
        aspect of web development. Create PDFs or images for resumes, portfolios, invoices,
        receipts, and more with our API, SDKs, and integrations.
      </p>
    </div>
  )
}

export default HeroSection
