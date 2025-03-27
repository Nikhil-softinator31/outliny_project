'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    img1: '/frame2.png',
    img2: '/frame1.png',
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
    gradientColors: {
      start: 'rgba(169, 169, 169, 0.15)',  // Very Light Dark Gray  
      mid: 'rgba(105, 105, 105, 0.12)',   // Very Light Dim Gray  
      end: 'rgba(0, 0, 0, 0.25)',        // Soft Black  
    },
    
    
    
  },
  {
    img1: '/frame2.png',
    img2: '/frame1.png',
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
    gradientColors: {
      start: 'rgba(138, 43, 226, 0.3)',  // Soft Blue-Violet
      mid: 'rgba(72, 61, 139, 0.25)',    // Muted Dark Slate Blue
      end: 'rgba(25, 25, 25, 0.4)',      // Softer Black
    },
    
    
    
  },
  {
    img1: '/frame2.png',
    img2: '/frame1.png',
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
    gradientColors: {
      start: 'rgba(128, 0, 128, 0.2)',  // Very Light Purple
      mid: 'rgba(75, 0, 130, 0.15)',   // Faint Indigo
      end: 'rgba(0, 0, 0, 0.3)',       // Soft Black
    },
    // gradientColors: {
    //   start: 'rgba(200, 200, 200, 0.10)',  // Softer Light Gray  
    //   mid: 'rgba(150, 150, 150, 0.08)',   // Softer Dim Gray  
    //   end: 'rgba(50, 50, 50, 0.18)',      // Softer Black  
    // },
    
  },
]

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [hoverStates, setHoverStates] = useState<boolean[]>(Array(pricingPlans.length).fill(false))

  useGSAP(() => {
    if (!cardRefs.current) return
    gsap.set(cardRefs.current, { y: 100, opacity: 0 })

    gsap.to(cardRefs.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pricingRef.current,
        start: 'top 80%',
        once: true,
      },
    })
  }, [])

  const handleHover = (index: number, enter: boolean) => {
    setHoverStates((prev) => prev.map((state, i) => (i === index ? enter : state)))

    const card = cardRefs.current[index]
    if (!card) return

   const plan = pricingPlans[index]
   if (!plan) return

   const colors = plan.gradientColors


    if (enter) {
      gsap.fromTo(
        card,
        { background: `radial-gradient(circle at center, ${colors.start} 0%, ${colors.end} 0%)` },
        {
          background: `radial-gradient(circle at center, ${colors.mid} 30%, ${colors.end} 100%)`,
          duration: 0.6,
          ease: 'power2.out',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      )
    } else {
      gsap.to(card, {
        background: '#0f0f11',
        duration: 0.6,
        borderColor: 'rgba(255, 255, 255, 0.1)',
      })
    }
  }

  return (
    
    <section
      ref={pricingRef}
      className="min-h-screen flex justify-center items-center  font-poppins p-6 bg-custom-gradient18"
    >
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-2xl sm:text-4xl font-medium leading-snug text-white mt-3">
          Simple, predictable pricing
        </h1>
        <p className="text-sm sm:text-lg text-[#b0b0b0] mt-4 px-4">
          Find questions and answers related to the design system, purchase, updates, and support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10  ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="bg-[#0f0f11] p-6 sm:p-8 rounded-xl shadow-lg text-white flex flex-col items-start w-full transition-all duration-500 border border-[#ffffff1a]"
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <img src={hoverStates[index] ? plan.img2 : plan.img1} alt="" />
              <h3 className="text-xl font-medium mt-5">{plan.name}</h3>
              <p className="text-gray-400 sm:text-left">{plan.description}</p>
              <p className="text-3xl font-bold mt-5">
                {plan.price}{' '}
                {plan.price !== 'Free' && <span className="font-normal text-sm">/ per month</span>}
              </p>
              <button className="mt-6 px-6 py-2 transition rounded-lg cursor-pointer w-full border border-[#FFFFFF1A] bg-custom-gradient4">
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