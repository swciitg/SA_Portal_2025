import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import NavLinkDropdown from "./NavLinkDropdown";
import Hamburger from "./Hamburger.jsx";
// PDF links from public/pdfs folder
const ordiScho = "/pdfs/Ordinance_and_Rules_on_Scholarship_6fbd5a3a76 (1).pdf";
const swf = "/pdfs/Students_Welfare_Fund_STAF_SCF_SCAF_fda7181688 (1).pdf";
const sbf = "/pdfs/Students_Brotherhood_Fund_601e513b41 (1).pdf";
const GuidelinesSpon = "/pdfs/Guidelines_on_Sponsorship_77ed6d24b2.pdf";
const MoUSpon = "/pdfs/Mo_U_for_Sponsorship_7db7ec2d97.pdf";
const SponsorshipCert = "/pdfs/Sponsorship_Certificate_12a4792e50.pdf";
const HABPro = "/pdfs/HAB_Procedures_and_Resolutions_b513fcecda.pdf";
const GenRules = "/pdfs/General_Rules_for_Hostel_Residents_7c7a7c76c8.pdf";
const HABCon = "/pdfs/HAB_Constitution_e299093392.pdf";
const ordinacneOnCodeCon =
  "/pdfs/95_BOG_Ordinance_COC_19_12_2018_website_2_1347674f83.pdf";
const InterIITSports = "/pdfs/Inter_IIT_Sports_Meet_66a17c869d.pdf";
const rulesForSwimming =
  "/pdfs/Rules_and_guidelines_for_swimming_pool_user_75f197a6d7.pdf";

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
          href: ordiScho,
          type: "link",
        },
        {
          title: "Students Welfare Fund",
          href: swf,
          type: "link",
        },
        {
          title: "Students Brotherhood Fund",
          href: sbf,
          type: "link",
        },
        {
          title: "Guidelines to Sponsorship",
          href: GuidelinesSpon,
          type: "link",
        },
        {
          title: "MoU for Sponsorship",
          href: MoUSpon,
          type: "link",
        },
        {
          title: "Sponsorship Certificate",
          href: SponsorshipCert,
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
          href: ordinacneOnCodeCon,
          type: "link",
        },
        {
          title: "General Rules for Hostel Residents",
          href: GenRules,
          type: "link",
        },
        {
          title: "HAB Procedures and Resolution",
          href: HABPro,
          type: "link",
        },
        {
          title: "HAB Constitution",
          href: HABCon,
          type: "link",
        },
        {
          title: "Rules for Swimming Pool Users",
          href: rulesForSwimming,
          type: "link",
        },
        {
          title: "Rules for Inter IIT Sports Meet",
          href: InterIITSports,
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
          title: "Students' Gymkhana Portal",
          href: "https://www.iitg.ac.in/stud/gymkhana/",
          type: "page",
        },
        {
          title: "Cultural Board",
          href: "/sgc/cultural-board",
          type: "page",
        },
        {
          title: "Hostel Affairs Board",
          href: "/sgc/hostel-affairs-board",
          type: "page",
        },
        {
          title: "Sports Board",
          href: "/sgc/sports-board",
          type: "page",
        },
        {
          title: "Technical Board",
          href: "/sgc/technical-board",
          type: "page",
        },
        {
          title: "Welfare Board",
          href: "/sgc/students-welfare-board",
          type: "page",
        },
        {
          title: "Web Committee",
          href: "/sgc/students-web-committee",
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
          href: "https://iitg.ac.in/acad/academic_calendar.php/",
          type: "link",
        },
        {
          title: "SSO Portal",
          href: "https://academic.iitg.ac.in/sso/",
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
          href: "https://www.iitg.ac.in/iitgicc/",
          type: "link",
        },
        {
          title: "GoI Wellbeing Link",
          href: "https://mohfw.gov.in/",
          type: "link",
        },
        {
          title: "Anti-Ragging Affidavits",
          href: "https://www.antiragging.in/affidavit_registration_disclaimer.html",
          type: "link",
        },
        {
          title: "POSH Act",
          href: "https://www.indiacode.nic.in/handle/123456789/2104",
          type: "link",
        },
        {
          title: "Narcotics Control Bureau",
          href: "https://narcoticsindia.nic.in/",
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
              src={`${process.env.REACT_APP_BASE_URL}/iitg-black.png`} // It should be the black one
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
