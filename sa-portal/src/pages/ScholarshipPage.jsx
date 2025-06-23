import React, { useEffect, useState } from "react";
import ScholarshipCard from "../Components/ScholarshipCard";
import { useSearchParams } from "react-router-dom";
import BannerTop from "../Components/BannerTop";
import sendApiRequest from "../services/apiService";

const scholarshipData = [
  { title: "Gates Millenium Scholarship" },
  { title: "Gates Scholarship" },
  { title: "Chevening Scholarship" },
  { title: "Gates Millenium Scholarship program" },
  { title: "Rhodes Scholarship" },
  { title: "Fulbright Scholarship" },
  { title: "Commonwealth Scholarship" },
  { title: "DAAD Scholarship" },
];

const ScholarshipPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  /* Render the items according to the type variable,
   also update the url when type changes,
    can maintain a mapping between categories and type
    eg. for Scholarship Beneficiary List ->beneficiary-list
    Government Scholarships List -> government
    External Scholarships List -> external
   */

  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scholarshipsRes = await sendApiRequest("/scholarships", "GET");

        console.log({ scholarshipsRes });

        setScholarships(scholarshipsRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    //new bg: 236 243 255
    <>
      <BannerTop
        heading={"Scholarships"}
        route={["Scholarships & Sponsorships", "Scholarships"]}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <div className="customBgNew w-full px-12 flex justify-between">
          {/* Each section takes about 30% of total width */}
          <div className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer">
            <button className="text-lg font-medium">School Scholarships</button>
          </div>
          <div className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer">
            <button className="text-lg font-medium">Government</button>
          </div>
          <div className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer">
            <button className="text-lg font-medium">Others</button>
          </div>
        </div>

        {/* Scholarship List */}
        <div className="flex flex-col items-center py-10 px-4">
          {scholarshipData.map((item, idx) => (
            <ScholarshipCard key={idx} idx={idx + 1} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScholarshipPage;
