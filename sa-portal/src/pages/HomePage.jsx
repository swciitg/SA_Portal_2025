import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import About from "../Components/About";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className='body'>
        <div className='body-top'>
          <About/>
          <Announcements/>
        </div>
      <Achievements />
      </div>
    </>
  );
}   

export default HomePage;