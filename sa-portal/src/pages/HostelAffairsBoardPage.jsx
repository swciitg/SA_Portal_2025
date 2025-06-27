import React,{useEffect, useState} from "react";
import './Boards.css'
import BannerTop from "../Components/BannerTop";
import Announcements from "../Components/Announcements";
import BoardsEvents from "../Components/BoardsEvents";
import next from "../assets/Images/next.png";
import down from "../assets/Images/chevron-down.png";
import LayeredCarousel from "../Components/LayeredCarousel";
import TeamCard from "../Components/TeamCard";
import SWCTeamCard from "../Components/SWCTeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";

function HostelAffairsBoardPage() {
  const [hostel, setHostel] = useState("Barak");
  const hostels = [ "Barak", "Bramhaputra", "Dhansiri", "Dihing", "Disang", "Gaurang", "Kapili", "Kameng", "Lohit", "Manas", "Subansiri", "Umaium" ]
  const route = ["Students' Affairs Boards", "Hostel's Affairs Board"];

  const [announcements,setAnnouncements] = useState([]);
  const [events,setEvents] = useState([]);
  const [team,setTeam] = useState([]);
  const [hmcMembers,setHmcMembers] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsRes,eventsRes,teamRes,hmcMembersRes ] = await Promise.all([
          sendApiRequest(ROUTES.HOSTEL_AFFAIRS_BOARD_ANNOUNCEMENTS),
          sendApiRequest(ROUTES.HOSTEL_AFFAIRS_BOARD_EVENTS),
          sendApiRequest(ROUTES.HOSTEL_AFFAIRS_BOARD_TEAM),
          sendApiRequest(ROUTES.HMC_MEMBERS),
        ])

        console.log({ announcementsRes,eventsRes,teamRes, hmcMembersRes });

        setAnnouncements(announcementsRes?.data)
        setEvents(eventsRes?.data)
        setTeam(teamRes?.data)
        setHmcMembers(hmcMembersRes?.data)
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const cardMove = (x,index) =>{
    const teamCards = document.querySelectorAll('.team-cards-hab')[index];
    const a = teamCards.style.transform.translateX;
    console.log(a);
    teamCards.style.transform = `translateX(calc( ${x}* 560px))`;
  }
  
  const showHostelList = () => {
    const hostelList = document.querySelector('.boards-team ul');
    if (hostelList.style.display === "block") {
      hostelList.style.display = "none";
    } else {
      hostelList.style.display = "block";
    }
  }

  const selectedHostel = (each) => () => {
    const hostelList = document.querySelector('.boards-team ul');
    hostelList.style.display = "none";
    setHostel(each);
  }

  return (
    <>
      <BannerTop heading="Hostel's Affairs Board" blueText="Affairs Board" route={route}/>
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>
            Welcome to <br/>Hostel's Affairs Board
          </h1>
          <p>
            The Hostels' Affairs Board is the body that will coordinate and execute all activities related to the residential stay, boarding and lodging of students in the hostels on the campus.<br/>It comprises of Chairman, Hostels' Affairs Board, Wardens and Associate Wardens of all hostels and concerned student representatives. Their main function is to coordinate and execute all activities related to hostels and Hostel Management Committees of hostels.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>
      <div className="boards-announcements"><Announcements announcements={announcements}/></div>
      <div className="boards-events"><BoardsEvents eventDetails={events}/></div>
      <div className="boards-team boards-team-hab">
        <h1>Meet The Team - HAB</h1>
        <div className="teams-container">
          {team.map((team, index) => (
            <div key={index} className="team-section">
              <div className="flex items-center">
                <h1 className="team-heading">{team.heading}</h1>
                {/* <div className="ml-auto">
                  <button className="size-[38px] bg-[#E9EAEC] mr-1" type='button' onClick={()=> {cardMove(-1,index)}}>
                    <img className="m-auto h-[13px] w-[8px] " src={next} alt='previous'/>
                  </button>
                  <button className="size-[38px] bg-[#E9EAEC] " type='button' onClick={()=> {cardMove(1,index)}}>
                    <img className="m-auto h-[13px] w-[8px] rotate-180" src={next} alt='next'/>
                  </button>
                </div> */}
              </div>
              <div className="team-cards-scroll">
                <div className="team-cards team-cards-hab">
                  {team.members.map((member, idx) => (
                    <TeamCard
                      key={idx}
                      name={member.name}
                      title={member.title}
                      mail={member.mail}
                      phone={member.phone}
                      imageUrl={process.env.REACT_APP_API_BASE_URL+member.imageUrl?.url}
                      description={member.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="boards-team boards-team-hab">
        <h1>HMC - Via Hostels</h1>
        <div className="w-[273px] h-[60px] flex justify-between border-solid border-[2px] border-[rgba(0,0,0,0.2)]">
          <p className="my-auto ml-[20px] text-[rgba(0,0,0,0.6)]">Select Hostel</p>
          <button onClick={showHostelList} className="h-100 w-[58px] bg-[#0A31A0]" type='button'>
            <img className="w-[30px] h-[30px] m-auto" src={down} alt='down'/>
          </button>
        </div>
        <ul className="hidden absolute h-[300px] overflow-y-scroll w-[273px] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-[#D0D3E6] [&::-webkit-scrollbar-thumb]:bg-[rgba(0,0,0,0.38)] [&::-webkit-scrollbar]:h-[0px]">{
            hostels.map((each, index) => (
              <li onClick={selectedHostel(each)} className="text-[20px] bg-[#E7ECFC] h-[58px] w-[273px] text-[#00000099] pl-[20px] flex items-center border border-solid border-[rgba(0,0,0,0.2)] cursor-pointer hover:underline"
               key={index} value={each}>{each}</li>
            ))
          }</ul>
        <div className="mt-[30px] team-container">
          {
            hmcMembers.map(each=>{
              if(each.hostel === hostel) return (
              <div className="grow lg:max-w-[49%] md:max-w-[588px]">
                <SWCTeamCard name={each.name} position={each.position} email={each.mail} phone={each.phone} image={process.env.REACT_APP_API_BASE_URL+each.imageUrl?.url}/>
              </div>
            )})
          }
        </div>
      </div>
    </>
  );
}

export default HostelAffairsBoardPage;

  // const teams = [
  //   {
  //     heading: "Chairperson, HAB",
  //     members: [
  //       {
  //         name: "Dr. Anjan Kumar s.",
  //         title: "Chairperson, Hostel Affairs Board",
  //         mail: "chr_hab@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "",
  //       },
  //     ],
  //   },
  //   {
  //     heading: "Vice Chairpersons, HAB",
  //     members: [
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //     ],
  //   },
  //   {
  //     heading: "Wardens",
  //     members: [
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //     ],
  //   },
  //   {
  //     heading: "Associate Wardens",
  //     members: [
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //       {
  //         name: "Dr. Romanbabu Oniam",
  //         title: "Vice Chairperson, HAB(Services)",
  //         mail: "vchr_hab1@iitg.ac.in",
  //         phone: "+91 361 258 2164",
  //         imageUrl: "",
  //         description: "Vice Chairperson, Hostel Affairs Board (Services), Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
  //       },
  //     ],
  //   },
  // ]
  // const hmcMembers = [
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Barak'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Barak'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Barak'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Bramhaputra'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Lohit'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Lohit'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Dhansiri'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Dhansiri'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hostel:'Gaurang'},
  //   {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program', hoste:'Kameng'},
  // ]
