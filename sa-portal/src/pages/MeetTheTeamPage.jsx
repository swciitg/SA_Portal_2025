import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import down from "../assets/Images/chevron-down.png";
import MeetTheTeamBanner from "../assets/Images/mtt-banner.png";
import TeamCard from "../Components/TeamCard";
import doubleArrow from "../assets/Images/chevron-right-double.png";
import downArrow from "../assets/Images/chevron-down.png";
import saf from "../assets/icons/Student-Affairs-Functionaries.svg";
import hab from "../assets/icons/Hostel-Affairs-Board.svg";
import sg from "../assets/icons/Students-Gymkhana.svg";
import go from "../assets/icons/Gymkhana-Office.svg";
import ns from "../assets/icons/New-Sac.svg";
import cc from "../assets/icons/Counselling-Cell.svg";
import "./MeetTheTeam.css";
import { useSearchParams } from "react-router-dom";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";
import BannerTop from "../Components/BannerTop";

const categoryToApiRouteMap = {
  "Student Affairs Functionaries": ROUTES.SA_TEAM,
  "Hostel Affairs Board": ROUTES.HOSTEL_AFFAIRS_BOARD_TEAM,
  "Students Gymkhana": ROUTES.STUDENTS_GYMKHANA_TEAM,
  "Gymkhana Office": ROUTES.GYMKHANA_OFFICE_TEAM,
  "Counselling Cell": ROUTES.COUNCELLING_CELL_TEAM,
  "New SAC": ROUTES.NEW_SAC_TEAM,
};

