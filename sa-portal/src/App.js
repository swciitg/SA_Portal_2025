import React from "react";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Announcements from "./Components/Announcements";
import About from "./Components/About";
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
    </>
  );
};

export default App;
