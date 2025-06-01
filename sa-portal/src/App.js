import React from "react";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Announcements from "./Components/Announcements";
import Achievements from "./Components/Achievements";
import About from "./Components/About";
import MeetTheTeamPage from "./Components/MeetTheTeamPage";
import "./App.css";
const App = () => {
 

  return (
    <>
      <Navbar />
      <Carousel />
      <div className='body'>
        <About/>
        <Announcements/>
      </div>
      <Achievements />
    </>
    // <MeetTheTeamPage />
  );
};

export default App;