const MeetTheTeam = () => {
  const [searchParams] = useSearchParams();
  const team = searchParams.get("team");
  const [saTeam, setSaTeam] = useState([]);

  const [category, setCategory] = useState("Student Affairs Functionaries");

  const [teams, setTeams] = useState();
  // "Student Affairs Functionaries": [ /* dummy data here */ {
  //   heading: "Dean",
  //   members: [
  //     {
  //       name: "Prof. Perumal Alagarsamy",
  //       title: "Dean of Students’ Affairs",
  //       mail: "dos@iitg.ac.in",
  //       phone: "+91-361-258 2083",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
  //       responsibility: "",
  //     },
  //   ],
  // }, {
  //   heading: "Associate Dean",
  //   members: [
  //     {
  //       name: "Prof. Perumal Alagarsamy",
  //       title: "Dean of Students’ Affairs",
  //       mail: "dos@iitg.ac.in",
  //       phone: "+91-361-258 2083",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
  //       responsibility: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     },
  //     {
  //       name: "Prof. Perumal Alagarsamy",
  //       title: "Dean of Students’ Affairs",
  //       mail: "dos@iitg.ac.in",
  //       phone: "+91-361-258 2083",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
  //       responsibility: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     },
  //     {
  //       name: "Prof. Perumal Alagarsamy",
  //       title: "Dean of Students’ Affairs",
  //       mail: "dos@iitg.ac.in",
  //       phone: "+91-361-258 2083",
  //       imageUrl:
  //         "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
  //       responsibility: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     },
  //   ],
  // }],
  // "Hostel Affairs Board": [/* dummy */],
  // "Students Gymkhana": [/* dummy */],
  // "Gymkhana Office": [/* dummy */],
  // "Counselling Cell": [/* dummy */],
  // "New SAC": [/* dummy */],

  const groups = [
    "Student Affairs Functionaries",
    "Hostel Affairs Board",
    "Students Gymkhana",
    "Gymkhana Office",
    "Counselling Cell",
    "New SAC",
  ];

  const [year, setYear] = useState("2023");
  const years = ["2023", "2022", "2021"];
  const images = [saf, hab, sg, go, cc, ns];
  const route = ["Student Affairs","Team"];
  // const scrolled = () => {
  //   const categorySelector = document.querySelector(".category-selector");
  //   const categoryIcon = document.querySelectorAll(".category-icon");
  //   const h = document
  //     .querySelector(".mtt-banner")
  //     .getBoundingClientRect().bottom;
  //   if (h <= 55) {
  //     categoryIcon.forEach((each) => each.classList.add("display-none"));
  //     categorySelector.classList.add("category-selector-scrolled");
  //   } else if (h >= 90) {
  //     categoryIcon.forEach((each) => each.classList.remove("display-none"));
  //     categorySelector.classList.remove("category-selector-scrolled");
  //   }
  // };

  const scrolled = () => {
    try{
      const categorySelector = document.querySelector(".category-selector");
      const categoryIcon = document.querySelectorAll(".category-icon");
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      const h = document.querySelector(".mtt-banner").getBoundingClientRect().bottom;
      console.log("Scrolled height: ", h, "Nav height: ", navHeight);
      if ( h <= navHeight) {
        categoryIcon.forEach((each) => each.classList.add("display-none"));
        categorySelector.classList.add("category-selector-scrolled");
        categorySelector.style.top = `${navHeight}px`;
      } else if( h >= navHeight){
        categoryIcon.forEach((each) => each.classList.remove("display-none"));
        categorySelector.classList.remove("category-selector-scrolled");
      }
    } catch(e){
      console.error("Error in scrolled function: ", e);
    }
  };

  const selectedYear = (each) => () => {
    const yearList = document.querySelector(".teams-container ul");
    const selectYear = document.querySelector("#select-year");
    yearList.style.display = "none";
    selectYear.innerText = each;
    setYear(each);
  };

  const showYearList = () => {
    const yearList = document.querySelector(".teams-container ul");
    const selectYear = document.querySelector("#select-year");
    if (yearList.style.display === "block") {
      yearList.style.display = "none";
      selectYear.innerText = year;
    } else {
      yearList.style.display = "block";
      selectYear.innerText = "Select Year";
    }
  };

  const fetchTeamData = async (group) => {
    const endpoint = categoryToApiRouteMap[group];
    if (!endpoint) return;

    try {
      const res = await sendApiRequest(`${endpoint}`, "GET");
      if (res?.data) {
        console.log(res.data);
        setTeams(res.data);
      }
    } catch (error) {
      console.error(`Error fetching team data for ${group}:`, error);
    }
  };

  const handleCategoryChange = async (group) => {
    setCategory(group);
    window.history.pushState(
      {},
      "",
      `${process.env.REACT_APP_BASE_URL}/meet-the-team?team=${group
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
    await fetchTeamData(group);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolled);
    return () => window.removeEventListener("scroll", scrolled);
  }, []);

  useEffect(() => {
    if (team) {
      const groupFromUrl = team
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      setCategory(groupFromUrl);
      fetchTeamData(groupFromUrl);
    } else {
      fetchTeamData("Student Affairs Functionaries");
    }
  }, []);

  return (
    <div className="meet-the-team-page">
      <div className="inner">{/* <Navbar /> */}</div>
      <div className="mtt-body">
        <BannerTop route={[...route,category]} heading="Meet The " blueText="Team"/>
        <div className="mtt-banner"></div>
        <ul className="category-selector">
          {groups.map((group, index) => (
            <li
              key={index}
              className={group === category ? "category-active" : "category"}
              onClick={() => handleCategoryChange(group)}
            >
              <div className="category-icon">
                <img src={images[index]} alt={group} />
              </div>
              <p>{group}</p>
            </li>
          ))}
        </ul>
        <div className="teams-container">
          {category === "Students Gymkhana" && (
            <>
              <div className="lg:ml-[15vw] sm:ml-[10vw] mt-[60px] w-[273px] h-[60px] flex justify-between border-solid border-[2px] border-[rgba(0,0,0,0.2)]">
                <p
                  id="select-year"
                  className="my-auto ml-[20px] text-[rgba(0,0,0,0.6)]"
                >
                  Select Year
                </p>
                <button
                  onClick={showYearList}
                  className="h-100 w-[58px] bg-[#0A31A0]"
                  type="button"
                >
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src={down}
                    alt="down"
                  />
                </button>
              </div>
              <ul className="lg:ml-[15vw] sm:ml-[10vw] hidden absolute h-[300px] overflow-y-scroll w-[273px] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-[#D0D3E6] [&::-webkit-scrollbar-thumb]:bg-[rgba(0,0,0,0.38)] [&::-webkit-scrollbar]:h-[0px]">
                {years.map((each, index) => (
                  <li
                    onClick={selectedYear(each)}
                    className="text-[20px] bg-[#E7ECFC] h-[58px] w-[273px] text-[#00000099] pl-[20px] flex items-center border border-solid border-[rgba(0,0,0,0.2)] cursor-pointer hover:underline"
                    key={index}
                    value={each}
                  >
                    {each}
                  </li>
                ))}
              </ul>
            </>
          )}
          {(teams || []).map((team, index) => (
            <div key={index} className="team-section">
              <h1 className="team-heading">{team.heading}</h1>
              <div className="team-cards-scroll">
                <div className="team-cards">
                  {team.members.map((member, idx) => (
                    <TeamCard
                      key={idx}
                      name={member.name}
                      title={member.title}
                      mail={member.mail}
                      phone={member.phone}
                      imageUrl={getStrapiMediaUrl(member.imageUrl?.url)}
                      responsibility={member.responsibility}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
