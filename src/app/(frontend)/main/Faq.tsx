'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import Pricing from './Pricing'

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
  const faqSectionRef = useRef(null)

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useGSAP(() => {
    gsap.from(faqSectionRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: faqSectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  const questions = [
    {
      question: 'Why do I need to use a Design System?',
      answer: 'Users can download logos from their dashboard.',
    },
    {
      question: 'Is there a preview or a free trial available?',
      answer: 'Yes, we offer branding customization.',
    },
    {
      question: 'Where can I purchase AlignUI Design System?',
      answer: 'Yes, you can set your own pricing structure.',
    },
    {
      question: 'What are the recent updates and enhancements in AlignUI?',
      answer: 'Yes, our platform supports multiple payment gateways.',
    },
    {
      question: 'How do I install AlignUI Design System in Figma?',
      answer: 'It is available in multiple languages including English, Spanish, and French.',
    },
    {
      question: 'Can I use AlignUI Design System for commercial projects?',
      answer: 'Yes, it is fully responsive and mobile-friendly.',
    },
  ]

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      <div className="flex justify-center items-center bg-custom-gradient3 text-white min-h-screen">
        <div ref={faqSectionRef} className="w-full mx-auto p-6 mt-10 ">
          <h1 className="font-poppins text-xl sm:text-3xl md:text-[35px] font-medium leading-snug text-center mt-3  ">
            You've got questions about PDF Generator API. We've got answers
          </h1>
          <p className="font-poppins font-light text-[15px] sm:text-base md:text-lg text-[#535454] mt-6 text-center p-2 ">
            Find questions and answers related to the design system, purchase, updates, and support.
          </p>

          <h1 className="text-white text-[21px] sm:text-[30px] md:text-[50px] font-semibold leading-tight lg:leading-[72px] text-center p-5 mb-10">
            Frequently <span className="text-blue-600">Asked</span> Questions
          </h1>
          <div className="flex flex-col items-center gap-6">
            {questions.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-custom-gradient4 rounded-[10px] max-w-[800px] w-full mx-auto"
              >
                {/* Clickable header */}
                <div
                  className="flex justify-between items-center cursor-pointer text-xl font-medium"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="ml-4 font-light text-[#c2c5c5] text-[14px] md:text-base leading-6 font-poppins">
                    {item.question}
                  </span>

                  <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ml-4 text-[#c2c5c5] ${
                    openIndex === index ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-light text-[#c2c5c5] text-[14px] md:text-base leading-6 font-poppins">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pricing />
    </>
  )
}

export default FAQ
