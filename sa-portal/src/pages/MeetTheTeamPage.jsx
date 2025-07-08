import { useEffect, useState, useCallback } from "react";
import down from "../assets/Images/chevron-down.png";
import TeamCard from "../Components/TeamCard";
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
  "Hostel Affairs Board": ROUTES.SA_HOSTEL_TEAM,
  "Students Gymkhana": ROUTES.SGC_GENSEC_TEAM,
  "Gymkhana Office": ROUTES.GYMKHANA_OFFICE_TEAM,
  "Counselling Cell": ROUTES.COUNCELLING_CELL_TEAM,
  "New SAC": ROUTES.NEW_SAC_TEAM,
};

const MeetTheTeam = () => {
  const [searchParams] = useSearchParams();
  const team = searchParams.get("team");

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

  const [year, setYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([new Date().getFullYear()]);
  const images = [saf, hab, sg, go, cc, ns];
  const route = ["Student Affairs", "Team"];
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
    try {
      const categorySelector = document.querySelector(".category-selector");
      const categoryIcon = document.querySelectorAll(".category-icon");
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      const h = document
        .querySelector(".mtt-banner")
        .getBoundingClientRect().bottom;
      // console.log("Scrolled height: ", h, "Nav height: ", navHeight);
      if (h <= navHeight) {
        categoryIcon.forEach((each) => each.classList.add("display-none"));
        categorySelector.classList.add("category-selector-scrolled");
        categorySelector.style.top = `${navHeight}px`;
      } else if (h >= navHeight) {
        categoryIcon.forEach((each) => each.classList.remove("display-none"));
        categorySelector.classList.remove("category-selector-scrolled");
      }
    } catch (e) {
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

  const fetchYears = useCallback((teamsData) => {
    try {
      const yearList = [];
      teamsData.forEach((team) => {
        if (team.Year && !yearList.includes(team.Year)) {
          yearList.push(team.Year);
        }
      });
      yearList.sort();
      yearList.reverse(); // Sort years in descending order
      setYears(yearList);

      // Set the selected year to the most recent year if available
      if (yearList.length > 0) {
        setYear(yearList[0]);
      }

      console.log("Years for Students Gymkhana:", yearList);
    } catch (error) {
      console.error("Error fetching years for Students Gymkhana:", error);
    }
  }, []);

  const fetchTeamData = useCallback(
    async (group) => {
      const endpoint = categoryToApiRouteMap[group];
      if (!endpoint) return;

      try {
        const res = await sendApiRequest(`${endpoint}`, "GET");
        if (res?.data) {
          console.log(res.data);
          fetchYears(res.data);
          setTeams(res.data);
        }
      } catch (error) {
        console.error(`Error fetching team data for ${group}:`, error);
      }
    },
    [fetchYears]
  );

  const handleCategoryChange = async (group) => {
    setCategory(group);

    // Reset year and years when switching categories
    if (group === "Students Gymkhana") {
      setYear(new Date().getFullYear());
      setYears([new Date().getFullYear()]);
    }

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
  }, [team, fetchTeamData]);

  return (
    <div className="meet-the-team-page">
      <div className="inner">{/* <Navbar /> */}</div>
      <div className="mtt-body">
        <BannerTop
          route={[...route, category]}
          heading="Meet The "
          blueText="Team"
        />
        <div className="mtt-banner"></div>
        <div className="scrollbox">
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
        </div>

        <div className="teams-container">
          {category === "Students Gymkhana" && years.length > 0 && (
            <>
              <div className="lg:ml-[15vw] sm:ml-[10vw] mt-[60px] w-[273px] h-[60px] flex justify-between items-center border border-[rgba(0,0,0,0.2)] rounded-md shadow-sm bg-white">
                <p
                  id="select-year"
                  className="ml-[20px] text-[rgba(0,0,0,0.6)] text-[16px]"
                >
                  {year}
                </p>
                <button
                  onClick={showYearList}
                  className="w-[58px] h-full bg-[#0A31A0] rounded-r-md flex items-center justify-center"
                  type="button"
                >
                  <img className="w-[20px] h-[20px]" src={down} alt="down" />
                </button>
              </div>

              <ul
                className="lg:ml-[15vw] sm:ml-[10vw] hidden absolute h-[max-content] max-h-[240px] overflow-y-auto w-[273px] z-10
    bg-white shadow-lg border border-[rgba(0,0,0,0.2)]
    [&::-webkit-scrollbar]:w-[6px]
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-[rgba(0,0,0,0.25)] [&::-webkit-scrollbar-thumb]:rounded-full
    scroll-smooth rounded-md"
              >
                {years.map((each, index) => (
                  <li
                    onClick={selectedYear(each)}
                    key={index}
                    className="text-[18px] bg-[#E7ECFC] h-[58px] w-full text-[#00000099] px-[20px] flex items-center border-b border-[rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#d6ddf4]"
                  >
                    {each}
                  </li>
                ))}
              </ul>
            </>
          )}

          {category === "Students Gymkhana" ? (
            years.length === 0 ? (
              <p className="ml-[15vw] mt-6 text-gray-500">
                No team data available for Students Gymkhana.
              </p>
            ) : // Filter gymkhana teams by selected year, then show their members
            (teams || [])
                .filter((t) => t.Year === year)
                .flatMap((t) => t.members).length > 0 ? (
              <div className="team-section">
                <div className="team-cards-scroll">
                  <div className="team-cards">
                    {teams
                      .filter((t) => t.Year === year)
                      .flatMap((t) => t.members)
                      .map((member, idx) => (
                        <TeamCard
                          key={idx}
                          name={member.name}
                          title={member.position}
                          mail={member.email}
                          phone={member.phone}
                          imageUrl={getStrapiMediaUrl(member.imageUrl?.url)}
                          responsibility={member.responsibility}
                        />
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="ml-[15vw] mt-6 text-gray-500">
                No members found for {year}.
              </p>
            )
          ) : (
            (teams || []).map((team, index) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
