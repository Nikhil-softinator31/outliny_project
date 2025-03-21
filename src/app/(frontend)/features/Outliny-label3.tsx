
import { FaLongArrowAltRight } from 'react-icons/fa'



const data1 = [
  {
    heading: 'Online Graphic Design Tool:',
    text: 'Explore a world of innovation with our Features, meticulously crafted to elevate every aspect of web development. Create PDFs or Images for resumes.',
  },
  {
    heading: 'Unlimited Templates Designs:',
    text: 'Outliny White Label Solution will be fully customized to meet your requirements.',
  },
  {
    heading: 'Multi Dollar Software:',
    text: 'This instantly adds a multi-dollar software as your own proprietary product for free.',
  },
  {
    heading: 'Give Huge Brand Boost:',
    text: 'Outliny White Label Graphic Design Tool instantly gives you a huge brand boost to your company and builds user trust in your services.',
  },
  {
    heading: 'Brand Perspective:',
    text: 'Increase your brand value in the eyes of customers and investors. Kreateable’s White Label Graphic Design Tool gives them a bigger brand perspective.',
  },
]

const OutlinyLable3 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      {/* Title */}
      <div className="text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto my-10">
        <h1
          className='font-inter text-white text-[24px] sm:text-[30px] md:text-[39px] lg:text-[50px] font-semibold leading-tight'
        >
          Why should I use <span className="text-blue-600">white label</span> online graphic design
          tool?
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
            <div className="hidden sm:flex w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-white flex-shrink-0 md:mt-2"></div>

            {/* Text Content */}
            <div className="w-full">
              <p
                className='text-white font-inter text-[16px] sm:text-[18px] font-bold leading-[28px]'
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
      <button className="mt-6 sm:mt-8 bg-blue-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-[14px] sm:text-[16px] lg:text-[18px] font-medium flex items-center">
        Book a Demo
        <span className="ml-2 text-[20px] sm:text-[24px]">
          <FaLongArrowAltRight className="text-white" />
        </span>
      </button>
    </div>
  )
}

export default OutlinyLable3
