
'use client'
import { FaLongArrowAltRight } from 'react-icons/fa'




const features = [
  {
    heading: 'Drag & Drop Simplicity',
    text: 'Design advanced, multi-page PDFs quickly with our intuitive GrapesJS-powered editor. Easily create professional documents like MoUs, invoices, HR documents, certificates, and more.',
  },
  {
    heading: 'Single-Page PDF Creation',
    text: 'Use our PDFme-powered tool for swift, clean, and precise single-page PDF templates perfect for address labels, certificates, and simple forms.',
  },

  {
    heading: 'Scalable Document Generation',
    text: 'Effortlessly generate high volumes of PDFs, from individual documents to large-scale enterprise-level batch operations.',
  },
]

const OutlinyLable1 = () => {
 

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:mt-14 md:mt-24">
      <div className="text-center w-full  mx-auto my-10">
        <h1 className=" text-white text-[26px] md:text-[40px] font-semibold leading-tight gradient-text">
          PDF Template Builder
        </h1>
      </div>
      <div className="space-y-6 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[75%] xl:w-[55%]">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
          >
            {/* Circle */}
            <div className="hidden sm:flex w-2 h-2  bg-white rounded-full border border-white flex-shrink-0 sm:mt-3"></div>

            {/* Text Content */}
            <div className="w-full">
              <p className="font-inter text-[16px] sm:text-[18px] font-bold leading-[28px] text-white">
                {item.heading}
                <span className="text-[#a9a7a7] ml-2 text-[15px] sm:text-[16px] font-light leading-[28px]">
                  {item.text}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="group mt-8 relative overflow-hidden bg-blue-700 text-white px-4 py-3 rounded-xl text-[16px] font-medium flex items-center transition-all duration-300">
        <span className="relative z-10">Book a Demo</span>

        {/* Animated Arrow */}
        <span className="ml-2 relative z-10 text-[24px] transform transition-transform duration-300 group-hover:translate-x-1.5">
          <FaLongArrowAltRight />
        </span>

        {/* Swipe background */}
        <span className="absolute inset-0 bg-blue-800 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
      </button>
    </div>
  )
}

export default OutlinyLable1
