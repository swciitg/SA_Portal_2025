import React from "react";
import { Link } from "react-router-dom";
import iitg_logo from "../assets/Images/iitg_logo.png";
import LinkedIn_logo from "../assets/Images/LinkedIn.png";
import X_logo from "../assets/Images/X.png";
import email_icon from "../assets/Images/email_icon.png";
import phone_icon from "../assets/Images/phone_icon.png";

const Footer = () => {
  const links = {
    "SA Calendar": "https://iitg.ac.in/acad/academic_calendar.php/",
    "SSO Portal": "https://academic.iitg.ac.in/sso/",
    "HAB Portal": "/sab/hostel-affairs-board",
    "Internal Complaints Committee": "https://www.iitg.ac.in/iitgicc/",
    "GOI Wellbeing Link": "https://mohfw.gov.in/",
    "Anti - Ragging Affidavits":
      "https://www.antiragging.in/affidavit_registration_disclaimer.html",
    "POSH Act": "https://www.indiacode.nic.in/handle/123456789/2104",
    "Narcotics Control Bureau": "https://narcoticsindia.nic.in/",
    "Guest House Booking": "#",
    "Fee Structure": "https://iitg.ac.in/acad/admission/imp_info/fee.php",
    "Academic Calendar": "https://www.iitg.ac.in/acad/academic_calendar.php",
    "NSS, IIT Guwahati": "https://www.iitg.ac.in/nss/",
    NPTEL: "https://nptel.ac.in/",
    Swayam: "https://swayam.gov.in/",
  };

  return (
    <footer
      className="text-white px-6 py-10 md:px-12 lg:px-24"
      style={{ backgroundColor: "#08267C" }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col md:w-1/3">
          <div className="flex items-center mb-4">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}${iitg_logo}`}
              alt="Logo"
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-2xl font-semibold md:text-3xl">
                Students' Affairs
              </h1>
              <p className="text-xs font-Satoshi font-thin">
                Indian Institute of Technology, Guwahati
              </p>
            </div>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
            <div className="space-y-3">
              <div className="font-thin">
                <p>Student Affairs Section</p>
                <p>Indian Institute of Technology Guwahati</p>
                <p>Guwahati - 781039</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-col text-xs font-thin">
                  <div className="my-1 flex flex-row items-center space-x-2">
                    <img
                      src={email_icon}
                      alt="email"
                      className="h-[11px]"
                    ></img>{" "}
                    <p>
                      Email:{" "}
                      <a href="mailto:saoff@iitg.ac.in" className="underline">
                        saoff@iitg.ac.in
                      </a>
                    </p>
                  </div>
                  <div className="my-1 flex flex-row items-center space-x-2">
                    <img src={phone_icon} alt="call" className="h-[11px]"></img>
                    <p> +91-0361-2582930</p>
                  </div>
                </div>
                <div className="flex space-x-3 mx-8 items-center h-full">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: "rgb(94 130 235)" }}
                  >
                    <a href="#" aria-label="LinkedIn">
                      <img
                        src={LinkedIn_logo}
                        alt="LinkedIn"
                        className="h-[13px]"
                      />
                    </a>
                  </div>
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: "rgb(94 130 235)" }}
                  >
                    <a href="#" aria-label="X (Twitter)">
                      <img src={X_logo} alt="X" className="h-[13px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full md:w-2/3 gap-10 justify-between">
          <div className="md:w-1/3">
            <h2 className="font-semibold mb-2 text-xl">Useful Links</h2>
            <ul className="text-sm space-y-1 font-light">
              <li>
                <a href={links["SA Calendar"]} target="_blank">
                  SA Calendar
                </a>
              </li>
              <li>
                <a href={links["SSO Portal"]} target="_blank">
                  SSO Portal
                </a>
              </li>
              <li>
                <Link to={links["HAB Portal"]}>HAB Portal</Link>
              </li>
              <li>
                <a href={links["Guest House Booking"]}>Guest House Booking</a>
              </li>
              <li>
                <a
                  href={links["Internal Complaints Committee"]}
                  target="_blank"
                >
                  Internal Complaints Committee
                </a>
              </li>
              <li>
                <a href={links["GOI Wellbeing Link"]} target="_blank">
                  GOI Wellbeing Link
                </a>
              </li>
              <li>
                <a href={links["Anti - Ragging Affidavits"]} target="_blank">
                  Anti - Ragging Affidavits
                </a>
              </li>
              <li>
                <a href={links["POSH Act"]} target="_blank">
                  POSH Act
                </a>
              </li>
              <li>
                <a href={links["Narcotics Control Bureau"]} target="_blank">
                  Narcotics Control Bureau
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 flex flex-col gap-6">
            <div>
              <h2 className="font-semibold mb-2 text-lg">Resources</h2>
              <ul className="text-sm space-y-1 font-light">
                <li>
                  <a href={links["Fee Structure"]} target="_blank">
                    Fee Structure
                  </a>
                </li>
                <li>
                  <a href={links["Academic Calendar"]} target="_blank">
                    Academic Calendar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Explore</h3>
              <ul className="text-sm space-y-1 font-light">
                <li>
                  <a href={links["NSS, IIT Guwahati"]} target="_blank">
                    NSS, IIT Guwahati
                  </a>
                </li>
                <li>
                  <a href={links["NPTEL"]} target="_blank">
                    NPTEL
                  </a>
                </li>
                <li>
                  <a href={links["Swayam"]} target="_blank">
                    Swayam
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
