import React, { useEffect, useState } from "react";
import ScholarshipCard from "../Components/ScholarshipCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import BannerTop from "../Components/BannerTop";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";

const ScholarshipPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();

  const [scholarships, setScholarships] = useState([]);

  const filteredScholarships = scholarships.filter(
    (scholarship) => scholarship.type?.toLowerCase() == type?.toLowerCase()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scholarshipsRes = await sendApiRequest(ROUTES.SCHOLARSHIPS);

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
          <div
            className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer"
            style={type === "school" ? { backgroundColor: "#c5d9fe" } : {}}
            onClick={() => navigate("/scholarships?type=school")}
          >
            <button className="text-lg font-medium">School Scholarships</button>
          </div>
          <div
            className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer"
            style={type === "government" ? { backgroundColor: "#c5d9fe" } : {}}
            onClick={() => navigate("/scholarships?type=government")}
          >
            <button className="text-lg font-medium">Government</button>
          </div>
          <div
            className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer"
            style={type === "others" ? { backgroundColor: "#c5d9fe" } : {}}
            onClick={() => navigate("/scholarships?type=others")}
          >
            <button className="text-lg font-medium">Others</button>
          </div>
        </div>

        {/* Scholarship List */}
        <div className="flex flex-col items-center py-10 px-4">
          {filteredScholarships.map((item, idx) => (
            <ScholarshipCard key={idx} idx={idx + 1} title={item.name} pdfUrl={process.env.REACT_APP_API_BASE_URL+item.pdf_File?.url}
            wordUrl={process.env.REACT_APP_API_BASE_URL+item.word_File?.url}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScholarshipPage;
