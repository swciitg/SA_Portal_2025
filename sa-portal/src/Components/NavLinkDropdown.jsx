import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const NavLinkDropdown = ({ title, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        className="py-2 md:py-4 relative hover:text-blue-600 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="ml-1">▾</span>
        {isOpen && (
          <hr className="absolute w-full border-2 bottom-0 border-blue-700" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-[102%] min-w-full sm:min-w-64 md:min-w-72 z-10 border divide-y-[1px]">
          {dropdownItems.map((item, idx) => (
            <div
              key={idx}
              className="block px-4 py-1.5 bg-white hover:bg-[#E9EAEC] transition duration-75 cursor-pointer"
              onClick={() => {
                const isExternal = item.type === "external" || item.href?.startsWith("http");
                const url = isExternal
                  ? item.href
                  : `${process.env.REACT_APP_BASE_URL}${item.href}`;

                if (item.type === "external") {
                  window.open(url, "_blank");
                } else if (item.type === "link") {
                  window.open(url, "_blank");
                } else {
                  window.location.href = url;
                }
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default NavLinkDropdown;
