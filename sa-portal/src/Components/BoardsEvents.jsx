import { useState, useEffect, useRef } from "react";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";
import emptyImage from "../assets/Images/empty.png";
import next from "../assets/Images/next.png";

const BoardsEvents = ({ eventDetails }) => {
  const [current, setCurrent] = useState(1);
  const [clickedEvent, setClicked] = useState(-1);
  const listRef = useRef(null);

  const events = eventDetails || [
    { imageUrl: "", title: "Event 1", description: "Sample description for Event 1" },
    { imageUrl: "", title: "Event 2", description: "Sample description for Event 2" },
    { imageUrl: "", title: "Event 3", description: "Sample description for Event 3" },
    { imageUrl: "", title: "Event 4", description: "Sample description for Event 4" },
    { imageUrl: "", title: "Event 5", description: "Sample description for Event 5" },
  ];

  const eventsLength = events.length;
  const showIndexStart = current === eventsLength ? current - 2 : current === 1 ? current : current - 1;

  const nextButton = () => {
    if (current < eventsLength) setCurrent(current + 1);
  };

  const previousButton = () => {
    if (current > 1) setCurrent(current - 1);
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.style.transition = "transform 0.4s ease-in-out";
      list.style.transform = `translateX(calc(${current - 1} * -510px))`;
    }
  }, [current]);

  return (
    <div className="w-full mx-auto overflow-x-hidden flex flex-col gap-6 px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[31px] font-medium text-black">Events</h1>

        <div className="flex items-center gap-[3px]">
          {/* Previous Button */}
          <button onClick={previousButton} className="bg-gray-200 w-[34px] h-[34px] flex items-center justify-center">
            <img src={next} alt="prev" className="w-[6px] h-[11px]" />
          </button>

          <span className="w-[34px] h-[34px] flex items-center justify-center text-[13px] text-gray-500 border border-gray-300">...</span>

          {[0, 1, 2].map((i) => {
            const val = showIndexStart + i;
            if (val > eventsLength) return null;
            return (
              <button
                key={val}
                onClick={() => setCurrent(val)}
                className={`w-[34px] h-[34px] text-[13px] border border-gray-300 flex items-center justify-center ${
                  current === val
                    ? "bg-blue-700 text-white underline"
                    : "text-gray-500"
                }`}
              >
                {val}
              </button>
            );
          })}

          <span className="w-[34px] h-[34px] flex items-center justify-center text-[13px] text-gray-500 border border-gray-300">...</span>

          {/* Next Button */}
          <button onClick={nextButton} className="bg-gray-200 w-[34px] h-[34px] flex items-center justify-center rotate-180">
            <img src={next} alt="next" className="w-[6px] h-[11px]" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="">
        <div className="flex gap-6 pr-6 w-fit" ref={listRef}>
          {events.map((event, index) => (
            <div
              key={index}
className={`w-[486px] ${
  clickedEvent === index ? "min-h-[345px]" : "h-[345px]"
} border-2 border-black/30 bg-white flex flex-col`}
            >
              <img
                src={getStrapiMediaUrl(event.imageUrl?.url) || emptyImage}
                alt={event.title}
                className="w-full h-[279px] object-cover"
              />

              {/* Card content */}
              <div className="flex justify-between items-start px-4 py-2">
                <div className="flex flex-col w-full">
                  <p className="text-[20px] font-medium text-black">{event.title}</p>

                  <p
                    className={`text-[13px] text-gray-700 mt-1 ${
                      clickedEvent === index ? "" : "line-clamp-1"
                    }`}
                  >
                    {event.description}
                  </p>
                </div>

                {event.description?.length > 100 && (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked(clickedEvent === index ? -1 : index);
                    }}
                    href={event.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-blue-600 ml-2 whitespace-nowrap self-end"
                  >
                    {clickedEvent === index ? "Know less" : "Know more"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsEvents;
