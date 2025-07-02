import React, { useEffect, useState } from "react";
import "./Boards.css";
import BannerTop from "../Components/BannerTop";
import LayeredCarousel from "../Components/LayeredCarousel";
import TeamCard from "../Components/TeamCard";
import sendApiRequest from "../services/apiService";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";
import ROUTES from "../constants/apiRoutes";

function StudentsGymkhanaCouncilPage() {
  const route = [
    "Students' Gymkhana Council",
    "About Students' Gymkhana Council",
  ];

  const [sgcSections, setSgcSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sgcTeamRes = await sendApiRequest(ROUTES.SGC_TEAM);
        setSgcSections(sgcTeamRes?.data || []);
      } catch (error) {
        console.error("Error in fetching SGC team data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop heading="About Students' Gymkhana Council" route={route} />
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>
            Welcome to <br />
            Students' Gymkhana Council
          </h1>
          <p>
            Students Gymkhana Council is the body that promotes the objectives
            of fostering extra-curricular, co-curricular activities, welfare of
            students, and their stay in the campus. It comprises of 5 boards:
            Academic Board, Cultural Board, Sports Board, Technical Board, and
            Students' Welfare Board.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>

      <div className="boards-team">
        <h1>Meet The Team - Gymkhana Council</h1>
        <div className="teams-container">
          {sgcSections.map((section, index) => (
            <div key={index} className="team-section">
              <h1 className="team-heading">{section.heading}</h1>
              <div className="team-cards-scroll">
                <div className="team-cards team-cards-hab">
                  {section.members?.map((member, idx) => (
                    <TeamCard
                      key={idx}
                      name={member.name}
                      title={member.title}
                      mail={member.mail}
                      phone={member.phone}
                      imageUrl={getStrapiMediaUrl(member.imageUrl?.url)}
                      description={member.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudentsGymkhanaCouncilPage;
