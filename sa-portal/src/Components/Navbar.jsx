import React, { useState } from 'react'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white mx-4 md:mx-11 font-Satoshi">
    {/* Top bar with logo, search, and mobile toggle */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b-2 border-gray-300 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mx-auto md:mx-0">
        <img
          src="/iitg.png"
          alt="IITG Logo"
          className="h-12 w-12 md:h-16 md:w-16 shrink-0"
        />
        <div className="min-w-0">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-900 leading-tight">
            Student’s Affair
          </h1>
          <p className="text-xs md:text-sm text-gray-500 leading-tight">
            Indian Institute of Technology, Guwahati
          </p>
        </div>
      </div>
    
      {/* Search bar (responsive size) */}
      <div className="flex justify-between items-center w-full md:w-auto gap-2">
    <div className="flex items-center gap-2 w-full md:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 rounded-full px-3 py-1 md:px-4 md:py-2 placeholder-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    
      {/* Mobile menu button (hamburger) */}
      <button
        className="md:hidden ml-3"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      </div>
    </div>
    
    {/* Desktop navigation links */}
    <div className="hidden md:flex py-2">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">
          Student’s Affair
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Scholarships & Sponsorships <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          SA Courses <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Rules <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Forms</li>
        <li className="hover:text-blue-600 cursor-pointer">
          Student Affairs Council <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Student Affairs Board <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Student Wellbeing <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Student Gymkhana Council <span className="ml-1">▾</span>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Important Links <span className="ml-1">▾</span>
        </li>
      </ul>
    </div>
    
    {/* Mobile navigation links */}
    {mobileMenuOpen && (
      <div className="md:hidden py-2">
        <ul className="flex flex-col gap-3 text-sm text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">
            Student’s Affair
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Scholarships & Sponsorships ▾
          </li>
          <li className="hover:text-blue-600 cursor-pointer">SA Courses ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Rules ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Forms</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Student Affairs Council ▾
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Student Affairs Board ▾
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Student Wellbeing ▾
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Student Gymkhana Council ▾
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Important Links ▾
          </li>
        </ul>
      </div>
    )}
    </nav>
  )
}

export default Navbar