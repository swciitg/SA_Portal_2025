import EmptyImage from "../../assets/Images/empty.png";
import "./AchievementsCard.css";

const AchievementsCard = (props) => {
  const { imageUrl, title, description } = props;

  return (
    <div className="achievement-card">
      <img
        src={imageUrl}
        alt="Achievement-image"
        className="achievement-image"
      />
      <div className="achievement-right">
        <h2 className="achievement-title">{title}</h2>
        <div className="achievement-description">{description}</div>
        <a href="">Learn More</a>
      </div>
    </div>
  );
};

export default AchievementsCard;
