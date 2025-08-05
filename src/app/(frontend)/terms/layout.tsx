'use client'
import React, { ReactNode, useState } from 'react'
import {  Menu, X } from 'lucide-react'
const sections = [
  'Definitions',
  'Description of Service',
  'User Accounts',
  'Acceptable Use Policy',
  'User Content and Data',
  'Fees, Payment, and Credits',
  'Open Source Software',
  'Intellectual Property',
  'Term and Termination',
  'Warranties and Disclaimers',
  'Limitation of Liability',
  'Indemnification',
  'Governing Law',
  'Dispute Resolution',
  'Contact Information',
]

export default function TermsLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="  max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-ibm-plex-sans">
        Terms &amp; Condition
      </h1>
      <p className="mb-4  text-center text-sm sm:text-base font-ibm-plex-sans ">
        Welcome to Outliny! These Terms and Conditions (&quot;Terms&quot;) govern your access to and
        use of the Outliny website, APIs, software, and services (collectively, the
        &quot;Service&quot;). The Service is provided by Outliny (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By creating an account, accessing our API, or using the Service in any
        way, you (&quot;you&quot; or &quot;User&quot;) agree to be bound by these Terms and our
        Privacy Policy. If you do not agree to these Terms, you may not use the Service. If you are
        using the Service on behalf of a company or other legal entity (&quot;Enterprise&quot;), you
        represent that you have the authority to bind that entity to these Terms, in which case
        &quot;you&quot; and &quot;your&quot; will refer to that entity.
      </p>
      <div className="flex relative  ">
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
          className={`fixed inset-0  lg:hidden transition-opacity duration-800 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-800 ${
              isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar (Slide from bottom to top) */}
          <div
            className={`absolute bottom-0 left-0 w-full h-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : 'translate-y-full'
            } bg-[#08090a] border-t border-gray-600 overflow-y-auto sidebar-scrollbar`}
          >
            <div className="p-6 mt-16">
              <h2 className="text-xl font-semibold text-white mb-6 font-ibm-plex-sans">
                Table of Contents
              </h2>
              <nav className="space-y-4">
                {sections.map((title, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx + 1}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white transition font-semibold text-[16px] leading-normal tracking-[0.39px] font-ibm-plex-sans hover:text-gray-300 py-2"
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

        {/* Main content injected here */}
        <main className="flex-1 scroll-smooth md:ml-8 lg:ml-24">{children}</main>
      </div>
    </div>
  )
}
