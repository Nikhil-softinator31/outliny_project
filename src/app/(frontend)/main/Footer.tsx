'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Industries',
    links: [
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Legal', href: '/industries/legal' },
      { label: 'Insurance', href: '/industries/insurance' },
      { label: 'Accounting', href: '/industries/accounting' },
      { label: 'Marketing', href: '/industries/marketing' },
      { label: 'Human Resources', href: '/industries/human-resources' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Sales', href: '/industries/sales' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'PDF Generation API', href: '/product/pdf-generation-api' },
      { label: 'Generating PDFs from HTML', href: '/product/from-html' },
      { label: 'Creating HTML  from a MJML for email', href: '/product/from-mjml' },
      { label: 'Enterprise Features', href: '/product/enterprise' },
    ],
  },
  {
    title: 'Enterprise',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Partner With Us', href: '/partners' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Developer',
    links: [
      { label: 'Documentation', href: '/developer/docs' },
      { label: 'Template Editor', href: '/developer/template-editor' },
      { label: 'RoadMap', href: '/developer/roadmap' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Compare Payload', href: '/compare-payload' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <footer
      className="py-1 px-8 overflow-hidden bg-[#08090a] text-white mt-10"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage:
          "linear-gradient(rgba(8, 9, 10, 0.5), rgba(8, 9, 10, 0.5)), url('/Grid..svg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    >
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:justify-between gap-8 pt-10  mt-10">
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">{section.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="group relative text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                    {/* <span className="absolute left-0 -bottom-0.5 h-[0.5px] w-full bg-[#94a7bb] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out" /> */}
                    <span className="absolute bottom-0 left-0  w-full h-[3%] bg-[#94a7bb] scale-x-0 group-hover:scale-x-100  transition-transform duration-300 ease-in-out transform origin-right group-hover:origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Outliny Text with Mask Effect */}
      <div className="relative  h-[100px] md:h-[200px] lg:h-[350px]">
        <div>
          <h1
            className="Payload3D_text text-gray-700 text-8xl font-bold font-aldrich"
            style={{
              WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)`,
              maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0) 60%)`,
            }}
          >
            Outliny
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
