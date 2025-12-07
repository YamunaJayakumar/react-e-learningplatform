
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Coursecard from './Coursecard';

function Courses() {
    const initialCourses = [
        { id: 1, title: 'Full-Stack Web Development', desc: 'HTML, CSS, JavaScript, React, Node.js — build real production apps.', level: 'Beginner', hours: 48, img: '/w.jpg',students:456,
  rating:5 , 
   },
        { id: 2, title: 'Data Structures & Algorithms', desc: 'Core DS & Algo for interviews and competitive programming.', level: 'Intermediate', hours: 40, img: '/d2.jpg',students:456,
  rating:5, 
    },
        { id: 3, title: 'Machine Learning Essentials', desc: 'Supervised & unsupervised learning, model evaluation, and projects.', level: 'Intermediate', hours: 36, img: '/ImFnfh.webp',students:456,
  rating:5 },
        { id: 4, title: 'UI/UX Design Fundamentals', desc: 'Design thinking, wireframes, Figma basics, prototyping.', level: 'Beginner', hours: 20, img: '/ui.avif',students:456,
  rating:5 },
        { 
  id: 5, 
  title: 'Cloud Computing with AWS', 
  desc: 'EC2, S3, Lambda, IAM, VPC and deployment — learn core AWS.', 
  level: 'Intermediate', 
  hours: 30, 
  img: '/c.jpeg' ,
  students:456,
  rating:5

},
{ 
  id: 6, 
  title: 'Cybersecurity & Ethical Hacking', 
  desc: 'Network security, penetration testing,OWASP attack simulations.', 
  level: 'Advanced', 
  hours: 45, 
  img: '/s.avif'
  ,students:456,
  rating:5 
}
    ];
    return (
        <div>
            <div className="min-h-screen my-10">
                <h2 className=" mt-9 text-5xl font-bold text-white text-center pb-9">Popular Courses</h2>
               
                <div
                    className="grid grid-cols-3 gap-6 px-6 py-6"
                >
                    {initialCourses.map(course => (
                        <div key={course.id} className="shrink-0">
                            <Coursecard course={course} />
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    )
}

export default Courses





