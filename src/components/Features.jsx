import React from 'react';
import { FaLaptopCode, FaUserTie, FaBriefcase } from "react-icons/fa";

function Features() {
    const data = [
        {
            icon: <FaLaptopCode size={32} />,
            title: "Hands-on Projects",
            desc: "Learn by building real-world applications — not just watching tutorials. Every module includes guided tasks, GitHub submissions, and code reviews to help you master concepts through practice.",
        },
        {
            icon: <FaUserTie size={32} />,
            title: "Mentor Support",
            desc: "Never get stuck again. Our mentors guide you through debugging, project structure, and best practices. Weekly calls and chat-based support help you move faster and stay confident in your learning journey.",
        },
        {
            icon: <FaBriefcase size={32} />,
            title: "Career Prep",
            desc: "Build a strong portfolio, prepare for coding interviews, and understand how real companies hire. From resume polishing to mock interviews, we help you become job-ready with the skills employers value.",
        },
    ];

    return (
        <section className="max-w-7xl my-10 mx-auto px-6 py-16 ">
            <h2 className="text-5xl font-bold  text-center pb-4">What we offer</h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {data.map((f) => (
                    <div
                        key={f.title}
                        className="bg-gray-800 group  relative w-sm-80 mx-auto rounded-2xl shadow-lg flex flex-col items-center transition-all duration-300 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-500"
                    >
                        {/* Floating Icon */}
                        <div className="absolute -top-6 w-14 h-14 flex items-center justify-center rounded-full
                             bg-linear-to-br from-purple-600 to-pink-500 shadow-xl text-white transition-all duration-300
                             group-hover:bg-linear-to-br group-hover:from-black group-hover:to-gray-800">
                            {f.icon}
                        </div>

                        {/* Card Content */}
                        <div className="px-6 pt-10 text-center flex flex-col">
                            <h4 className="text-xl font-semibold mb-3">{f.title}</h4>
                            <p className="text-gray-300 text-sm text-justify leading-relaxed py-4">
                                {f.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
