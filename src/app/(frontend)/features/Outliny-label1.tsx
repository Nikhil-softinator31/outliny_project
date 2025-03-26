
'use client'
import { useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import gsap from 'gsap'



const features = [
  {
    heading: 'All Features Of Outliny:',
    text: 'Explore a world of innovation with our Features, meticulously crafted to elevate every aspect of web development. Create PDFs or Images for resumes.',
  },
  {
    heading: '100% Customization:',
    text: 'In Outliny White Label Solution, we will fully customize the solution to meet your requirements.',
  },
  {
    heading: 'Your Brand Color:',
    text: 'Make Outliny your own product or service. We will design the white label solution to match your brand’s color combination.',
  },
  {
    heading: 'Other Technical Implementations:',
    text: 'In Outliny White Label, we offer Single Sign-On and will implement the preferred payment gateway, as well as other aspects of your business.',
  },
]

const OutlinyLable1 = () => {
  const buttonRef = useRef(null)
  const textRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    if (textRef.current && iconRef.current) {
      const tl = gsap.timeline({ paused: true })
      tl.to([textRef.current, iconRef.current], {
        duration: 0.2,
        yPercent: -100,
        ease: 'power2.in',
      })
        .set([textRef.current, iconRef.current], { yPercent: 100 })
        .to([textRef.current, iconRef.current], { duration: 0.5, yPercent: 0 })

      buttonRef.current.addEventListener('mouseenter', () => tl.play(0))
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      <div className="text-center w-full md:max-w-[60%] mx-auto my-10">
        <h1
          className=' text-white text-[26px] md:text-[40px] font-semibold leading-tight'
        >
          What is Outliny <span className="text-blue-600">white label</span> online graphic design
          tool?
        </h1>
      </div>
      <div className="space-y-6 w-full md:max-w-[55%]">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
          >
            <div className="hidden sm:flex w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-white flex-shrink-0 md:mt-1"></div>
            <p
              className='text-white  text-[16px] sm:text-[18px] font-bold leading-[28px]'
            >
              {item.heading}
              <span className="text-[#a9a7a7] ml-2 text-[15px] sm:text-[16px] font-light leading-[28px]">
                {item.text}
              </span>
            </p>
          </div>
        ))}
      </div>
      <button
        ref={buttonRef}
        className="mt-8 bg-blue-700 text-white px-6 py-4 rounded-xl text-[16px] font-medium flex items-center overflow-hidden"
      >
        <span ref={textRef}>Book a Demo</span>
        <span ref={iconRef} className="ml-2 text-[24px]">
          <FaLongArrowAltRight />
        </span>
      </button>
    </div>
  )
}

export default OutlinyLable1
