import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Product', href: '/product' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Templates', href: '/templates' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
  ]

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const BuyTemplateButton = ({ className = '' }) => (
    <div className={`card example-2 ${className}`}>
      <div className="inner">
        <button className="bg-[#181c25] flex items-center justify-center text-center text-white text-[14px] px-6 h-[38px] font-poppins font-light whitespace-nowrap">
          Buy This Template
        </button>
      </div>
    </div>
  )

  return (
    <nav className="h-[80px] bg-[#08090a] lg:mt-10">
      <div className="h-full max-w-[1600px] mx-auto ">
        <div className="h-full flex items-center justify-center">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between lg:justify-center w-full lg:gap-8 xl:gap-16">
            {/* Logo */}
            <a href="https://outliny.com/" className="flex items-center flex-shrink-0">
              <img
                src="/Logo.svg"
                className="h-8 lg:h-12 w-[120px] lg:w-[140px] xl:w-[140px] object-contain"
                alt="Outliny Logo"
              />
            </a>

            {/* Desktop Navigation and Button */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-1 xl:justify-center xl:gap-16">
              <ul className=" items-center justify-center flex lg:max-w-[600px] xl:max-w-none gap-4  px-4 xl:px-8 py-1 bg-custom-gradient1 gradient-border">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a  
                      href={item.href}
                      className="block py-2 px-2 xl:px-3 text-white md:hover:bg-transparent 
                      md:hover:text-gray-400 relative after:content-[''] after:block after:h-[2px] 
                      after:w-full after:bg-white after:scale-x-0 group-hover:after:scale-x-100 
                      after:transition-transform after:duration-300 font-poppins font-extralight text-[14px] xl:text-[16px] leading-[100%] capitalize whitespace-nowrap "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 ml-8 hidden lg:block">
              <BuyTemplateButton />
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 w-10 h-10 rounded-lg z-50"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`absolute right-0 top-0 h-full w-full bg-black transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <ul className="flex flex-col items-start pt-[100px] px-6 gap-4">
                {navItems.map((item, index) => (
                  <li key={index} className="w-full">
                    <a
                      href={item.href}
                      className="block py-3 text-white hover:bg-gray-700 relative 
                      after:content-[''] after:block after:h-[2px] after:w-full after:bg-white 
                      after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 
                      font-poppins font-light text-[16px] leading-[100%] capitalize"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className=" w-full">
                  <BuyTemplateButton className="w-full" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
