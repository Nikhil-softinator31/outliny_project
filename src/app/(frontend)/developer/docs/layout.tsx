
'use client'
import React, { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'

// New sidebar data with some collapsible groups
const sections = [
  {
    title: 'Introduction',
    sectionId: 'section-1',
  },
  {
    title: 'Getting Started (UI)',
    subsections: [
      { title: ' Create an Account', sectionId: 'section-2' },
      { title: 'Your First Outline', sectionId: 'section-3' },
    ],
  },
  {
    title: 'Core Concepts',
    sectionId: 'section-4',
  },
  {
    title: 'Features',
    sectionId: 'section-5',
  },
  {
    title: 'API Integration',
    subsections: [
      { title: 'Base URL', sectionId: 'section-6' },
      { title: 'Authentication', sectionId: 'section-7' },
      { title: 'Postman Collection', sectionId: 'section-8' },
      { title: ' QuickStart: Integrate the API', sectionId: 'section-9' },
    ],
  },

  { title: 'FAQ', sectionId: 'section-10' },
  { title: 'Support & Feedback', sectionId: 'section-11' },
]

export default function TermsLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({})

  // For toggling parent groups (for both desktop and mobile sidebar)
  function toggleSection(idx: number) {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  // Sidebar render function reused for desktop and mobile
  function sidebarNav(closeOnClick?: boolean) {
    return (
      <nav className="space-y-4">
        {sections.map((section, idx) => {
          if (section.subsections) {
            return (
              <div key={idx}>
                <button
                  type="button"
                  className={`sidebar-parent block w-full text-left text-white font-semibold text-[18px] py-2 px-0 flex items-center justify-items-start transition hover:text-[#b2b2b2] group`}
                  onClick={() => toggleSection(idx)}
                  aria-expanded={openSections[idx] || false}
                  aria-controls={`sidebar-collapse-${idx}`}
                >
                  <span>{section.title}</span>
                  <svg
                    className={` hidden group-hover:block ml-2 h-7 w- transform transition-transform ${openSections[idx]  ? 'rotate-180 h-12' : 'rotate-90 h-20'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 9l4-4 4 4" />
                  </svg>
                </button>
                <div
                  id={`sidebar-collapse-${idx}`}
                  className={` overflow-hidden transition-all duration-300 ease-in-out ${openSections[idx] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{ marginLeft: '1rem' }}
                >
                  {section.subsections.map((sub) => (
                    <a
                      key={sub.sectionId}
                      href={`#${sub.sectionId}`}
                      className="sidebar-sublink block text-white font-normal text-[16px] py-1 pl-2 border-l border-[#575757] hover:text-gray-300 transition"
                      onClick={closeOnClick ? () => setIsMenuOpen(false) : undefined}
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              </div>
              
            )
          }
          // Normal section (single link)
          return (
            <a
              key={section.sectionId}
              href={`#${section.sectionId}`}
              className="sidebar-link block text-white font-semibold text-[18px] py-2 px-0 hover:text-gray-300 transition"
              onClick={closeOnClick ? () => setIsMenuOpen(false) : undefined}
            >
              {section.title}
            </a>
          )
        })}
      </nav>
    )
  }

  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-ibm-plex-sans">
        Documentation
      </h1>
      <p className="mb-4 text-center text-sm sm:text-base font-ibm-plex-sans ">
        Welcome to Outliny! This documentation will guide you through everything you need to know to
        get the most out of Outliny, our powerful, intuitive outlining and templating tool for
        planning projects, writing, note-taking, and generating branded documents and emails via
        API.
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

        {/* Mobile Sidebar (collapsible) */}
        <div
          className={`fixed inset-0 lg:hidden transition-opacity duration-800 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto z-30' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Sidebar (Slide from bottom to top) */}
          <div
            className={`absolute bottom-0 left-0 w-full h-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } bg-[#08090a] border-t border-gray-600 overflow-y-auto sidebar-scrollbar`}
          >
            <div className="p-6 mt-16 mb-12">
              <h2 className="text-xl font-semibold text-white mb-6 font-ibm-plex-sans">
                Table of Contents
              </h2>
              {sidebarNav(true)}
            </div>
          </div>
        </div>

        {/* Desktop Sidebar (collapsible) */}
        <aside className="hidden lg:block sticky top-32 left-4 lg:left-8 w-64 h-[calc(100vh-13rem)] overflow-y-auto sidebar-scrollbar border border-[#08090a] mt-20">
          {sidebarNav()}
        </aside>

        {/* Main content injected here */}
        <main className="flex-1 scroll-smooth md:ml-8 lg:ml-24 mr-10">{children}</main>
      </div>
    
    </div>
  )
}
