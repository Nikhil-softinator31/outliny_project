'use client'
import './Navbar.css'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Product', href: '/product' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Templates', href: '/templates' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
  ]

  return (
    <div className="relative flex justify-between lg:justify-around items-center py-5 md:py-8 lg:py-12 px-5 md:px-8">
      {/* Logo */}
      <a href="https://outliny.com/" className="flex items-center flex-shrink-0">
        <img src="/Logo.svg" className="w-[100px] md:w-[120px] lg:w-[140px]" alt="Outliny Logo" />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex    px-6  py-2 bg-custom-gradient1 rounded-lg gradient-border">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="block px-3 xl:px-4 text-white hover:text-gray-400 relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 font-extralight text-[14px] xl:text-[16px] capitalize whitespace-nowrap"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        {/* Login button */}
        <div className="example-2 rounded-btn">
          <div className="inner">
            <button className=" border border-[#3c3f47] rounded-lg font-light font-poppins">
              Login
            </button>
          </div>
        </div>

        {/* Hamburger (Mobile only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden hamburger-btn text-white focus:outline-none z-30 ml-5"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-20 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col justify-center rounded-menu`}
      >
        <ul className="flex flex-col items-center space-y-6 w-full px-8">
          {navItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-white text-xl font-light hover:text-gray-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
