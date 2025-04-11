'use client'
import { FaLongArrowAltRight } from 'react-icons/fa'


const data1 = [
  {
    heading: 'Centralized Email Templates',
    text: 'Keep your brand consistent with centralized management for MJML-based responsive email templates, ideal for CRM campaigns, transactional notifications, and marketing outreach.',
  },
  {
    heading: 'Cloud Media Integration',
    text: 'Seamlessly integrate with Cloudinary and Cloudfront to manage and host your media assets securely and efficiently.',
  },
  {
    heading: 'MJML-Compatible',
    text: 'Export or import templates in industry-standard MJML format, ensuring total flexibility and no vendor lock-in',
  },
]

const OutlinyLable2 = () => {
 

  return (
    <div className="flex flex-col justify-center items-center w-full px-2 mt-20">
      {/* Title */}
      <div className="text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto my-10">
        <h1 className="text-white text-[24px] sm:text-[30px] md:text-[39px] lg:text-[50px] font-semibold leading-tight gradient-text">
          Email Template Management
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
      <button className="mt-8 bg-blue-700 text-white px-5 py-3 rounded-xl text-[16px] font-medium flex items-center overflow-hidden">
        <span>Book a Demo</span>
        <span className="ml-2 text-[24px]">
          <FaLongArrowAltRight />
        </span>
      </button>
    </div>
  )
}

export default OutlinyLable2
