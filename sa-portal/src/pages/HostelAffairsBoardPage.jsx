import React, { useEffect, useState, useRef } from "react";
import './Boards.css';
import BannerTop from "../Components/BannerTop";
import Announcements from "../Components/Announcements";
import BoardsEvents from "../Components/BoardsEvents";
import LayeredCarousel from "../Components/LayeredCarousel";
import TeamCard from "../Components/TeamCard";
import SWCTeamCard from "../Components/SWCTeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import next from "../assets/Images/next.png";
import down from "../assets/Images/chevron-down.png";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

function HostelAffairsBoardPage() {
  const [hostel, setHostel] = useState("Barak");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const hostels = ["Barak", "Bramhaputra", "Dhansiri", "Dihing", "Disang", "Gaurang", "Kapili", "Kameng", "Lohit", "Manas", "Subansiri", "Umaium"];
  const route = ["Students' Affairs Boards", "Hostel's Affairs Board"];

  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [team, setTeam] = useState([]);
  const [hmcMembers, setHmcMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsRes, eventsRes, teamRes, hmcMembersRes] = await Promise.all([
          sendApiRequest(ROUTES.HOSTEL_AFFAIRS_BOARD_ANNOUNCEMENTS),
          sendApiRequest(ROUTES.HOSTEL_AFFAIRS_BOARD_EVENTS),
          sendApiRequest(ROUTES.HOSTEL_AFFAIRS_BOARD_TEAM),
          sendApiRequest(ROUTES.HMC_MEMBERS),
        ]);
        console.log(teamRes.data)
        setAnnouncements(announcementsRes?.data);
        setEvents(eventsRes?.data);
        setTeam(teamRes?.data);
        setHmcMembers(hmcMembersRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <BannerTop heading="Hostel's Affairs Board" blueText="Affairs Board" route={route} />

      <div className="boards-about">
        <div className="boards-about-text">
          <h1>Welcome to <br />Hostel's Affairs Board</h1>
          <p>
            The Hostels' Affairs Board is the body that coordinates and executes all activities related to residential stay, boarding, and lodging of students in hostels.<br />
            It comprises the Chairman, Wardens, Associate Wardens, and student representatives who ensure smooth hostel operations and HMC activities.
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

      <div className="boards-team boards-team-hab">
        <h1>Meet The Team - HAB</h1>
        <div className="teams-container">
          {/* {team.map((section, index) => ( */}
          {/* <div key={index} className="team-section"> */}
          {/* <h1 className="team-heading">{section.heading}</h1> */}
          <div className="team-cards-scroll">
            <div className="team-cards team-cards-hab">
              {team.map((member, idx) => (
                // <TeamCard
                //   key={idx}
                //   name={member.name}
                //   title={member.title}
                //   mail={member.mail}
                //   phone={member.phone}
                //   imageUrl={process.env.REACT_APP_API_BASE_URL + member.imageUrl?.url}
                //   description={member.description}
                // />
                <SWCTeamCard
                  key={idx}
                  name={member.name}
                  position={member.position}
                  email={member.email}
                  phone={member.phone}
                  image={getStrapiMediaUrl(member.imageUrl?.url)}
                  program={member.branch}
                />
              ))}
            </div>
          </div>

          {/* <div className="team-cards-scroll">
                <div className="team-cards team-cards-hab">
                  {section.members.map((member, idx) => (
                    <TeamCard
                      key={idx}
                      name={member.name}
                      title={member.title}
                      mail={member.mail}
                      phone={member.phone}
                      imageUrl={member.imageUrl?.url}
                      description={member.description}
                    />
                  ))}
                </div>
              </div> */}
          {/* </div> */}

        </div>
      </div>

      <div className="boards-team boards-team-hab">
        <h1>HMC - Via Hostels</h1>

        {/* Hostel dropdown */}
        <div ref={dropdownRef} className="relative w-[273px]">
          <div className="h-[60px] flex justify-between border-2 border-[rgba(0,0,0,0.2)]">
            <p className="my-auto ml-[20px] text-[rgba(0,0,0,0.6)]">{hostel}</p>
            <button onClick={() => setShowDropdown(!showDropdown)} className="w-[58px] bg-[#0A31A0]">
              <img className="w-[30px] h-[30px] m-auto" src={down} alt="down" />
            </button>
          </div>
          <ul
            className={`absolute z-10 h-[300px] overflow-y-scroll w-full bg-white border mt-1 
            [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-[#D0D3E6] 
            [&::-webkit-scrollbar-thumb]:bg-[rgba(0,0,0,0.38)] 
            ${showDropdown ? 'block' : 'hidden'}`}
          >
            {hostels.map((each, index) => (
              <li
                key={index}
                onClick={() => {
                  setHostel(each);
                  setShowDropdown(false);
                }}
                className={`text-[20px] h-[58px] flex items-center px-5 cursor-pointer hover:underline
                ${each === hostel ? "bg-[#D6E2FC] font-semibold text-[#0A31A0]" : "bg-[#E7ECFC] text-[#00000099]"}`}
              >
                {each}
              </li>
            ))}
          </ul>
        </div>

        {/* HMC Cards */}
        <div className="mt-[30px] team-container flex flex-wrap gap-4">
          {hmcMembers
            .filter(each => (each.hostel || "").toLowerCase() === hostel.toLowerCase())
            .map((each, idx) => (
              <div key={idx} className="grow lg:max-w-[49%] md:max-w-[588px]">
                <SWCTeamCard
                  name={each.name}
                  position={each.position}
                  email={each.mail}
                  phone={each.phone}
                  image={getStrapiMediaUrl(each.image?.url)}
                  // image={process.env.REACT_APP_API_BASE_URL + each.image?.url}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HostelAffairsBoardPage;
