import React from "react";

export default function HeadingSection({ heading, children }) {
  return (
    <div className="border-t-2 my-6 sm:my-10 md:my-20">
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 pt-2 sm:pt-6 border-t-4 border-blue-500 inline-block sm:px-4 text-center">
        {heading}
      </h2>
      <>{children}</>
    </div>
  );
}
