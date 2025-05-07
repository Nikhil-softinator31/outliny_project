'use client'
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)


export default function PdfViewer() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.utils.toArray('.pdf-card').forEach((card) => {
      gsap.fromTo(
        card as HTMLElement, // Explicitly type it as HTMLElement
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card as HTMLElement, // Also ensure ScrollTrigger recognizes it
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
  }, [])

  const PDFDATA = [
    {
      image: '/images/pdf.jpg',
      title: 'Packing List',
      subTitle: 'A packing list with images and barcodes',
      button1: 'Launch Editor',
      button2: 'View PDF',
    },
    {
      image: '/images/pdf.jpg',
      title: 'Packing List',
      subTitle: 'A packing list with images and barcodes',
      button1: 'Launch Editor',
      button2: 'View PDF',
    },
    {
      image: '/images/pdf.jpg',
      title: 'Packing List',
      subTitle: 'A packing list with images and barcodes',
      button1: 'Launch Editor',
      button2: 'View PDF',
    },
    {
      image: '/images/pdf.jpg',
      title: 'Packing List',
      subTitle: 'A packing list with images and barcodes',
      button1: 'Launch Editor',
      button2: 'View PDF',
    },
    {
      image: '/images/pdf.jpg',
      title: 'Packing List',
      subTitle: 'A packing list with images and barcodes',
      button1: 'Launch Editor',
      button2: 'View PDF',
    },
    {
      image: '/images/pdf.jpg',
      title: 'Packing List',
      subTitle: 'A packing list with images and barcodes',
      button1: 'Launch Editor',
      button2: 'View PDF',
    },
  ]

  return (
    <div className="mt-20">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1200px]"
      >
        {PDFDATA.map((data, index) => (
          <div
            key={index}
            className="pdf-card p-6 rounded-2xl border-[#646464] border mx-auto opacity-0"
          >
            <div className="grayscale hover:grayscale-0">
              {/* <img src={data.image} alt={data.title} className="w-full h-auto rounded-lg mb-4 " /> */}
              <Image
                src={data.image}
                alt="data.title"
                width={100}
                height={100}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h1 className="text-white font-bold text-[18px] mb-2 text-left font-poppins">
                {data.title}
              </h1>
              <p className="text-[#ffffff] font-normal text-[14px] leading-5 mb-4 text-left font-poppins">
                {data.subTitle}
              </p>
            </div>
            <div className="flex  justify-center items-center gap-4 mt-4">
              <button className="border-[1px] text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-[#161616]">
                {data.button1}
              </button>
              <button className="border-[1px] text-[#ffffff] hover:text-white px-7 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-[#161616]">
                {data.button2}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
