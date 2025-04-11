'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    img1: '/frame2.png',
    img2: '/frame1.png',
    name: 'Basic',
    price: 'Free',
    description: 'Best for personal use & testing.',
    features: [
      ' Drag-and-drop email + PDF editor ',
      'Everything in Free, plus',
      ' 300 Emails / 100 PDFs per month ',
      ' Use MJML, Jinja2, and template ',
      ' Secure, encrypted rendering',
      ' No logs by default',
      ' WordPress plugin access',
    ],
    gradientColors: {
      start: 'rgba(169, 169, 169, 0.15)',
      mid: 'rgba(105, 105, 105, 0.12)',
      end: 'rgba(0, 0, 0, 0.25)',
    },
  },
  {
    img1: '/frame2.png',
    img2: '/frame1.png',
    name: 'Enterprise',
    price: '$20',
    description: 'For large teams & growing companies.',
    features: [
      'Everything in Free, plus',
      ' 5,000 Emails / 2,000 PDFs per month',
      ' Team collaboration tools',
      ' Shared module library',
      ' Version control on templates ',
      ' Advanced usage analytics',
      ' Priority support & onboarding help',
    ],
    gradientColors: {
      start: 'rgba(138, 43, 226, 0.3)',
      mid: 'rgba(72, 61, 139, 0.25)',
      end: 'rgba(25, 25, 25, 0.4)',
    },
  },
  {
    img1: '/frame2.png',
    img2: '/frame1.png',
    name: 'Business',
    price: '$120',
    description: 'Best For agencies & SaaS teams .',
    features: [
      'Everything in Enterprise, plus:',
      ' 50,000 Emails / 20,000 PDFs per month',
      ' Dedicated support engineer',
      ' Custom integrations (Zapier, CRMs)',
      ' Self-hosting option + GitHub support',
      ' SLA + audit logs (optional)',
      ' Invoiced billing for teams',
    ],
    gradientColors: {
      start: 'rgba(128, 0, 128, 0.2)',
      mid: 'rgba(75, 0, 130, 0.15)',
      end: 'rgba(0, 0, 0, 0.3)',
    },
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
      className="min-h-screen flex justify-center items-center font-poppins px-4 py-10 bg-custom-gradient18 overflow-x-hidden"
    >
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-2xl sm:text-4xl font-medium leading-snug text-white mt-3">
          Simple. Fair. Developer-Friendly
        </h1>
        <p className="text-sm sm:text-lg text-[#b0b0b0] mt-4 px-2 sm:px-4">
          Find questions and answers related to the design system, purchase, updates, and support.
        </p>

        <div className="flex flex-col xl:flex-row  gap-4 mt-10 ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="bg-[#0f0f11] p-6 rounded-xl shadow-lg text-white flex  flex-col  items-start transition-all duration-500 border border-[#ffffff1a] min-h-[600px] hover:shadow-2xl w-full  xl:h-[700px]  "
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <Image
                src={hoverStates[index] ? plan.img2 : plan.img1}
                alt={`${plan.name} plan icon`}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-medium mt-5">{plan.name}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{plan.description}</p>
              <p className="text-2xl sm:text-3xl font-bold mt-5">
                {plan.price}{' '}
                {plan.price !== 'Free' && (
                  <span className="font-normal text-xs sm:text-sm">/ per month</span>
                )}
              </p>
              <button className="mt-6 px-6 py-2 transition rounded-lg cursor-pointer w-full border border-[#FFFFFF1A] bg-custom-gradient4 text-sm sm:text-base">
                Get Started
              </button>
              <div className="w-full border-t-[2px] border-[#353637] mt-10 mb-5"></div>
              <div className="mt-5 w-full">
                <h4 className="text-base sm:text-lg font-medium mb-4 text-left">
                  What you will get
                </h4>
                <ul className="text-[#d0d0d0] text-xs sm:text-sm space-y-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Image
                        src="/tick.png"
                        alt="tick"
                        width={16}
                        height={16}
                        className="w-4 h-4 mt-1"
                      />
                      <span>{feature}</span>
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
