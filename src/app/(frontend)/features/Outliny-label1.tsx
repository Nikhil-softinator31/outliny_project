
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
      <div className="text-center w-full md:max-w-[60%] mx-auto my-10">
        <h1 className=" text-white text-[26px] md:text-[40px] font-semibold leading-tight gradient-text">
          PDF Template Builder
        </h1>
      </div>
      <div className="space-y-6 w-full md:max-w-[55%]">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
          >
            <div className="hidden sm:flex w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-white flex-shrink-0 md:mt-1"></div>
            <p className="text-white  text-[16px] sm:text-[18px] font-bold leading-[28px]">
              {item.heading}
              <span className="text-[#a9a7a7] ml-2 text-[15px] sm:text-[16px] font-light leading-[28px]">
                {item.text}
              </span>
            </p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-blue-700 text-white px-4 py-3 rounded-xl text-[16px] font-medium flex items-center overflow-hidden">
        <span>Book a Demo</span>
        <span className="ml-2 text-[24px]">
          <FaLongArrowAltRight />
        </span>
      </button>
    </div>
  )
}

export default OutlinyLable1
