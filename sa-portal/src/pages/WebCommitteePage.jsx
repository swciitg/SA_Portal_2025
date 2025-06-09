import React, { useState } from "react";
import BannerTop from "../Components/BannerTop";
import LayeredCarousel from "../Components/LayeredCarousel";
import SWCAnnouncementCard from "../Components/SWCAnnouncementCard";
import SWCTeamCard from "../Components/SWCTeamCard";

const CARD_WIDTH = 400;
const SCROLL_CARDS = 3;

const ITEMS_PER_SLIDE = 3;

export default function WebCommitteePage() {
  const announcements = [
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
    {
      title: "Notice regarding railway concession",
      date: "2025-04-21",
      url: "https://iitg.ac.in",
    },
  ];
  const swcTeam = [
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
    {
      name: "John Doe",
      position: "Overall Coordinator",
      email: "johndoe99@outlook.com",
      phone: "1234567890",
      image: "agriculture-bg.jpg",
      program: "B.Tech in Chemical Engineering",
    },
  ];
  const events = [
    {
      title: "Hacktoberfest",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "HackStack",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "Something else",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "Else else",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "Hacktoberfest1",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "HackStack1",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "Something else2",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
    {
      title: "Else else3",
      image: "agriculture-bg.jpg",
      url: "https://swc.iitg.ac.in",
    },
  ];
  const services = [
    {
      title: "One Stop",
      image: "agriculture-bg.jpg",
      url: "https://iitg.ac.in",
    },
    {
      title: "Election Portal",
      image: "agriculture-bg.jpg",
      url: "https://iitg.ac.in",
    },
  ];

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, events.length * CARD_WIDTH - window.innerWidth);

  const scrollRight = () => {
    setOffset((prev) => Math.min(prev + SCROLL_CARDS * CARD_WIDTH, maxOffset));
  };

  const scrollLeft = () => {
    setOffset((prev) => Math.max(prev - SCROLL_CARDS * CARD_WIDTH, 0));
  };

  const maxIndex = events.length - ITEMS_PER_SLIDE;
  const sliced = events.slice(index, index + ITEMS_PER_SLIDE);

  const next = () => {
    if (index + ITEMS_PER_SLIDE <= maxIndex) setIndex(index + ITEMS_PER_SLIDE);
  };

  const prev = () => {
    if (index - ITEMS_PER_SLIDE >= 0) setIndex(index - ITEMS_PER_SLIDE);
  };

  return (
    <>
      <BannerTop
        heading={
          <div className="flex flex-col space-y-3">
            <p>Student's Web</p>
            <p className="text-blue-400">Committee</p>
          </div>
        }
        route={["Student Affairs Board", "Student's Web Committee"]}
      />
      {/* Intro and Carousel */}
      <div className="flex items-center justify-around my-8 mx-8 sm:my-12 sm:mx-12 md:my-20 md:mx-20">
        <div className="flex flex-col w-1/2 space-y-2">
          <p className="font-semibold text-3xl">
            Welcome to <br /> Student's Web Committee
          </p>
          <p className="text-black/60">
            We are group of Product Developers, Product Designers, and Product
            Managers who work round the clock to build Websites, Apps and
            Products. We are the Ideators and Executors of great products like
            One Stop, Elections Portal, Placement Portal and Lots of Cool
            websites launching soon this summer.
          </p>
        </div>
        <LayeredCarousel />
      </div>
      {/* Announcements Section */}
      <Section
        heading={"Announcements"}
        children={
          <div className="flex flex-col max-h-[500px] overflow-y-scroll overflow-x-hidden">
            {announcements.map((announcement, idx) => (
              <SWCAnnouncementCard
                key={idx}
                title={announcement.title}
                date={announcement.date}
                url={announcement.url}
              />
            ))}
          </div>
        }
      />
      {/* Events Section */}
      <Section
        heading={"Events"}
        children={
          <div>
            <div className="w-full">
              <div className="flex items-center justify-end mb-4">
                <div className="space-x-2">
                  <button onClick={scrollLeft} className="px-3 py-1 border">
                    &lt;
                  </button>
                  <button onClick={scrollRight} className="px-3 py-1 border">
                    &gt;
                  </button>
                </div>
              </div>

              <div className="overflow-hidden w-full">
                <div
                  className="flex gap-6 overflow-clip transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${offset}px)` }}
                >
                  {events.map((event, idx) => (
                    <EventCard
                      key={idx}
                      title={event.title}
                      image={event.image}
                      url={event.url}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      />
      {/* Our Services Section */}
      <Section
        heading={"Our Services"}
        children={
          <div className="flex flex-col md:flex-row items-start justify-between space-x-">
            <div className="text-black/60 w-full md:w-80 flex-shrink-0">
              We create products, and strive to continually improve them. Our
              team has the zeal to make a product or service better, and
              continually adopt to changing tech, delivering quality products.
            </div>
            <div
              className="flex gap-6 overflow-clip transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  image={service.image}
                  url={service.url}
                />
              ))}
            </div>
          </div>
        }
      />
      {/* Meet the team Section */}
      <Section
        heading={"Meet The Team"}
        children={
          <div className="my-10 flex flex-wrap justify-around items-start gap-6">
            {swcTeam.map((member, idx) => (
              <SWCTeamCard
                key={idx}
                name={member.name}
                position={member.position}
                email={member.email}
                phone={member.phone}
                image={member.image}
                program={member.program}
              />
            ))}
          </div>
        }
      />
    </>
  );
}

function Section({ heading, children }) {
  return (
    <div className="border-t-2 px-32 my-20">
      <h2 className="font-semibold text-3xl mb-10 pt-6 border-t-4 border-blue-500 inline-block px-4 text-center">
        {heading}
      </h2>
      {children}
    </div>
  );
}

function EventCard({ title, url, image }) {
  return (
    <div className="overflow-hidden border-2 flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="w-[485px] h-[280px] overflow-hidden"
      />
      <div className="flex items-center justify-between p-3">
        <div>{title}</div>
        <a href={url} className="flex space-x-0.5">
          <span className="text-xs text-blue-700">Know more</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25"
              stroke="#0E45E1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function ServiceCard({ title, image, url }) {
  return (
    <div className="border-2 px-6 py-8">
      <p className="text-3xl font-normal mb-4">{title}</p>
      <img src={image} alt={title} className="w-80 h-52 mb-2" />
      <a href={url} className="text-xs text-blue-500">
        Learn more
      </a>
    </div>
  );
}
