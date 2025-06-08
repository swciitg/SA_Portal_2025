import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import About from "../Components/About";
import Footer from "../Components/Footer";
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className="min-h-screen bg-white text-gray-900 p-6 md:px-[50px] md:py-10">
        <div className="w-full">
          <div className="mx-auto grid md:grid-cols-3 gap-10">
            <About />
            <Announcements />
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="overflow-hidden w-full">
            <Achievements />
          </div>
        </div>

        {/* <Navbar />
          <Carousel />
          <div className='body'>
            <div className='body-top'>
              <About />
              <Announcements />
            </div>
            <Achievements />
          </div>
          <Footer /> */}
      </div>
    </>
  );
}

export default HomePage;
