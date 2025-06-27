import { useState } from "react";
import EachAnnouncement from "../EachAnnouncement/index";

const Announcements = ({ announcements = [] }) => {
  return (
    <div className="w-full flex flex-col gap-4 max-h-[640px]">
      <h1 className="text-[24px] font-medium text-gray-800">Announcements</h1>
      <div className="flex flex-col gap-2 max-h-[580px] overflow-y-scroll pr-2 custom-scroll">
        {announcements.map((each, index) => (
          <EachAnnouncement
            key={index}
            text={each.text}
            date={new Date(each.createdAt).toISOString().slice(0, 10)}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
