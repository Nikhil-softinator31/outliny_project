import { Inter } from 'next/font/google'
import { FaLongArrowAltRight } from 'react-icons/fa'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

const data1 = [
  {
    heading: 'Sales Boost:',
    text: 'With Outliny white label solution, you can offer your customers an all-in-one graphic design tool that can significantly increase your sales. This solution provides an easy and cost-effective way for your customers to create logos, social media posts, and other designs, which can boost sales and revenue.',
  },
  {
    heading: 'Additional Revenue:',
    text: 'Offer this solution as a complimentary add-on or chargeable product/service to your customers. By doing so, you can create additional revenue streams while providing value to your customers.',
  },
  {
    heading: 'Customer Retention:',
    text: 'Providing your customers with a powerful graphic design tool enhances their overall experience, increasing retention and reducing customer churn while boosting lifetime customer value.',
  },
  {
    heading: 'Customer Satisfaction:',
    text: 'This solution is designed to provide a seamless user experience. Offering a comprehensive design tool increases customer satisfaction, fostering loyalty and referrals.',
  },
  {
    heading: 'Website Traffic:',
    text: 'Integrating Outliny’s white-label solution into your website increases visitor engagement. Customers stay longer while using the tool, reducing bounce rates and driving more traffic.',
  },
  {
    heading: 'Brand Value:',
    text: 'Our white-label solution offers a fully customizable graphic design tool that matches your brand’s color scheme, logo, and aesthetics. This enhances brand recognition, loyalty, and perceived value among customers and investors.',
  },
]

const OutlinyLable4 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      {/* Title */}
      <div className="text-center max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[60%] mx-auto my-10">
        <h1
          className={`${inter.className} text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-tight`}
        >
          Benefits of Implementing the <span className="text-blue-600">White Label</span> Solution
        </h1>
      </div>

      {/* Features */}
      <div className="space-y-6 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[55%]">
        {data1.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
          >
            {/* Smaller Circle */}
            <div className="hidden sm:flex w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-white flex-shrink-0 md:mt-2"></div>

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
      <button className="mt-6 sm:mt-8 bg-blue-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-[14px] sm:text-[16px] lg:text-[18px] font-medium flex items-center">
        Book a Demo
        <span className="ml-2 text-[20px] sm:text-[24px]">
          <FaLongArrowAltRight className="text-white" />
        </span>
      </button>
    </div>
  )
}

export default OutlinyLable4
