import React from 'react';

const SAcard = ({ course, title }) => {
  return (
    <div className="flex w-full h-12 sm:h-14 text-sm sm:text-base">
      {/* Course code box */}
      <div className="w-20 sm:w-28 border-t border-r border-gray-300 bg-white font-semibold flex items-center justify-center">
        {course}
      </div>

      {/* Title box, full width minus course code */}
      <div className="flex-grow border-t border-gray-300 flex items-center pl-4 truncate">
        {title}
      </div>
    </div>
  );
};

export default SAcard;
