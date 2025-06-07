import React from 'react';
import './TeamCard.css';
<<<<<<< HEAD
import DeanImage from '../../assets/Images/dean.png';
=======
import EmptyImage from '../../assets/Images/empty.png'
>>>>>>> 991a471c167f1affea4670c0ea18e989301f24d3
import phoneIcon from '../../assets/icons/phone.png'
import mailIcon from '../../assets/icons/mail.png'

const ProfileCard = (props) => {
<<<<<<< HEAD
    const {name,phone,mail,title} = props; 
  return (
    <div className="prof-card">
      <img src={DeanImage} alt={"Prof. Perumal Alagarsamy" || name} className="profile-img" />
      <div className="prof-right">
        <div>
            <h2 className="prof-name">{"Prof. Perumal Alagarsamy" || name}</h2>
            <p className="prof-title">{"Dean of Students’ Affairs" || title}</p>
=======
    const {name,phone,mail,title,imageUrl} = props; 
    console.log(imageUrl)
    const imgurl = imageUrl || EmptyImage;
  return (
    <div className="prof-card">
      <img src={imgurl} alt={name} className="prof-img" />
      <div className="prof-right">
        <div>
            <p className="prof-name">{name}</p>
            <p className="prof-title">{title}</p>
>>>>>>> 991a471c167f1affea4670c0ea18e989301f24d3
        </div>
        <div>
            <div className="prof-contact">
                <img src={mailIcon} alt='mail-icon'/>
<<<<<<< HEAD
                <p>{"dos@iitg.ac.in" || phone}</p>
            </div>
            <div className="prof-contact">
                <img src={phoneIcon} alt='phone-icon' />
                <p>{"+91-361-258 2083" || mail}</p>
=======
                <p>{mail}</p>
            </div>
            <div className="prof-contact">
                <img src={phoneIcon} alt='phone-icon' />
                <p>{phone}</p>
>>>>>>> 991a471c167f1affea4670c0ea18e989301f24d3
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
