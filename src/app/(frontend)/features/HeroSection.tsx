import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full px-4">
      <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] bg-[#08090a] py-10 sm:py-14 md:py-16 lg:py-20">
        <h1 className="opacity-[0.2] bg-custom-gradient13 bg-clip-text text-transparent text-[50px] sm:text-[90px] md:text-[120px] lg:text-[180px] font-normal leading-tight text-center">
          Outliny
        </h1>
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/logo7.png"
            alt="Logo"
            className="w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px] opacity-80"
          />
        </div>
      </div>
      <h1 className="text-white text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] leading-tight font-extrabold text-center font-poppins px-4 gradient-text">
        Amazing Features for Effortless Growth
      </h1>
      <p className="text-white text-[16px] sm:text-[20px] md:text-[24px] text-center mx-auto leading-relaxed lg:w-[40em] mt-4 px-4 gradient-text ">
        Explore a world of innovation with our features, meticulously crafted to elevate every
        aspect of web development. Create PDFs or images for resumes, portfolios, invoices,
        receipts, and more with our API, SDKs, and integrations.
      </p>
    </div>
  )
}

export default HeroSection
