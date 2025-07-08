import React from "react";

export default function HeadingSection({ heading, children }) {
  return (
    <div className="border-t-2 px-6 my-8 sm:my-10 md:my-20">
      <h2 className="font-semibold text-3xl mb-10 pt-6 border-t-4 border-blue-500 inline-block px-4 text-center">
        {heading}
      </h2>
      {children}
    </div>
  );
}
