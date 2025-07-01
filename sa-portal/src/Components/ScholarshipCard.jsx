import React from 'react';
import './TeamCard/TeamCard.css';

const ScholarshipCard = ({ idx, title }) => {
    return (
        <div className='flex flex-row items-center px-3 py-2 sm:py-2 py-1 w-full max-w-6xl mx-auto'>
            <div className='flex-none border border-gray-300 bg-white text-center text-sm font-semibold flex items-center justify-center sm:h-14 sm:w-14 h-12 w-12 mr-4'>
                {idx}
            </div>

            <div className='border border-gray-300 flex flex-row justify-between items-center sm:h-14 h-12 flex-grow px-4 overflow-hidden'>
                <span className='text-base truncate pr-4' style={{ maxWidth: '70%' }}>
                    {title}
                </span>

                <div className='flex space-x-2 shrink-0'>
                    <button className='hoverCustom bg-gray-200 hover:text-white text-black px-3 py-1 text-sm'>
                        PDF
                    </button>
                    <button className='hoverCustom bg-gray-200 hover:text-white text-black px-3 py-1 text-sm'>
                        WORD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;
