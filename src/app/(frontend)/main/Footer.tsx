import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer: React.FC = () => {
  const textRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Triggers when 80% of the footer is in view
          toggleActions: 'play none none reverse', // Reverse animation on scroll up
        },
      },
    )
  }, [])

  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div
        id="text-footer"
        ref={textRef}
        className="w-full text-center text-[5rem] sm:text-[8rem] md:text-[9rem] xl:text-[20rem] text-[#20201F]"
      >
        <span>OUTLINY</span>
      </div>
    </div>
  )
}

export default Footer
