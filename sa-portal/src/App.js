import React from "react";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
const App = () => {


  return (
    <>
      <Navbar />
      <Carousel />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
