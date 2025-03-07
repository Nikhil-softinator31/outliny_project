'use client'

import { useRef, useCallback, memo, createContext, useState, useContext, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

// Create MouseEnter Context
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

// Card Container Component
const CardContainer = memo(
  ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMouseEntered, setIsMouseEntered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 25
      const y = (e.clientY - top - height / 2) / 25
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }

    const handleMouseEnter = () => {
      setIsMouseEntered(true)
    }

    const handleMouseLeave = () => {
      if (!containerRef.current) return
      setIsMouseEntered(false)
      containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }

    return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div className="py-4 flex items-center justify-center" style={{ perspective: '1000px' }}>
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className=" flex items-center justify-center relative transition-all duration-200 ease-linear"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    )
  },
)

CardContainer.displayName = 'CardContainer'

// Card Component
const Card = memo(({ data }: { data: CardData }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useContext(MouseEnterContext) || [false]

  useGSAP(() => {
    if (!cardRef.current) return

    const card = cardRef.current
    const timeline = gsap.timeline()
    let particleInterval: NodeJS.Timeout | null = null

    // Initial state
    gsap.set(card, {
      backgroundColor: 'rgba(128, 128, 128, 0.1)',
      backdropFilter: 'blur(10px)',
      opacity: 0.7,
      scale: 0.9,
      y: 150,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    })

    // Scroll trigger animation
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      scale: 1.05,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
    })

    // Particle effect
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      card.appendChild(particle)

      gsap.set(particle, {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '50%',
        width: '4px',
        height: '4px',
        x: gsap.utils.random(0, card.offsetWidth),
        y: gsap.utils.random(0, card.offsetHeight),
      })

      gsap.to(particle, {
        y: '-=100',
        opacity: 0,
        duration: gsap.utils.random(1, 2),
        ease: 'power1.out',
        onComplete: () => particle.remove(),
      })
    }

    const handleMouseEnter = () => {
      particleInterval = setInterval(createParticle, 200)

      gsap.to(card, {
        background:
          'linear-gradient(225deg, rgba(13,25,48,0.9) 0%, rgba(28,45,80,0.9) 50%, rgba(41,66,112,0.9) 100%)',
        backdropFilter: 'blur(15px)',
        boxShadow: '0 8px 32px 0 rgba(41,66,112,0.3)',
        opacity: 1,
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
      })

      card.querySelectorAll('p').forEach((p) => {
        gsap.to(p, { color: '#ffffff', duration: 0.3 })
      })

      gsap.to(card.querySelectorAll('button'), {
        scale: 1.1,
        duration: 0.2,
        ease: 'back.out(1.5)',
      })

      gsap.to(card.querySelector('img'), {
        scale: 1.15,
        duration: 0.4,
        ease: 'power2.out',
        z: 50,
      })
    }

    const handleMouseLeave = () => {
      if (particleInterval) {
        clearInterval(particleInterval)
        particleInterval = null
      }

      gsap.to(card, {
        background: 'rgba(128, 128, 128, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        opacity: 0.7,
        scale: 1,
        duration: 0.4,
        ease: 'power2.inOut',
      })

      card.querySelectorAll('p').forEach((p) => {
        gsap.to(p, { color: '#6b7280', duration: 0.3 })
      })

      gsap.to(card.querySelectorAll('button'), {
        scale: 1,
        duration: 0.2,
        ease: 'power2.inOut',
      })

      gsap.to(card.querySelector('img'), {
        scale: 1,
        duration: 0.4,
        ease: 'power2.inOut',
        z: 0,
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (particleInterval) clearInterval(particleInterval)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
      timeline.kill()
    }
  }, [])

  return (
    <CardContainer>
      <div
        ref={cardRef}
        data-bg={data.bgColor}
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
          transform: isMouseEntered ? 'translateZ(50px)' : 'translateZ(0px)',
        }}
        className="card-reveal w-[310px] xs:w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px] h-[400px]  rounded-[20px] flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md border border-white/10 transition-all duration-200"
      >
        <div
          className="absolute top-2 right-2 flex flex-col items-end"
          style={{ transform: isMouseEntered ? 'translateZ(30px)' : 'translateZ(0px)' }}
        >
          <button className="bg-purple-600/80 backdrop-blur-sm text-white rounded-full p-2 m-1 hover:bg-purple-700 transition-colors duration-300">
            🏆
          </button>
          <button className="bg-purple-600/80 backdrop-blur-sm text-white rounded-full p-2 m-1 hover:bg-purple-700 transition-colors duration-300">
            🔍
          </button>
        </div>
        <Image
          src={data.imageSrc}
          alt="Card Image"
          width={160}
          height={160}
          className="mt-4 transition-transform duration-500"
          style={{ transform: isMouseEntered ? 'translateZ(70px)' : 'translateZ(0px)' }}
          priority
        />
        <p
          className="text-gray-400 text-sm mt-4 px-4 overflow-hidden transition-colors duration-300"
          style={{ transform: isMouseEntered ? 'translateZ(40px)' : 'translateZ(0px)' }}
        >
          {data.description}
        </p>
        <div
          className="absolute bottom-4 w-full flex justify-between px-6"
          style={{ transform: isMouseEntered ? 'translateZ(30px)' : 'translateZ(0px)' }}
        >
          <button className="text-white bg-gray-700/80 backdrop-blur-sm px-4 py-1 rounded-2xl hover:bg-gray-600 transition-colors duration-300">
            View More
          </button>
          <button className="text-white bg-gray-700/80 backdrop-blur-sm px-4 py-1 rounded-2xl hover:bg-gray-600 transition-colors duration-300">
            Use It
          </button>
        </div>
      </div>
    </CardContainer>
  )
})

