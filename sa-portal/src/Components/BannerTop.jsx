import React from "react";
import MeetTheTeamBanner from '../assets/Images/mtt-banner.png';
import doubleArrow from '../assets/Images/chevron-right-double.png';
import downArrow from '../assets/Images/chevron-down.png';

function BannerTop({ heading, route }) {
  const words = heading.split(' ');
  const lastWord = words.pop();

  return (
    <div className="relative bg-[#08267C] h-[431px] flex flex-col justify-center 
                    pl-4 sm:pl-6 md:pl-12 lg:pl-[120px] pr-4 text-white overflow-hidden">
      <div 
        className="z-10 max-w-[900px]" 
        style={{ fontWeight: 900, lineHeight: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px]">
          {words.map((word, i) => (
            <React.Fragment key={i}>
              {word}
              <br />
            </React.Fragment>
          ))}
          <span className="text-[#5E82EB]">{lastWord}</span>.
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-lg font-normal">
          {route.map((text, idx) => {
            const isLast = idx === route.length - 1;
            if (!isLast) {
              return (
                <React.Fragment key={idx}>
                  <p>{text}</p>
                  <img
                    src={doubleArrow}
                    alt="double-arrow"
                    className="relative h-5 w-5 sm:h-6 sm:w-6"
                  />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={idx}>
                  <a href="#" className="underline underline-offset-4 cursor-pointer">{text}</a>
                  <img
                    src={downArrow}
                    alt="down-arrow"
                    className="relative h-5 w-5 sm:h-6 sm:w-6"
                  />
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>

      <img
        src={MeetTheTeamBanner}
        alt="banner"
        className="absolute top-0 right-0 h-full object-cover pointer-events-none select-none"
      />
    </div>
  );
}

export default BannerTop;
