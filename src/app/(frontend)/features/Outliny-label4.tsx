import { Inter } from 'next/font/google'
import { FaLongArrowAltRight } from 'react-icons/fa'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

const data1 = [
  {
    heading: 'Built-In Version Control:',
    text: 'Easily track changes, revert to previous versions, and collaborate securely, ensuring templates stay accurate and aligned.',
  },
  {
    heading: 'Intuitive Navigation:',
    text: 'Find, organize, and manage all templates effortlessly from a single unified dashboard.',
  },
  {
    heading: 'Save Time & Effort:',
    text: 'Create and reuse standardized blocks like headers, footers, tables, and common design patterns across multiple templates streamlining workflow and reducing redundancy.',
  },
  
]

const OutlinyLable4 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-2 mt-20">
      {/* Title */}
      <div className="text-center max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[60%] mx-auto my-10">
        <h1
          className={`${inter.className} text-white text-[24px] sm:text-[23px] md:text-[29px] lg:text-[40px] font-semibold leading-tight gradient-text`}
        >
          Template Versioning & Management
        </h1>
      </div>

      {/* Features */}
      <div className="space-y-6 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[75%] xl:w-[55%]">
        {data1.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
          >
            {/* Smaller Circle */}
            <div className="hidden sm:flex w-2 h-2  bg-white rounded-full border border-white flex-shrink-0 sm:mt-3"></div>

            {/* Text Content */}
            <div className="w-full">
              <p
                className={`text-white ${inter.className} text-[16px] sm:text-[18px] font-bold leading-[28px]`}
              >
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

export default OutlinyLable4
