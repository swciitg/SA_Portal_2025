import React, { useState } from "react";
import Announcements from "../Components/Announcements";
import AchievementCard from "../Components/AchievementCard";

const achievements = [
    {
        title: "AQUATICS",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "ATHLETICS",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "TECH INNOVATION",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    },
    // Use fallback for missing ones
    {
        title: "CULTURAL",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "CULTURAL",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    }, {
        title: "CULTURAL",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    }, {
        title: "CULTURAL",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    }, {
        title: "CULTURAL",
        content: "...",
        image: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
    },
];
const CARD_WIDTH = 400; // Approx width of each card including gap
const SCROLL_CARDS = 3;

const ITEMS_PER_SLIDE = 3;

export default function StudentAffairsPage() {
    const [index, setIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const maxOffset = Math.max(0, achievements.length * CARD_WIDTH - window.innerWidth);

    const scrollRight = () => {
        setOffset((prev) => Math.min(prev + SCROLL_CARDS * CARD_WIDTH, maxOffset));
    };

    const scrollLeft = () => {
        setOffset((prev) => Math.max(prev - SCROLL_CARDS * CARD_WIDTH, 0));
    };

    const maxIndex = achievements.length - ITEMS_PER_SLIDE;
    const sliced = achievements.slice(index, index + ITEMS_PER_SLIDE);

    const next = () => {
        if (index + ITEMS_PER_SLIDE <= maxIndex) setIndex(index + ITEMS_PER_SLIDE);
    };

    const prev = () => {
        if (index - ITEMS_PER_SLIDE >= 0) setIndex(index - ITEMS_PER_SLIDE);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 p-10 md:px-[50px] md:py-10">
            <div className="w-full">
                <div className="mx-auto grid md:grid-cols-3 gap-10">
                    {/* Left Section */}
                    <div className="md:col-span-2 space-y-5">
                        {/* Welcome */}
                        <h1 className="text-3xl font-bold mb-7 leading-tight">Welcome to<br />The Student’s Affair</h1>
                        <div className="space-y-4 text-justify">
                            <p>
                                Students' Affairs is responsible for ensuring that a student makes the  most of IITG's widespread and exceptional campus facilities and  features, as well as its capable personnel.
                            </p>
                            <p>
                                In IITG, opportunities for  learning and interpersonal development exist everywhere, and Students'  Affairs ensures that campus residents make the most of these  opportunities throughout their stay at college. Academic excellence  makes up the forefront of most student's goals. With students already  facing pressures from challenging curricula, the Students' Affairs  Section ensures that a student's academic journey is as smooth and  nourishing as possible. To this end, Students' Affairs acts as a link  between a student and the administration. Students' Affairs also ensures that students have no roadblocks in their academic journey.
                            </p>
                            <p>
                                Students' Affairs umbrellas several subdivisions that deal with student  extracurricular activities, including technical, sports and cultural  boards, and subdivisions like the Welfare Board and the Hostel Affairs  Board that ensure the overall well-being and holistic development of a  student. While academics make up a crucial part of a student's college  life, several other integral factors contribute to a student's success  and well-being.
                            </p>
                            <p>
                                These subdivisions of Students' Affairs ensure that no  stone is left unturned in this aspect and that a student's life outside  academics is as fulfilling, enriching and comfortable as possible.
                            </p>
                        </div>

                    </div>

                    <Announcements />


                </div>
            </div>
            {/* Achievements Section */}
            <div className="mt-16 w-full">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Achievements</h2>
                    <div className="space-x-2">
                        <button onClick={scrollLeft} className="px-3 py-1 border">&lt;</button>
                        <button onClick={scrollRight} className="px-3 py-1 border">&gt;</button>
                    </div>
                </div>

                <div className="overflow-hidden w-full">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${offset}px)` }}
                    >
                        {achievements.map((item, idx) => (
                            <AchievementCard key={idx} item={item}></AchievementCard>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
