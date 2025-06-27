import "./Achievements/Achievements.css";
import AchievementsCard from "./AchievementsCard";
import emptyImage from "../assets/Images/empty.png";
import next from "../assets/Images/next.png";
import { useState, useEffect, useRef } from "react";

const BoardsEvents = ({eventDetails}) => {
  const [current, setCurrent] = useState(1);
  const listRef = useRef(null);

  const events = eventDetails || [
    {
      imageUrl: "",
      name: "Event 1",
    },
    {
      imageUrl: "",
      name: "Event 2",
    },
    {
      imageUrl: "",
      name: "Event 3",
    },
    {
      imageUrl: "",
      name: "Event 4",
    },
    {
      imageUrl: "",
      name: "Event 5",
    },

  ];

  const eventsLength = events.length;

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

  let c = current;
  if (current === eventsLength) {
    c = current - 2;
  } else if (current === 1) {
    c = current;
  } else {
    c = current - 1;
  }

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
              current === Math.max(current - 1, 1)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() => setCurrent(Math.max(current - 1, 1))}
          >
            {Math.max(current - 1, 1)}
          </button>

          {/* Button 2 (Math.max(Math.min(current, total - 1), 2)) */}
          <button
            type="button"
            id="but2"
            className={
              current === Math.max(Math.min(current, eventsLength - 1), 2)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.max(Math.min(current, eventsLength - 1), 2))
            }
          >
            {Math.max(Math.min(current, eventsLength - 1), 2)}
          </button>

          {/* Button 3 (Math.min(current + 1, total)) */}
          <button
            type="button"
            id="but3"
            className={
              current === Math.min(current + 1, eventsLength)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.min(current + 1, eventsLength))
            }
          >
            {Math.min(current + 1, eventsLength)}
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
          {events.map((event,index) => (
            <div className="event-card" key={index}>
              <img src={process.env.REACT_APP_API_BASE_URL+event.imageUrl?.url || emptyImage} alt={event.name} />
              <div className="event-card-content">
                <p>{event.name}</p>
                <a>Know More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsEvents;
