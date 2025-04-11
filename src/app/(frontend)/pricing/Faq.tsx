'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'


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
      question: 'Do credits expire?',
      answer: 'No. Buy once, use anytime.',
    },
    {
      question: 'Can I try without paying?',
      answer: 'Yes! The free tier includes generous usage limits.',
    },
    {
      question: 'Is self-hosting supported?',
      answer: 'Yes — and it’s open source.',
    },
    {
      question: 'Can I export my templates?',
      answer: 'Absolutely — MJML and JSON export are fully supported.',
    },
    {
      question: 'Is my data stored or logged?',
      answer:
        'By default, no data is stored and logs are disabled. Even when enabled, logs are encrypted and short-lived. Your data is never readable by Outliny employees.',
    },
    {
      question: 'Can I collaborate with my team on templates?',
      answer:
        'Yes! Outliny supports multi-user access and modular templates that make collaboration and shared design components easy.',
    },
    {
      question: 'Can I use Outliny without writing any code?',
      answer:
        'Yes, our visual editors let you design templates easily. But for full automation, dynamic content, and rendering — you’ll want to use our API.',
    },
    {
      question: 'What happens if I go over the free tier limit?',
      answer:
        'Your account won’t be charged or stopped. Instead, you’ll be prompted to purchase pay-as-you-go credits when usage exceeds your free tier.',
    },
    {
      question: 'How are email and PDF renders counted?',
      answer:
        'Each time you use the API to generate a final output (either a rendered MJML email or a PDF), it counts as one render. You can preview and edit as much as you want for free.',
    },
    {
      question: 'Can I use my own SMTP or PDF delivery service?',
      answer:
        'Yes. Outliny focuses on generating the final output — you’re free to send emails or PDFs using any service you like.',
    },
  ]



  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      <div className="flex justify-center items-center bg-custom-gradient3 text-white mt-10 ">
        <div ref={faqSectionRef} className="w-full mx-auto p-6 lg:mt-10    ">
          <h1 className="font-poppins text-xl sm:text-3xl md:text-[35px] font-medium leading-snug text-center mt-3  ">
            You have got questions about PDF Generator API. We have got answers
          </h1>
          <p className="font-poppins font-light text-[15px] sm:text-base md:text-lg text-[#535454] mt-6 text-center p-2 mb-10 ">
            Find questions and answers related to the design system, purchase, updates, and support.
          </p>

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
                  <span className="ml-4 font-light text-[#c2c5c5] text-[14px] md:text-base leading-6 font-poppins ">
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

    </>
  )
}

export default FAQ
