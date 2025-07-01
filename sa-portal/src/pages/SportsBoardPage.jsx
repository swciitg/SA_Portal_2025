import React, { useEffect, useState } from "react";
import BannerTop from "../Components/BannerTop";
import SAcourse from "../assets/Images/SA-course.png";
import NCCcourse from "../assets/Images/NCC-course.png";
import NSOcourse from "../assets/Images/NSO-course.png";
import BoardsEvents from "../Components/BoardsEvents";
import SportsClubCard from "../Components/SportsClubCard";
import SWCTeamCard from "../Components/SWCTeamCard";
import MinuteCard from "../Components/MinuteCard";
import LayeredCarousel from "../Components/LayeredCarousel";
import BoardsFacilities from "../Components/BoardsFacilities";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import { Link } from "react-router-dom";

function SportsBoardPage() {
  const routes = ["Student Affairs Board", "Sports Board"];

  const [courses, setCourses] = useState([]);
  const [facilities, setFacilities] = useState([])
  const [clubSecretaries, setClubSecretaries] = useState([])
  const [events, setEvents] = useState([])
  const [clubs, setClubs] = useState([])
  const [team, setTeam] = useState([])
  const [rules, setRules] = useState([])
  const [forms, setForms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, facilitiesRes, eventsRes, clubsRes, teamRes, rulesRes, formsRes, clubSecretariesRes] = await Promise.all([
          sendApiRequest(ROUTES.SPORTS_BOARD_COURSES),
          sendApiRequest(ROUTES.SPORTS_BOARD_FACILITIES),
          sendApiRequest(ROUTES.SPORTS_BOARD_EVENTS),
          sendApiRequest(ROUTES.SPORTS_BOARD_CLUBS),
          sendApiRequest(ROUTES.SPORTS_BOARD_TEAM),
          sendApiRequest(ROUTES.SPORTS_BOARD_RULES),
          sendApiRequest(ROUTES.SPORTS_BOARD_FORMS),
          sendApiRequest(ROUTES.SPORTS_BOARD_CLUB_SECRETARIES),
        ])

        console.log({ coursesRes, facilitiesRes, eventsRes, clubsRes, teamRes, rulesRes, formsRes, clubSecretariesRes });
        console.log(facilitiesRes.data)
        setCourses(coursesRes?.data)
        setFacilities(facilitiesRes?.data)
        setEvents(eventsRes?.data)
        setClubs(clubsRes?.data)
        setTeam(teamRes?.data)
        setRules(rulesRes?.data)
        setForms(formsRes?.data)
        setClubSecretaries(clubSecretariesRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop heading="Sports Board" route={routes} />
      <div className="boards-about">
        <div className="boards-about-text">
          <h1 className="mb-4">
            Welcome to <br />
            Sports Board
          </h1>
          <p>
            At IIT Guwahati, sports are for everyone—whether you’re already a
            pro or just curious to try something new. From basketball and tennis
            to swimming and weightlifting, there’s plenty to explore. Students
            pick their Sports Activity (SA) in the first semester, and regular
            participation helps keep things on track academically too. With
            amazing facilities and a lively sports scene, campus life stays
            active and exciting. Big events like Spirit (the annual sports
            fest), Spardha (inter-hostel matches), and Cross Country races keep
            the energy high, and hostel rivalries add to the fun every day.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>
      <div className="border-t border-solid border-[rgba(0,0,0,0.2)] lg:mx-[10vw] sm:mx-[5vw] mb-[60px]">
        <h1 className="inline-block p-2 border-t-[2px] border-solid border-[#0E45E1] text-[31px] font-medium ">
          Courses
        </h1>
        <div className="flex justify-between flex-wrap gap-[20px]">
          <div className="w-[384px]">
            <img src={SAcourse} alt="SA Course" className="w-full h-auto" />
            <div className="h-[300px] bg-[#F0F1F7] flex flex-col justify-between p-[30px]">
              <hr className="min-h-[3px] bg-[rgba(0,0,0,0.3)]" />
              <h2 className="text-[25px] font-medium text-[#000000DE]">SA</h2>
              <p className="text-[16px] text-[#00000099]">
                SA Courses are offered as a part of 2nd and 3rd semester of the
                curriculum. It is designed to promote physical fitness,
                teamwork, and overall student growth alongside academics.
              </p>
              <a className="text-blue">Learn more</a>
            </div>
          </div>
          <div className="w-[384px]">
            <img src={NSOcourse} alt="SA Course" className="w-full h-auto" />
            <div className="min-h-[300px] bg-[#F0F1F7] flex flex-col justify-between p-[30px]">
              <hr className="h-[3px] bg-[rgba(0,0,0,0.3)]" />
              <h2 className="text-[25px] font-medium text-[#000000DE]">SA</h2>
              <p className="text-[16px] text-[#00000099]">
                In the 4th and 5th semesters, students at IIT Guwahati can
                continue their involvement in physical activities through NSO
                (National Sports Organization), allowing them to further develop
                their skills and stay active as part of the academic curriculum.
              </p>
              <a className="text-blue">Learn more</a>
            </div>
          </div>
          <div className="w-[384px]">
            <img src={NCCcourse} alt="SA Course" className="w-full h-auto" />
            <div className="min-h-[300px] bg-[#F0F1F7] flex flex-col justify-between p-[30px]">
              <hr className="h-[3px] bg-[rgba(0,0,0,0.3)]" />
              <h2 className="text-[25px] font-medium text-[#000000DE]">SA</h2>
              <p className="text-[16px] text-[#00000099]">
                NCC (National Cadet Corps) is a program focused on discipline,
                leadership, and service, offering a unique blend of physical
                training and national service experience.
              </p>
              <a className="text-blue">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="boards-facilities">
        <h1>Our Facilities</h1>
        <div className="flex md:flex-col lg:flex-row items-center">
          <p className="lg:w-[40%] mb-3 mr-3 text-justify text-[20px] text-[#00000099]">
            With expansive indoor and outdoor facilities, extended hours, and
            dedicated coaches to guide you, there’s something here for everyone,
            whether you're a seasoned athlete or just getting started. No matter
            your skill level, you’ll find the space, support, and community to
            grow, compete, and thrive.
          </p>
          <BoardsFacilities facilityDetails={facilities} />
        </div>
      </div>
      <div className="boards-events">
        <BoardsEvents eventDetails={events} />
      </div>
      <div className="boards-clubs">
        <h1>Clubs - Under Technical Board</h1>
        <div className="clubs-container">
          {clubs.map((each) => (
            <SportsClubCard
// process.env.REACT_APP_API_BASE_URL+ each?.club?.imageUrl?.url
              clubName={each.club?.clubName}
              imageUrl={process.env.REACT_APP_API_BASE_URL+each?.club?.imageUrl?.url}
              // imageUrl={process.env.REACT_APP_API_BASE_URL+each.imageUrl?.url}
              description={each.club?.description}
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
              image={process.env.REACT_APP_API_BASE_URL + each.image?.url}
              // image={process.env.REACT_APP_API_BASE_URL + each.imageUrl?.url}
              program={each.program}
            />
          ))}
        </div>
      </div>
      <div className="boards-team">
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
      </div>
      <div className="boards-team">
        <h1>Rules</h1>
        <div>
          {rules.map((each, idx) => (
            <div className="flex flex-row items-center mb-3 w-full">
              <div className="flex-none border border-gray-300 bg-white text-center text-sm font-semibold flex items-center justify-center lg:h-[60px] lg:w-[60px] sm:h-[40px] sm:w-[40px] mr-3">
                {idx + 1}
              </div>
              <div className="border border-gray-300 flex flex-row justify-between items-center lg:h-[60px] sm:h-[40px] flex-grow px-4 overflow-hidden">
                <span
                  className="lg:text-[18px] sm:text-[15px] truncate pr-4"
                  style={{ maxWidth: "70%" }}
                >
                  {each.title}
                </span>
                <div className="flex space-x-2 shrink-0">
                  <Link to={process.env.REACT_APP_API_BASE_URL + each.pdf?.url} target="_blank" className="hoverCustom bg-gray-200 hover:text-white text-black px-3 py-2 text-sm">
                    PDF
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="boards-team">
        <h1>Forms and Booking</h1>
        <div>
          {forms.map((each, idx) => (
            <div className="flex flex-row items-center mb-3 w-full">
              <div className="flex-none border border-gray-300 bg-white text-center text-sm font-semibold flex items-center justify-center lg:h-[60px] lg:w-[60px] sm:h-[40px] sm:w-[40px] mr-3">
                {idx + 1}
              </div>
              <div className="border border-gray-300 flex flex-row justify-between items-center lg:h-[60px] sm:h-[40px] flex-grow px-4 overflow-hidden">
                <span
                  className="lg:text-[18px] sm:text-[15px] truncate pr-4"
                  style={{ maxWidth: "70%" }}
                >
                  {each.title}
                </span>
                <div className="flex space-x-2 shrink-0">
                  <Link to={process.env.REACT_APP_API_BASE_URL + each.pdf?.url} target="_blank" className="hoverCustom bg-gray-200 hover:text-white text-black px-3 py-2 text-sm">
                    PDF
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SportsBoardPage;

// const rules = [
//   {
//     title: "Badminton Rules",
//     link: "https://example.com/badminton-rules",
//   },
//   {
//     title: "Basketball Rules",
//     link: "https://example.com/basketball-rules",
//   },
//   {
//     title: "Football Rules",
//     link: "https://example.com/football-rules",
//   },
//   {
//     title: "Tennis Rules",
//     link: "https://example.com/tennis-rules",
//   },
//   {
//     title: "Swimming Pool Rules",
//     link: "https://example.com/swimming-pool-rules",
//   },
//   {
//     title: "Central Gym Rules",
//     link: "https://example.com/gymnasium-rules",
//   },
// ];
// const forms = [
//   {
//     title: "Good Issue",
//     link: "https://example.com/badminton-rules",
//   },
//   {
//     title: "Guest Access Form",
//     link: "https://example.com/basketball-rules",
//   },
//   {
//     title: "Booking",
//     link: "https://example.com/football-rules",
//   },
// ];
// const eventDetails = [
//   {
//     imageUrl: "",
//     name: "Inter IIT",
//   },
//   {
//     imageUrl: "",
//     name: "Inter IIT Staff",
//   },
//   {
//     imageUrl: "",
//     name: "Spirit",
//   },
//   {
//     imageUrl: "",
//     name: "Spardha",
//   },
// ];
// const clubs = [
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
//   { clubName: "", imageUrl: "", description: "" },
// ];
// const team = [
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
//   {
//     name: "name",
//     position: "Position",
//     email: "Email",
//     phone: "Contact",
//     image: "",
//     program: "Program",
//   },
// ];

