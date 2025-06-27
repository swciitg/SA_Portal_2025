import "./Achievements.css";
import AchievementsCard from "../AchievementsCard";
import next from "../../assets/Images/next.png";
import { useState, useEffect, useRef } from "react";
import getStrapiMediaUrl from "../../utils/strApiMediaUrl";

const Achievements = ({ achievements }) => {
  const [current, setCurrent] = useState(1);
  const listRef = useRef(null);

  const achievementsLength = achievements.length;

  const nextButton = () => {
    if (current !== achievementsLength) {
      setCurrent(current + 1);
    }
  };

  const previousButton = () => {
    if (current !== 1) {
      setCurrent(current - 1);
    }
  };

  let c = current;
  if (current === achievementsLength) {
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
        <h1>Achievements</h1>
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
              current === Math.max(Math.min(current, achievementsLength - 1), 2)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.max(Math.min(current, achievementsLength - 1), 2))
            }
          >
            {Math.max(Math.min(current, achievementsLength - 1), 2)}
          </button>

          {/* Button 3 (Math.min(current + 1, total)) */}
          <button
            type="button"
            id="but3"
            className={
              current === Math.min(current + 1, achievementsLength)
                ? "achievements-index active-index"
                : "achievements-index"
            }
            onClick={() =>
              setCurrent(Math.min(current + 1, achievementsLength))
            }
          >
            {Math.min(current + 1, achievementsLength)}
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
          {achievements.map((achievement, index) => {
            console.log(getStrapiMediaUrl(achievement.imageUrl?.url));
            return (
              <AchievementsCard
                key={index}
                imageUrl={getStrapiMediaUrl(achievement.imageUrl?.url)}
                title={achievement.title}
                description={achievement.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
