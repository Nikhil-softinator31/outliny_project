import React from 'react'


import PdfViewer from './pdfViewer'


import Testimonials from '../main/Testimonial'


const page = () => {
  return (
    <>
      <div className="relative  text-center p-5 mt-20">
        {/* Background Outliny Text */}
        <h1 className="absolute -z-10 top-20 left-1/2 transform -translate-x-1/2 opacity-10 font-aldrich bg-custom-gradient13 bg-clip-text text-transparent  text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px] font-normal leading-tight">
          Outliny
        </h1>

        {/* Content Centered Horizontally */}
        <div className=" mt-3 sm:mt-8  space-y-5  lg:space-y-9">
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[35px] lg:text-[45px] lg:leading-[67.5px] font-extrabold ">
            CraftMyPDF PDF Template Editor
          </h1>
          <p className="text-white text-[12px] sm:text-[15px]  md:text-[18px]  w-full   sm:w-[30vw] md:w-[78vw] lg:w-[50vw] lg:leading-[30px]  mx-auto mt-2">
            Outliny comes with a growing library of prebuilt, brand-ready templates to help you hit
            the ground running. Whether you're automating internal workflows or sending
            customer-facing documents, our templates ensure your brand stays consistent, clear, and
            professional.
          </p>
          
        </div>

        <PdfViewer />

        <Testimonials />
      </div>
    </>
  )
}

export default page
