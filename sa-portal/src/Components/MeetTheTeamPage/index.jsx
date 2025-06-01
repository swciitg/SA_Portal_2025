import Navbar from '../Navbar'
import { useState } from 'react'
import MeetTheTeamBanner from '../../assets/Images/mtt-banner.png'
import AchievementsCard from '../AchievementsCard'
import TeamCard from '../TeamCard'
import './MeetTheTeam.css'
import saf from '../../assets/icons/Student-Affairs-Functionaries.svg'
import hab from '../../assets/icons/Hostel-Affairs-Board.svg'
import sg from '../../assets/icons/Students-Gymkhana.svg'
import cc from '../../assets/icons/Counselling-Cell.svg'
import go from '../../assets/icons/Gymkhana-Office.svg'
import ns from '../../assets/icons/New-Sac.svg'

const MeetTheTeam = () =>{
    const [category, setCategory] = useState('Student Affairs Functionaries');
    const [teams, setTeams] = useState([
	{
		heading : "Dean",
		members: [
                {
					name: "Prof. Perumal Alagarsamy",
					title: "Dean of Students’ Affairs",
					mail: "dos@iitg.ac.in",
					phone: "+91-361-258 2083",
                    imageUrl : "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
					description: "",
				}
		]
	},
    {
		heading : "Associate Deans",
		members: [
			  	{
					name: "Prof. Perumal Alagarsamy",
					title: "Dean of Students’ Affairs",
					mail: "dos@iitg.ac.in",
					phone: "+91-361-258 2083",
                    imageUrl : "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
					description: "",
				},{
					name: "Prof. Perumal Alagarsamy",
					title: "Dean of Students’ Affairs",
					mail: "dos@iitg.ac.in",
					phone: "+91-361-258 2083",
                    imageUrl : "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
					description: "",
				},{
					name: "Prof. Perumal Alagarsamy",
					title: "Dean of Students’ Affairs",
					mail: "dos@iitg.ac.in",
					phone: "+91-361-258 2083",
                    imageUrl : "https://res.cloudinary.com/dgyo6ph3j/image/upload/v1748584974/dean_e9gohp.png",
					description: "",
				}
		]
	}
    ]);

    const groups = [
        'Student Affairs Functionaries',
        'Hostel Affairs Board',
        'Students Gymkhana',
        'Gymkhana Office',
        'Counselling Cell',
        'New SAC'
    ];
    const images = [saf, hab, sg, go, cc, ns];
    const scrolled = (e) => {
        const categorySelector = document.querySelector('.category-selector');
        const categoryIcon = document.querySelectorAll('.category-icon');
        const h = document.querySelector('.inner').getBoundingClientRect().height;
        const categorySelectorHeight = categorySelector.getBoundingClientRect().top;
        if(categorySelectorHeight-10 <= h) {
            categoryIcon.forEach(each => each.classList.add('display-none'));
            categorySelector.classList.add('category-selector-scrolled');
        }else{
            categoryIcon.forEach(each => each.classList.remove('display-none'));
            categorySelector.classList.remove('category-selector-scrolled');
        }
    }

    return (
        <div className='meet-the-team-page' >
            <div className="inner"><Navbar /></div>
            <div onScroll={scrolled} className='mtt-body'>
            <div className='mtt-banner'>
                <div>
                    <h1>Meet<br/> the <span>Team</span>.</h1>
                </div>
                <img src={MeetTheTeamBanner} alt='banner'/>
            </div>
            <ul className='category-selector'>
                {groups.map((group, index) => (
                    <li key={index} className={ group===category ? "category-active" : "category"} onClick={() => setCategory(group)}>
                        <img src={images[index]} className='category-icon' alt={group} />
                        <p>{group}</p>
                    </li>
                ))}
            </ul>
                {teams.map((team, index) => (
                <div key={index} className='team-section'>
                    <h1 className='team-heading'>{team.heading}</h1>
                    <div className='team-cards-scroll'>
                    <div className='team-cards'>
                        {team.members.map((member, idx) => (
                            <TeamCard
                                key={idx}
                                name={member.name}
                                title={member.title}
                                mail={member.mail}
                                phone={member.phone}
                                imageUrl={member.imageUrl}
                                description={member.description}
                            />
                        ))}
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default MeetTheTeam;