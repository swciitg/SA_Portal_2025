import "./Achievements/Achievements.css";
import AchievementsCard from "./AchievementsCard";
import emptyImage from "../assets/Images/empty.png";
import next from "../assets/Images/next.png";
import { useState, useEffect, useRef } from "react";

const BoardsFacilities = ({facilityDetails}) => {
  const [current, setCurrent] = useState(1);
  const listRef = useRef(null);

  const facilities = facilityDetails || [
    {
      imageUrl: "",
      name: "Facility 1",
    },
    {
      imageUrl: "",
      name: "Facility 2",
    },
    {
      imageUrl: "",
      name: "Facility 3",
    },
    {
      imageUrl: "",
      name: "Facility 4",
    },
    {
      imageUrl: "",
      name: "Facility 5",
    },

  ];

  const facilitiesLength = facilities.length;

  const nextButton = () => {
    if (current !== facilitiesLength) {
      setCurrent(current + 1);
    }
  };

  const previousButton = () => {
    if (current !== 1) {
      setCurrent(current - 1);
    }
  };

  let c = current;
  if (current === facilitiesLength) {
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
      list.style.transform = `translateX(calc(${current - 1} * -400px))`;
    }
  }, [current]);

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <div className="achievements-indexes ml-auto">
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
          <button
            type="button"
            id="but2"
            className={
              current === Math.max(Math.min(current, facilitiesLength - 1), 2)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.max(Math.min(current, facilitiesLength - 1), 2))
            }
          >
            {Math.max(Math.min(current, facilitiesLength - 1), 2)}
          </button>
          <button
            type="button"
            id="but3"
            className={
              current === Math.min(current + 1, facilitiesLength)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.min(current + 1, facilitiesLength))
            }
          >
            {Math.min(current + 1, facilitiesLength)}
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

      <div className="achievements-cards-wrapper">
        <div className="flex w-fit" ref={listRef}>
          {facilities.map((each,index) => (
            <div className="p-5 flex flex-col justify-between bg-[#FFFFFFDE] h-[335px] w-[384px] border border-[#E0E2EE] border-solid ml-4" key={index}>
              <h2 className="text-[25px] font-medium">{each.name}</h2>
              <img className="w-[328px] h-[215px]" src={process.env.REACT_APP_API_BASE_URL+each.imageUrl?.url || emptyImage} alt={each.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsFacilities;
