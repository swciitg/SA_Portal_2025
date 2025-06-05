import React from 'react';
import './TeamCard.css';
import DeanImage from '../../assets/Images/dean.png';
import phoneIcon from '../../assets/icons/phone.png'
import mailIcon from '../../assets/icons/mail.png'

const ProfileCard = (props) => {
    const {name,phone,mail,title} = props; 
  return (
    <div className="prof-card">
      <img src={DeanImage} alt={"Prof. Perumal Alagarsamy" || name} className="profile-img" />
      <div className="prof-right">
        <div>
            <h2 className="prof-name">{"Prof. Perumal Alagarsamy" || name}</h2>
            <p className="prof-title">{"Dean of Students’ Affairs" || title}</p>
        </div>
        <div>
            <div className="prof-contact">
                <img src={mailIcon} alt='mail-icon'/>
                <p>{"dos@iitg.ac.in" || phone}</p>
            </div>
            <div className="prof-contact">
                <img src={phoneIcon} alt='phone-icon' />
                <p>{"+91-361-258 2083" || mail}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
