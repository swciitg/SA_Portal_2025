import './Achievements.css';
import AchievementsCard from '../AchievementsCard';
import next from '../../assets/Images/next.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Achievements = () => {
    const [current,setCurrent] = useState(1);
    const achievements = [
        {
            imageUrl: "",
            title: "Aquatics",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imageUrl: "",
            title: "Atheletics",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imageUrl: "",
            title: "Kabaddi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imageUrl: "",
            title: "Basketball",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imageUrl: "",
            title: "Volleyball",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imageUrl: "",
            title: "Cricket",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];
    const achievementsLength = achievements.length;
    const nextButton = () => {
        if(current!=achievementsLength){
            setCurrent(current+1);
        }
    }
    const previousButton = () => {
        if(current!=1){
            setCurrent(current-1);
        }
    }
    let c = current;
    if(current === achievementsLength) {
        c = current-2;
    }else if(current === 1) {
        c = current;
    }else{
        c = current-1;
    }
    useEffect(() => {
        const list = document.querySelector('.achievements-cards');
        list.style.transform = `translateX(calc(${current-1} * 510px * -1))`;
    })

    return (
        <div className="achievements-container">
            <div className="achievements-header">
                <h1>Achievements</h1>
                <div className='achievements-indexes'>
                    <button type='button' onClick={previousButton} className='achievements-button'>
                        <img src={next} alt='previous-button'/>
                    </button>
                    <button type='button' className='achievements-index'>...</button>
                    <button type='button' id='but1' className={c === current ? 'achievements-index active-index' : 'achievements-index'}>{c}</button>
                    <button type='button' id='but2' className={c+1 === current ? 'achievements-index active-index' : 'achievements-index'}>{c+1}</button>
                    <button type='button' id='but3' className={c+2 === current ? 'achievements-index active-index' : 'achievements-index'}>{c+2}</button>
                    <button type='button' className='achievements-index'>...</button>
                    <button type='button' onClick={nextButton} className='achievements-button'>
                        <img src={next} alt='next-button' className='next-image'/>
                    </button>
                </div>
            </div>
            <div className="achievements-cards">
                {achievements.map((achievement, index) => (
                    <AchievementsCard 
                        key={index}
                        imageUrl={achievement.imageUrl}
                        title={achievement.title}
                        description={achievement.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Achievements;