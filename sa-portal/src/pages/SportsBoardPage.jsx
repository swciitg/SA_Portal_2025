import React from "react";
import BannerTop from "../Components/BannerTop";
import SAcourse from '../assets/Images/SA-course.png';
import NCCcourse from '../assets/Images/NCC-course.png';
import NSOcourse from '../assets/Images/NSO-course.png';
import BoardsEvents from "../Components/BoardsEvents";
import SportsClubCard from "../Components/SportsClubCard";
import LayeredCarousel from "../Components/LayeredCarousel";

function SportsBoardPage() {
  const routes = [ "Student Affairs Board","Sports Board"]
  const eventDetails = [
    {
      imageUrl: "",
      name: "Inter IIT",
    },
    {
      imageUrl: "",
      name: "Inter IIT Staff",
    },
    {
      imageUrl: "",
      name: "Spirit",
    },
    {
      imageUrl: "",
      name: "Spardha",
    }
  ]
  const clubs = [
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
    { clubName: '', imageUrl: '', description: ''},
  ]

  return (
    <>
      <BannerTop heading="Sports Board" route={routes} />
      <div className="boards-about">
        <div className="boards-about-text">
          <h1 className="mb-4">
            Welcome to <br/>Sports Board
          </h1>
          <p>
            At IIT Guwahati, sports are for everyone—whether you’re already a pro or just curious to try something new. From basketball and tennis to swimming and weightlifting, there’s plenty to explore. Students pick their Sports Activity (SA) in the first semester, and regular participation helps keep things on track academically too. With amazing facilities and a lively sports scene, campus life stays active and exciting. Big events like Spirit (the annual sports fest), Spardha (inter-hostel matches), and Cross Country races keep the energy high, and hostel rivalries add to the fun every day.
          </p>
        </div>
        <LayeredCarousel />
      </div>
      <div className="border-t border-solid border-[rgba(0,0,0,0.2)] lg:mx-[10vw] sm:mx-[5vw] mb-[60px]">
        <h1 className="inline-block p-2 border-t-[2px] border-solid border-[#0E45E1] text-[31px] font-medium ">Courses</h1>
        <div className="flex justify-between flex-wrap gap-[20px]">
          <div className="w-[384px]">
            <img src={SAcourse} alt="SA Course" className="w-full h-auto" />
            <div className="h-[300px] bg-[#F0F1F7] flex flex-col justify-between p-[30px]">
              <hr className="min-h-[3px] bg-[rgba(0,0,0,0.3)]" />
              <h2 className="text-[25px] font-medium text-[#000000DE]">SA</h2>
              <p className="text-[16px] text-[#00000099]">SA Courses are offered as a part of 2nd and 3rd semester of the curriculum. It is designed to promote physical fitness, teamwork, and overall student growth alongside academics.</p>
              <a className="text-blue">Learn more</a>
            </div>
          </div>
          <div className="w-[384px]">
            <img src={NSOcourse} alt="SA Course" className="w-full h-auto" />
            <div className="min-h-[300px] bg-[#F0F1F7] flex flex-col justify-between p-[30px]">
              <hr className="h-[3px] bg-[rgba(0,0,0,0.3)]" />
              <h2 className="text-[25px] font-medium text-[#000000DE]">SA</h2>
              <p className="text-[16px] text-[#00000099]">In the 4th and 5th semesters, students at IIT Guwahati can continue their involvement in physical activities through NSO (National Sports Organization), allowing them to further develop their skills and stay active as part of the academic curriculum.</p>
              <a className="text-blue">Learn more</a>
            </div>
          </div>
          <div className="w-[384px]">
            <img src={NCCcourse} alt="SA Course" className="w-full h-auto" />
            <div className="min-h-[300px] bg-[#F0F1F7] flex flex-col justify-between p-[30px]">
              <hr className="h-[3px] bg-[rgba(0,0,0,0.3)]" />
              <h2 className="text-[25px] font-medium text-[#000000DE]">SA</h2>
              <p className="text-[16px] text-[#00000099]">NCC (National Cadet Corps) is a program focused on discipline, leadership, and service, offering a unique blend of physical training and national service experience.</p>
              <a className="text-blue">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="boards-events"><BoardsEvents eventDetails={eventDetails}/></div>
      <div className="boards-clubs">
        <h1>Clubs - Under Technical Board</h1>
        <div className="clubs-container">
          {
            clubs.map(each=>(
              <SportsClubCard clubName={each.clubName} imageUrl={each.imageUrl} description={each.description} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default SportsBoardPage;
