import React, { useState } from "react";
import logo from '../assets/gdg-logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav id="navbar" className="fixed w-full z-50 top-0 bg-neutral-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              <Image className="w-40" src={logo} alt="logo"></Image>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#tracks" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                Tracks
              </a>
              <a href="#schedule" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                Schedule
              </a>
              <a href="#prizes" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                Prizes
              </a>
              <a href="#sponsors" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                Sponsors
              </a>
              <a href="#faq" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </a>
              <a
                href="#registration"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium animate__animated animate__pulse animate__infinite"
              >
                Register
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-400 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className="line1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16" />
                <path className="line2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" />
                <path className="line3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#hero"
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#tracks"
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tracks
            </a>
            <a
              href="#schedule"
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Schedule
            </a>
            <a
              href="#prizes"
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Prizes
            </a>
            <a
              href="#sponsors"
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sponsors
            </a>
            <a href="#faq" className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">
              FAQ
            </a>
            <a
              href="#registration"
              className="bg-green-500 hover:bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium animate__animated animate__pulse animate__infinite"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

