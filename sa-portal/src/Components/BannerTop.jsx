import React from "react";

function BannerTop({ heading, route }) {
  return (
    <div className="flex items-center justify-between bg-blue-800 text-white">
      <div className="flex flex-col space-y-5 pl-20 mt-20">
        <p className="text-6xl font-bold">{heading}</p>

        <div className="flex">
          {route.map((text, idx) => (
            <div key={idx} className="flex items-center">
              <span>{text}</span>
              {idx == route.length - 1 ? (
                <span className="mx-2">⌵</span>
              ) : (
                <span className="mx-2 tracking-[-0.25em]">&gt;&gt;</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="banner-top.png" alt="" />
      </div>
    </div>
  );
}

export default BannerTop;
