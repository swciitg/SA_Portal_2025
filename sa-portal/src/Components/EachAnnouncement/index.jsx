import chevronRight from "../../assets/Images/chevron-right.png";

const EachAnnouncement = ({ text, url, date }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="h-[92px] bg-neutral-100 my-1 flex justify-between p-4 items-center select-none"
    >
      <div className="space-y-2">
        <p className="text-black/40 text-xs font-medium">{date}</p>
        <p>{text}</p>
      </div>
      <div>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 18L15.5 12L9.5 6"
            stroke="black"
            strokeOpacity="0.38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
};

export default EachAnnouncement;
