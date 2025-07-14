'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const FirstTop: React.FC = () => {
  const moveRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  const imgCollection = [
    '/pic1.png',
    '/pic7.png',
    '/pic3.png',
    '/pic4.png',
    '/pic5.png',
    '/pic2.png',
  ]

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !moveRefs.current.has(index)) {
      moveRefs.current.set(index, el)
    }
  }

  useGSAP(() => {
    gsap.set(moveRefs.current, { y: '0%', opacity: 1 })

    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const direction = currentScroll > lastScrollY ? 1 : -1 // 1 for down, -1 for up

      moveRefs.current.forEach((ref, index) => {
        const yValue = `${direction * (12 - index * 2)}%`
        gsap.to(ref, {
          y: yValue,
          opacity: 1,
          duration: 3.5,
          ease: 'power2.out',
        })
      })

      lastScrollY = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#0E0E0E] rounded-2xl border-[#1e1e1e] overflow-hidden  max-h-[600px] text-left w-full  border">
      <h3 className="custom-text mt-5 text-3xl md:text-4xl p-5">
        Ready-to-Use, Developer-Friendly Components
      </h3>
      <p className="text-[#878685] text-sm sm:text-base leading-relaxed max-w-xl ml-5 ">
        Skip the boilerplate. Outliny provides professionally designed, pre-built email and PDF
        components that you can drag, drop, and customize instantly. Whether you are generating
        invoices, sending HR updates, or building CRM flows—our template components are modular,
        responsive, and built for speed.
      </p>

      <div
        className="flex gap-4 md:gap-2 overflow-hidden transform rotate-2 skew-x-30 skew-y-5"
        style={{
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 100%)',
          transform: 'rotate(350deg) skewX(21deg) skewY(9deg) translateX(29px)',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} ref={(el) => addToRefs(el, i)} className="w-1/5 space-y-5 md:space-y-2">
            {imgCollection.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`img${index}`}
                width={252}
                height={300}
                 
                className=" w-full h-20 md:h-10 lg:h-28 object-cover rounded-lg"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FirstTop
