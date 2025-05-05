'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const BottomCorner: React.FC = () => {
  const icons: string[] = ['APPLE', 'AWARDS', 'BEHANCE', 'GOOGLE', 'INSTAGRAM', 'LINKEDIN']
  const animateScrollRightRef = useRef<HTMLDivElement | null>(null)
  const animateScrollLeftRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const animateScrollRight = animateScrollRightRef.current
    const animateScrollLeft = animateScrollLeftRef.current
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? '80%' : '0%'

      gsap.to([animateScrollRight, animateScrollLeft], {
        x: (index) => (index === 0 ? direction : `-${direction}`),
        opacity: 1,
        duration: 3.5,
        ease: 'power2.out',
      })

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className="flex-col gap-3 xl:m-10 p-4 text-left ">
      <div
        className="overflow-hidden rotate-[14deg]  "
        style={{
          maskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        <div className="flex " ref={animateScrollRightRef}>
          {icons.map((icon, index) => (
            <div
              key={index}
              className=" p-3 min-h-20  -translate-x-80 m-1 rounded-lg border border-gray-600 text-center bg-[#0E0E0E] text-white"
            >
              {icon}
            </div>
          ))}
        </div>
        <div className="flex" ref={animateScrollLeftRef}>
          {icons.map((icon, index) => (
            <div
              key={index}
              className=" p-3 bg-[#0E0E0E] m-1 min-h-20 min-w-30 rounded-lg border border-gray-600 text-center text-white"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10">
        SVG Icons{' '}
        <span className="bg-red-500 text-xs text-white px-2 py-1 rounded">COMING SOON</span>
      </h2>
      <p className="mt-1 text-[#878685] break-words  text-left text-sm ">
        Did the designer use PNGs again? We have got you covered. Social icons are a must for almost
        every website, but finding them in the right SVG format can be a pain.
      </p>
    </div>
  )
}

export default BottomCorner
