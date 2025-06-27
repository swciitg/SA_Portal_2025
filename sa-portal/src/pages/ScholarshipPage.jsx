import React, { useEffect, useState } from "react";
import ScholarshipCard from "../Components/ScholarshipCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import BannerTop from "../Components/BannerTop";
import sendApiRequest from "../services/apiService";

const ScholarshipPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get("type") || "College"; // default to 'College'
  const [scholarships, setScholarships] = useState([]);

  const typeDisplayMap = {
    College: "School Scholarships",
    Government: "Government",
    Others: "Others",
  };

  const typeList = ["College", "Government", "Others"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scholarshipsRes = await sendApiRequest("/scholarships?populate=*", "GET");
        setScholarships(scholarshipsRes?.data || []);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };
    fetchData();
  }, []);

  const handleTypeChange = (newType) => {
    navigate(`/scholarships?type=${newType}`);
  };

  const filteredScholarships = scholarships.filter((item) => item?.type === type);

  return (
    <>
      <BannerTop
        heading={"Scholarships"}
        route={["Scholarships & Sponsorships", "Scholarships"]}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="customBgNew w-full px-12 flex justify-between">
          {typeList.map((t) => (
            <div
              key={t}
              className={`w-1/3 flex justify-center py-4 hover:cursor-pointer ${t === type ? "bg-white shadow font-medium" : "hoveredBg"
                }`}
              onClick={() => handleTypeChange(t)}
            >
              <button className="text-lg">{typeDisplayMap[t]}</button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center py-10 px-4">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((item, idx) => (
              <ScholarshipCard key={item.id} idx={idx + 1} item={item} />
            ))
          ) : (
            <p className="text-gray-500 mt-10">No scholarships found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ScholarshipPage;
