
import { FaLongArrowAltRight } from 'react-icons/fa'



const data1 = [
  {
    heading: 'Jinja Templating Engine',
    text: 'Explore a world of innovation with our Features, meticulously crafted to elevate every aspect of web development. Create PDFs or Images for resumes.',
  },
  {
    heading: 'Open-Source Transparency',
    text: 'Outliny is proudly open-source, giving your developers full visibility and control. Customize or extend Outliny to perfectly fit your business needs.',
  },
  
]

const OutlinyLable3 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-2 mt-20">
      {/* Title */}
      <div className="text-center w-full  md:max-w-[75%]  mx-auto my-10">
        <h1 className="font-inter text-white text-[24px] sm:text-[30px] md:text-[39px] lg:text-[40px] font-semibold leading-tight gradient-text">
          Developer-Friendly
        </h1>
      </div>

      {/* Features */}
      <div className="space-y-6 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[75%] xl:w-[55%]">
        {data1.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8"
          >
            {/* Circle */}
            <div className="hidden sm:flex w-2 h-2  bg-white rounded-full border border-white flex-shrink-0 sm:mt-3 "></div>

            {/* Text Content */}
            <div className="w-full">
              <p className="text-white font-inter text-[16px] sm:text-[18px] font-bold leading-[28px]">
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

export default OutlinyLable3
