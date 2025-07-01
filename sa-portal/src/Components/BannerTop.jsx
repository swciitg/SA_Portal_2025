import React from "react";
import MeetTheTeamBanner from "../assets/Images/mtt-banner.png";
import doubleArrow from "../assets/Images/chevron-right-double.png";
import downArrow from "../assets/Images/chevron-down.png";

/*
  Heading : String | DOMElement;
  route : Array[string];
*/
function BannerTop({ heading, route, blueText }) {
  return (
    <div className="relative bg-[#08267C] h-40 sm:h-64 md:h-72 lg:h-[430px] flex justify-start items-end px-4 sm:px-10 md:px-16 lg:px-20 pb-4 sm:pb-10 md:pb-20 text-white overflow-hidden">
      <div
        className="z-10 max-w-[900px]"
        style={{ fontWeight: 900, lineHeight: 1 }}
      >
        <h1 className="text-2xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {heading} <span className="text-blue-500">{blueText}</span>
        </h1>

        <div className="mt-1 sm:mt-4 flex flex-wrap items-center sm:gap-3 text-sm sm:text-lg font-normal">
          {route.map((text, idx) => {
            const isLast = idx === route.length - 1;
            return (
              <React.Fragment key={idx}>
                {isLast ? (
                  <>
                    <a
                      href="#"
                      className="underline underline-offset-4 cursor-pointer"
                    >
                      {text}
                    </a>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      className="relative h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </>
                ) : (
                  <>
                    <p>{text}</p>
                    <img
                      src={doubleArrow}
                      alt="double-arrow"
                      className="relative h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <img
        src={MeetTheTeamBanner}
        alt="banner"
        className="hidden lg:block absolute top-0 right-0 h-full object-cover pointer-events-none select-none"
      />
    </div>
  );
}

export default BannerTop;
