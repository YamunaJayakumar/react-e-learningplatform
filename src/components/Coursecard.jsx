import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaUserGraduate, FaStar } from "react-icons/fa";

export default function Coursecard({ course }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="bg-[#111214] rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:shadow-purple-600/20 hover:border-purple-500/40 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-44 object-cover group-hover:brightness-110 transition"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-linear-to-br from-indigo-600 to-pink-600 text-xs font-semibold px-3 py-1 text-white rounded-full shadow">
          {course.level}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-purple-300 transition">
          {course.title}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-2">
          {course.desc}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm mt-2 text-gray-300">
          <div className="flex items-center gap-1">
            <FaClock size={14} />
            {course.hours} hrs
          </div>
          <div className="flex items-center gap-1">
            <FaUserGraduate size={14} />
            {course.students}+
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            {course.rating}
            <FaStar size={14} />
          </div>
        </div>

        {/* CTA */}
        <button className="w-full mt-3 bg-linear-to-br from-indigo-600 to-pink-600 hover:bg-purple-700 transition text-white font-semibold py-2 rounded-xl shadow-md">
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
}
