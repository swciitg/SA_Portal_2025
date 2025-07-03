import React, { useEffect, useState } from "react";
import './Boards.css'
import BannerTop from "../Components/BannerTop";
import Announcements from "../Components/Announcements";
import BoardsEvents from "../Components/BoardsEvents";
import LayeredCarousel from "../Components/LayeredCarousel";
import ClubCard from "../Components/ClubCard";
import SWCTeamCard from "../Components/SWCTeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

function CulturalBoardPage() {
  const route = ["Students' Affairs Boards", "Cultural Board"];

  const [announcements, setAnnouncements] = useState([]);
  // const [clubSecretaries, setClubSecretaries] = useState([]);
  const [events, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsRes, eventsRes, clubsRes, teamRes] = await Promise.all([
          sendApiRequest(ROUTES.CULTURAL_BOARD_ANNOUNCEMENTS),
          sendApiRequest(ROUTES.CULTURAL_BOARD_EVENTS),
          sendApiRequest(ROUTES.CULTURAL_BOARD_CLUBS),
          sendApiRequest(ROUTES.CULTURAL_BOARD_TEAM),
          // sendApiRequest(ROUTES.CULTURAL_BOARD_CLUB_SECRETARIES),
        ])

        console.log({ announcementsRes, eventsRes, clubsRes, teamRes  });
        console.log(clubsRes.data)
        setAnnouncements(announcementsRes?.data)
        setEvents(eventsRes?.data)
        setClubs(clubsRes?.data)
        setTeam(teamRes?.data)
        // setClubSecretaries(clubSecretariesRes?.data)
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop heading="Cultural Board" blueText="Board" route={route} />
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>
            Welcome to <br />Cultural Board
          </h1>
          <p>
            It comprises of Chairman, Cultural Board and elected student representatives.
            <br /> Its main function is to coordinate and execute all cultural activities through the various clubs and to coordinate and execute all activities related to the annual cultural festival ‘Alcheringa’.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>
      <div className="boards-announcements"><Announcements announcements={announcements} /></div>
      <div className="boards-events"><BoardsEvents eventDetails={events} /></div>
      <div className="boards-clubs">
        <h1>Clubs - Under Cultural Board</h1>
        <div className="clubs-container">
          {
            clubs.map(each => (
              <ClubCard clubName={each?.club?.clubName} imageUrl={getStrapiMediaUrl(each?.club?.imageUrl?.url)} link={each?.club?.link} />

              // <ClubCard clubName={each?.club?.clubName} imageUrl={process.env.REACT_APP_API_BASE_URL+ each?.club?.imageUrl?.url} link={each?.club?.link} />
              // <ClubCard clubName={each.clubName} imageUrl={process.env.REACT_APP_API_BASE_URL + each.imageUrl?.url} link={each.link} />
            ))
          }
        </div>
      </div>
      <div className="boards-team">
        <h1>Meet The Team</h1>
        <div className="team-container">
          {
            team.map(each => (
              <SWCTeamCard name={each.name} position={each.position} email={each.email} phone={each.phone} image={getStrapiMediaUrl(each?.image?.url)} program={each.program} />
              // <SWCTeamCard name={each.name} position={each.position} email={each.email} phone={each.phone} image={ each.image?.url} program={each.program} />
              // <SWCTeamCard name={each.name} position={each.position} email={each.email} phone={each.phone} image={process.env.REACT_APP_API_BASE_URL + each.image?.url} program={each.program} />
            ))
          }
        </div>
      </div>
      {/* <div className="boards-team">
        <h1>Club Secretaries</h1>
        <div className="team-container">
          {clubSecretaries.map((each) => (
            <SWCTeamCard
              name={each.club}
              position={each.name}
              email={each.email}
              phone={each.phone}
              image={getStrapiMediaUrl(each?.image?.url)}
              // image={process.env.REACT_APP_API_BASE_URL + each.image?.url}
              // image={process.env.REACT_APP_API_BASE_URL + each.imageUrl?.url}
              program={each.program}
            />
          ))}
        </div>
      </div> */}
    </>
  );
}

export default CulturalBoardPage;
