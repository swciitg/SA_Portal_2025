import React from "react";
import './Boards.css'
import BannerTop from "../Components/BannerTop";
import Announcements from "../Components/Announcements";
import BoardsEvents from "../Components/BoardsEvents";
import LayeredCarousel from "../Components/LayeredCarousel";
import ClubCard from "../Components/ClubCard";
import TeamCard from "../Components/TeamCard";

function WelfareBoardPage() {
  const route = ["Students' Affairs Boards", "Student's Welfare Board"];
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
  const teams = [
    {
      heading: "Chairpersons, Welfare",
      members: [
        {
          name: "Dr. Sayan Chakrabarti",
          title: "Chairperson-1, Welfare Board",
          mail: "chrwb@iitg.ac.in",
          phone: "+9 -361 2583568",
          imageUrl: "",
          description: "Chairperson, Students' Welfare Board, Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
        },
        {
          name: "Dr. Bidisha Som",
          title: "Chairperson-2, Welfare Board",
          mail: "chrwb@iitg.ac.in",
          phone: "+9 -361 2583568",
          imageUrl: "",
          description: "Chairperson, Students' Welfare Board, Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
        },
      ],
    },
    {
      heading: "Counsellors",
      members: [
        {
          name: "Dr. Sayan Chakrabarti",
          title: "Chairperson-1, Welfare Board",
          mail: "chrwb@iitg.ac.in",
          phone: "+9 -361 2583568",
          imageUrl: "",
          description: "Chairperson, Students' Welfare Board, Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
        },
        {
          name: "Dr. Bidisha Som",
          title: "Chairperson-2, Welfare Board",
          mail: "chrwb@iitg.ac.in",
          phone: "+9 -361 2583568",
          imageUrl: "",
          description: "Chairperson, Students' Welfare Board, Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
        },
        {
          name: "Dr. Sayan Chakrabarti",
          title: "Chairperson-1, Welfare Board",
          mail: "chrwb@iitg.ac.in",
          phone: "+9 -361 2583568",
          imageUrl: "",
        },
        {
          name: "Dr. Bidisha Som",
          title: "Chairperson-2, Welfare Board",
          mail: "chrwb@iitg.ac.in",
          phone: "+9 -361 2583568",
          imageUrl: "",
          description: "Chairperson, Students' Welfare Board, Students’ Affairs Section, 3rd Floor, Administrative Building, Indian Institute of Technology Guwahati, Guwahati – 781039, Assam, India",
        },
      ],
    },
  ]
  
  return (
    <>
      <BannerTop heading="Student’s Welfare Board" blueText="Welfare Board" route={route}/>
      <div className="boards-about">
        <div className="boards-about-text">
          <h1>
            Welcome to <br/>Student’s Welfare Board
          </h1>
          <p>
            The Students’ Welfare Board is the body that addresses, co-ordinates and executes all activities related to the overall welfare and well-being of the students of the institute.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel />
        </div>
      </div>
      <div className="boards-announcements"><Announcements /></div>
      <div className="boards-events"><BoardsEvents /></div>
      <div className="boards-clubs">
        <h1>Clubs - Under Technical Board</h1>
        <div className="clubs-container">
          {
            clubs.map(each=>(
              <ClubCard clubName={each.clubName} imageUrl={each.imageUrl} link={each.link} />
            ))
          }
        </div>
      </div>
      <div className="boards-team">
        <h1>Meet The Team - Student's Welfare Board</h1>
        <div className="teams-container">
          {teams.map((team, index) => (
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
                      imageUrl={member.imageUrl}
                      description={member.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WelfareBoardPage;
