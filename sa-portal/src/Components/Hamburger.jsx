import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import NavLinkDropdown from './NavLinkDropdown';

const Hamburger = ({ navData }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fitCount, setFitCount] = useState(navData.length);
  const [visibleLinks, setVisibleLinks] = useState(navData);
  const [dropdownList, setDropdownList] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let count = navData.length;

    if (windowWidth >= 750 && windowWidth < 820) count = 3;
    else if (windowWidth >= 820 && windowWidth < 900) count = 4;
    else if (windowWidth >= 900 && windowWidth < 1120) count = 5;
    else if (windowWidth >= 1120 && windowWidth < 1370) count = 6;
    else if (windowWidth >= 1370 && windowWidth < 1570) count = 7;
    else if (windowWidth >= 1570 && windowWidth < 1650) count = 8;
    else count = navData.length;

    setFitCount(count);
  }, [windowWidth, navData.length]);

  useEffect(() => {
    setVisibleLinks(navData.slice(0, fitCount));
    setDropdownList(navData.slice(fitCount));
  }, [fitCount, navData]);

  return (
    <div className="hidden md:flex justify-between flex-nowrap items-center gap-x-6 md:mx-4 text-base text-gray-700 relative w-full">
      {/* Visible links */}
      {visibleLinks.map((item, idx) =>
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

      {/* More Dropdown */}
      {dropdownList.length > 0 && (
        <div className="relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-blue-600 cursor-pointer whitespace-nowrap select-none"
          >
            {isDropdownOpen ? 'Less' : 'More'} <span className="ml-1">{isDropdownOpen ? '▴' : '▾'}</span>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 min-w-[160px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
              <div className="flex flex-col p-2 text-sm text-gray-700 whitespace-nowrap">
                {dropdownList.map((item, idx) =>
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
