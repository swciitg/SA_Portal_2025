import React, { useEffect, useState } from "react";
import "./Boards.css";
import BannerTop from "../Components/BannerTop";
import Announcements from "../Components/Announcements";
import BoardsEvents from "../Components/BoardsEvents";
import LayeredCarousel from "../Components/LayeredCarousel";
import ClubCard from "../Components/ClubCard";
import SWCTeamCard from "../Components/SWCTeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

function TechnicalBoardPage() {
  const route = ["Students' Affairs Boards", "Technical Board"];

  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [team, setTeam] = useState([]);
  // const [clubSecretaries, setClubSecretaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsRes, eventsRes, clubsRes, teamRes] =
          await Promise.all([
            sendApiRequest(ROUTES.TECHNICAL_BOARD_ANNOUNCEMENTS),
            sendApiRequest(ROUTES.TECHNICAL_BOARD_EVENTS),
            sendApiRequest(ROUTES.TECHNICAL_BOARD_CLUBS),
            sendApiRequest(ROUTES.TECHNICAL_BOARD_TEAM),
            // sendApiRequest(ROUTES.TECHNICAL_BOARD_CLUB_SECRETARIES),
          ]);

        console.log({ announcementsRes, eventsRes, clubsRes, teamRes });
        // setClubSecretaries(clubSecretariesRes?.data);
        setAnnouncements(announcementsRes?.data);
        setEvents(eventsRes?.data);
        setClubs(clubsRes?.data);
        setTeam(teamRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop heading="Technical Board" route={route} />
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
      <div className="boards-announcements">
        <Announcements announcements={announcements} />
      </div>
      <div className="boards-events">
        <BoardsEvents eventDetails={events} />
      </div>
      <div className="boards-clubs">
        <h1>Clubs - Under Technical Board</h1>
        <div className="clubs-container">
          {clubs.map((each) => (
            <ClubCard
              clubName={each?.club.clubName}
              imageUrl={getStrapiMediaUrl(each?.club.imageUrl?.url)}
              // imageUrl={process.env.REACT_APP_API_BASE_URL + each?.club.imageUrl?.url}
              // imageUrl={process.env.REACT_APP_API_BASE_URL + each.imageUrl?.url}
              link={each?.club.link}
            />
          ))}
        </div>
      </div>
      <div className="boards-team">
        <h1>Meet The Team</h1>
        <div className="team-container">
          {team.map((each) => (
            <SWCTeamCard
              name={each.name}
              position={each.position}
              email={each.email}
              phone={each.phone}
              image={getStrapiMediaUrl(each.image?.url)}
              // image={process.env.REACT_APP_API_BASE_URL + each.image?.url}
              // image={process.env.REACT_APP_API_BASE_URL + each.imageUrl?.url}
              program={each.program}
            />
          ))}
        </div>
      </div>
      {/* <div className="boards-team">
        <h1>Club Secretaries</h1>
        <div className="team-container">
          {clubSecretaries.map((each) => (
            <SWCTeamCard
              name={each.name}
              position={each.position}
              email={each.email}
              phone={each.phone}
              image={process.env.REACT_APP_API_BASE_URL + each.image?.url}
              // image={process.env.REACT_APP_API_BASE_URL + each.imageUrl?.url}
              program={each.program}
            />
          ))}
        </div>
      </div> */}
    </>
  );
}

export default TechnicalBoardPage;

// const clubs = [
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//     { clubName: '', imageUrl: '', link: ''},
//   ]
//   const team = [
//     {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
//     {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
//     {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
//     {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
//     {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
//     {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
//   ]
