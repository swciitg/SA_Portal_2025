import React from "react";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ServicesAccordian from "./Components/ServicesAccordian";
import SWCTeamCard from "./Components/SWCTeamCard";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <ServicesAccordian />
      {/* <div className="flex flex-wrap gap-5 px-10">
        <SWCTeamCard />
        <SWCTeamCard />
        <SWCTeamCard />
      </div> */}
      <Footer />
    </>
  );
};

export default App;
