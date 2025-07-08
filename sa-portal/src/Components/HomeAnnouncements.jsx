import speakerIcon from "../assets/Images/speaker.png";
import "./HomeAnnouncements.css";

const HomeAnnouncements = ({ announcements = [] }) => {
  return (
    <div className="w-full max-w-full md:flex h-fit">
      <div className="h-[34px] lg:h-[40px] box-border flex flex-shrink-0 bg-blue-600 w-full md:w-[220px] text-white text-[17px] lg:text-[20px] p-2 justify-center items-center gap-2 z-10">
        <img width="20" height="20" src={speakerIcon} alt="speaker" />
        Announcements
      </div>
      <div className="w-full h-[40px]">
        <div className="flex slide">
          {announcements.map((each) => (
            <a
              key={each.id}
              href={each.url}
              className="flex w-fit h-[40px] mx-2"
            >
              <p className="text-xs mt-1 mr-1 text-red-500">New</p>
              <h4 className="font-bold mt-auto mb-auto w-[max-content]">
                {each.text}
              </h4>
              <div className="w-[1px] h-[80%] my-auto ml-4 border border-gray-500"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAnnouncements;
