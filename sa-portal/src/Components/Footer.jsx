import React from "react";
import iitg_logo from "../assets/Images/iitg_logo.png";
import LinkedIn_logo from "../assets/Images/LinkedIn.png";
import X_logo from "../assets/Images/X.png";
import email_icon from "../assets/Images/email_icon.png";
import phone_icon from "../assets/Images/phone_icon.png";

const Footer = () => {
  return (
    <footer
      className="text-white px-6 py-10 md:px-12 lg:px-24"
      style={{ backgroundColor: "rgb(62 106 231)" }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col md:w-1/3">
          <div className="flex items-center mb-4">
            <img src={iitg_logo} alt="Logo" className="w-12 h-12 mr-3" />
            <div>
              <h1 className="text-2xl font-semibold md:text-3xl">
                Student’s Affair
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
                <a href="#">SA Calendar</a>
              </li>
              <li>
                <a href="#">SSO Portal</a>
              </li>
              <li>
                <a href="#">HAB Portal</a>
              </li>
              <li>
                <a href="#">Guest House Booking</a>
              </li>
              <li>
                <a href="#">Internal Complaints Committee</a>
              </li>
              <li>
                <a href="#">GOI Wellbeing Link</a>
              </li>
              <li>
                <a href="#">Anti - Ragging Affidavits</a>
              </li>
              <li>
                <a href="#">POSH Act</a>
              </li>
              <li>
                <a href="#">Narcotics Control Bureau</a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 flex flex-col gap-6">
            <div>
              <h2 className="font-semibold mb-2 text-lg">Resources</h2>
              <ul className="text-sm space-y-1 font-light">
                <li>
                  <a href="#">Fee Structure</a>
                </li>
                <li>
                  <a href="#">Academic Calendar</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Explore</h3>
              <ul className="text-sm space-y-1 font-light">
                <li>
                  <a href="#">NSS, IIT Guwahati</a>
                </li>
                <li>
                  <a href="#">NPTEL</a>
                </li>
                <li>
                  <a href="#">Swayam</a>
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
