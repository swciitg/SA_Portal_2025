import React from "react";

const AchievementCard = ({ item, key }) => {
  return (
    <div
      key={key}
      className="flex-shrink-0 w-[400px] h-[240px] border border-gray-400"
    >
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <img
            src={item.image}
            alt="Achievement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between h-full text-sm">
          <div className="h-full flex flex-col justify-center px-2">
            <h3 className="font-semibold mb-2 text-base">{item.title}</h3>
            <p className="text-justify">{item.content}</p>
          </div>
          <a href="#" className="text-blue-600 text-xs px-2 pb-2">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
