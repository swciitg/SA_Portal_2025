import React from 'react';
import './TeamCard.css';
<<<<<<< HEAD
import EmptyImage from '../../assets/Images/empty.png'
=======
import DeanImage from '../../assets/Images/dean.png';
>>>>>>> 3eaaedd77868df6ac3110d581f3c5651e22ad288
import phoneIcon from '../../assets/icons/phone.png'
import mailIcon from '../../assets/icons/mail.png'

const ProfileCard = (props) => {
<<<<<<< HEAD
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
=======
    const {name,phone,mail,title} = props; 
  return (
    <div className="prof-card">
      <img src={DeanImage} alt={"Prof. Perumal Alagarsamy" || name} className="profile-img" />
      <div className="prof-right">
        <div>
            <h2 className="prof-name">{"Prof. Perumal Alagarsamy" || name}</h2>
            <p className="prof-title">{"Dean of Students’ Affairs" || title}</p>
>>>>>>> 3eaaedd77868df6ac3110d581f3c5651e22ad288
        </div>
        <div>
            <div className="prof-contact">
                <img src={mailIcon} alt='mail-icon'/>
<<<<<<< HEAD
                <p>{mail}</p>
            </div>
            <div className="prof-contact">
                <img src={phoneIcon} alt='phone-icon' />
                <p>{phone}</p>
=======
                <p>{"dos@iitg.ac.in" || phone}</p>
            </div>
            <div className="prof-contact">
                <img src={phoneIcon} alt='phone-icon' />
                <p>{"+91-361-258 2083" || mail}</p>
>>>>>>> 3eaaedd77868df6ac3110d581f3c5651e22ad288
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
