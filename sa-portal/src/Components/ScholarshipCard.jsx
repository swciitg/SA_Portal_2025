import React from 'react';
import './TeamCard/TeamCard.css';
const backendUrl = 'http://localhost:1337'

const ScholarshipCard = ({ idx, item }) => {
    const pdfUrl = item?.pdf_File?.url;
    const wordUrl = item?.word_File?.url;

    const viewPdf = () => {
        window.open(backendUrl + pdfUrl);
    };

    const viewWord = () => {
        window.open(backendUrl + wordUrl);
    };

    return (
        <div className='flex flex-row items-center px-3 py-2 sm:py-2 py-1 w-full max-w-6xl mx-auto'>
            <div className='flex-none border border-gray-300 bg-white text-center text-sm font-semibold flex items-center justify-center sm:h-14 sm:w-14 h-12 w-12 mr-4'>
                {idx}
            </div>

            <div className='border border-gray-300 flex flex-row justify-between items-center sm:h-14 h-12 flex-grow px-4 overflow-hidden'>
                <span className='text-base truncate pr-4' style={{ maxWidth: '70%' }}>
                    {item.title}
                </span>

                <div className='flex space-x-2 shrink-0'>
                    <button
                        onClick={viewPdf}
                        disabled={!pdfUrl}
                        className={`hoverCustom px-3 py-1 text-sm ${pdfUrl ? 'bg-gray-200 text-black hover:text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        PDF
                    </button>
                    <button
                        onClick={viewWord}
                        disabled={!wordUrl}
                        className={`hoverCustom px-3 py-1 text-sm ${wordUrl ? 'bg-gray-200 text-black hover:text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        WORD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;
