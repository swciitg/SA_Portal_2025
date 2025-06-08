import chevronRight from "../../assets/Images/chevron-right.png";

const EachAnnouncement = ({ text, date }) => {
  return (
    <div className="flex justify-between bg-[#F0F1F7] w-full p-3">
      <div>
        <p className="text-[12px] text-black/40">{date}</p>
        <h2 className="text-[16px] font-normal leading-snug">{text}</h2>
      </div>
      <div className="flex justify-center items-center min-w-[22px]">
        <img src={chevronRight} alt="chevron-right" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default EachAnnouncement;
