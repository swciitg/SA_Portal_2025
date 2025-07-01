import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function ServicesAccordian({ services }) {
  return (
    <div className="w-full px-4 my-8 sm:px-12 sm:my-12 md:px-20 md:my-20">
      <h1 className="font-semibold text-4xl my-10">All Services</h1>
      {/* Services */}
      <div className="mb-20">
        {services.map(({ header, services }, idx) => (
          <AccordianItem key={idx} header={header} services={services} />
        ))}
      </div>
    </div>
  );
}

export default ServicesAccordian;

function AccordianItem({ header, services }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`w-full`}>
      {/* Title */}
      <div
        className={`w-full h-full px-5 py-5 mb-1 flex items-center justify-between cursor-pointer ${
          isOpen ? "bg-blue-800 text-white" : "bg-neutral-100"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="select-none">{header}</p>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L9.5 9L18 1"
            stroke={isOpen ? "#E7ECFC" : "#10121B"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Animated Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out mb-1"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {services.length > 0 ? (
          services.map(({ title, link }, idx) => (
            <Link
              to={link}
              target="_blank"
              key={idx}
              className="w-full px-5 py-5 flex items-center justify-between bg-blue-50"
            >
              <p>{title}</p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41663 9.00033H16.5833M16.5833 9.00033L8.99996 1.41699M16.5833 9.00033L8.99996 16.5837"
                  stroke="#08267C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))
        ) : (
          <div className="w-full px-5 py-5 flex items-center justify-between bg-blue-50">
            Nothing to show here.
          </div>
        )}
      </div>
    </div>
  );
}
