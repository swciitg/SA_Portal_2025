import Carousel from "../Components/Carousel";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import About from "../Components/About";
import './HomePage.css'

const HomePage = () => {
  return (
    <>
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