'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IndustriesProps {
  children: React.ReactNode
}

const DEFAULT_ROUTE = '/industries/real-estate'

const Industries: React.FC<IndustriesProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const IndustriesRoutes = [
    {
      label: 'Real Estate',
      href: '/industries/real-estate',
    },
    {
      label: 'Legal',
      href: '/industries/legal',
    },
    {
      label: 'Insurance',
      href: '/industries/insurance',
    },
    {
      label: 'Accounting',
      href: '/industries/accounting',
    },
    {
      label: 'Marketing',
      href: '/industries/marketing',
    },
    {
      label: 'Human Resources',
      href: '/industries/human-resources',
    },
    {
      label: 'Manufacturing',
      href: '/industries/manufacturing',
    },
    {
      label: 'Sales',
      href: '/industries/sales',
    },
  ]

  // Set first route as default if no route is matched
  useEffect(() => {
    if (pathname === '/industries') {
      window.location.href = DEFAULT_ROUTE
    }
  }, [pathname])

  return (
    <div className="flex min-h-screen">
      {/* hamburger button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20  left-4 lg:hidden text-white w-10 h-10 rounded-lg"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isSidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-20  p-6 w-[345px] ml-4 lg:ml-20  lg:mt-20 text-white border rounded-md h-[89vh] rounded-r-2xl bg-black border-[#363636] z-40 ${
          isSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        <h1 className="text-2xl font-bold mb-4 ml-2">Industries</h1>
        <ul className="space-y-3">
          {IndustriesRoutes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={`${
                  pathname === route.href ? 'bg-[#245BE9]' : ''
                } block px-4 rounded text-left font-normal text-[16px] leading-[40px] tracking-[0] capitalize font-poppins`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div
        className={`w-full lg:w-[70%] p-4 mt-16 transition-opacity duration-300 mx-auto ${
          isSidebarOpen ? 'opacity-0 lg:opacity-100' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Industries
