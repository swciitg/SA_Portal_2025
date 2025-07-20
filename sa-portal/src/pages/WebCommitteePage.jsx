import React, { useEffect, useState } from "react";
import BannerTop from "../Components/BannerTop";
import LayeredCarousel from "../Components/LayeredCarousel";
import SWCAnnouncementCard from "../Components/SWCAnnouncementCard";
import SWCTeamCard from "../Components/SWCTeamCard";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import BoardsEvents from "../Components/BoardsEvents";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";
import getFormattedDate from "../utils/getDate";
import HeadingSection from "../Components/HeadingSection";

export default function WebCommitteePage() {
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [services, setServices] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementsRes, eventsRes, servicesRes, teamRes] =
          await Promise.all([
            sendApiRequest(ROUTES.WEB_COMMITTEE_ANNOUNCEMENTS),
            sendApiRequest(ROUTES.WEB_COMMITTEE_EVENTS),
            sendApiRequest(ROUTES.WEB_COMMITTEE_SERVICES),
            sendApiRequest(ROUTES.WEB_COMMITTEE_TEAM),
          ]);

        console.log({ announcementsRes, eventsRes, servicesRes, teamRes });

        setAnnouncements(announcementsRes?.data);
        setEvents(eventsRes?.data);
        setServices(servicesRes?.data);
        setTeam(teamRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(team[0]);

  return (
    <>
      <BannerTop
        heading={
          <div className="flex flex-col sm:space-y-2 md:space-y-3">
            <p>Students' Web</p>
            <p className="text-blue-400">Committee</p>
          </div>
        }
        route={["Student Affairs Board", "Student's Web Committee"]}
      />

      {/* Intro and Carousel */}
      <div className="w-full flex flex-col lg:flex-row md:space-x-10 items-center justify-around px-10 sm:px-10 md:px-32 py-10 md:py-16 lg:py-20 mt-10">
        <div className="flex flex-col w-full lg:w-1/2 space-y-2">
          <p className="font-semibold text-3xl">
            Welcome to <br /> Students' Web Committee
          </p>
          <p className="text-black/60">
            We are group of Product Developers, Product Designers, and Product
            Managers who work round the clock to build Websites, Apps and
            Products. We are the Ideators and Executors of great products like
            One Stop, Elections Portal, Placement Portal and Lots of Cool
            websites launching soon this summer.
          </p>
        </div>
        <div className="size-60 sm:size-80 md:size-96 mt-10 shrink-0">
          <LayeredCarousel fetchUrl={ROUTES.WEB_COMMITTEE_CAROUSAL_IMG}/>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="px-6 sm:px-20 md:px-32">
        <HeadingSection
          heading={"Announcements"}
          children={
            <div className="flex flex-col max-h-[500px] overflow-y-scroll overflow-x-hidden">
              {announcements.map((announcement, idx) => (
                <SWCAnnouncementCard
                  key={idx}
                  title={announcement.title}
                  date={getFormattedDate(announcement.createdAt)}
                  url={announcement.url}
                />
              ))}
            </div>
          }
        />
        {/* Events Section */}
        <HeadingSection
          heading={"Events"}
          children={<BoardsEvents eventDetails={events} />}
        />

        {/* Our Services Section */}
        <HeadingSection
          heading={"Our Services"}
          children={
            <div className="flex flex-col md:flex-row items-start justify-between flex-wrap">
              <div className="text-black/60 w-full md:w-80 flex-shrink-0">
                We create products, and strive to continually improve them. Our
                team has the zeal to make a product or service better, and
                continually adopt to changing tech, delivering quality products.
              </div>
              <div className="mt-6 flex gap-3 sm:gap-6 overflow-clip flex-wrap items-center transition-transform duration-500 ease-in-out">
                {services.map((service, idx) => (
                  <ServiceCard
                    key={idx}
                    title={service.title}
                    image={getStrapiMediaUrl(service.imageUrl?.url)}
                    url={service.url}
                  />
                ))}
              </div>
            </div>
          }
        />

        {/* Meet the team Section */}
        <HeadingSection
          heading={"Meet The Team"}
          children={
            <div className="my-10 flex flex-wrap justify-around items-start gap-6">
              {team.map((member, idx) => (
                <SWCTeamCard
                  key={idx}
                  name={member.name}
                  position={member.position}
                  email={member.email}
                  phone={member.phone}
                  image={getStrapiMediaUrl(member.imageUrl?.url)}
                  program={member.branch}
                />
              ))}
            </div>
          }
        />
      </div>
    </>
  );
}

function ServiceCard({ title, image, url }) {
  return (
    <div className="size-60 sm:size-72 flex flex-col justify-between border-2 mx-auto px-2 py-4 md:px-6 md:py-8">
      <p className="text-3xl font-normal mb-4">{title}</p>
      <img
        src={image}
        alt={title}
        className="w-full h-2/3 mb-2 aspect-video object-cover"
      />
      <a href={url} className="text-xs text-blue-500">
        Learn more
      </a>
    </div>
  );
}

// const announcements = [
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Notice regarding railway concession",
//     date: "2025-04-21",
//     url: "https://iitg.ac.in",
//   },
// ];
// const dummySwcTeam = [
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
//   {
//     name: "John Doe",
//     position: "Overall Coordinator",
//     email: "johndoe99@outlook.com",
//     phone: "1234567890",
//     image: "agriculture-bg.jpg",
//     program: "B.Tech in Chemical Engineering",
//   },
// ];
// const events = [
//   {
//     title: "Hacktoberfest",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "HackStack",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "Something else",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "Else else",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "Hacktoberfest1",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "HackStack1",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "Something else2",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
//   {
//     title: "Else else3",
//     image: "agriculture-bg.jpg",
//     url: "https://swc.iitg.ac.in",
//   },
// ];
// const services = [
//   {
//     title: "One Stop",
//     image: "agriculture-bg.jpg",
//     url: "https://iitg.ac.in",
//   },
//   {
//     title: "Election Portal",
//     image: "agriculture-bg.jpg",
//     url: "https://iitg.ac.in",
//   },
// ];
