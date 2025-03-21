'use client'

import React, { useState } from 'react'

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <footer
      className="bg-[#08090a] text-white relative py-16 px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 border-t border-gray-800 pt-10 relative z-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-medium mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Content Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Enterprise App Builder
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Headless E-Commerce
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Digital Asset Management
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-medium mb-4">Developers</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Templates
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-medium mb-4">Enterprise</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Compare Payload
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Large "PAYLOAD" Text with Mask Effect */}
      <div className="relative mt-40 h-[450px]">
        <div className="Payload3D_container">
          <div className="Payload3D_mask">
            {/* Noise Effect with Mask */}
            <h1
              className="Payload3D_text text-gray-700"
              style={{
                WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 60%)`,
                maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0) 60%)`,
              }}
            >
              Outliny
            </h1>

            {/* Invisible Glowing Effect (Still Functional) */}
            <div
              className="Payload3D_gradient"
              style={{
                transform: `translate3d(calc(${mousePosition.x}px  -30rem), calc(${mousePosition.y}px - 55rem), 0)`,
                filter: 'blur(50px)',
                opacity: 0 /* 👈 Hides the gradient circle while keeping the effect */,
              }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
