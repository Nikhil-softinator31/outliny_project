'use client'

import React, { useState, useRef, useEffect } from 'react'

const testimonials = [
  {
    para: 'Optimized response times of Nexus AI are a game-changer. Quick iterations and tailored solutions make it.',
    img: '/arrow-right.svg',
    heading: 'Tech Enthusiast',
    subHeading: '@techenthusiast',
  },
  {
    para: 'Nexus AI elevates our marketing strategy. Instantly generate compelling copy to enhance campaigns.',
    img: '/arrow-right.svg',
    heading: 'Marketing Pro',
    subHeading: '@marketingpro',
  },
  {
    para: 'Nexus AI transformed my design workflow! Instant content suggestions and real-time collaboration make it a game-changer.',
    img: '/arrow-right.svg',
    heading: 'Alex Designs',
    subHeading: '@alexDesigns',
  },
  {
    para: 'Nexus AI’s efficiency in generating code snippets is unmatched. Seamless integration, time-saving.',
    img: '/arrow-right.svg',
    heading: 'Code Master',
    subHeading: '@codemaster',
  },
  {
    para: 'Nexus AI understands content creation. A partner that crafts engaging copy, making my content strategy smarter.',
    img: '/arrow-right.svg',
    heading: 'Mia Foster',
    subHeading: '@miafoster',
  },
]

const TestimonialRow = ({ isPaused, setIsPaused, direction, refProp }) => (
  <div
    className="relative w-full overflow-hidden mt-6"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    style={{
      maskImage:
        'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
    }}
  >
    <div ref={refProp} className={`flex space-x-4 sm:space-x-6 animate-marquee-${direction}`}>
      {testimonials.concat(testimonials).map((test, index) => (
        <div
          key={index}
          className="min-w-[260px] sm:min-w-[320px] md:min-w-[400px] p-4 sm:p-6 rounded-xl bg-[#ffffff05] border border-gray-700 shadow-lg text-left cursor-pointer transition-all duration-300 hover:bg-custom-gradient1"
        >
          <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">{test.para}</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={test.img}
              alt="User"
              className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-full"
            />
            <div>
              <h2 className="text-white text-sm sm:text-lg font-semibold">{test.heading}</h2>
              <p className="text-gray-500 text-xs sm:text-sm">{test.subHeading}</p>
            </div>
            <img
              src="/arrow-right.svg"
              alt="Twitter"
              className="w-4 sm:w-5 h-4 sm:h-5 ml-auto opacity-50"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Testimonials = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false)
  const [isPausedRow2, setIsPausedRow2] = useState(false)
  const row1Ref = useRef<HTMLDivElement | null>(null)
  const row2Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    row1Ref.current?.style.setProperty('animation-play-state', isPausedRow1 ? 'paused' : 'running')
  }, [isPausedRow1])

  useEffect(() => {
    row2Ref.current?.style.setProperty('animation-play-state', isPausedRow2 ? 'paused' : 'running')
  }, [isPausedRow2])

  return (
    <div className="px-4 sm:px-6 lg:px-12 bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center">
        What People Are Saying
      </h2>
      <TestimonialRow
        isPaused={isPausedRow1}
        setIsPaused={setIsPausedRow1}
        direction="left"
        refProp={row1Ref}
      />
      <TestimonialRow
        isPaused={isPausedRow2}
        setIsPaused={setIsPausedRow2}
        direction="right"
        refProp={row2Ref}
      />
    </div>
  )
}

export default Testimonials
