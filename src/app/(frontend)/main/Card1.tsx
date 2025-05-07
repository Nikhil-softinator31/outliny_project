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
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] rounded-xl border border-white/20 hover:border-white/50 transition duration-300 p-4 text-center flex flex-col items-center"
    >
      <div
        ref={cardRef}
        className="w-full max-w-[300px]  rounded-xl flex flex-col items-center justify-center  cursor-pointer
        perspective-1000  group"
      >
        <div className="relative w-full aspect-square max-w-[250px]">
          <Image
            src={data.imageSrc}
            alt="Card Image"
            fill
            className="transition-all duration-500 grayscale group-hover:grayscale-0 object-cover rounded-md"
            priority
          />
        </div>
        <p className="text-gray-200 text-sm sm:text-base mt-4 px-2 sm:px-4">{data.description}</p>
      </div>
    </div>
  )
}


const cardData = [
  { id: 1, imageSrc: '/sit.jpg', description: 'Brand consistency' },
  { id: 2, imageSrc: '/style.jpg', description: 'Efficient workflow automation' },
  { id: 3, imageSrc: '/sit.jpg', description: 'Compliance & security' },
  { id: 4, imageSrc: '/style.jpg', description: 'Open-source flexibility' },
  { id: 5, imageSrc: '/laptop.jpg', description: 'Automation support' },
  { id: 6, imageSrc: '/emailing.jpg', description: 'Scalable operations & centralized template' },
  { id: 7, imageSrc: '/sit.jpg', description: 'Real-Time Preview & Testing' },
  { id: 8, imageSrc: '/emailing.jpg', description: 'Template Versioning & Management' },
]

export default function Dashboard() {
  return (
    <section className="text-white px-4 sm:px-6 py-14 flex flex-col items-center gap-10">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text">
        Ideal for Enterprises That Care About
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 w-full max-w-[1200px]">
        {cardData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </section>
  )
}
