'use client'

import { useRef, useEffect, useState } from 'react'
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current
    if (!card) return

    const { width, height, left, top } = card.getBoundingClientRect()
    const x = e.clientX - left - width / 2
    const y = e.clientY - top - height / 2

    gsap.to(card, {
      rotationX: (-y / height) * 10,
      rotationY: (x / width) * 10,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.05, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    })
  }

  return (
    <div ref={containerRef} className="py-4 flex items-center justify-center opacity-0 mx-auto">
      <div
        ref={cardRef}
        className="max-w-[260px] sm:max-w-[280px] md:max-w-[400px] lg:max-w-[320px] h-[250px] sm:h-[260px] md:h-[270px] lg:h-[280px] rounded-xl flex flex-col items-center text-center bg-[#0a0a0a]
        overflow-hidden bg-[gray-100/5] backdrop-blur-md border border-white/20
        transition-transform duration-300 ease-in-out hover:border-white/50
        transform-gpu perspective-1000 group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 mt-4 group overflow-hidden">
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
  { id: 1, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 2, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 3, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 4, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 5, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 6, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 7, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
  { id: 8, imageSrc: '/car13.jpg', description: 'Create invoice PDFs, packing slips, and more...' },
]

export default function Dashboard() {
  return (
    <div className="bg-[#030303] text-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
      <main className="rounded-2xl p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </main>
    </div>
  )
}
