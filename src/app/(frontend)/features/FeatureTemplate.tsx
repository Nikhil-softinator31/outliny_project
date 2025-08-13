import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
// Define the shape of a single list item
interface ListItem {
  title: string // Bold/colored part
  description: string // Normal text part
}

// Define the props for the component
interface FeatureTemplateProps {
  data: {
    heading: string
    list: ListItem[]
  }
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:mt-14 md:mt-24">
      {/* Heading */}
      <p className="text-white text-[26px] sm:text-[26px] md:text-[40px] lg:text-[40px] font-semibold leading-tight">
        {data.heading}
      </p>

      {/* List */}
      <div className=" w-full max-w-[90%] md:max-w-[70%] lg:max-w-[75%] xl:w-[55%] text-left mx-auto mt-10">
        <ul className="text-white mt-4 space-y-6 list-disc ">
          {data.list.map((item, idx) => (
            <li key={idx}>
              <span className="font-inter text-[14px] sm:text-[18px] font-bold leading-[28px] text-white">
                {item.title}:
              </span>
              <span className="text-[#a9a7a7] ml-2 text-[15px] sm:text-[16px] font-light leading-[28px]">
                {item.description}
              </span>
            </li>
          ))}
        </ul>
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

export default FeatureTemplate
