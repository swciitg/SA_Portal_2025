import React, { useEffect, useState } from 'react';

const FitCountCalculator = ({ links }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [fitCount, setFitCount] = useState(links.length);
    const [visibleLinks, setVisibleLinks] = useState(links);
    const [dropdownList, setDropdownList] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let count = links.length;

        if (windowWidth >= 750 && windowWidth < 900) count = 5;
        else if (windowWidth >= 900 && windowWidth < 1100) count = 6;
        else if (windowWidth >= 1100 && windowWidth < 1250) count = 7;
        else if (windowWidth >= 1250 && windowWidth < 1425) count = 8;
        else if (windowWidth >= 1425 && windowWidth < 1550) count = 9;
        else count = links.length; // fallback, e.g. smaller than 750 show all or adjust as you want

        setFitCount(count);
    }, [windowWidth, links.length]);

    useEffect(() => {
        setVisibleLinks(links.slice(0, fitCount));
        setDropdownList(links.slice(fitCount));
    }, [fitCount, links]);

    return (
        <div className="hidden md:flex py-2 md:justify-between md:items-center flex-col relative">
            <div className={`hidden w-full md:flex ${dropdownList.length === 0 ? 'justify-center' : 'justify-between'} md:items-center`}>
                <div>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
                        {visibleLinks.map((link, index) => (
                            <li
                                key={index}
                                className="hover:text-blue-600 cursor-pointer whitespace-nowrap"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
                {dropdownList.length > 0 && (
                    <div className="relative">
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
                            {dropdownList.length > 0 && (
                                <li
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="hover:text-blue-600 cursor-pointer whitespace-nowrap select-none"
                                >
                                    {isDropdownOpen ? 'Less' : 'More'}{' '}
                                    <span className="ml-1">{isDropdownOpen ? '▴' : '▾'}</span>
                                </li>
                            )}
                        </ul>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-max bg-white shadow-lg rounded-md border border-gray-200 z-50">
                                <ul className="flex flex-col p-2 text-sm text-gray-700">
                                    {dropdownList.map((link, index) => (
                                        <li
                                            key={index}
                                            className="hover:text-blue-600 cursor-pointer whitespace-nowrap py-1 px-2"
                                        >
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default FitCountCalculator;
