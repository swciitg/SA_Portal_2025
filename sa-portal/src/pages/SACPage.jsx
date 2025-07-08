import React, { useEffect, useState } from "react";
import "./Boards.css";
import BannerTop from "../Components/BannerTop";
import LayeredCarousel from "../Components/LayeredCarousel";
import TeamCard from "../Components/TeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

function SACPage() {
  const route = ["Students' Affairs Council", "About SAC"];

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
      <BannerTop heading="About" blueText="SAC" route={route} />
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>About SAC</h1>
          <p>
            The New SAC (Student Activity Centre) in IIT Guwahati is the central
            social hub, a retreat for students offering air conditioning and
            Wi-Fi. It houses club rooms and is a place for students to relax and
            socialize after their studies. Access to club rooms requires
            authorization from the respective secretaries, with the general
            requirement being an expression of interest.
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
                {sacMembers.map(({ member }, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    mail={member.mail}
                    phone={member.phone}
                    imageUrl={getStrapiMediaUrl(member.imageUrl?.url)}
                    // imageUrl={member.imageUrl?.url}
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
