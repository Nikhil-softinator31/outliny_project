'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SpotlightCard from './SpotlightCard'

gsap.registerPlugin(ScrollTrigger)

const Cards = () => {
  const Data = [
    {
      image: '/shield.svg',
      heading: 'Drag & Drop PDF Builder',
      text: ' Effortlessly design advanced, multi-page documents like MoUs, contracts, HR letters, invoices, certificates, and more using our intuitive GrapesJS-powered editor.',
    },
    {
      image: '/star.svg',
      heading: 'Reliable and Scalable',
      text: ' Craft beautiful MJML-based responsive emails with our drag-and-drop editor. Centralize your CRM, transactional emails, marketing campaigns, and more, backed by cloud-friendly media hosting via Cloudfront and Cloudinary.',
    },
    {
      image: '/cloud.svg',
      heading: 'Email Templates Done Right',
      text: ' Organize and manage all your templates centrally, with built-in version control and easy navigation keeping your brand consistent as your documents evolve.',
    },
    {
      image: '/eye.svg',
      heading: 'Reusable Components',
      text: ' Accelerate your workflow with reusable blocks and design patterns for headers, footers, tables, and more saving valuable development and design time.',
    },
    {
      image: '/card.svg',
      heading: 'Scalable Document Generation ',
      text: 'Reliably handle high-volume PDF and email generation with ease, scaling effortlessly from one-off documents to enterprise-level bulk operations.',
    },
    {
      image: '/like.svg',
      heading: 'Developer-Friendly APIs',
      text: ' Our templates leverage familiar Jinja templating standards to integrate effortlessly into your existing workflows. Generate emails and PDFs via simple APIs, then seamlessly use your SMTP or existing infrastructure to deliver.',
    },
    {
      image: '/eye.svg',
      heading: 'Open and Transparent',
      text: ' Outliny is proudly open-source on GitHub. Import or export templates in industry-standard MJML format, giving you complete flexibility and no vendor lock-in.',
    },
    {
      image: '/card.svg',
      heading: 'Secure by Design',
      text: ' Your data security and privacy are our highest priority. We adhere to global standards to protect your brand and customer data.',
    },
    {
      image: '/like.svg',
      heading: 'Generous Pricing',
      text: ' Free to start, always fair pricing only pay if you use our scalable infrastructure for bulk generation. Test with CSV uploads, validate your templates, and scale confidently.',
    },
  ]

  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.from(card.children, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    })
  }, [])

  return (
    <>
      <div className="bg-[#08090a] flex flex-col justify-center items-center  px-4 md:mt-14">
        <h1 className="text-white  font-medium  text-3xl p-8 lg:mb-10 lg:text-[50px] font-poppins  ">
          Why Outliny?
        </h1>
        <div className="max-w-[1400px] mx-auto">
          <div
            ref={(el) => {
              cardsRef.current[0] = el
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  "
          >
            {Data.map((data, index) => (
              <div key={index} className="flex justify-center">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(177, 177, 177, 0.2)"
                >
                  <div
                    className="  flex flex-col p-6 rounded-2xl space-y-3  mt-1
              bg-custom-gradient transition-all duration-300 cursor-pointer shadow-lg h-[250px] md:h-[320px] "
                  >
                    <Image
                      src={data.image}
                      alt={data.heading}
                      width={48}
                      height={48}
                      className="border border-[#817f7f77] p-2 rounded-xl"
                      priority
                    />
                    <h1 className="text-[#acabab] text-[20px] leading-[30px] tracking-[0%] font-semibold font-poppins  ">
                      {data.heading}
                    </h1>
                    <p className="text-[#acabab] text-[13px] md:text-[16px] md:leading-[30px] text-left font-poppins font-normal">
                      {data.text}
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
