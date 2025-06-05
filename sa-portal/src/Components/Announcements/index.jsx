import { useState,useEffect } from "react";
import Ann from '../EachAnnouncement';
import './styles.css'

const Announcements = () => {
    const [announcements,setAnnouncements] = useState([
        {text:"Notice regarding Railway Concession",date:"2025-03-19"},
        {text:"Notice-10/ 2025 regarding Students' Gymkhana Election (2025-26)",date:"2025-04-21"},
        {text:"[Notice- 09/2025]: IWAB 2024-25 Scholarship Notice",date:"2025-03-11"},
        {text:"[Circular-04/2025]: Circular regarding Students' Gymkhana Council 2025-26",date:"2025-02-03"},
        {text:"[Notice- 03/2025]: IWAB 2024-25 Scholarship Notice",date:"2025-01-20"},
        {text:"[Notice- 03/2025]: IWAB 2024-25 Scholarship Notice",date:"2025-01-20"}
    ])

    useEffect(() => {
        fetch('/api/announcements') 
        .then(res => res.json())
        .then(data => setAnnouncements(data.announcements))
        .catch(err => console.error("Failed to fetch announcements", err));
    }, []);


    return (
        <div className="announcements-container">
            <h1>Announcements</h1>
            <div className="scroll-bar">
                {announcements.map((each,index)=>(
                    <Ann 
                        key={index}
                        text={each.text}
                        date={each.date}
                    />
                )
            )}
            </div>
        </div>
        );
}

export default Announcements;