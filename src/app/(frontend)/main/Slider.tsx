'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SpotlightCard from './SpotlightCard'

gsap.registerPlugin(ScrollTrigger)

const Slider = () => {
  const Data = [
    {
      image: '/shield.svg',
      heading: 'Secure',
      text: 'Our API endpoints Are Served Through Encrypted Connections. You Decide What is Logged And If Documents Are Stored.',
    },
    {
      image: '/star.svg',
      heading: 'Reliable and Scalable',
      text: 'Our document processing APIs are trusted by hundreds of businesses every day, generating thousands of documents.',
    },
    {
      image: '/cloud.svg',
      heading: 'Save Time and Money',
      text: 'Fast and easy integration so you can focus on core business. Leave the document processing to us.',
    },
    {
      image: '/eye.svg',
      heading: 'Privacy Focused',
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
    },
    {
      image: '/card.svg',
      heading: 'Safe Payment ',
      text: 'All payments are handled by Stripe. Docamatic never has direct access to any of your payment information.',
    },
    {
      image: '/like.svg',
      heading: 'Developer Friendly',
      text: 'Our intuitive REST API was built with simplicity in mind. Convert HTML to PDF with a single parameter.',
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
    <div className="bg-[#000000] flex justify-center items-center py-5">
      <div className="w-full lg:max-w-[80%] px-4">
        <div
          ref={(el) => {
            cardsRef.current[0] = el
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Data.map((data, index) => (
            // Content goes here

            <div key={index} className="mx-auto">
              <div
                className="w-full sm:max-w-[350px] flex flex-col p-5 rounded-2xl mx-auto space-y-4 mt-6 
          transition-all duration-300 cursor-pointer"
              >
                {' '}
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(180, 80, 255, 0.2)"
                >
                  <img
                    src={data.image}
                    alt={data.heading}
                    className="w-12 h-12 border border-[#817f7f77] p-2 rounded-xl"
                  />
                  <h1 className="text-[#FFFFFF] text-lg font-semibold font-poppins">
                    {data.heading}
                  </h1>
                  <p className="text-[#FFFFFF] text-[13px] font-medium leading-[30px] text-left font-poppins">
                    {data.text}
                  </p>
                </SpotlightCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
