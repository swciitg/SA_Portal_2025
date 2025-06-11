import EmptyImage from '../../assets/Images/empty.png';
import './AchievementsCard.css';

const AchievementsCard = (props) => {
    const {imageUrl,title,description} = props;
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <div className="achievement-card">
            <img src={EmptyImage || imageUrl} alt="Achievement-image" className='achievement-image'/>
            <div className='achievement-right'>
                <h2 className='achievement-title'>{title || "AQUATICS"}</h2>
                <div className='achievement-description'>{description || desc}</div>
                <a href="">Learn More</a>
            </div>
        </div>
    );
}

export default AchievementsCard;