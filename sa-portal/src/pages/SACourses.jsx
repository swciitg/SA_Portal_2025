import React from 'react'
import BannerTop from '../Components/BannerTop'
import LayeredCarousel from '../Components/LayeredCarousel'
import SAcard from '../Components/SAcard'

const SACourses = () => {
    const route = [
        'Students Affair Board',
        'SA Courses'
    ]
    const courses = [
        { code: 'ATH101', title: 'Athletics' },
        { code: 'FB201', title: 'Football' },
        { code: 'BB301', title: 'Basketball' },
        { code: 'BD401', title: 'Badminton' },
        { code: 'YG501', title: 'Yoga' },
        { code: 'SW601', title: 'Swimming' },
        { code: 'CR701', title: 'Cricket' },
        { code: 'TN801', title: 'Tennis' },
        { code: 'VB901', title: 'Volleyball' },
        { code: 'MT1001', title: 'Mountaineering' },
        { code: 'RK1101', title: 'Rock Climbing' },
        { code: 'CP1201', title: 'Camping' },
        { code: 'RC1301', title: 'River Crossing' },
        { code: 'SK1401', title: 'Skiing' },
        { code: 'PK1501', title: 'Paragliding' },
    ]
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <div> 
                <BannerTop heading='SA Courses' route={route} />
            </div>

            {/* Content section */}
            <div className="w-[92.5vw] mx-auto px-4 py-10">

                <div className="flex flex-col md:flex-row justify-between">
                    {/* Left paragraph */}
                    <div className="md:w-2/3 text-gray-700 text-base leading-relaxed">
                        <p className='text-[20px]'>
                            SA {'(Sports & Adventure)'} courses at IIT Guwahati are an integral part of the undergraduate curriculum, aimed at promoting physical fitness, teamwork, and a healthy lifestyle among students. These courses cover a wide range of activities such as athletics, football, basketball, badminton, yoga, swimming, and more, offering students the flexibility to choose based on their interests. Participation in at least one SA course is typically mandatory, encouraging students to engage in regular physical activity alongside academics.
                        </p>
                    </div>

                    {/* Right carousel */}
                    <div className="lg:w-1/2">
                        <LayeredCarousel />
                    </div>
                </div>

                {/* Courses list */}
                <div className="mt-16">
                    {/* Heading */}
                    <h1 className="text-3xl font-semibold text-gray-900 mb-6">
                        List of SA Courses
                    </h1>

                    {/* Courses container with border */}
                    <div className="border-x border-b border-gray-300 flex flex-col">
                        {courses && courses.map((course) => (
                            <SAcard key={course.code} course={course.code} title={course.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SACourses
