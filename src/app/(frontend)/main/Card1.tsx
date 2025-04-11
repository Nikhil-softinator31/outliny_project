'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CardProps {
  data: {
    imageSrc: string
    description: string
  }
}

const Card = ({ data }: CardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    gsap.fromTo(
      container,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: container,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="py-2 md:py-0 w-full md:w-auto">
      <div
        ref={cardRef}
        className="w-full md:w-auto sm:max-w-[250px] md:max-w-[300px] h-[250px] sm:h-[260px] md:h-[270px] rounded-xl flex flex-col items-center text-center bg-[#0a0a0a]
        backdrop-blur-md border border-white/20 transition-transform duration-300 ease-in-out hover:border-white/50
        perspective-1000 group mx-auto"
      >
        <div className="relative w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 mt-8">
          <Image
            src={data.imageSrc}
            alt="Card Image"
            fill
            className="transition-all duration-500 grayscale group-hover:grayscale-0 object-cover rounded-md"
            priority
          />
        </div>
        <p className="text-gray-200 text-xs sm:text-sm md:text-base mt-4 px-3 sm:px-4 md:px-6 text-center">
          {data.description}
        </p>
      </div>
    </div>
  )
}

const cardData = [
  { id: 1, imageSrc: '/car13.jpg', description: 'Brand consistency' },
  { id: 2, imageSrc: '/car13.jpg', description: ' Efficient workflow automation' },
  { id: 3, imageSrc: '/car13.jpg', description: ' Compliance & security' },
  { id: 4, imageSrc: '/car13.jpg', description: ' Open-source flexibility' },
  { id: 5, imageSrc: '/car13.jpg', description: 'Automation support' },
  {
    id: 6,
    imageSrc: '/car13.jpg',
    description: 'Scalable operations & centralized template ',
  },
  { id: 7, imageSrc: '/car13.jpg', description: ' Real-Time Preview & Testing' },
  { id: 8, imageSrc: '/car13.jpg', description: 'Template Versioning & Management' },
]

export default function Dashboard() {
  return (
    <div className=" text-white px-4 sm:px-6 py-6 sm:py-8 md:p-4 flex flex-col justify-center items-center mt-14 gap-10 ">
      <div>
        <h1 className=" text-center text-xl md:text-2xl lg:text-[35px] gradient-text ">
          Ideal for Enterprises That Care About
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full xl:w-[65%]">
        {cardData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  )
}
