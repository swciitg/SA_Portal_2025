import Navbar from '../Navbar'
import { useState } from 'react'
import MeetTheTeamBanner from '../../assets/Images/mtt-banner.png'
import './MeetTheTeam.css'
import saf from '../../assets/icons/Student-Affairs-Functionaries.svg'
import hab from '../../assets/icons/Hostel-Affairs-Board.svg'
import sg from '../../assets/icons/Students-Gymkhana.svg'
import cc from '../../assets/icons/Counselling-Cell.svg'
import go from '../../assets/icons/Gymkhana-Office.svg'
import ns from '../../assets/icons/New-Sac.svg'

const MeetTheTeam = () =>{
    const [category, setCategory] = useState('Student Affairs Functionaries');
    const groups = [
        'Student Affairs Functionaries',
        'Hostel Affairs Board',
        'Students Gymkhana',
        'Gymkhana Office',
        'Counselling Cell',
        'New SAC'
    ];
    const images = [saf, hab, sg, go, cc, ns];
    return (
        <div className='meet-the-team-page' >
            <Navbar />
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
        </div>
    )
}

export default MeetTheTeam;