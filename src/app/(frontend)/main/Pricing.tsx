'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    img1: '/frame2.png',
    name: 'Basic',
    price: 'Free',
    description: 'Best for personal use.',
    features: [
      'Employee directory',
      'Task management',
      'Calendar integration',
      'File storage',
      'Communication tools',
      'Reporting and analytics',
    ],
  },
  {
    img1: '/frame1.png',
    name: 'Enterprise',
    price: '$20',
    description: 'For large teams & corporations.',
    features: [
      'Advanced employee directory',
      'Project management',
      'Resource scheduling',
      'Version control',
      'Team collaboration',
      'Advanced analytics',
    ],
  },
  {
    img1: '/frame2.png',
    name: 'Business',
    price: '$120',
    description: 'Best for business owners.',
    features: [
      'Customizable employee directory',
      'Client project management',
      'Client meeting schedule',
      'Compliance tracking',
      'Client communication',
      'Create custom reports tailored',
    ],
  },
]

const Pricing = () => {
  const pricingRef = useRef(null)
  const cardRefs = useRef([])
  const [activeButton, setActiveButton] = useState(null)
  useGSAP(() => {
    gsap.set(cardRefs.current, { y: 100, opacity: 0 }) // Start stacked and hidden

    gsap.to(cardRefs.current, {
      y: 0, // Move up to normal position
      opacity: 1,
      duration: 0.8,
      stagger: 0.2, // Each card moves up one after another
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pricingRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'restart play restart play', // Scroll up → stack back
        markers: false,
      },
    })
  }, [])

  const clickHandler = (index) => {
    setActiveButton(index)
  }

  return (
    <section
      ref={pricingRef}
      className="min-h-screen flex justify-center items-center bg-[#030303] font-poppins p-6"
    >
      <div className="w-full max-w-6xl text-center">
        <h1 className="font-poppins text-2xl sm:text-4xl font-medium leading-snug text-white mt-3">
          Simple, predictable pricing
        </h1>
        <p className="font-poppins font-light text-sm sm:text-lg text-[#b0b0b0] mt-4 px-4">
          Find questions and answers related to the design system, purchase, updates, and support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-custom-gradient5 p-6 sm:p-8 rounded-xl shadow-lg text-white flex flex-col items-start w-full "
            >
              <img src={plan.img1} alt="" className="" />
              <h3 className="text-xl font-medium mt-5">{plan.name}</h3>
              <p className="text-gray-400 sm:text-left">{plan.description}</p>
              <p className="text-3xl font-bold mt-5">
                {plan.price}{' '}
                <span className=" font-normal text-sm leading-6">
                  {plan.price !== 'Free' ? '/ per month' : ''}
                </span>
              </p>
              <button
                className={`mt-6 px-6 py-2 transition rounded-lg cursor-pointer w-full border border-[#FFFFFF1A]  ${
                  activeButton === index ? 'bg-gray-300 text-black' : 'bg-custom-gradient4'
                }`}
                onClick={() => clickHandler(index)}
              >
                Get Started
              </button>
              <div className="w-full border-t-[2px] border-[#353637] mt-10 mb-5"></div>
              <div className="mt-5 w-full">
                <h4 className="text-lg font-medium mb-4 text-left">What you will get</h4>
                <ul className="text-[#d0d0d0] text-sm space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <img src="/tick.png" alt="" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
