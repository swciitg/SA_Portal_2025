import React, { useState } from "react";

function ServicesAccordian() {
  // sample data
  const data = [
    {
      header: "Student's Return",
      services: [
        {
          title: "List of registered students",
          link: "https://iitg.ac.in",
        },
        {
          title:
            "List Of Students Eligible For Registeration To Winter Semester , 2023",
          link: "https://iitg.ac.in",
        },
        {
          title:
            "[ Notice-48 ] Regarding Re-Entry Of Research Scholar To The Campus",
          link: "https://iitg.ac.in",
        },
        {
          title: "Re-Entry Form Cum Undertaking",
          link: "https://iitg.ac.in",
        },
      ],
    },
    {
      header: "Room Booking Portal",
      services: [],
    },
    {
      header: "HAB Vendor Details [ 2024 ]",
      services: [],
    },
    {
      header: "Online Services",
      services: [],
    },
  ];

  return (
    <div className="w-full px-20">
      <h1 className="font-semibold text-4xl my-10">All Services</h1>
      {/* Services */}
      <div className="mb-20">
        {data.map(({ header, services }) => (
          <AccordianItem header={header} services={services} />
        ))}
      </div>
    </div>
  );
}

export default ServicesAccordian;

function AccordianItem({ header, services }) {
  const [isOpen, setIsOpen] = useState(false);

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
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/* Content with links */}
      <div className="mb-1">
        {services.length > 0 ? (
          services.map(({ title, link }) => (
            <div
              className={`w-full px-5 py-5 flex items-center justify-between cursor-pointer ${
                isOpen ? "block" : "hidden"
              } bg-blue-50`}
            >
              <a href={link} target="_blank">
                {title}
              </a>
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ))
        ) : (
          <div
            className={`w-full px-5 py-5 flex items-center justify-between cursor-pointer ${
              isOpen ? "block" : "hidden"
            } bg-blue-50`}
          >
            Nothing to show here.
          </div>
        )}
      </div>
    </div>
  );
}
