import EachAnnouncement from "../EachAnnouncement/index";
import getFormattedDate from "../../utils/getDate";

const Announcements = ({ announcements = [] }) => {
  return (
    <div className="w-full flex flex-col gap-4 max-h-[640px]">
      <h1 className="text-[24px] font-medium text-gray-800">Highlights</h1>
      <div className="flex flex-col gap-2 max-h-[580px] overflow-y-scroll pr-2 custom-scroll">
        {announcements.map((each, index) => (
          <EachAnnouncement
            key={index}
            text={each.text}
            url={each.url}
            date={getFormattedDate(each.createdAt)}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
