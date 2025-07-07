import Carousel from "../Components/Carousel";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import HomeAnnouncements from "../Components/HomeAnnouncements";
import About from "../Components/About";
import "./HomePage.css";
import { useEffect, useState } from "react";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";

const HomePage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsRes, achievementsRes] = await Promise.all([
          sendApiRequest(ROUTES.HOMEPAGE_ANNOUNCEMENTS),
          sendApiRequest(ROUTES.HOMEPAGE_ACHIEVEMENTS),
        ]);

        console.log({ announcementsRes, achievementsRes });
        console.log(achievementsRes.data)

        setAnnouncements(announcementsRes?.data);
        setAchievements(achievementsRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Carousel />
      <HomeAnnouncements announcements={announcements} />
      <div className="min-h-screen bg-white text-gray-900 p-6 md:px-[50px] md:py-10">
        <div className="w-full">
          <div className="mx-auto grid md:grid-cols-3 gap-10">
            <About />
            <Announcements announcements={announcements} />
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="overflow-hidden w-full">
            <Achievements achievements={achievements} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
