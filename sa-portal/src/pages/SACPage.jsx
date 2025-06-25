import React, { useEffect, useState } from "react";
import "./Boards.css";
import BannerTop from "../Components/BannerTop";
import LayeredCarousel from "../Components/LayeredCarousel";
import TeamCard from "../Components/TeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";

function SACPage() {
  const route = ["Students' Affairs Boards", "About SAC"];

  const [sacMembers, setSacMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sacMembersRes = await sendApiRequest(ROUTES.SAC_MEMBERS);

        console.log({ sacMembersRes });

        setSacMembers(sacMembersRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop heading="About SAC" blueText="Board" route={route} />
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>
            Welcome to <br />
            Technical Board
          </h1>
          <p>
            It comprises of Chairman, Technical Board and elected student
            representatives. Its main function is to coordinate and execute all
            activities of technical clubs and to coordinate and execute all
            activities related to the annual technical festival ‘Techniche’.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>
      <div className="boards-team">
        <h1>Members</h1>
        <div className="teams-container">
          <div className="team-section">
            <div className="team-cards-scroll">
              <div className="team-cards">
                {sacMembers.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    mail={member.mail}
                    phone={member.phone}
                    imageUrl={process.env.REACT_APP_API_BASE_URL+member.imageUrl?.url }
                    description={member.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SACPage;
