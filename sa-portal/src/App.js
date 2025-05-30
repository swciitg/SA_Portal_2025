import React from "react";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import ScholarshipPage from "./pages/ScholarshipPage";
import SACMinutes from "./pages/SACMinutes";
const App = () => {


  return (
    <>
      <Navbar />
      <Carousel />
      <SACMinutes/>
      <Footer />
    </>
  );
};

export default App;
