import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Build projects, not just watch",
    subtitle: "Hands-on paths with portfolio-ready projects",
    img: "/e3.jpeg",
  },
  {
    id: 2,
    title: "Mentorship & code reviews",
    subtitle: "Get feedback from industry mentors",
    img: "/e2.jpeg",
  },
  {
    id: 3,
    title: "Interview-ready curriculum",
    subtitle: "Practical kits to ace your interviews",
    img: "/e1.jpg",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      1000
    );
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="max-w-7xl my-8 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Learn skills that launch careers —{" "}
          <span className="text-purple-400">practice, build, succeed.</span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-xl">
          Hands-on courses, industry projects, and mentorship — all in one place.
        </p>
        <div className="grid grid-cols-3 items-center my-6">
          <div className=" ">
            <h1 className="text-5xl text-purple-400">10M+</h1>
            <h2 className="text-md text-gray-300">Students Enrolled</h2>
          </div>
          <div className=" ">
            <h1 className="text-5xl text-purple-400">5K</h1>
            <h2 className="text-md text-gray-300">Popular Courses</h2>
          </div>
          <div className=" ">
            <h1 className="text-5xl text-purple-400">5+</h1>
            <h2 className="text-md text-gray-300">Years of experinece</h2>
          </div>

        </div>
      </div>

      {/* Image slider */}
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl h-75"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          {slides.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover shrink-0"
            />
          ))}
        </motion.div>

        {/* Text overlay */}
        <div className="absolute bottom-4 left-4 bg-linear-to-br from-indigo-600 to-pink-600 backdrop-blur-md text-white rounded-xl px-4 py-3">
          <h3 className="text-lg font-semibold">{slides[index].title}</h3>
          <p className="text-sm opacity-80">{slides[index].subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
