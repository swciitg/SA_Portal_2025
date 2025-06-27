import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import NavLinkDropdown from "./NavLinkDropdown";
import Hamburger from "./Hamburger.jsx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navData = [
    {
      title: "Students' Affairs",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Students' Affairs Team",
          href: "/meet-the-team?team=student-affairs-functionaries",
          type: "page",
        },
        {
          title: "Services",
          href: "/services",
          type: "page",
        },
      ],
    },
    {
      title: "Scholarships & Sponsorships",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Ordinances and Rules on Scholarship",
          href: "#",
          type: "link",
        },
        {
          title: "Students Welfare Fund",
          href: "#",
          type: "link",
        },
        {
          title: "Students Brotherhood Fund",
          href: "#",
          type: "link",
        },
        {
          title: "Guidelines to Sponsorship",
          href: "#",
          type: "link",
        },
        {
          title: "MoU for Sponsorship",
          href: "#",
          type: "link",
        },
        {
          title: "Sponsorship Certificate",
          href: "#",
          type: "link",
        },
        {
          title: "Scholarship Beneficiary List",
          href: "/scholarships?type=college",
          type: "page",
        },
      ],
    },
    {
      title: "SA Courses",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "About SA Courses",
          href: "/sa-courses",
          type: "page",
        },
        {
          title: "Guidelines",
          href: "#",
          type: "link",
        },
        {
          title: "Course Forms",
          href: "#",
          type: "page",
        },
      ],
    },
    {
      title: "Rules",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Ordinances on Code and Conducts",
          href: "#",
          type: "link",
        },
        {
          title: "General Rules for Hostel Residents",
          href: "#",
          type: "link",
        },
        {
          title: "HAB Procedures and Resolution",
          href: "#",
          type: "link",
        },
        {
          title: "HAB Constitution",
          href: "#",
          type: "link",
        },
        {
          title: "Rules for Swimming Pool Users",
          href: "#",
          type: "link",
        },
        {
          title: "Rules for Inter IIT Sports Meet",
          href: "#",
          type: "link",
        },
        {
          title: "Notices on Rules",
          href: "/notices-on-rules",
          type: "page",
        },
      ],
    },
    {
      title: "Forms",
      hasDropdown: false,
      type: "page",
      href: "/forms",
    },
    {
      title: "Students' Affairs Council",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "About SAC",
          href: "/sac",
          type: "page",
        },
        {
          title: "Statutes",
          href: "#",
          type: "link",
        },
        {
          title: "SAC Minutes",
          href: "/sac-minutes",
          type: "page",
        },
        {
          title: "Centre for Career Development",
          href: "https://iitg.ac.in/ccd",
          type: "link",
        },
        {
          title: "Student Alumni Interaction Linkage",
          href: "https://iitg.ac.in/sail",
          type: "link",
        },
        {
          title: "Students' Academic Board",
          href: "https://www.iitg.ac.in/sab",
          type: "link",
        },
      ],
    },
    {
      title: "Students' Gymkhana Council",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "About Students' Gymkhana  Council",
          href: "/sgc",
          type: "page",
        },
        {
          title: "Students' Senate",
          href: "#",
          type: "page",
        },
        {
          title: "Minutes of Students' Senate",
          href: "#",
          type: "page",
        },
        {
          title: "Cultural Board",
          href: "/sab/cultural-board",
          type: "page",
        },
        {
          title: "Hostel Affairs Board",
          href: "/sab/hostel-affairs-board",
          type: "page",
        },
        {
          title: "Sports Board",
          href: "/sab/sports-board",
          type: "page",
        },
        {
          title: "Technical Board",
          href: "/sab/technical-board",
          type: "page",
        },
        {
          title: "Welfare Board",
          href: "/sab/welfare-board",
          type: "page",
        },
        {
          title: "Web Committee",
          href: "/sab/web-committee",
          type: "page",
        },
      ],
    },
    {
      title: "Important Links",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "SA Calendar",
          href: "#",
          type: "link",
        },
        {
          title: "SSO Portal",
          href: "#",
          type: "link",
        },
        {
          title: "HAB Portal",
          href: "#",
          type: "link",
        },
        {
          title: "Guest House Booking",
          href: "#",
          type: "link",
        },
        {
          title: "Internal Complaints Committee",
          href: "#",
          type: "link",
        },
        {
          title: "GoI Wellbeing Link",
          href: "#",
          type: "link",
        },
        {
          title: "Anti-Ragging Affidavits",
          href: "#",
          type: "link",
        },
        {
          title: "POSH Act",
          href: "#",
          type: "link",
        },
        {
          title: "Narcotics Control Bureau",
          href: "#",
          type: "link",
        },
      ],
    },
  ];

  return (
    <>
      {/* Top bar with logo, search, and mobile toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-2 sm:mx-4 md:mx-12 py-6 border-b border-gray-300 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-4 mx-auto md:mx-0">
          <a href="https://www.iitg.ac.in" target="_blank">
            <img
              src="/iitg-black.png" // It should be the black one
              alt="IITG Logo"
              className="h-12 w-12 md:h-20 md:w-20 shrink-0"
            />
          </a>
          <Link to={"/"} className="min-w-0">
            <h1 className="text-xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Students' Affairs
            </h1>
            <p className="text-xs md:text-sm text-gray-500 leading-tight">
              Indian Institute of Technology, Guwahati
            </p>
          </Link>
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
      {/* Navigation links */}
      <nav className="relative md:sticky md:top-0 z-50 md:px-12 border-b shadow-sm bg-white font-Satoshi">
        {/* >=md */}
        <div className="hidden md:flex flex-wrap md:mx-6 text-base text-gray-700">
          <Hamburger navData={navData} />
        </div>
        {/* Mobile */}
        {mobileMenuOpen && (
          <div className="flex md:hidden absolute top-full flex-col text-base z-10 px-6 bg-white w-full text-gray-700">
            {navData.map((item, idx) =>
              item.hasDropdown ? (
                <NavLinkDropdown
                  key={idx}
                  title={item.title}
                  dropdownItems={item.dropdownItems}
                />
              ) : (
                <NavLink
                  key={idx}
                  title={item.title}
                  href={item.href}
                  type={item.type}
                />
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
