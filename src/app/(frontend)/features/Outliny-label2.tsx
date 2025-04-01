'use client'
import { FaLongArrowAltRight } from 'react-icons/fa'


const data1 = [
  {
    heading: 'Make Your Own Product/Service:',
    text: 'Outliny White Label Graphic Design Tool provides a seamless solution where your users can design logos, social media posts, and other templates without even realizing they are using Kreateables Graphic Design Tool.',
  },
  {
    heading: 'Simple Way To Implement:',
    text: 'You can use this solution by simply providing a link on your existing website as one of your Product/Service.',
  },
  {
    heading: 'Charge Desired Amount:',
    text: 'You can include this solution in your packages for free or as an add-on product/service with some chargeable amount.',
  },
]

const OutlinyLable2 = () => {
 

  return (
    <div className="flex flex-col justify-center items-center w-full px-2">
      {/* Title */}
      <div className="text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto my-10">
        <h1 className="text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-tight">
          How can I use <span className="text-blue-600">white label</span> solution in my business?
        </h1>
      </div>

      {/* Features */}
      <div className="space-y-6 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[55%]">
        {data1.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
          >
            {/* Circle */}
            <div className="hidden sm:flex w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-white flex-shrink-0 md:mt-3"></div>

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

      {/* Button */}
      <button
      
        className="mt-8 bg-blue-700 text-white px-6 py-4 rounded-xl text-[16px] font-medium flex items-center overflow-hidden"
      >
        <span >Book a Demo</span>
        <span  className="ml-2 text-[24px]">
          <FaLongArrowAltRight />
        </span>
      </button>
    </div> 
  )
}

export default OutlinyLable2