Card.displayName = 'Card'

// SearchBar Component
const SearchBar = memo(() => (
  <div className="flex flex-col sm:flex-row sm:justify-end mb-6 gap-3">
    <button className="text-white py-2 w-full sm:w-auto px-4 rounded bg-gradient-to-br from-white/10 border border-gray-500">
      AI Generated Template
    </button>
    <div className="relative w-full sm:w-auto">
      <div className="absolute inset-y-0 left-3 flex items-center">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="search"
        placeholder="Search Template"
        className="w-full pl-10 pr-12 py-2 bg-gradient-to-br from-white/10 border-gray-500 text-white placeholder:text-gray-400 border"
      />
    </div>
  </div>
))

SearchBar.displayName = 'SearchBar'

// Types
interface CardData {
  id: number
  imageSrc: string
  description: string
  bgColor: string
}

// Main Dashboard Component
export default function Dashboard() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  const cardData: CardData[] = [
    {
      id: 1,
      imageSrc: '/giraf.png',
      description:
        'Whether You Need To Create Invoice PDFs, Packing Slips, Contract Documents Or Labels...',
      bgColor: '#ffffff',
    },
    {
      id: 2,
      imageSrc: '/happy.png',
      description: '1550+ free HTML email templates...',
      bgColor: '#feebcb',
    },
    {
      id: 3,
      imageSrc: '/girl_laptop.png',
      description: 'Whether you need to create invoice PDFs...',
      bgColor: '#d2effe',
    },
    {
      id: 4,
      imageSrc: '/girl_laptop.png',
      description: 'This is another description...',
      bgColor: '#d2effe',
    },
    {
      id: 5,
      imageSrc: '/happy.png',
      description: 'This is another description...',
      bgColor: '#f5ebca',
    },
    {
      id: 6,
      imageSrc: '/giraf.png',
      description: 'This is another description...',
      bgColor: '#d6bcf6',
    },
  ]

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#00040F] text-white overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8 lg:py-10 cursor-pointer"
    >
      <main className="rounded-[20px] border border-gray-600 p-3 sm:p-4 md:p-6 lg:p-8">
        <SearchBar />
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {cardData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </main>
    </div>
  )
}
