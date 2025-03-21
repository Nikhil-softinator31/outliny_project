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
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
    },
    {
      image: '/star.svg',
      heading: 'Reliable and Scalable',
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
    },
    {
      image: '/cloud.svg',
      heading: 'Save Time and Money',
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
    },
    {
      image: '/eye.svg',
      heading: 'Privacy Focused',
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
    },
    {
      image: '/card.svg',
      heading: 'Safe Payment ',
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
    },
    {
      image: '/like.svg',
      heading: 'Developer Friendly',
      text: 'Choose if and how long your PDF documents should be stored or save them directly to your own S3 bucket.',
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
    <div className="bg-[#08090a] flex justify-center items-center py-8 px-4 ">
      <div className="w-full max-w-[1300px]">
        <div
          ref={(el) => {
            cardsRef.current[0] = el
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {Data.map((data, index) => (
            <div key={index} className="flex justify-center">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(177, 177, 177, 0.2)"
              >
                <div
                  className="w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] flex flex-col p-6 rounded-2xl space-y-4 mt-6 
              bg-custom-gradient transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <img
                    src={data.image}
                    alt={data.heading}
                    className="w-12 h-12 border border-[#817f7f77] p-2 rounded-xl"
                  />
                  <h1 className="text-[#e7e7e7] text-lg font-medium font-poppins">
                    {data.heading}
                  </h1>
                  <p className="text-[#c7bfbf] text-[13px] md:text-[16px] md:leading-[30px] text-left font-poppins font-normal">
                    {data.text}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
