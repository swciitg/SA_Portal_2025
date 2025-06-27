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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scholarshipsRes = await sendApiRequest(ROUTES.SCHOLARSHIPS);

        console.log({ scholarshipsRes });

        setScholarships(scholarshipsRes?.data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };
    fetchData();
  }, []);

  const filteredScholarships = scholarships.filter(
    (item) => item.type?.toLowerCase() === type?.toLowerCase()
  );

  return (
    <>
      <BannerTop
        heading={"Scholarships"}
        route={["Scholarships & Sponsorships", "Scholarships"]}
      />

      <div className="min-h-96 bg-gray-50">
        <div className="customBgNew w-full px-12 flex justify-between">
          {/* Each section takes about 30% of total width */}
          <div
            className="hoveredBg w-1/3 flex justify-center py-4 hover:cursor-pointer"
            style={type === "college" ? { backgroundColor: "#c5d9fe" } : {}}
            onClick={() => navigate("/scholarships?type=college")}
          >
            <button className="text-lg font-medium">
              College Scholarships
            </button>
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

        {filteredScholarships.length > 0 ? (
          <div className="flex flex-col items-center py-10 px-4">
            {filteredScholarships.map((item, idx) => (
              <ScholarshipCard key={idx} idx={idx + 1} item={item} />
            ))}
          </div>
        ) : (
          <div className="h-60 w-full flex items-center justify-center">
            <p>Nothing to show here</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ScholarshipPage;
