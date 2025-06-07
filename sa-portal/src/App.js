import React from "react";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import ScholarshipPage from "./pages/ScholarshipPage";
import SACMinutes from "./pages/SACMinutes";
import ServicesPage from "./pages/ServicesPage";
import SWCPage from "./pages/SWCPage";
const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <HomePage />
      <ServicesPage />
      {/* <SWCPage /> */}
      <Footer />
    </>
  );
};

export default App;
