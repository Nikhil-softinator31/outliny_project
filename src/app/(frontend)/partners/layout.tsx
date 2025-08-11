'use client'
import React, { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
//   'Partner With Us',
  'Why Partner With Outliny?',
  'Ideal Partner Profiles',
  'What You’ll Get',
  'Partnership Tracks',
//   'Partner Enablement & Support',
//   'Apply & Contact Us',
]

export default function PartnerLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-ibm-plex-sans">
        Partner With Us
      </h1>
      <p className="mb-4 text-center text-sm sm:text-base font-ibm-plex-sans ">
      At Outliny, we believe that strong partnerships drive innovation and growth, for you and your customers. Whether you’re a technology vendor, systems integrator, agency, or ISV, our Partner Program empowers you to extend your offerings, unlock new revenue streams, and deliver turnkey branding solutions on email and PDF communications.
      </p>

      <div className="flex relative">
        {/* Bottom Navigation Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08090a] border-t border-[#3a3939]">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-white font-medium font-ibm-plex-sans">OUTLINY</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0  lg:hidden transition-opacity duration-800    ${
            isMenuOpen ? 'opacity-100 pointer-events-auto z-30 ' : 'opacity-0 pointer-events-none '
          }`}
        >
          {/* Sidebar (Slide from bottom to top) */}
          <div
            className={`absolute bottom-0 left-0 w-full h-full transform transition-transform  duration-300 ease-in-out  ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } bg-[#08090a] border-t border-gray-600 overflow-y-auto sidebar-scrollbar`}
          >
            <div className="p-6 mt-16 mb-12">
              <h2 className="text-xl font-semibold text-white mb-6 font-ibm-plex-sans">
                Table of Contents
              </h2>
              <nav className="space-y-4">
                {sections.map((title, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx + 1}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white  font-semibold text-[16px] leading-normal tracking-[0.39px] font-ibm-plex-sans hover:text-gray-300 py-2"
                  >
                    {idx + 1}. {title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block sticky top-32 left-4 lg:left-8 w-64 h-[calc(100vh-13rem)] overflow-y-auto sidebar-scrollbar border border-[#08090a] p-4 mt-20 ">
          <nav className="space-y-12  ">
            {sections.map((title, idx) => (
              <a
                key={idx}
                href={`#section-${idx + 1}`}
                className="block text-white transition font-semibold text-[18px] leading-normal tracking-[0.39px] font-ibm-plex-sans  "
              >
                {idx + 1}. {title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 scroll-smooth md:ml-8 lg:ml-24">{children}</main>
      </div>
    </div>
  )
}
