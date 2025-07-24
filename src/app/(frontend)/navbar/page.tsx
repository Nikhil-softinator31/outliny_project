'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Templates', href: '/templates' },
    { name: 'Pricing', href: '/pricing' },
  ]

  return (
    <nav className="w-full bg-[#08090a] text-white z-50 border-b border-[#232323] fixed top-0">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 overflow-x-hidden">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="outliny"
            width={150}
            height={200}
            className="h-10 lg:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#b3b3b3] text-[16px] px-4 py-2 transition-all duration-300 hover:text-white hover:bg-[#222121] rounded-3xl"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4  items-center">
          <Link href="/login" className="group relative  overflow-hidden h-10 w-19">
            <div className="flex flex-col transition-transform duration-700 ease-in-out group-hover:-translate-y-[40px]">
              <span className="h-10 leading-10 text-center text-white">Log in</span>

              <span className="h-10 leading-10 text-center text-white">Log in</span>
            </div>

            <span className="absolute bottom-0 left-0  w-full h-[3%] bg-[#94a7bb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out transform origin-right group-hover:origin-left" />
          </Link>

          <Link
            href="/get-started"
            className="bg-white group relative  overflow-hidden  h-9 w-19  text-black px-4 scale-x-100 hover:scale-95 rounded-md text-sm font-medium transition-all duration-00"
          >
            <div className="flex flex-col transition-transform duration-700 ease-in-out group-hover:-translate-y-[40px]">
              <span className="h-10 leading-10 text-center ">Get Started</span>

              <span className="h-10 leading-10 text-center ">Get Started</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          {
            <Link
              href="/get-started"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#505050] transition-all duration-200"
            >
              Get started
            </Link>
          }
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#08090a] z-40 flex flex-col border-t border-[#232323]">
          <div className="flex flex-col h-full px-6 py-4 space-y-2 flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white w-full text-left py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="px-6 pb-6 space-y-3">
            <Link
              href="/login"
              className="text-white border border-[#252525] py-2 text-base block text-center rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/get-started"
              className="bg-white text-black px-4 py-2 rounded-md w-full text-center block text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
