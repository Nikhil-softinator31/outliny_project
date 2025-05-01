'use client'

import React, { useState } from 'react'

const footerLinks = [
  {
    title: 'Product',
    links: [
      'PDF Generation API',
      'Generating PDFs from HTML',
      'Creating PDFs from a URL',
      'Enterprise Features',
    ],
  },
  {
    title: 'Industries',
    links: [
      'Real Estate',
      'Legal',
      'Insurance',
      'Accounting ',
      'Marketing',
      'Human Resources',
      'Manufacturing',
      'Sales',
    ],
  },
  {
    title: 'Enterprise',
    links: ['Pricing', 'Case Studies', 'Partner With Us', 'Security'],
  },
  {
    title: 'Developer',
    links: ['Documentation', 'Template Editor', 'RoadMap', 'Contact Us'],
  },
  {
    title: 'Contact',
    links: ['Terms of Service', 'Privacy Policy', 'Compare Payload', 'Contact Us'],
  },
]

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <footer
      className=" py-1 px-8 overflow-hidden bg-[#08090a] text-white mt-10   "
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage:
          "linear-gradient(rgba(8, 9, 10, 0.5), rgba(8, 9, 10, 0.5)), url('/Grid..svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    >
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:justify-between gap-8  pt-10 relative z-10 mt-10 " >
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">{section.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Large Text with Mask Effect */}
      <div className="relative mt-40 h-[100px] md:h-[200px] lg:h-[350px]">
        <div className="Payload3D_container">
          <div className="Payload3D_mask">
            <h1
              className="Payload3D_text text-gray-700 text-8xl font-bold text-center font-aldrich "
              style={{
                WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)`,
                maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0) 60%) `,
              }}
            >
              Outliny
            </h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer