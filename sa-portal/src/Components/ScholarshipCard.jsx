import React from "react";
import "./TeamCard/TeamCard.css";
import { Link } from "react-router-dom";

const ScholarshipCard = ({ idx, title, pdfUrl = "", wordUrl = "" }) => {
  return (
    <div className="flex flex-row items-center px-3 py-2 sm:py-2 w-full max-w-6xl mx-auto">
      <div className="flex-none border border-gray-300 bg-white text-center text-sm font-semibold flex items-center justify-center sm:h-14 sm:w-14 h-12 w-12 mr-4">
        {idx}
      </div>

      <div className="border border-gray-300 flex flex-row justify-between items-center sm:h-14 h-12 flex-grow px-4 overflow-hidden">
        <span className="text-base truncate pr-4" style={{ maxWidth: "70%" }}>
          {title}
        </span>

        <div className="flex space-x-2 shrink-0">
          <Link
            to={pdfUrl}
            className="hoverCustom bg-gray-200 hover:text-white text-black px-3 py-1 text-sm"
          >
            PDF
          </Link>
          <Link
            to={wordUrl}
            className="hoverCustom bg-gray-200 hover:text-white text-black px-3 py-1 text-sm"
          >
            WORD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
