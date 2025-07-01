import React from 'react';
import { Link } from 'react-router-dom';

const MinuteCard = ({ idx, title,pdfUrl ="#" }) => {
    return (
        <div className='flex flex-row items-center px-3 py-1 w-full'>
            {/* Index Box with responsive sizing */}
            <div className='flex-none border border-gray-300 bg-white text-center text-sm font-semibold flex items-center justify-center sm:h-10 sm:w-10 h-9 w-9 mr-4'>
                {idx}
            </div>

            {/* Title and Button */}
            <div className='border border-gray-300 flex flex-row justify-between items-center sm:h-10 h-9 flex-grow px-4 overflow-hidden'>
                <span className='text-sm truncate pr-4' style={{ maxWidth: '70%' }}>
                    {title}
                </span>

                <div className='flex space-x-2 shrink-0'>
                    <Link to={pdfUrl} target='_blank' className='hoverCustom bg-gray-200 hover:text-white text-black px-3 py-1 text-sm'>
                        PDF
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MinuteCard;
