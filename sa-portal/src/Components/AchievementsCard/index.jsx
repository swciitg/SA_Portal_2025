import { useState, useRef, useEffect } from "react";

const AchievementsCard = ({ imageUrl, title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("140px");

  useEffect(() => {
    if (expanded && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setMaxHeight(`${contentHeight}px`);
    } else {
      setMaxHeight("140px");
    }
  }, [expanded, description]);

  return (
    <div
      className="flex w-[486px] min-h-[263px] bg-white border border-gray-300 transition-all duration-500 overflow-hidden"
      style={{ height: expanded ? `auto` : "263px" }}
    >
      <img src={imageUrl} alt="Achievement" className="w-[210px] object-cover" />
      
      <div className="flex flex-col flex-1 p-7 justify-between">
        <h2 className="text-[20px] font-medium mb-4">{title}</h2>

        <div
          ref={contentRef}
          className="text-[16px] text-black/50 overflow-hidden transition-all duration-500"
          style={{ maxHeight }}
        >
          {description}
        </div>

        {/* Button pinned at bottom */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
          className="text-[13px] text-blue-700 mt-4 self-start"
        >
          {expanded ? "Show Less" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

export default AchievementsCard;
