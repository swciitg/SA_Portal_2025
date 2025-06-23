import React from "react";
import "./TeamCard.css";
import EmptyImage from "../../assets/Images/empty.png";
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";

const ProfileCard = (props) => {
  const { name, phone, mail, responsibility, title, imageUrl } = props;
  console.log(imageUrl);
  const imgurl = imageUrl || EmptyImage;
  return (
    <div className="prof-card">
      <img src={imgurl} alt={name} className="prof-img" />
      <div className="prof-right">
        <div>
          <p className="prof-name">{name}</p>
          <p className="prof-title">{title}</p>
          <p className="prof-responsibility">{responsibility || ''}</p>
        </div>
        <div>
          <div className="prof-contact">
            <img src={mailIcon} alt="mail-icon" />
            <p>{mail}</p>
          </div>
          <div className="prof-contact">
            <img src={phoneIcon} alt="phone-icon" />
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
