import React, { useEffect, useState } from "react";
import BannerTop from "../Components/BannerTop";
import LayeredCarousel from "../Components/LayeredCarousel";
import SAcard from "../Components/SAcard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";

const SACourses = () => {
  const route = ["Students Affair Board", "SA Courses"];

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesRes = await sendApiRequest(ROUTES.SA_COURSES);

        console.log({ coursesRes });

        setCourses(coursesRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div>
        <BannerTop
          heading={
            <div className="flex flex-row space-x-3">
              <p>SA</p>
              <p className="text-blue-400">Courses</p>
            </div>
          }
          route={["Student Affairs Board", "SA Courses"]}
        />
        {/* <BannerTop heading='SA Courses' route={route} /> */}
      </div>

      {/* Content section */}
      <div className="w-[92.5vw] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left paragraph */}
          <div className="md:w-2/3 text-gray-700 text-base leading-relaxed">
            <p className="text-[20px]">
              SA {"(Sports & Adventure)"} courses at IIT Guwahati are an
              integral part of the undergraduate curriculum, aimed at promoting
              physical fitness, teamwork, and a healthy lifestyle among
              students. These courses cover a wide range of activities such as
              athletics, football, basketball, badminton, yoga, swimming, and
              more, offering students the flexibility to choose based on their
              interests. Participation in at least one SA course is typically
              mandatory, encouraging students to engage in regular physical
              activity alongside academics.
            </p>
          </div>

          {/* Right carousel */}
          <div className="lg:w-1/2">
            <LayeredCarousel />
          </div>
        </div>

        {/* Courses list */}
        <div className="mt-16">
          {/* Heading */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            List of SA Courses
          </h1>

          {/* Courses container with border */}
          <div className="border-x border-b border-gray-300 flex flex-col">
            {courses &&
              courses.map((course) => (
                <SAcard
                  key={course.code}
                  course={course.code}
                  title={course.title}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SACourses;
