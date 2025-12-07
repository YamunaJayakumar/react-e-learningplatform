import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Alice Johnson", text: "This platform helped me get my first developer job!", role: "Frontend Developer", img: "/u.jpeg" },
    { id: 2, name: "Michael Lee", text: "The courses are very practical and project-focused.", role: "Data Analyst", img: "/u2.jpeg" },
    { id: 3, name: "Sara Williams", text: "I loved the hands-on approach and mentor support!", role: "UI/UX Designer", img: "/u3.jpeg" },
    { id: 4, name: "David Kim", text: "A great learning experience with real-world projects.", role: "Backend Developer", img: "/u.jpeg" }
  ];

  return (
    <div className="overflow-hidden w-full py-10 my-10">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }} // scroll left by half width
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={t.id + "-" + i} className="bg-gray-800 text-white p-6 rounded-2xl min-w-[280px] shrink-0">
            <p className="text-sm mb-3">&quot;{t.text}&quot;</p>
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
