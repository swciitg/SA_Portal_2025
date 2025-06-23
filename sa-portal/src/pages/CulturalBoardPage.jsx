import React, { useState } from "react";
import './Boards.css'
import BannerTop from "../Components/BannerTop";
import Announcements from "../Components/Announcements";
import BoardsEvents from "../Components/BoardsEvents";
import LayeredCarousel from "../Components/LayeredCarousel";
import ClubCard from "../Components/ClubCard";
import SWCTeamCard from "../Components/SWCTeamCard";

function CulturalBoardPage() {
  const route = ["Students' Affairs Boards", "Cultural Board"];
  const clubs = [
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
    { clubName: '', imageUrl: '', link: ''},
  ]
  const team = [
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
    {name:'name', position:'Position', email:'Email', phone:'Contact', image:'', program:'Program'},
  ]

  const [announcements,setAnnouncements] = useState([]);

  
  return (
    <>
      <BannerTop heading="Cultural Board" blueText="Board" route={route}/>
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>
            Welcome to <br/>Cultural Board
          </h1>
          <p>
            It comprises of Chairman, Cultural Board and elected student representatives.
            <br/> Its main function is to coordinate and execute all cultural activities through the various clubs and to coordinate and execute all activities related to the annual cultural festival ‘Alcheringa’.
          </p>
        </div>
         <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>
      <div className="boards-announcements"><Announcements announcements={announcements}/></div>
      <div className="boards-events"><BoardsEvents /></div>
      <div className="boards-clubs">
        <h1>Clubs - Under Cultural Board</h1>
        <div className="clubs-container">
          {
            clubs.map(each=>(
              <ClubCard clubName={each.clubName} imageUrl={each.imageUrl} link={each.link} />
            ))
          }
        </div>
      </div>
      <div className="boards-team">
        <h1>Meet The Team</h1>
        <div className="team-container">
          {
            team.map(each=>(
              <SWCTeamCard name={each.name} position={each.position} email={each.email} phone={each.phone} image={each.image} program={each.program} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default CulturalBoardPage;
