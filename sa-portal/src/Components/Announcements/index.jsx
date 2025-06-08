import { useState } from "react";
import EachAnnouncement from "../EachAnnouncement/index";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    { text: "Notice regarding Railway Concession", date: "2025-03-19" },
    {
      text: "Notice-10/2025: Students' Gymkhana Election (2025-26)",
      date: "2025-04-21",
    },
    { text: "[Notice-09/2025]: IWAB 2024-25 Scholarship", date: "2025-03-11" },
    {
      text: "[Circular-04/2025]: Gymkhana Council 2025-26",
      date: "2025-02-03",
    },
    { text: "[Notice-03/2025]: IWAB 2024-25 Scholarship", date: "2025-01-20" },
  ]);

  return (
    <div className="w-full flex flex-col gap-4 max-h-[640px]">
      <h1 className="text-[24px] font-medium text-gray-800">Announcements</h1>
      <div className="flex flex-col gap-2 max-h-[580px] overflow-y-scroll pr-2 custom-scroll">
        {announcements.map((each, index) => (
          <EachAnnouncement key={index} text={each.text} date={each.date} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
