import "./Achievements/Achievements.css";
import AchievementsCard from "./AchievementsCard";
import emptyImage from "../assets/Images/empty.png";
import next from "../assets/Images/next.png";
import { useState, useEffect, useRef } from "react";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

const BoardsEvents = ({ eventDetails }) => {
  const [current, setCurrent] = useState(1);
  const listRef = useRef(null);

  const events = eventDetails || [
    {
      imageUrl: "",
      title: "Event 1",
    },
    {
      imageUrl: "",
      title: "Event 2",
    },
    {
      imageUrl: "",
      title: "Event 3",
    },
    {
      imageUrl: "",
      title: "Event 4",
    },
    {
      imageUrl: "",
      title: "Event 5",
    },
  ];

  const eventsLength = events.length;

  let c = current;
  if (current === eventsLength) {
    c = current - 2;
  } else if (current === 1) {
    c = current;
  } else {
    c = current - 1;
  }

  const nextButton = () => {
    if (current !== eventsLength) {
      setCurrent(current + 1);
    }
  };

  const previousButton = () => {
    if (current !== 1) {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.style.transition = "transform 0.4s ease-in-out";
      list.style.transform = `translateX(calc(${current - 1} * -500px))`;
    }
  }, [current]);

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h1>Events</h1>
        <div className="achievements-indexes">
          <button
            type="button"
            onClick={previousButton}
            className="achievements-button"
          >
            <img src={next} alt="previous-button" />
          </button>
          <button type="button" className="achievements-index">
            ...
          </button>

          {/* <button type='button' id='but1' className={c === current ? 'achievements-index active-index' : 'achievements-index'}>{c}</button>
          <button type='button' id='but2' className={c + 1 === current ? 'achievements-index active-index' : 'achievements-index'}>{c + 1}</button>
          <button type='button' id='but3' className={c + 2 === current ? 'achievements-index active-index' : 'achievements-index'}>{c + 2}</button> */}
          {/* Button 1 (Math.max(current - 1, 1)) */}
          <button
            type="button"
            id="but1"
            className={
              current === c
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() => setCurrent(Math.max(current - 1, 1))}
          >
            {/* {Math.max(current - 1, 1)} */}
            {c}
          </button>

          {/* Button 2 (Math.max(Math.min(current, total - 1), 2)) */}
          <button
            type="button"
            id="but2"
            className={
              current === c+1
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.max(Math.min(current, eventsLength - 1), 2))
            }
          >
            {/* {Math.max(Math.min(current, eventsLength - 1), 2)} */}
            {c+1}
          </button>

          {/* Button 3 (Math.min(current + 1, total)) */}
          <button
            type="button"
            id="but3"
            className={
              current === c+2
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() => setCurrent(Math.min(current + 1, eventsLength))}
          >
            {/* {Math.min(current + 1, eventsLength)} */}
            {c+2}
          </button>

          <button type="button" className="achievements-index">
            ...
          </button>
          <button
            type="button"
            onClick={nextButton}
            className="achievements-button"
          >
            <img src={next} alt="next-button" className="next-image" />
          </button>
        </div>
      </div>

      {/* Wrapper for overflow hidden */}
      <div className="achievements-cards-wrapper">
        <div className="achievements-cards" ref={listRef}>
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img
                src={getStrapiMediaUrl(event.imageUrl?.url) || emptyImage}
                alt={event.title}
              />
              <div className="event-card-content">
                <p>{event.title}</p>
                <a href={event.url} target="_blank">
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsEvents;
