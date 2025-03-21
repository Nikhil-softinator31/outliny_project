'use client'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'], // Add desired weights
  variable: '--font-open-sans',
})

export default function Register1() {
  const [activeCard, setActiveCard] = useState(null)

  const pricingPlans = [
    {
      price: '$500.00/',
      title: 'Basic',
      subTitle: 'Free account',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      button: 'Sign Up Free',
    },
    {
      price: '$500.00/',
      title: 'Run On-Demand',
      subTitle: 'Pricing based off of size of model',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      button: 'Get Start for free',
    },
    {
      price: '$500.00/',
      title: 'Run On-Premise',
      subTitle: 'Download model to run on your infrastructure',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      button: 'Sign Up Free',
    },
    {
      price: '$500.00/',
      title: 'Basic',
      subTitle: 'Free account',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      button: 'Sign Up Free',
    },
    {
      price: '$500.00/',
      title: 'Starter Plan 10k',
      members: 987,
      image: '/images/1.png',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      button: 'Get Started for Free',
    },
    {
      price: '$500.00/',
      title: 'Starter Plan 10k',
      members: 987,
      image: '/images/1.png',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      button: 'Get Started for Free',
    },
  ]

  return (
    <div className="p-4 bg-[#08090a]">
      <h1 className="font-poppins font-extrabold text-[20px] sm:text-[25px] md:text-[30px] leading-[25.5px] lg:text-[45px] lg:leading-[67.5px] text-[#D9D9D9] text-center mt-10 lg:mt-20 mb-10">
        Register for free mentorship session
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-[1200px] p-1">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col justify-around items-center">
            {/* Plan Header */}
            <div
              className={`rounded-2xl relative p-4 md:p-6 space-y-6 w-full max-w-md shadow-lg h-auto ${
                activeCard === index ? 'bg-custom-gradient14' : 'bg-custom-gradient15'
              }`}
            >
              <span
                className={`absolute -top-8 -left-5 border-[10px] border-[#08090a] rounded-full flex flex-col items-center justify-center py-5  w-[7rem] h-[7rem] font-poppins font-semibold  text-white ${
                  activeCard === index ? 'bg-custom-gradient14' : 'bg-custom-gradient15'
                }`}
              >
                {plan.price}{' '}
                <span className="text-[10px] text-white font-poppins font-normal leading-[14.6px] ml-8">
                  {' '}
                  Per Monthly
                </span>
              </span>

              <div className="flex flex-col justify-center items-center ml-10">
                {index >= 4 ? (
                  <>
                    <h3 className="font-poppins font-semibold text-[20px] leading-8 text-white">
                      {plan.title}
                    </h3>
                    <div className="flex justify-center items-center gap-3 mx-auto">
                      <img src={plan.image} alt={plan.title} className="" />
                      <p className="text-gray-200 text-center">{plan.members} Members</p>
                    </div>
                  </>
                ) : (
                  <div className="flex-col text-left justify-end">
                    <h3 className="font-poppins font-semibold text-[20.81px] sm:text-left text-center  leading-8 text-white">
                      {plan.title}
                    </h3>
                    <h3
                      className={`font-normal text-[16px] leading-5 sm:text-left text-center text-white w-[201px] ${openSans.className}`}
                    >
                      {plan.subTitle}
                    </h3>
                  </div>
                )}

                <button
                  className="text-white py-3 px-10 rounded-xl  border-[#a19f9f] font-inter font-semibold text-sm leading-5 mt-6 border-[1px]"
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                >
                  {plan.button}
                </button>
              </div>

              {/* Features List */}
              <ul className="mt-6 m-5 space-y-5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <IoCheckmarkCircleSharp className="text-[24px] text-white" />
                    <span className="font-poppins text-sm font-light sm:text-left text-center leading-5 text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
