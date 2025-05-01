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
    <nav className="fixed w-full bg-[#08090a] text-white z-50 border-b border-[#232323]">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <Image src="/Logo.svg" alt="Profound" width={150} height={200} className="h-10 lg:h-11 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-2 relative">
          {/* Sliding Background Effect */}
          <div className="absolute top-1/2 -translate-y-1/2 h-10 bg-[#222121] rounded-3xl transition-all duration-500 ease-out scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"></div>

          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-[#b3b3b3] text-[16px] px-4 py-2 transition-all duration-300 hover:text-white hover:bg-[#222121] rounded-3xl"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop Log in & Get Started */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link href="/login" className="text-gray-400 hover:text-white text-sm font-medium">
            Log in
          </Link>
          <Link
            href="/get-started"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#505050] transition-all duration-200"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          {!isMenuOpen && (
            <Link
              href="/get-started"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#505050] transition-all duration-200"
            >
              Get started
            </Link>
          )}
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
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#08090a] z-40 flex flex-col border-t border-[#232323]">
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

          {/* Buttons at Bottom */}
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
