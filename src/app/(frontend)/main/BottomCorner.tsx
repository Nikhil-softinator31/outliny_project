'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const BottomCorner: React.FC = () => {
  const icons: string[] = ['GENERATE', 'EDITING', 'DOWNLOAD', 'CERTIFICATE']
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
    <div className="flex-col gap-3 md:mt-20 sm:mt-6 xl:m-8 lg:mt-8 mt-8 xl:mt-16 text-left p-3 ">
      <div
        className="overflow-hidden rotate-[14deg] "
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
              className=" p-3   -translate-x-80 m-1 rounded-lg border border-gray-600 text-center bg-[#0E0E0E] text-white"
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
      <div className="flex flex-col gap-2 px-3  xl:p-0 mt-4 sm:mt-4 lg:mt-12">
        <h2 className="text-xl sm:text-2xl md:text-[27px]  font-bold">Understand, Then Execute</h2>
        <button className="bg-red-500 text-xs text-white px-3 py-1 rounded w-fit">
          COMING SOON
        </button>
        <p className="text-sm sm:text-base text-[#878685] text-left break-words">
          Learn not just how to use Outliny, but how to build systems that scale, comply with
          enterprise standards, and empower your team.
        </p>
      </div>
    </div>
  )
}

export default BottomCorner
